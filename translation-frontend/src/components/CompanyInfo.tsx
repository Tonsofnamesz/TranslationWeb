import React from "react";
import { useLanguage } from "./LanguageContext";

const CompanyInfo: React.FC = () => {

  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="w-full px-6 lg:pl-24 py-16 text-left font-[Afacad] bg-transparent relative"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.85) 75%, rgba(255, 255, 255, 0) 90%),
          url('/assets/batik1.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Title */}
      <h2 className="text-6xl font-playfair text-[#1E1E1E] mb-10 leading-tight">
        {t.companyIntro.title.name} <br /> {t.companyIntro.title.subtitle}
      </h2>

      {/* Section 1 */}
      <div className="mb-8 max-w-3xl">
        <h3 className="text-4xl font-playfair text-[#6E6457] mb-2">
          {t.companyIntro.section1.title}
        </h3>
        <div className="text-xl text-[#1E1E1E] font-montserrat leading-relaxed">
          {t.companyIntro.section1.paragraphs.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {/* Section 2 */}
      <div className="mb-10 max-w-3xl">
        <h3 className="text-4xl font-playfair text-[#6E6457] mb-2">
          {t.companyIntro.section2.title}
        </h3>

        <div className="text-xl text-[#1E1E1E] font-montserrat leading-relaxed space-y-1">
          {t.companyIntro.section2.languages.map((lang: string, i: number) => (
            <p key={i}>{lang}</p>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div className="max-w-4xl border-t border-b border-[#6E6457] py-6 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-4xl font-bold font-playfair text-[#D88F29]">15+</p>
            <p className="text-xl font-montserrat text-[#1E1E1E]">{t.companyIntro.stats.experience.label}</p>
          </div>

          <div>
            <p className="text-4xl font-bold font-playfair text-[#D88F29]">3–5</p>
            <p className="text-xl font-montserrat text-[#1E1E1E]">{t.companyIntro.stats.delivery.label}</p>
          </div>

          <div>
            <p className="text-4xl font-bold font-playfair text-[#D88F29]">800+</p>
            <p className="text-xl font-montserrat text-[#1E1E1E]">{t.companyIntro.stats.documents.label}</p>
          </div>

          <div>
            <p className="text-4xl font-bold font-playfair text-[#D88F29]">100%</p>
            <p className="text-xl font-montserrat text-[#1E1E1E]">{t.companyIntro.stats.satisfaction.label}n</p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <a
        href="#submit"
        className="inline-block px-6 py-3 bg-[#1E1E1E] text-white font-montserrat rounded-lg hover:bg-[#925b0e] transition-colors"
      >
        {t.companyIntro.cta.button}
      </a>

      {/* Small Text */}
      <p className="text-m font-montserrat text-[#6E6457] mt-3">
        {t.companyIntro.cta.note}
      </p>
    </section>
  );
};

export default CompanyInfo;




