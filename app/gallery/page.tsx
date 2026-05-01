import Navigation from "../components/Navigation";
import Link from "next/link";

export default function GalleryPage() {
  const galleries = [
    {
      name: "Diving",
      description: "Explore underwater wonders",
      href: "/gallery/diving",
      emoji: "🤿"
    },
    {
      name: "Volcano",
      description: "Explore the majestic volcano landscapes",
      href: "/gallery/volcano",
      emoji: "🌋"
    },
    {
      name: "Waterfalls",
      description: "Discover stunning waterfalls",
      href: "/gallery/waterfalls",
      emoji: "💦"
    },
    {
      name: "Pitons",
      description: "Marvel at the iconic twin volcanic peaks",
      href: "/gallery/pitons",
      emoji: "⛰️"
    },
    {
      name: "Beach",
      description: "Relax on pristine Caribbean beaches",
      href: "/gallery/beach",
      emoji: "🏖️"
    },
    {
      name: "River",
      description: "Navigate through lush mangrove rivers",
      href: "/gallery/river",
      emoji: "🛶"
    },
    {
      name: "Trail",
      description: "Hike through lush rainforest trails",
      href: "/gallery/trail",
      emoji: "🥾"
    },
    {
      name: "View",
      description: "Breathtaking lookout points and vistas",
      href: "/gallery/view",
      emoji: "🔭"
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Gallery
            </h1>
            <p className="text-xl text-gray-600">
              Explore our diving and tour experiences through stunning photography
            </p>
          </div>

          {/* Gallery Categories */}
          <div className="grid md:grid-cols-2 gap-6">
            {galleries.map((gallery) => (
              <Link
                key={gallery.href}
                href={gallery.href}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                  {gallery.emoji}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center group-hover:text-blue-600 transition-colors">
                  {gallery.name}
                </h2>
                <p className="text-gray-600 text-center">
                  {gallery.description}
                </p>
                <div className="mt-4 text-center">
                  <span className="text-blue-600 font-semibold group-hover:underline">
                    View Gallery →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 shadow-xl text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Want to Experience This?</h2>
            <p className="text-lg mb-6 text-blue-100">
              Join us on an unforgettable adventure exploring the beauty of St Lucia
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
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
