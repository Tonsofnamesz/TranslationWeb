import React from "react";
import Header from "../components/Header";
import CompanyInfo from "../components/CompanyInfo";
import HowItWorks from "../components/HowItWorks";
import SubmissionForm from "../components/SubmissionForm";
import Footer from "../components/Footer";
import ServiceTranslation from "../components/ServiceTranslation";
import AboutIntro from "../components/AboutIntro";
import ServiceIntro from "../components/ContactIntro";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex pl-64 bg-white">
      {/* Sidebar */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col bg-white">
        {/* Company Info */}
        <CompanyInfo />

        {/* Company Info */}
        <ServiceTranslation />

        {/* Company Info */}
        <AboutIntro />

        {/* How It Works */}
        <HowItWorks />

        {/* How It Works */}
        <ServiceIntro />

        {/* Submission Form */}
        <SubmissionForm />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Home;



