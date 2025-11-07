import React from "react";

const ServiceIntro: React.FC = () => {
  return (
    <section className="w-full bg-[#F7F5F2] py-12 font-[Playfair Display]">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-6 px-6">
        <div className="w-full rounded-lg overflow-hidden shadow-inner">
          <img
            src="/assets/batik4.png"
            alt="Service Introduction"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        <h1 className="text-5xl font-semibold text-[#1E1E1E] pt-4">
          Services
        </h1>
      </div>
    </section>
  );
};

export default ServiceIntro;


