import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceTranslation: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToSubmit = () => {
    navigate("/#submit");
  };

  return (
    <section className="w-full bg-[#F7F5F2] py-16 font-[Afacad]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 px-6">
        {/* Left Side - Text Content */}
        <div className="lg:w-1/2">
          {/* Title */}
          <h2 className="text-3xl font-semibold text-[#1E1E1E] mb-4 font-[Playfair Display]">
            Translation
          </h2>

          {/* Brief Info */}
          <div className="text-[#1E1E1E] mb-6 leading-relaxed">
            <p>All types of translations tailored to your specific needs are provided</p>
            <p>Indonesian → French</p>
            <p>Malay → French</p>
            <p>French → Indonesian</p>
          </div>

          {/* 3 Sentences with Titles */}
          <div className="space-y-5 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-[#AB6A10] font-['Playfair_Display']">
                Certified & Official Translations
              </h3>
              <p className="text-[#1E1E1E]">
                ELegal documents, notarized documents, official records, certificates
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#AB6A10] font-['Playfair_Display']">
                Specialized Translations
              </h3>
              <p className="text-[Specialized Translations]">
                Medical, financial, technical, scientific, and academic translations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#AB6A10] font-['Playfair_Display']">
                Other Translation Services
              </h3>
              <p className="text-[#1E1E1E]">
                Marketing, business, literary, and general translations.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleGoToSubmit}
            className="mt-6 px-6 py-3 bg-[#1E1E1E] text-white font-semibold rounded-lg hover:bg-[#925b0e] transition-colors"
          >
            Submit Form
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 flex justify-center items-start">
          <img
            src="/assets/batik5.png"
            alt="Translation Illustration"
            className="w-full h-[600px] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceTranslation;





