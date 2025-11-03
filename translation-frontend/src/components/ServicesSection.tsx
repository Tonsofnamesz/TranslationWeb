import React from "react";

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-blue-100 py-16 px-6 text-center"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          We offer translation services tailored for professional and personal needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="bg-white shadow rounded-lg p-6 hover:shadow-md transition text-left">
            <div className="flex items-center mb-3">
              {/* Icon placeholder */}
              <div className="w-6 h-6 bg-blue-300 rounded mr-3" />
              <h3 className="font-semibold text-lg text-gray-800">
                Document Translation
              </h3>
            </div>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Legal and certified translations</li>
              <li>Business and financial documents</li>
              <li>Academic certificates and transcripts</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow rounded-lg p-6 hover:shadow-md transition text-left">
            <div className="flex items-center mb-3">
              {/* Icon placeholder */}
              <div className="w-6 h-6 bg-blue-300 rounded mr-3" />
              <h3 className="font-semibold text-lg text-gray-800">
                Localization Support
              </h3>
            </div>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Website and software translation</li>
              <li>Marketing and promotional content</li>
              <li>Multilingual proofreading and QA</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

