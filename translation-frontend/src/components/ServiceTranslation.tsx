import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

const ServiceTranslation: React.FC = () => {

  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleGoToSubmit = () => {
    navigate("/#submit");
  };

  return (
    <section id="service" className="w-full bg-white py-20 font-sans">
      <div className="max-w-7xl ml-10 mr-auto px-6">

        {/* TOP SECTION (Image + Main Content) */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* LEFT — IMAGE ONLY */}
          <div className="lg:w-1/2">
            <img
              src="/assets/batik5.png"
              alt="Translation Illustration"
              className="w-full max-h-[750px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* RIGHT — MAIN CONTENT */}
          <div className="lg:w-1/2 flex flex-col">

            {/* Big Title */}
            <h1 className="text-6xl font-playfair text-[#1E1E1E] mb-12">
              {t.services.title}
            </h1>

            {/* Subtitle */}
            <h2 className="text-3xl font-playfair text-[#6E6457] mb-2">
              {t.services.translation.subtitle}
            </h2>

            {/* Brief Info */}
            <div className="text-xl text-[#6E6457] font-montserrat mb-6 leading-relaxed">
              {t.services.translation.languages.map((lang: string, i: number) => (
                <p key={i}>{lang}</p>
              ))}
            </div>

            {/* Existing Sections */}
            <div className="space-y-5 mb-8">
              <div>
                <p className="text-xl text-[#1E1E1E] font-montserrat mb-2">
                  {t.services.translation.intro}
                </p>
                <div className="space-y-5 mb-8">
                  {t.services.translation.sections.map((section: any, i: number) => (
                    <div key={i}>
                      <h3 className="text-2xl font-semibold text-[#AB6A10] font-playfair">
                        {section.title}
                      </h3>
                      <p className="text-xl text-[#1E1E1E] font-montserrat">
                        {section.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleGoToSubmit}
              className="w-fit px-6 py-3 bg-[#1E1E1E] text-white font-montserrat rounded-lg hover:bg-[#925b0e] transition-colors mb-10"
            >
              {t.services.cta.submit}
            </button>

            {/* EXTRA 4 SECTIONS — NOW PERFECTLY ALIGNED */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-semibold text-[#6E6457] font-playfair">
                  {t.services.interpreting.title}
                </h3>
                {t.services.interpreting.languages.map((lang: string, i: number) => (
                  <p key={i} className="text-xl text-[#6E6457] font-montserrat">
                    {lang}
                  </p>
                ))}
              </div>

              <div>
                <p className="text-xl text-[#1E1E1E] font-montserrat leading-relaxed mb-2">
                  {t.services.interpreting.intro}
                </p>
                {t.services.interpreting.types.map((item: any, i: number) => (
                  <div key={i}>
                    <h3 className="text-2xl font-semibold text-[#AB6A10] font-playfair">
                      {item.title}
                    </h3>
                    <p className="text-xl text-[#1E1E1E] font-montserrat leading-relaxed py-2">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              {/* Submit Button */}
              <button
                onClick={handleGoToSubmit}
                className="w-fit px-6 py-3 bg-[#1E1E1E] text-white font-montserrat rounded-lg hover:bg-[#925b0e] transition-colors mb-10"
              >
                {t.services.cta.submit}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTranslation;





