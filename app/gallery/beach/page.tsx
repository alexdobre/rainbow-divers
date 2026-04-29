"use client";

import Navigation from "../../components/Navigation";
import Gallery from "../../components/Gallery";
import Link from "next/link";

export default function BeachGalleryPage() {
  // List all media from the beach folder
  const items = [
    { src: "/pic/beach/beach_01.jpeg", type: "image" as const },
    { src: "/pic/beach/beach_02.jpeg", type: "image" as const },
    { src: "/pic/beach/beach_03.jpeg", type: "image" as const },
    { src: "/pic/beach/beach_04.jpeg", type: "image" as const },
    { src: "/pic/beach/beach_05.jpeg", type: "image" as const },
    { src: "/pic/beach/beach_06.jpeg", type: "image" as const },
    { src: "/pic/beach/PXL_20260321_134514455.webp", type: "image" as const },
    { src: "/pic/beach/PXL_20260321_134520780.webp", type: "image" as const },
    { src: "/pic/beach/PXL_20260321_213259335.webp", type: "image" as const },
    { src: "/pic/beach/PXL_20260321_215450860.MP.webp", type: "image" as const },
    { src: "/pic/beach/PXL_20260321_220710383.webp", type: "image" as const },
    { src: "/pic/beach/PXL_20260321_221928421.MP.webp", type: "image" as const },
    { src: "/pic/beach/PXL_20260321_234731863.MP.webp", type: "image" as const },
    { src: "/pic/beach/PXL_20260322_100719552.MP.webp", type: "image" as const },
    { src: "/pic/beach/PXL_20260322_100723969.webp", type: "image" as const },
    { src: "/pic/beach/PXL_20260322_100727292.webp", type: "image" as const },
    { src: "/pic/beach/PXL_20260323_222135136.webp", type: "image" as const },
    { src: "/pic/beach/PXL_20260323_222644515.mp4", type: "video" as const },
    { src: "/pic/beach/PXL_20260324_002927703.TS-000.webp", type: "image" as const },
    { src: "/pic/beach/PXL_20260325_002628161.webp", type: "image" as const },
    { src: "/pic/beach/PXL_20260325_002631488.webp", type: "image" as const },
    { src: "/pic/beach/PXL_20260326_223546721.webp", type: "image" as const },
    { src: "/pic/beach/PXL_20260326_230302250.mp4", type: "video" as const },
    { src: "/pic/beach/PXL_20260326_230323788.MP.webp", type: "image" as const },
    { src: "/pic/beach/PXL_20260329_215100059.webp", type: "image" as const },
    { src: "/pic/beach/PXL_20260329_215102172.webp", type: "image" as const },
    { src: "/pic/beach/PXL_20260329_222307976.webp", type: "image" as const },
    { src: "/pic/beach/PXL_20260329_222430059.mp4", type: "video" as const },
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
              🏖️ Beach Gallery
            </h1>
            <p className="text-xl text-gray-600">
              Relax on the pristine beaches and turquoise waters of St Lucia
            </p>
          </div>

          {/* Gallery Component */}
          <Gallery items={items} />

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 shadow-xl text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Explore St Lucia's Beaches</h2>
            <p className="text-lg mb-6 text-blue-100">
              Discover hidden coves, snorkel in crystal-clear waters, and enjoy the Caribbean paradise
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
