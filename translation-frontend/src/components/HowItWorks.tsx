import React from "react";
import { useLanguage } from "./LanguageContext";

const HowItWorks: React.FC = () => {

  const { t } = useLanguage();

  return (
    <section id="process" className="bg-white py-20 px-6 font-sans">
      <div className="max-w-8xl mx-auto px-10">

        {/* Title */}
        <div className="mb-12">
          <h2 className="text-6xl font-playfair text-[#1E1E1E] mb-2">
            {t.process.title}
          </h2>
          <p className="font-montserrat text-[#6E6457] text-xl">
            {t.process.subtitle}
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-16">

          {/* LEFT — VERTICAL STEPS WITH CONTROLLED LINES */}
          <div className="lg:w-1/2">

            <div className="space-y-10">
              {t.process.steps.map((step: any, index: number) => (
                <div key={index} className="flex items-center gap-6 relative">

                  {/* Number + Line */}
                  <div className="relative flex flex-col items-center">

                    {/* Line ABOVE (skip first item) */}
                    {index !== 0 && (
                      <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-[3px] h-14 bg-[#D88F29]"></div>
                    )}

                    {/* Number */}
                    <div className="z-10 bg-white px-2 text-[#D88F29] font-playfair text-6xl font-semibold leading-none">
                      {index + 1}
                    </div>

                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-4xl font-semibold text-[#1E1E1E] font-playfair mb-2">
                      {step.title}
                    </h3>
                    <p className=" font-montserrat text-[#6E6457] leading-relaxed text-xl">
                      {step.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="lg:w-1/2">
            <img
              src="/assets/batikprocess.jpg"
              alt="Process Illustration"
              className="w-full h-[600px] object-cover rounded-lg shadow-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;


