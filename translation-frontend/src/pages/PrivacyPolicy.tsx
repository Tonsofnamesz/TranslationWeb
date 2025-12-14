import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Privacy from "../components/Privacy";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-[#F7F5F2] pl-64">
      {/* Sidebar */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        <Privacy />
        <Footer />
      </main>
    </div>
  );
};

export default PrivacyPolicy;

