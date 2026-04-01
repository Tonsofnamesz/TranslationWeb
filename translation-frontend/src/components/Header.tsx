import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Globe } from "lucide-react";
import { useLanguage } from "./LanguageContext";


const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, setLang } = useLanguage();

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
          <div className=" w-16 h-18 rounded-md flex items-center justify-center">
            <img
              src="/assets/icon.png"
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
                {t.nav.home}
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleScroll("#service")}
                className="block w-full text-left px-3 py-2 rounded-lg hover:bg-[#AB6A10]/20 hover:text-[#F7F5F2] transition font-['Playfair_Display']"
              >
                {t.nav.services}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("#aboutme")}
                className="block w-full text-left px-3 py-2 rounded-lg hover:bg-[#AB6A10]/20 hover:text-[#F7F5F2] transition font-['Playfair_Display']"
              >
                {t.nav.about}
              </button>
            </li>
            {/* Process link → scroll to #process on Home */}
            <li>
              <button
                onClick={() => handleScroll("#process")}
                className="block w-full text-left px-3 py-2 rounded-lg hover:bg-[#AB6A10]/20 hover:text-[#F7F5F2] transition font-['Playfair_Display']"
              >
                {t.nav.process}
              </button>
            </li>

            {/* Contact link → scroll to #submit on Home */}
            <li>
              <button
                onClick={() => handleScroll("#contacthome")}
                className="block w-full text-left px-3 py-2 rounded-lg hover:bg-[#AB6A10]/20 hover:text-[#F7F5F2] transition font-['Playfair_Display']"
              >
                {t.nav.contact}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("#submit")}
                className="block w-full text-left px-3 py-2 rounded-lg hover:bg-[#AB6A10]/20 hover:text-[#F7F5F2] transition font-['Playfair_Display']"
              >
                {t.nav.submit}
              </button>
            </li>

            {/* Language Selector */}
            <div className="mt-16 px-6 py-20">
              <div className="flex items-center gap-3 text-sm font-medium text-[#FFF6E6]">

                {/* Globe */}
                <Globe size={18} />

                {/* Languages */}
                <button onClick={() => setLang("en")} className="hover:text-[#AB6A10] transition">
                  EN
                </button>

                <span className="text-gray-500">|</span>

                <button onClick={() => setLang("fr")} className="hover:text-[#AB6A10] transition">
                  FR
                </button>

                <span className="text-gray-500">|</span>

                <button onClick={() => setLang("id")} className="hover:text-[#AB6A10] transition">
                  ID
                </button>

              </div>
            </div>

            {/* Submit Form Button
            <li className="pt-4 border-t border-gray-700 mt-2">
              <button
                onClick={() => handleScroll("#submit")}
                className="w-full text-center px-3 py-2 rounded-lg bg-[#F7F5F2] text-[#1E1E1E] hover:bg-[#925b0e] transition font-semibold"
              >
                Submit a Document
              </button>
            </li> */}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Header;





