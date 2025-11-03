import React from "react";

const QualitySection: React.FC = () => {
  return (
    <section
      id="quality"
      className="bg-green-100 py-16 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch gap-10">
        {/* Left Side - Image Placeholder (stretched full height) */}
        <div className="flex-1 bg-green-300 rounded-lg shadow-inner h-auto lg:h-auto min-h-[300px]">
          {/* Replace with actual image later */}
          {/* Example: 
          <img
            src="/path/to/image.jpg"
            alt="Quality Assurance"
            className="w-full h-full object-cover rounded-lg shadow-inner"
          /> 
          */}
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 text-gray-700 flex flex-col justify-between self-stretch">
          {/* Top: Title and Paragraph */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-3">
              Our Commitment to Quality
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Every translation project is handled by professionals who ensure precision, confidentiality, 
              and cultural accuracy. Our goal is to exceed client expectations with every document delivered.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-6" />

          {/* Middle: 3 Qualities */}
          <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-6 mb-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-800">10+</h3>
              <p className="text-sm text-gray-600">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">3–5</h3>
              <p className="text-sm text-gray-600">Day Standard Delivery</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">98%</h3>
              <p className="text-sm text-gray-600">Client Satisfaction</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-6" />

          {/* Bottom: Descriptions */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                Certified Translators
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                All of our translators are government-certified and subject-matter experts. 
                Each document undergoes strict review to ensure terminology accuracy 
                and compliance with regional linguistic standards.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                Consistent Workflow
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We follow a structured translation and review process that ensures consistency 
                across every project. From submission to delivery, clients are informed and involved 
                throughout each step.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                Secure Handling
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Confidentiality is our top priority. All documents are managed securely 
                with encryption and privacy protection policies in place for complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
