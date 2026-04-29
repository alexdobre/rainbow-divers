"use client";

import Navigation from "../../components/Navigation";
import Gallery from "../../components/Gallery";
import Link from "next/link";

export default function WaterfallsGalleryPage() {
  // List all media from the waterfalls folder
  const items = [
    { src: "/pic/waterfalls/PXL_20260327_212954298.webp", type: "image" as const },
    { src: "/pic/waterfalls/PXL_20260327_213247747.MP.jpg", type: "image" as const },
    { src: "/pic/waterfalls/PXL_20260327_213854020.mp4", type: "video" as const },
    { src: "/pic/waterfalls/PXL_20260411_195556225.MP.jpg", type: "image" as const },
    { src: "/pic/waterfalls/PXL_20260411_195632944.mp4", type: "video" as const },
    { src: "/pic/waterfalls/PXL_20260411_195723696.mp4", type: "video" as const },
    { src: "/pic/waterfalls/PXL_20260411_195755813.jpg", type: "image" as const },
    { src: "/pic/waterfalls/PXL_20260411_195825733.MP.jpg", type: "image" as const },
    { src: "/pic/waterfalls/PXL_20260411_195831414.mp4", type: "video" as const },
    { src: "/pic/waterfalls/PXL_20260411_195909088.webp", type: "image" as const },
    { src: "/pic/waterfalls/PXL_20260411_200014740.mp4", type: "video" as const },
    { src: "/pic/waterfalls/PXL_20260411_200539389.jpg", type: "image" as const },
    { src: "/pic/waterfalls/waterfalls_01.jpeg", type: "image" as const },
    { src: "/pic/waterfalls/waterfalls_02.jpeg", type: "image" as const },
    { src: "/pic/waterfalls/waterfalls_03.jpeg", type: "image" as const },
    { src: "/pic/waterfalls/waterfalls_04.jpeg", type: "image" as const },
    { src: "/pic/waterfalls/waterfalls_05.jpeg", type: "image" as const },
    { src: "/pic/waterfalls/waterfalls_06.jpeg", type: "image" as const },
    { src: "/pic/waterfalls/waterfalls_06.mp4", type: "video" as const },
    { src: "/pic/waterfalls/waterfalls_07.jpeg", type: "image" as const },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/gallery"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-4"
            >
              <span className="mr-2">←</span> Back to Gallery
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              💦 Waterfalls Gallery
            </h1>
            <p className="text-xl text-gray-600">
              Discover the stunning waterfalls of St Lucia
            </p>
          </div>

          {/* Gallery Component */}
          <Gallery items={items} />

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 shadow-xl text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Experience the Waterfalls</h2>
            <p className="text-lg mb-6 text-blue-100">
              Join us on an adventure to explore St Lucia's breathtaking waterfalls
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                View Pricing
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Book a Tour
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
