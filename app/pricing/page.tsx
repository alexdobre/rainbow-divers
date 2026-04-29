import Navigation from "../components/Navigation";

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Let's Blow Bubbles
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-2">
              Prices are in USD and are subject to change without prior notice.
            </p>
            <p className="text-base text-gray-600 max-w-3xl mx-auto mb-4">
              We offer land or boat pickups in the Rodney Bay Area, including the IGY Marina, Castries Cruise Port, Marigot Bay and pick up at the beach from your hotel.
            </p>
            <div className="bg-blue-100 border-l-4 border-blue-600 p-4 max-w-3xl mx-auto">
              <p className="text-sm text-gray-700">
                <strong>Prices are inclusive of marine park fees, taxes and equipment.</strong> *** Additional US$22 equipment fee applies if you require 2 or more of the following (BCD, regulator, mask, fins). Weights and tanks are included.
              </p>
            </div>
          </div>

          {/* Snorkeling & Diving */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Snorkeling & Diving</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-cyan-500">
                <div className="text-3xl mb-3">🤿</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Snorkel</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">$88</p>
                <p className="text-sm text-gray-600">Group of 4+ is $77 per person</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-500">
                <div className="text-3xl mb-3">🌊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Single Tank Dive</h3>
                <p className="text-3xl font-bold text-blue-600">$140</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-600">
                <div className="text-3xl mb-3">🐠</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Double Tank Dive</h3>
                <p className="text-3xl font-bold text-blue-600">$150</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-indigo-600">
                <div className="text-3xl mb-3">🌙</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Night Dive</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">$125</p>
                <p className="text-sm text-gray-600">Includes dive light</p>
              </div>
            </div>
          </section>

          {/* Dive Packages */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dive Packages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-2">6 Tank Dives</h3>
                <p className="text-lg mb-4 text-blue-100">3 days</p>
                <p className="text-4xl font-bold mb-4">$412.50</p>
                <p className="text-sm text-blue-100">Best for weekend warriors</p>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6 shadow-xl text-white relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">8 Tank Dives</h3>
                <p className="text-lg mb-4 text-blue-100">4 days</p>
                <p className="text-4xl font-bold mb-4">$550</p>
                <p className="text-sm text-blue-100">Perfect balance</p>
              </div>

              <div className="bg-gradient-to-br from-blue-700 to-indigo-700 rounded-xl p-6 shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-2">10 Tank Dives</h3>
                <p className="text-lg mb-4 text-blue-100">5 days</p>
                <p className="text-4xl font-bold mb-4">$687.50</p>
                <p className="text-sm text-blue-100">Ultimate diving experience</p>
              </div>
            </div>
            <div className="mt-6 bg-white rounded-xl p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <p className="text-lg font-bold text-gray-900">Per dive after 10 Tank package</p>
                  <p className="text-sm text-gray-600">Continue diving at a discounted rate</p>
                </div>
                <p className="text-3xl font-bold text-blue-600">$44</p>
              </div>
            </div>
            <div className="mt-4 bg-white rounded-xl p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <p className="text-lg font-bold text-gray-900">Passenger</p>
                  <p className="text-sm text-gray-600">Non-diving companion</p>
                </div>
                <p className="text-3xl font-bold text-blue-600">$55</p>
              </div>
            </div>
          </section>

          {/* Scuba Courses */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Scuba Courses</h2>
            <p className="text-sm text-gray-600 mb-6">+ e-learning included - e-learning purchased separately</p>

            <div className="space-y-4">
              {/* Beginner Courses */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Getting Started</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Bubble Maker (8-10 years) (6ft)</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">$190</p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Discover Scuba Diving (1 Dive) (10+ years) (40ft)</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">$170</p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Discover Scuba Diving (2 Dives)</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">$190</p>
                  </div>
                </div>
              </div>

              {/* Certification Courses */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Certifications</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Scuba Diver Certification</p>
                      <p className="text-sm text-gray-600">1/2 of Open Water Certification</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">$495</p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Upgrade to Open Water</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">$360</p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Open Water Referral</p>
                      <p className="text-sm text-gray-600">E-learning and confined completed</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">$386</p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Last 2 Open Water dives</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">$210</p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Open Water Certification</p>
                      <p className="text-sm text-gray-600">DSD completed within the year</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">$450</p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Open Water Certification</p>
                      <p className="text-sm text-gray-600">Full course (+ e-learning included)</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">$660</p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Open Water Certification</p>
                      <p className="text-sm text-gray-600">E-learning completed</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">$550</p>
                  </div>
                </div>
              </div>

              {/* Advanced Courses */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Advanced Training</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Advanced Open Water</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">$495</p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Emergency First Response</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">$140</p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Rescue Diver Certification</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">$468</p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Rescue Diver</p>
                      <p className="text-sm text-gray-600">E-learning completed</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">$365</p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Dive Master Certification</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">$1,045</p>
                  </div>
                </div>
              </div>

              {/* Professional Courses */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Professional Level</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Assistant Instructor</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">$3,300</p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Instructor</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">$3,300</p>
                  </div>
                </div>
              </div>

              {/* Refresher Courses */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Refresher Courses</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Scuba Tune Up Only (Refresher)</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">$90</p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Scuba Tune Up + 1 Dive</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">$160</p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Scuba Tune Up + 2 Dives</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">$190</p>
                  </div>
                  <div className="py-2">
                    <p className="text-sm text-gray-600">PADI Reactivate (costs are the same for tune up, e-learning purchased separately)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Private Trips & Tours */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Private Trips & Tours</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Trip Type</th>
                      <th className="px-6 py-4 text-left font-semibold">Base Price (Per Couple)</th>
                      <th className="px-6 py-4 text-left font-semibold">Additional Person</th>
                      <th className="px-6 py-4 text-left font-semibold">Hours</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-blue-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">1/2-day snorkel</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">$500</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">$95</td>
                      <td className="px-6 py-4 text-gray-700">4</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">1/2-day dive - 2 dives</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">$950</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">$160</td>
                      <td className="px-6 py-4 text-gray-700">5</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Add US$320 for full trip</td>
                      <td className="px-6 py-4 text-gray-700">-</td>
                      <td className="px-6 py-4 text-gray-700">-</td>
                      <td className="px-6 py-4 text-gray-700">8</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">To add an hour to 4/5-hour trips</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">$150</td>
                      <td className="px-6 py-4 text-gray-700">-</td>
                      <td className="px-6 py-4 text-gray-700">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Specialties */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Specialties Offered</h2>
            <p className="text-sm text-gray-600 mb-6">(Kindly check for availability)</p>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">📸</span>
                  <span className="text-gray-700">Underwater Photography</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">🎥</span>
                  <span className="text-gray-700">Underwater Videographer</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">🎣</span>
                  <span className="text-gray-700">Underwater Hunter</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">🌙</span>
                  <span className="text-gray-700">Night Diver</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">🐚</span>
                  <span className="text-gray-700">Underwater Naturalist</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">💨</span>
                  <span className="text-gray-700">Enriched Air Nitrox</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">🐟</span>
                  <span className="text-gray-700">Award Fish Identification</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">⚓</span>
                  <span className="text-gray-700">Deep Diver</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">🔍</span>
                  <span className="text-gray-700">Search And Recovery Diver</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">🚢</span>
                  <span className="text-gray-700">Wreck Diver</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">🏊</span>
                  <span className="text-gray-700">Swimming for the Skin Diver</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">🆘</span>
                  <span className="text-gray-700">Oxygen First Aid</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">🩹</span>
                  <span className="text-gray-700">Emergency First Response</span>
                </div>
              </div>
            </div>
          </section>

          {/* Special Group Rates CTA */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 shadow-xl text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Special Group Rates</h2>
              <p className="text-lg mb-6 text-blue-100">
                Special group rates are available. Kindly reach out to us with necessary information and we will contact you to discuss options and packages that are available!
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Contact Us for Group Rates
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
