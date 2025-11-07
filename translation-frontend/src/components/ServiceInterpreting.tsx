import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ServiceInterpreting: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoToSubmit = () => {
    if (location.pathname === "/") {
      const section = document.querySelector("#submit");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#submit");
    }
  };

  return (
    <section className="w-full bg-[#F7F5F2] py-16 font-[Afacad]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-[#1E1E1E] mb-8">
          Interpreting
        </h2>

        {/* Two-Column Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* LEFT SIDE */}
          <div className="lg:w-1/2">
            {/* Description */}
            <p className="text-gray-700 mb-8 leading-relaxed">
              Offering both simultaneous interpreting—for real-time events such as conferences or speeches—and consecutive interpreting—for shorter segments of speech, often used in meetings or negotiations.
            </p>

            {/* Two Long Descriptions with Titles */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-[#AB6A10] font-['Playfair_Display']">
                  Simultaneous Interpreting
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Requires thorough preparation, specialized equipment, and intense concentration. Interpreters usually work in teams, rotating every 20–30 minutes. Whispered interpreting is also available for one-on-one or small group settings.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#AB6A10] font-['Playfair_Display']">
                  Consecutive Interpreting
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Takes place after short segments of speech (5–10 minutes), making it ideal for meetings, negotiations, or trainings. For complex or long sessions, multiple interpreters may be used.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:w-1/2 flex flex-col justify-start">
            {/* Language Pairs */}
            <div className="text-[#1E1E1E] text-lg font-medium mb-6">
              <p>Indonesian → French</p>
              <p>French → Indonesian</p>
            </div>

            {/* Two More Descriptions */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-[#AB6A10] font-['Playfair_Display']">
                  Liaison & Legal Interpreting
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Providing liaison interpreting for negotiations, business meetings, guided tours, and technical trainings. For court, administrative, or official assignments, our interpreters are sworn and certified, in compliance with French and German legal requirements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#AB6A10] font-['Playfair_Display']">
                  Online & Remote Interpreting
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Offering remote interpreting via video or teleconference, enabling seamless participation in virtual meetings without extra equipment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleGoToSubmit}
            className="px-6 py-3 bg-[#1E1E1E] text-white font-semibold rounded-lg hover:bg-[#925b0e] transition-colors"
          >
            Submit Form
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceInterpreting;


