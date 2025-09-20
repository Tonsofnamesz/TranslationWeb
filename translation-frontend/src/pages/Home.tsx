import React from "react";
import Header from "../components/Header";
import CompanyInfo from "../components/CompanyInfo";
import SubmissionForm from "../components/SubmissionForm";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Certified Document Translation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fast, reliable, and professional translations handled by government-certified translators.
            Submit your document and get it processed with full confidentiality.
          </p>
        </div>
      </section>

      {/* Company Info */}
      <main className="flex-grow">
        <CompanyInfo />

        {/* Submission Form Section */}
        <section id="submit" className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Submit Your Document
          </h2>
          <SubmissionForm />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

