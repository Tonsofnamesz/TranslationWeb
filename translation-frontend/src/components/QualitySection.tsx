import React from "react";

const QualitySection: React.FC = () => {
  return (
    <section
      id="quality"
      className="bg-[#F7F5F2] py-16 px-6 font-[Afacad]"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch gap-10">
        {/* Left Side - Image Placeholder (stretched full height) */}
        <div className="flex-1 rounded-lg shadow-inner h-auto lg:h-auto min-h-[300px]">
          <img
            src="/assets/batik3.png"
            alt="Quality Assurance"
            className="w-full h-full object-cover rounded-lg shadow-inner"
          /> 
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 text-gray-700 flex flex-col justify-between self-stretch">
          {/* Top: Title and Paragraph */}
          <div>
            <h2 className="text-5xl font-semibold text-[#1E1E1E] font-['Playfair_Display'] mb-3">
              Quality and Reliability
            </h2>
            <p className="text-[#1E1E1E] leading-relaxed mb-4">
              With a Master's degree in Applied Foreign Languages and over 11 years of experience as a translator and interpreter at the Indonesian Embassy in Paris, I provide language services that combine linguistic expertise, cultural sensitivity, and professional reliability.
            </p>
            <p className="text-[#1E1E1E] leading-relaxed mb-4">
              My services are designed for use in France and worldwide, ensuring that translations are meticulously prepared for recognition by French, Indonesian, and international administrations, guaranteeing the official validity of your documents.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-2" />

          {/* Middle: 3 Qualities */}
          <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-6 mb-2">
            <div>
              <h3 className="text-3xl font-bold text-[#D88F29] font-['Playfair_Display']">11+</h3>
              <p className="text-sm text-[#1E1E1E]">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#D88F29] font-['Playfair_Display']">2–4</h3>
              <p className="text-sm text-[#1E1E1E]">Day Standard Delivery</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#D88F29] font-['Playfair_Display']">100%</h3>
              <p className="text-sm text-[#1E1E1E]">Client Satisfaction</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-2" />

          {/* Bottom: Descriptions */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg text-[#D88F29] font-['Playfair_Display'] mb-2">
                Official & Academic Credentials
              </h4>
              <p className="text-[#1E1E1E] text-sm leading-relaxed">
                Master's degree in Applied Foreign Languages from La Rochelle University and over a decade of professional experience as an official translator and interpreter at the Indonesian Embassy in Paris.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-[#D88F29] font-['Playfair_Display'] mb-2">
                Specialized Languages & Fields
              </h4>
              <p className="text-[#1E1E1E] text-sm leading-relaxed">
                Expert in Indonesian-French and Malay-French translations, with a specialized focus on the complexities of legal, financial, and administrative documents.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#D88F29] font-['Playfair_Display'] mb-2">
                Quality & Reliability Guarantee
              </h4>
              <p className="text-[#1E1E1E] text-sm leading-relaxed">
                Each translation is delivered with a steadfast commitment to accuracy and professional reliability, certified with an official stamp and signature to ensure its legal validity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
