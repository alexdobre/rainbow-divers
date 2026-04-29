"use client";

import Navigation from "../../components/Navigation";
import Gallery from "../../components/Gallery";
import Link from "next/link";

export default function TrailGalleryPage() {
  // List all media from the trail folder
  const items = [
    { src: "/pic/trail/PXL_20260327_134839288.MP.webp", type: "image" as const },
    { src: "/pic/trail/PXL_20260402_163910146.MP.webp", type: "image" as const },
    { src: "/pic/trail/PXL_20260402_164716906.webp", type: "image" as const },
    { src: "/pic/trail/PXL_20260402_164741198.webp", type: "image" as const },
    { src: "/pic/trail/PXL_20260402_164920577.webp", type: "image" as const },
    { src: "/pic/trail/PXL_20260402_165433227.MP.webp", type: "image" as const },
    { src: "/pic/trail/PXL_20260402_165436093.mp4", type: "video" as const },
    { src: "/pic/trail/PXL_20260402_165600976.webp", type: "image" as const },
    { src: "/pic/trail/PXL_20260402_170519560.webp", type: "image" as const },
    { src: "/pic/trail/PXL_20260402_171341121.MP.webp", type: "image" as const },
    { src: "/pic/trail/PXL_20260402_172628579.webp", type: "image" as const },
    { src: "/pic/trail/PXL_20260402_173325165.webp", type: "image" as const },
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
              🥾 Trail Gallery
            </h1>
            <p className="text-xl text-gray-600">
              Hike through St Lucia's lush rainforest trails and nature reserves
            </p>
          </div>

          {/* Gallery Component */}
          <Gallery items={items} />

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 shadow-xl text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Explore the Trails</h2>
            <p className="text-lg mb-6 text-blue-100">
              Discover hidden waterfalls, exotic wildlife, and breathtaking views on our guided nature hikes
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
                Book a Hike
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
