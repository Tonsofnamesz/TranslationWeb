import React from "react";

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative py-16 px-6 text-center font-[Afacad]"
      style={{
        backgroundImage: `url('/assets/batik2.png')`, // Replace with your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-white bg-opacity-90"></div>

      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-5xl font-semibold text-gray-800 mb-4 font-['Playfair_Display']">
          Services
        </h2>
        <p className="text-gray-600 text-3xl text-[#6E6457] max-w-2xl mx-auto mb-10">
          Expertise in every translated word.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="bg-[#ECE6DE] shadow rounded-lg p-6 hover:shadow-md transition text-left relative">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-[#CEC6BB] rounded flex items-center justify-center mr-3">
              <img
              src="/assets/lang.png"
              alt="Document Translation Icon"
              className="w-7 h-7 object-contain"
              />
              </div>
              <h3 className="font-semibold text-xl text-[#AB6A10] font-['Playfair_Display']">
                Translations
              </h3>
            </div>
            <ul className="list-disc list-inside text-[#1E1E1E] text-sm space-y-1 mb-6">
              <li>Certified & Official</li>
              <li>Specialized Translations</li>
              <li>Other Translation Services</li>
            </ul>
            {/* Details link */}
            <a
              href="#"
              className="absolute bottom-4 right-6 text-sm font-medium text-[#6E6457] hover:underline"
            >
              Details →
            </a>
          </div>

          {/* Service 2 */}
          <div className="bg-[#ECE6DE] shadow rounded-lg p-6 hover:shadow-md transition text-left relative">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-[#CEC6BB] rounded flex items-center justify-center mr-3">
              <img
              src="/assets/comms.png"
              alt="Document Translation Icon"
              className="w-7 h-7 object-contain"
              />
              </div>
              <h3 className="font-semibold text-xl text-[#AB6A10] font-['Playfair_Display']">
                Interpreting
              </h3>
            </div>
            <ul className="list-disc list-inside text-[#1E1E1E] text-sm space-y-1 mb-6">
              <li>Simultaneous Interpreting</li>
              <li>Consecutive Interpreting</li>
              <li>Liaison & Legal Interpreting</li>
              <li>Online / remote Interpreting</li>
            </ul>
            {/* Details link */}
            <a
              href="#"
              className="absolute bottom-4 right-6 text-sm font-medium text-[#6E6457] hover:underline"
            >
              Details →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


