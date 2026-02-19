import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll helper — handles both in-page and cross-page scroll
  const handleScroll = (targetId: string) => {
    if (location.pathname === "/") {
      const section = document.querySelector(targetId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/${targetId}`);
    }
  };

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-[#1E1E1E] shadow-lg flex flex-col justify-between font-[Afacad]">
      {/* Logo / Brand */}
      <div>
        <div className="px-6 py-6 border-b border-gray-700 flex items-center">
          <div className="bg-white w-16 h-16 rounded-md flex items-center justify-center">
            <img
            src="/assets/favicon-32x32.png"
            alt="Service Introduction"
            className="w-full h-full object-cover"
          />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6">
          <ul className="flex flex-col space-y-2 px-4 text-gray-300 font-medium">
            <li>
              <Link
                to="/"
                className="block px-3 py-2 rounded-lg hover:bg-[#AB6A10]/20 hover:text-[#F7F5F2] transition font-['Playfair_Display']"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block px-3 py-2 rounded-lg hover:bg-[#AB6A10]/20 hover:text-[#F7F5F2] transition font-['Playfair_Display']"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-lg hover:bg-[#AB6A10]/20 hover:text-[#F7F5F2] transition font-['Playfair_Display']"
              >
                About Me
              </Link>
            </li>

            {/* Process link → scroll to #process on Home */}
            <li>
              <button
                onClick={() => handleScroll("#process")}
                className="block w-full text-left px-3 py-2 rounded-lg hover:bg-[#AB6A10]/20 hover:text-[#F7F5F2] transition font-['Playfair_Display']"
              >
                Process
              </button>
            </li>

            {/* Contact link → scroll to #submit on Home */}
            <li>
              <button
                onClick={() => handleScroll("#submit")}
                className="block w-full text-left px-3 py-2 rounded-lg hover:bg-[#AB6A10]/20 hover:text-[#F7F5F2] transition font-['Playfair_Display']"
              >
                Contact
              </button>
            </li>

            {/* Submit Form Button */}
            <li className="pt-4 border-t border-gray-700 mt-2">
              <button
                onClick={() => handleScroll("#submit")}
                className="w-full text-center px-3 py-2 rounded-lg bg-[#F7F5F2] text-[#1E1E1E] hover:bg-[#925b0e] transition font-semibold"
              >
                Submit a Document
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Header;





