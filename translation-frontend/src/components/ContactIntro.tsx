import React from "react";
import { useLanguage } from "./LanguageContext";

const ContactIntro: React.FC = () => {

  const { t } = useLanguage();

  return (
    <section id="contacthome" className="w-full bg-white py-16 font-sans">
      <div className="max-w-8xl mx-auto px-16">

        {/* IMAGE WITH OVERLAY */}
        <div className="relative w-full rounded-lg overflow-hidden shadow-md">

          {/* Image */}
          <img
            src="/assets/batik4.png"
            alt="About Introduction"
            className="w-full h-[650px] object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90"></div>

          {/* Text inside image */}
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-6xl font-playfair mb-2">
              {t.contact.title}
            </h1>
          </div>
        </div>
        {/* BOTTOM CONTENT */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT — CONTACT DETAILS */}
          <div className="space-y-10">

            {/* Email */}
            <div className="flex items-start gap-4">
              <img
                src="/assets/email.png"
                alt="Email"
                className="w-8 h-6 mt-1"
              />
              <div>
                <h3 className="text-2xl font-playfair text-[#000000] mb-1">
                  {t.contact.details.email}
                </h3>
                <p className="text-xl text-[#6E6457] font-montserrat">
                  sguerande@yahoo.fr
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <img
                src="/assets/phone.png"
                alt="Phone"
                className="w-8 h-6 mt-1"
              />
              <div>
                <h3 className="text-2xl font-playfair text-[#000000] mb-1">
                  {t.contact.details.phone}
                </h3>
                <p className="text-xl text-[#6E6457] font-montserrat">
                  +33 6 50 96 35 07
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <img
                src="/assets/pin.png"
                alt="Pin"
                className="w-8 h-8 mt-1"
              />
              <div>
                <h3 className="text-2xl font-playfair text-[#000000] mb-1">
                  {t.contact.details.address}
                </h3>
                <p className="text-xl text-[#6E6457] font-montserrat leading-relaxed">
                  20 rue Cujas<br />
                  31000 Toulouse<br />
                  France
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT — BUSINESS INFO */}
          <div className="space-y-6">

            <div>
              <h3 className="text-2xl font-playfair text-[#000000] mb-2">
                 {t.contact.business.title}
              </h3>
              <p className="text-xl text-[#6E6457] font-montserrat leading-relaxed">
                {t.contact.business.status}
                <br></br>
                {t.contact.business.siret}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactIntro;


