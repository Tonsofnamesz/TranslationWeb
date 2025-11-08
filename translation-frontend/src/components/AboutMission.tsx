import React from "react";

const AboutMission: React.FC = () => {
  return (
    <section className="w-full bg-[#F7F5F2] py-16 px-6 font-[Afacad]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Mission Items */}
        <div className="space-y-8 text-[#1E1E1E] max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold text-[#AB6A10] font-['Playfair_Display'] mb-2">
              Expertise and Professionalism
            </h3>
            <p>
              Graduated with a Master's degree in International Affairs and benefiting from many years of successful experiences at the Indonesian Embassy in Paris, I am a certified translator registered at the Toulouse Court of Appeal.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#AB6A10] font-['Playfair_Display'] mb-2">
              Sworn Translator and Interpreter with a strong linguistic background.
            </h3>
            <p>
              I have gained significant professional experience at the Indonesian Embassy in Paris during 11 years.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#AB6A10] font-['Playfair_Display'] mb-2">
              Professional Experience
            </h3>
            <p>
              With international studies in languages, law, finance, and economy, I have applied my linguistic, legal, and financial expertise to serve an international clientele.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;

