import Navigation from "../components/Navigation";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              We'd love to hear from you! Reach out to plan your next adventure.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Email Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-center">📧</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Email Us</h2>
              <a
                href="mailto:info@rainbow-divers.com"
                className="block text-center text-xl text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                info@rainbow-divers.com
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-[#25D366] rounded-full p-3">
                  <Image
                    src="/whatsapp.svg"
                    alt="WhatsApp"
                    width={40}
                    height={40}
                    unoptimized
                    className="brightness-0 invert"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">WhatsApp</h2>
              <a
                href="https://wa.me/17585183352"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-xl text-blue-600 hover:text-blue-800 hover:underline transition-colors mb-4"
              >
                +1 758 518 3352
              </a>
              <a
                href="https://wa.me/17585183352"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors text-center shadow-md"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Additional Info Card */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 shadow-xl text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Dive In?</h2>
            <p className="text-lg mb-6 text-blue-100">
              Whether you're a seasoned diver or just starting out, we're here to create an unforgettable experience tailored just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pricing"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                View Pricing
              </a>
              <a
                href="/gallery"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Gallery
              </a>
            </div>
          </div>

          {/* Location Info */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Service Areas</h2>
            <p className="text-gray-600 text-center">
              We offer land or boat pickups in the Rodney Bay Area, including the IGY Marina, Castries Cruise Port, Marigot Bay and pick up at the beach from your hotel.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
