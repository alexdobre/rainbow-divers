"use client";

import Navigation from "../../components/Navigation";
import Gallery from "../../components/Gallery";
import Link from "next/link";

export default function ViewGalleryPage() {
  // List all media from the view folder
  const items = [
    { src: "/pic/view/PXL_20260325_174311014.webp", type: "image" as const },
    { src: "/pic/view/PXL_20260325_174314152.webp", type: "image" as const },
    { src: "/pic/view/PXL_20260325_174321136.webp", type: "image" as const },
    { src: "/pic/view/PXL_20260325_174322840.webp", type: "image" as const },
    { src: "/pic/view/PXL_20260325_174323820.mp4", type: "video" as const },
    { src: "/pic/view/PXL_20260325_175020571.webp", type: "image" as const },
    { src: "/pic/view/PXL_20260402_201746442.mp4", type: "video" as const },
    { src: "/pic/view/PXL_20260402_201815003.webp", type: "image" as const },
    { src: "/pic/view/PXL_20260402_201819277.webp", type: "image" as const },
    { src: "/pic/view/PXL_20260402_201827554.webp", type: "image" as const },
    { src: "/pic/view/PXL_20260402_201829341.webp", type: "image" as const },
    { src: "/pic/view/PXL_20260402_202129374.webp", type: "image" as const },
    { src: "/pic/view/PXL_20260402_202309335.MP.webp", type: "image" as const },
    { src: "/pic/view/PXL_20260402_202311352.MP.webp", type: "image" as const },
    { src: "/pic/view/PXL_20260402_202313518.webp", type: "image" as const },
    { src: "/pic/view/PXL_20260402_205120559.MP.webp", type: "image" as const },
    { src: "/pic/view/PXL_20260402_205122973.webp", type: "image" as const },
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
              🔭 View Gallery
            </h1>
            <p className="text-xl text-gray-600">
              Breathtaking lookout points and panoramic vistas across St Lucia
            </p>
          </div>

          {/* Gallery Component */}
          <Gallery items={items} />

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 shadow-xl text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Experience the Views</h2>
            <p className="text-lg mb-6 text-blue-100">
              Visit scenic lookout points and capture unforgettable panoramas of St Lucia's stunning landscapes
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
