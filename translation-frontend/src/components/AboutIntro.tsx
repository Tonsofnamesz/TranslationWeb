import React from "react";

const AboutIntro: React.FC = () => {
  return (
    <section className="w-full bg-[#F7F5F2] py-12 font-[Playfair Display]">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-6 px-6">
        {/* Top Image */}
        <div className="w-full rounded-lg overflow-hidden shadow-inner">
          <img
            src="/assets/batikwayang.png"
            alt="About Introduction"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        {/* Title and Subtitle */}
        <div className="pt-4">
          <h1 className="text-5xl font-semibold text-[#1E1E1E] mb-2">
            About Us
          </h1>
          <p className="text-lg text-[#6E6457]">
            Sworn French – Indonesian – Malay Translator
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;

