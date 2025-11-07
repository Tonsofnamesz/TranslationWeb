import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceIntro from "../components/ServiceIntro";
import ServiceTranslation from "../components/ServiceTranslation";
import ServiceInterpreting from "../components/ServiceInterpreting";

const Services: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-[#F7F5F2] pl-64">
      {/* Sidebar */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col bg-[#F7F5F2]">
        {/* Section 1: Intro */}
        <ServiceIntro />

        {/* Section 2: Translation */}
        <ServiceTranslation />

        {/* Section 3: Interpreting */}
        <ServiceInterpreting />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Services;

