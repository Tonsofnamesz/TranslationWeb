import React from "react";

const AboutExpertise: React.FC = () => {
  return (
    <section className="w-full bg-[#F7F5F2] py-16 font-[Afacad]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-[#1E1E1E] mb-6 font-['Playfair_Display']">
          Area of Expertise
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Member 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-64 h-64 bg-gray-300 rounded-lg overflow-hidden shadow-inner mb-4">
              <img
                src="/assets/batik6.png"
                alt="Team Member 1"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#AB6A10] font-['Playfair_Display']">
              Law
            </h3>
            <p className="text-[#1E1E1E] mt-2 max-w-xs">
              Court decisions, contracts, articles of association, commercial register extracts
            </p>
          </div>

          {/* Member 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-64 h-64 bg-gray-300 rounded-lg overflow-hidden shadow-inner mb-4">
              <img
                src="/assets/batik7.png"
                alt="Team Member 2"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#AB6A10] font-['Playfair_Display']">
              Finance
            </h3>
            <p className="text-[#1E1E1E] mt-2 max-w-xs">
              Balance sheets, P&L statements, management reports, annual reports, tax returns…
            </p>
          </div>

          {/* Member 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-64 h-64 bg-gray-300 rounded-lg overflow-hidden shadow-inner mb-4">
              <img
                src="/assets/batik8.png"
                alt="Team Member 3"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#AB6A10] font-['Playfair_Display']">
              Business & Politics
            </h3>
            <p className="text-[#1E1E1E] mt-2 max-w-xs">
              Certification
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExpertise;
