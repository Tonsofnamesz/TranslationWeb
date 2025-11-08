import React from "react";
import { Mail, MapPin } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Reusable scroll handler for any section
  const handleScroll = (targetId: string, page: string) => {
    if (location.pathname === page) {
      const section = document.querySelector(targetId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`${page}${targetId}`);
    }
  };

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
          {/* Services Links */}
          <div>
            <h4 className="text-xl mb-4 text-[#AB6A10] font-['Playfair_Display']">
              Services
            </h4>
            <ul className="space-y-2 text-gray-300 text-[#FFF6E6]">
              <li>
                <button
                  onClick={() => handleScroll("#translation", "/services")}
                  className="hover:underline hover:text-[#AB6A10] transition"
                >
                  Translation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("#interpreting", "/services")}
                  className="hover:underline hover:text-[#AB6A10] transition"
                >
                  Interpreting
                </button>
              </li>
            </ul>
          </div>

          {/* Legal / Contact Links */}
          <div>
            <h4 className="text-xl mb-4 text-[#AB6A10] font-['Playfair_Display']">
              Legal Information
            </h4>
            <ul className="space-y-2 text-gray-300 text-[#FFF6E6]">
              <li>
                <span className="hover:underline hover:text-[#AB6A10] transition cursor-pointer">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:underline hover:text-[#AB6A10] transition cursor-pointer">
                  Terms of Service
                </span>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("#submit", "/")}
                  className="hover:underline hover:text-[#AB6A10] transition"
                >
                  Contact
                </button>
              </li>
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




