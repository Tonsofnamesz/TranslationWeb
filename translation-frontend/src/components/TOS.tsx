import React from "react";

const TOS: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-[#1E1E1E] mb-2">
        Terms of Service
      </h1>

      <p className="text-sm text-[#6E6457] mb-8">
        Last updated: December 28, 2025
      </p>

      <div className="space-y-8 text-[#1E1E1E] leading-relaxed">
        {/* Preamble */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Preamble and Definitions
          </h2>
          <p>
            This legal notice is made available to every User, in accordance with
            the provisions of French Law No. 2004-575 of June 21, 2004 on
            Confidence in the Digital Economy (LCEN). It is published on the
            website{" "}
            <a
              href="https://www.sophieguerande.com"
              className="underline text-[#AB6A10]"
            >
              https://www.sophieguerande.com
            </a>{" "}
            and may be accessed at any time while browsing.
          </p>

          <ul className="list-disc ml-6 mt-4 space-y-1">
            <li>
              <strong>Cookies</strong> are digital files temporarily stored on the
              User’s device.
            </li>
            <li>
              <strong>Personal Data</strong> refers to any information that
              identifies or can identify a natural person.
            </li>
            <li>
              <strong>Publication Director</strong> is responsible for the
              editorial direction of the Site’s content.
            </li>
            <li>
              <strong>Publisher</strong> manages and is responsible for the
              Site’s content.
            </li>
            <li>
              <strong>Host</strong> refers to the service provider hosting the
              Site.
            </li>
            <li>
              <strong>Site</strong> refers to all pages accessible from the URL
              https://www.sophieguerande.com
            </li>
            <li>
              <strong>User</strong> means any natural or legal person accessing
              the Site.
            </li>
          </ul>

          <p className="mt-4">
            The Publisher reserves the right to update this document at any time.
            French law applies.
          </p>
        </div>

        {/* Publisher */}
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Site Publisher</h2>
          <p>
            The Site is published and operated by <strong>Sophie Guérande</strong>,
            registered under SIRET number 83828090700018 — VAT not applicable,
            Article 293B of the French General Tax Code (CGI).
          </p>
          <p className="mt-2">
            <strong>Contact details:</strong>
            <br />
            Email: sguerande@yahoo.fr
            <br />
            Phone: +33 6 50 96 35 07
            <br />
            Address: 20 rue Cujas, 31000 Toulouse, France
          </p>
        </div>

        {/* Publication Director */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. Publication Director
          </h2>
          <p>
            The Publication Director is Sophie Guérande and may be contacted
            using the details listed above.
          </p>
        </div>

        {/* Hosting */}
        <div>
          <h2 className="text-xl font-semibold mb-2">3. Website Host</h2>
          <p>
            The website is hosted by the following service providers:
          </p>

          <div className="mt-4 space-y-4">
            <div>
              <strong>Vercel, Inc.</strong>
              <br />
              Email: support@vercel.com
              <br />
              Phone: +1 855-VERCEL
              <br />
              Address: 440 N Barranca Avenue #4133, Covina, CA 91723, USA
            </div>

            <div>
              <strong>Koyeb SAS</strong>
              <br />
              Email: dpo@koyeb.com
              <br />
              Phone: +33 1 83 64 18 80
              <br />
              Address: 9 rue des Longs Prés, 92100 Boulogne-Billancourt, France
            </div>
          </div>
        </div>

        {/* Access */}
        <div>
          <h2 className="text-xl font-semibold mb-2">4. Access to the Site</h2>
          <p>
            Except during maintenance periods, the Site is accessible 24 hours a
            day, 7 days a week. The Publisher reserves the right to include
            hyperlinks and cannot be held responsible for their content or
            malfunction.
          </p>
        </div>

        {/* Responsibilities */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            5. Responsibilities Regarding Use of the Site
          </h2>

          <ul className="list-disc ml-6 space-y-1">
            <li>Temporary suspension or limitation of access</li>
            <li>Removal of incorrect information</li>
            <li>Site updates and maintenance</li>
          </ul>

          <p className="mt-4">
            The User agrees to use the Site lawfully and remains solely
            responsible for the content of transmitted files.
          </p>
        </div>

        {/* IP */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            6. Intellectual Property
          </h2>
          <p>
            All content on this Site is protected by intellectual property
            rights. Any reproduction without prior written consent is strictly
            prohibited.
          </p>

          <p className="mt-2">
            Website development: <strong>Jonathan Ryan Riskianto</strong>
            <br />
            Graphic design & visual conception:{" "}
            <strong>Theodora Nichole Ho</strong>
          </p>
        </div>

        {/* Data */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            7. Personal Data and Cookies
          </h2>
          <p>
            Personal Data is processed in accordance with applicable French and
            European regulations. Further details are available in the Privacy
            Policy.
          </p>
        </div>

        {/* Mediation */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            8. Consumer Mediation
          </h2>
          <p>
            In accordance with French Consumer Code Articles L.612-1 et seq., the
            consumer may refer disputes to the following mediator:
          </p>

          <p className="mt-2">
            <strong>La Société Médiation Professionnelle</strong>
            <br />
            Website:{" "}
            <a
              href="https://www.mediateur-consommation-smp.fr"
              className="underline text-[#AB6A10]"
            >
              https://www.mediateur-consommation-smp.fr
            </a>
            <br />
            Address: ALTERITAE, 5 rue Salvaing, 12000 Rodez, France
          </p>
        </div>
      </div>
    </section>
  );
};

export default TOS;

