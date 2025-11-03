import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="bg-blue-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title + Subtitle */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg">
            Simple and secure process
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            {
              num: 1,
              title: "Upload Document",
              desc: "Select the document you want translated. We support PDF, DOC, and DOCX formats.",
            },
            {
              num: 2,
              title: "Provide Details",
              desc: "Fill in your contact info, target language, and any specific notes for translation.",
            },
            {
              num: 3,
              title: "We Process It",
              desc: "Your file is securely reviewed and translated by certified professionals.",
            },
            {
              num: 4,
              title: "Receive Translation",
              desc: "Get your completed translation delivered to your email within the timeline.",
            },
          ].map((step) => (
            <div
              key={step.num}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white text-2xl font-bold rounded-full mb-4 shadow-md">
                {step.num}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;


