import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="bg-[#F7F5F2] py-16 px-6 font-[Afacad]">
      <div className="max-w-6xl mx-auto">
        {/* Title + Subtitle */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl font-semibold font-['Playfair_Display'] text-[#1E1E1E] mb-2">
            How It Works
          </h2>
          <p className="text-[#6E6457] text-lg">
            Simple and secure process
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            {
              num: 1,
              title: "Document Submission",
              desc: "Send your document by email. Optional: Personalized guidance by phone or email.",
            },
            {
              num: 2,
              title: "Quote & Payment",
              desc: "Receive a quote and confirm by email. Pay securely via bank transfer.",
            },
            {
              num: 3,
              title: "Confirmation",
              desc: "Get order confirmation with delivery date.",
            },
            {
              num: 4,
              title: "Delivery",
              desc: "Receive your translation by email. Certified copies can also be mailed 2–4 business days later. Pickup available by appointment in Toulouse.",
            },
          ].map((step) => (
            <div
              key={step.num}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center text-[#D88F29] text-6xl font-bold rounded-full mb-4 font-['Playfair_Display']">
                {step.num}
              </div>
              <h3 className="text-lg font-semibold text-[#1E1E1E] font-['Playfair_Display'] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#6E6457]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;


