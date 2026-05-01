"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface MediaItem {
  src: string;
  type: "image" | "video";
}

interface GalleryProps {
  folderPath: string;
  title?: string;
}

export default function Gallery({ folderPath, title }: GalleryProps) {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const isVideo = (filename: string) => {
    return filename.match(/\.(mp4|webm|ogg|mov)$/i) !== null;
  };

  useEffect(() => {
    // Load media items from the folder
    const loadMedia = async () => {
      try {
        const response = await fetch(`/api/gallery?folder=${encodeURIComponent(folderPath)}`);
        if (response.ok) {
          const files = await response.json();
          const mediaItems = files.map((file: string) => ({
            src: `/pic/${folderPath}/${file}`,
            type: isVideo(file) ? "video" : "image"
          }));
          setItems(mediaItems);
        }
      } catch (error) {
        console.error("Error loading media:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMedia();
  }, [folderPath]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
    setSelectedIndex(nextIndex);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(prevIndex);
    setSelectedIndex(prevIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex !== null) {
        if (e.key === 'ArrowRight') goToNext();
        if (e.key === 'ArrowLeft') goToPrevious();
        if (e.key === 'Escape') closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, currentIndex, items.length]);

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p className="text-gray-600 mt-4">Loading gallery...</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No media found in this gallery.</p>
      </div>
    );
  }

  const selectedItem = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <>
      {title && (
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
            onClick={() => openLightbox(index)}
          >
            {item.type === "video" ? (
              <>
                <video
                  src={item.src}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  muted
                  loop
                  playsInline
                />
                {/* Play icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[20px] border-l-blue-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Image
                  src={item.src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedItem && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 z-20"
          >
            <span className="text-white text-3xl font-light">×</span>
          </button>

          {/* Main Media */}
          <div
            className="relative max-w-7xl max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === "video" ? (
              <video
                src={selectedItem.src}
                className="max-w-full max-h-[90vh] object-contain"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <img
                src={selectedItem.src}
                alt="Selected"
                className="max-w-full max-h-[90vh] object-contain"
              />
            )}

            {/* Navigation Arrows */}
            {items.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200"
                >
                  <span className="text-white text-3xl font-bold">‹</span>
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200"
                >
                  <span className="text-white text-3xl font-bold">›</span>
                </button>
              </>
            )}

            {/* Media Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <p className="text-white text-sm font-medium">
                {currentIndex + 1} / {items.length}
                {selectedItem.type === "video" && (
                  <span className="ml-2 text-xs">🎥</span>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
