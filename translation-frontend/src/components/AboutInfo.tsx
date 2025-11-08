import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AboutInfo: React.FC = () => {
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
    <section className="w-full bg-[#F7F5F2] py-20 font-[Afacad]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 px-6">
        {/* Left Side — Text Content */}
        <div className="lg:w-3/5 flex flex-col justify-between text-left h-[600px] py-20">
          {/* Paragraph Description */}
          <p className="text-[#1E1E1E] leading-relaxed mb-6">
            I have been sworn in before the Court of Appeal of Toulouse. As a court-appointed translator and interpreter, I am authorized to certify my translations as true to the original by affixing my seal and signature. I provide both standard and certified translations. The term “sworn translation” is commonly used, but technically incorrect: a translation itself cannot be sworn in. The correct designation is a certified translation by a sworn translator.
          </p>

          {/* Single Description with Title */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#AB6A10] font-['Playfair_Display'] mb-2">
              Education
            </h3>
            <p className="text-[#1E1E1E] leading-relaxed">
              I hold a Master’s degree in Applied Foreign Languages –International Affairs Business from La Rochelle University
            </p>
          </div>

          {/* Language Combinations */}
          <h3 className="text-lg font-semibold text-[#AB6A10] font-['Playfair_Display'] mb-3">
            Language Combinations
        </h3>
        <div className="font-medium text-[#1E1E1E] space-y-1">
            <div className="grid grid-cols-[auto_auto_1fr] gap-x-2">
                <p>Indonesian</p>
                <p>→</p>
                <p>French (certified)</p>
                
              <p>French</p>
              <p>→</p>
              <p>Indonesian (certified)</p>
              
              <p>Malay</p>
              <p>→</p>
              <p>French (certified)</p>
              
              <p>Indonesian</p>
              <p>→</p>
              <p>English</p>
              
              <p>English</p>
              <p>→</p>
              <p>Indonesian</p>
            </div>
        </div>
    </div>

        {/* Right Side — Image */}
        <div className="lg:w-2/5 flex justify-center items-stretch">
          <img
            src="/assets/batik9.png"
            alt="Languages Overview"
            className="w-full h-[600px] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Bottom Center — CTA */}
      <div className="text-center mt-16">
        <p className="text-[#AB6A10] text-3xl mb-4 font-['Playfair_Display']">
          You need high-quality language services?
        </p>
        <button
          onClick={handleGoToSubmit}
          className="px-8 py-3 bg-[#1E1E1E] text-white font-semibold rounded-lg hover:bg-[#925b0e] transition-colors"
        >
          Submit Form
        </button>
      </div>
    </section>
  );
};

export default AboutInfo;




