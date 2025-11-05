import React from "react";

const CompanyInfo: React.FC = () => {
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
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Sworn and legal translations
      </h2>

      {/* Language Pairs */}
      <div className="text-lg text-[#AB6A10] font-medium space-y-1 mb-6">
        <h3>French ↔ Indonesian</h3>
        <h3>Malay → French</h3>
      </div>

      {/* Description */}
      <p className="text-gray-700 max-w-3xl leading-relaxed mb-4">
        My name is Sophie Guérande, and I am a sworn translator and interpreter. French is my native language.
      </p>

      <p className="text-gray-700 max-w-3xl leading-relaxed mb-4">
        I hold a Master’s degree in Applied Foreign Languages, specializing in English and Indonesian, and a Master’s degree in International Business (Asia), both awarded with honours by the University of La Rochelle, France.
      </p>

      <p className="text-gray-700 max-w-3xl leading-relaxed mb-4">
        For over eleven years, I worked at the Embassy of Indonesia in Paris, translating a wide range of documents on a daily basis, including official acts, diplomatic notes, and economic press articles. This experience refined my ability to deliver precise, contextually accurate, and culturally informed translations.
      </p>

      <p className="text-gray-700 max-w-3xl leading-relaxed mb-4">
        My academic background, combined with two extensive internships in Jakarta and my professional experience at the Indonesian Embassy gives me deep insight into Indonesian business culture, cross-cultural communication, and language nuances. I provide translations that are not only accurate but also culturally appropriate and tailored to your specific needs.
      </p>

      <p className="text-gray-700 max-w-3xl leading-relaxed mb-4">
        In 2022, I became a certified translator and interpreter (sworn translator or traductrice assermentée in French) recognized by the French Ministry of Justice, authorized to produce sworn and certified translations with full legal validity.
      </p>

      <p className="text-gray-700 max-w-3xl leading-relaxed mb-4">
        Whether you need translations for legal, business or private purposes, I ensure accuracy, cultural sensitivity, and reliability in every project.
      </p>

      {/* Submit Button */}
      <a
        href="#submit"
        className="inline-block px-6 py-3 bg-[#1E1E1E] text-white font-semibold rounded-lg hover:bg-[#925b0e] transition-colors"
      >
        Submit Form
      </a>
    </section>
  );
};

export default CompanyInfo;




