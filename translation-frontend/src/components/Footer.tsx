import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

const Footer: React.FC = () => {

  const { t } = useLanguage();

  // const location = useLocation();
  const navigate = useNavigate();

  // const handleScroll = (targetId: string, page: string) => {
  //   if (location.pathname === page) {
  //     const section = document.querySelector(targetId);
  //     if (section) section.scrollIntoView({ behavior: "smooth" });
  //   } else {
  //     navigate(`${page}${targetId}`);
  //   }
  // };

  return (
    <footer className="bg-[#1E1E1E] text-white font-[Afacad]">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div>
          <h3 className="text-2xl font-playfair font-semibold mb-4 text-[#FFF6E6]">
            Sophie Guérande
          </h3>

          <p className="font-montserrat mb-6 leading-relaxed text-[#FFF6E6]">
            {t.footer.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {/* LEFT COLUMN */}
            <div className="space-y-4">

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="text-[#FFF6E6] mt-1" size={20} />
                <div>
                  <p className="text-sm text-[#AB6A10] font-playfair font-semibold">{t.footer.contact.email}</p>
                  <p className="font-montserrat text-[#6E6457]">sguerande@yahoo.fr</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="text-[#FFF6E6] mt-1" size={20} />
                <div>
                  <p className="text-sm text-[#AB6A10] font-playfair font-semibold">{t.footer.contact.phone}</p>
                  <p className="font-montserrat text-[#6E6457]">06.50.96.35.07</p>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div>
              <div className="flex items-start gap-3">
                <MapPin className="text-[#FFF6E6] mt-1" size={20} />
                <div>
                  <p className="text-sm text-[#AB6A10] font-playfair font-semibold">{t.footer.contact.address}</p>
                  <div className="font-montserrat text-[#6E6457]">
                    {t.footer.contact.addressLines.map((line: string, i: number) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h4 className="text-xl mb-4 text-[#AB6A10] font-playfair">
            {t.footer.legal.title}
          </h4>

          <ul className="space-y-2 font-montserrat text-[#FFF6E6]">
            <li>
              <button
                onClick={() => navigate("/privacy-policy")}
                className="hover:underline hover:text-[#AB6A10] transition"
              >
                {t.footer.legal.privacy}
              </button>
            </li>

            <li>
              <button
                onClick={() => navigate("/terms-of-service")}
                className="hover:underline hover:text-[#AB6A10] transition"
              >
                {t.footer.legal.notice}
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="font-montserrat border-t border-[#6E6457] mt-8 pt-6 text-center text-[#6E6457]">
        <p>&copy; {new Date().getFullYear()} Sophie Guérande. {t.footer.bottom}</p>
      </div>
    </footer>
  );
};

export default Footer;




