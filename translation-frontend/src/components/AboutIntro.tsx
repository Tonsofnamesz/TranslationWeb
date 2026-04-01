import React from "react";
import { useLanguage } from "./LanguageContext";

const AboutIntro: React.FC = () => {

  const { t } = useLanguage();

  return (
    <section id="aboutme" className="w-full bg-white py-16 font-sans">
      <div className="max-w-8xl mx-auto px-16">

        {/* IMAGE WITH OVERLAY */}
        <div className="relative w-full rounded-lg overflow-hidden shadow-md">

          {/* Image */}
          <img
            src="/assets/batikwayang.png"
            alt="About Introduction"
            className="w-full h-[650px] object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90"></div>

          {/* Text inside image */}
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-5xl font-playfair mb-2">
              {t.about.title}
            </h1>
          </div>
        </div>

        {/* CONTENT BELOW */}
        <div className="mt-16 max-w-8xl space-y-4">

          <div>
            <h3 className="text-3xl font-semibold text-[#AB6A10] font-playfair mb-2">
              {t.about.section1.title}
            </h3>
            <p className="text-xl font-montserrat text-[#1E1E1E] leading-relaxed text-[15.5px] tracking-[0.2px] text-justify hyphens-auto">
              {t.about.section1.text}
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-[#AB6A10] font-playfair mb-2">
              {t.about.section2.title}
            </h3>
            <div className="text-xl font-montserrat text-[#1E1E1E] leading-relaxed text-[15.5px] tracking-[0.2px] text-justify hyphens-auto space-y-1">
              {t.about.section2.paragraphs.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}  
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-[#AB6A10] font-playfair mb-2">
              {t.about.section3.title}
            </h3>
            <div className="text-xl font-montserrat text-[#1E1E1E] leading-relaxed text-[15.5px] tracking-[0.2px] text-justify hyphens-auto">
              {t.about.section3.paragraphs.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-[#AB6A10] font-playfair mb-2">
              {t.about.section4.title}
            </h3>
            <p className="text-xl font-montserrat text-[#1E1E1E] leading-relaxed text-[15.5px] tracking-[0.2px] text-justify hyphens-auto">
              {t.about.section4.text}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutIntro;

