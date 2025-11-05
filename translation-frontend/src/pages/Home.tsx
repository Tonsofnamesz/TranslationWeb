import React from "react";
import Header from "../components/Header";
import CompanyInfo from "../components/CompanyInfo";
import ServicesSection from "../components/ServicesSection";
import QualitySection from "../components/QualitySection";
import HowItWorks from "../components/HowItWorks";
import SubmissionForm from "../components/SubmissionForm";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-gray-50 pl-64 bg-[#F7F5F2]">
      {/* Sidebar */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        {/* Company Info */}
        <CompanyInfo />

        {/* Services */}
        <ServicesSection />

        {/* Quality */}
        <QualitySection />

        {/* How It Works */}
        <HowItWorks />

        {/* Submission Form */}
        <SubmissionForm />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Home;



