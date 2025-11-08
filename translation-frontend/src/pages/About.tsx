import React from "react";
import Header from "../components/Header";
import AboutIntro from "../components/AboutIntro";
import AboutMission from "../components/AboutMission";
import AboutExpertise from "../components/AboutExpertise";
import AboutInfo from "../components/AboutInfo";
import Footer from "../components/Footer";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-gray-50 pl-64 bg-[#F7F5F2] font-[Afacad]">
      {/* Sidebar */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col bg-[#F7F5F2]">
        {/* Section 1: Intro */}
        <AboutIntro />

        {/* Section 2: Mission */}
        <AboutMission />

        {/* Section 3: Expertis */}
        <AboutExpertise />

        {/* Section 4: Info */}
        <AboutInfo />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default About;
