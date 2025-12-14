import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TOS from "../components/TOS";

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-[#F7F5F2] pl-64">
      {/* Sidebar */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        <TOS />
        <Footer />
      </main>
    </div>
  );
};

export default TermsOfService;

