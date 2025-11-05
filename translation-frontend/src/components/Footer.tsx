import React from "react";
import { Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white font-[Afacad]">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-left text-[#FFF6E6]">
            Sophie Guérande
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed text-[#FFF6E6]">
            Sophie Guérande - A court-appointed sworn translator for French, Indonesian, and Malay with over 11 years of experience specializing in legal, financial, and business documents.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="text-[#FFF6E6] mt-1" size={20} />
              <p className="text-[#FFF6E6]">sguerande@yahoo.fr</p>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-[#FFF6E6] mt-1" size={20} />
              <p className="text-[#FFF6E6]">Toulouse - 06.509.63.507</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h4 className="text-xl mb-4 text-[#AB6A10] font-['Playfair_Display']">
              Services
            </h4>
            <ul className="space-y-2 text-gray-300 text-[#FFF6E6]">
              <li>Translation</li>
              <li>Interpreting</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl mb-4 text-[#AB6A10] font-['Playfair_Display']">
              Legal Information
            </h4>
            <ul className="space-y-2 text-gray-300 text-[#FFF6E6]">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider & Bottom Text */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-[#6E6457]">
        <p>&copy; {new Date().getFullYear()} Sophie Guérande. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;



