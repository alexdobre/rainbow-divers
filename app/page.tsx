import Image from "next/image";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-12 flex justify-center">
              <Image
                src="/Rainbow Divers Logo.png"
                alt="Rainbow Divers"
                width={300}
                height={200}
                className="drop-shadow-lg"
                unoptimized
              />
            </div>

            {/* Why We Exist */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              We Exist to Delight Our Customers
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed">
              Creating unforgettable moments through exceptional diving and tour experiences in St Lucia
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
              What We Do
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Diving */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🤿</div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Diving</h3>
                <p className="text-gray-600 text-lg">
                  Explore the vibrant underwater world of St Lucia with expert guides and top-quality equipment
                </p>
              </div>

              {/* Tours */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🚤</div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Tours</h3>
                <p className="text-gray-600 text-lg">
                  Discover the beauty of St Lucia through carefully curated island adventures
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Do It */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
              The Rainbow Divers Difference
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Bespoke Experiences */}
              <div className="text-center p-6">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bespoke Experiences</h3>
                <p className="text-gray-600">
                  Tailored adventures designed around your preferences
                </p>
              </div>

              {/* Small Groups */}
              <div className="text-center p-6">
                <div className="text-5xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Small Groups</h3>
                <p className="text-gray-600">
                  Intimate experiences, never crowded
                </p>
              </div>

              {/* Delightful Service */}
              <div className="text-center p-6">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Delightful Service</h3>
                <p className="text-gray-600">
                  Exceptional care at every touchpoint
                </p>
              </div>

              {/* Personal Attention */}
              <div className="text-center p-6">
                <div className="text-5xl mb-4">💙</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Attention</h3>
                <p className="text-gray-600">
                  Your comfort and enjoyment are our priority
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready for Your Adventure?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let us create an unforgettable experience just for you
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
