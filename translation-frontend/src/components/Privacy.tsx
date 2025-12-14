import React from "react";

const Privacy: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-[#1E1E1E]">
      {/* Title */}
      <h1 className="text-3xl font-semibold mb-2">Privacy Policy</h1>
      <p className="text-sm text-[#6E6457] mb-10">
        Last updated: December 5, 2025
      </p>

      {/* 1. Preamble */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">1. Preamble</h2>
        <div className="space-y-4 leading-relaxed">
          <p>
            The Website is published and operated by Sophie Guérande, a sole
            trader, domiciled at 20 rue Cujas, 31000 Toulouse, France, and
            registered under SIRET number 83828090700018.
          </p>

          <p>This Privacy Policy complies with the following legal provisions:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Law No. 78-17 of 6 January 1978 relating to information technology,
              files and civil liberties, as amended by Law No. 2018-493 of 20 June
              2018,
            </li>
            <li>
              Law No. 2004-575 of 21 June 2004 on confidence in the digital economy
              (LCEN),
            </li>
            <li>
              Regulation (EU) 2016/679 of 27 April 2016 (GDPR).
            </li>
          </ul>

          <p>
            As part of her activity, Sophie Guérande may process and collect
            personal data from Users who interact with the Website or its
            services.
          </p>

          <p>
            The purpose of this Privacy Policy is to inform the User of the
            methods, purposes, and rights related to such processing. This
            document may be updated to remain compliant with legal or internal
            changes.
          </p>
        </div>
      </section>

      {/* 2. Definitions */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">2. Definitions</h2>
        <ul className="space-y-2 leading-relaxed">
          <li><strong>Sophie:</strong> The Data Controller and Website Publisher.</li>
          <li><strong>Client:</strong> Any person who has entered into a contractual relationship.</li>
          <li><strong>Cookie:</strong> A tracker file placed on the User’s device.</li>
          <li><strong>Personal Data:</strong> Any data identifying a person within the GDPR.</li>
          <li><strong>Privacy Policy:</strong> This document.</li>
          <li><strong>Data Controller:</strong> The entity determining data processing purposes.</li>
          <li><strong>Website:</strong> https://sophieguerande.com</li>
          <li>
            <strong>User:</strong> Any person browsing the Website and providing
            Personal Data.
          </li>
        </ul>
      </section>

      {/* 3. Data Controller */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">3. Data Controller</h2>
        <p className="leading-relaxed">
          Sophie Guérande is the Data Controller of all Personal Data collected on
          the Website. Appropriate technical and organisational measures are
          implemented to secure such data. In case of a proven data breach, she
          will cooperate with the CNIL and notify affected Users where required.
        </p>
      </section>

      {/* 4. Data Collected */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          4. Data Collected — Personal Data
        </h2>
        <p className="mb-4 leading-relaxed">
          Personal Data is collected lawfully and transparently in accordance
          with the GDPR.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Uploaded file</li>
        </ul>
      </section>

      {/* 5. Purpose & Legal Basis */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          5. Purpose and Legal Basis of Processing
        </h2>
        <p className="leading-relaxed mb-4">
          Data processing relies on consent, legal obligations, and contractual
          necessity.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Responding to contact requests</li>
          <li>Providing quotes and services</li>
          <li>Issuing contracts and invoices</li>
        </ul>
      </section>

      {/* 6. Data Retention */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">6. Data Retention</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>5 years after service completion</li>
          <li>1 year after an unapproved quote</li>
          <li>Invoices: 6 to 10 years (legal obligation)</li>
          <li>Cookies: up to 13 months</li>
        </ul>
      </section>

      {/* 7. Data Recipient */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">7. Data Recipient</h2>
        <p className="leading-relaxed">
          Sophie Guérande is the sole recipient of the collected Personal Data.
          She does not have access to banking information.
        </p>
      </section>

      {/* 8. User Rights */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">8. User Rights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Right of access</li>
          <li>Right of rectification</li>
          <li>Right to erasure</li>
          <li>Right to data portability</li>
          <li>Right to object</li>
          <li>Right to withdraw consent</li>
        </ul>
        <p className="mt-4 leading-relaxed">
          Requests may be sent to{" "}
          <strong>sguerande@yahoo.fr</strong>. A response will be provided within
          one month.
        </p>
      </section>

      {/* 9. Cookies */}
      <section>
        <h2 className="text-xl font-semibold mb-4">9. Cookies</h2>
        <p className="leading-relaxed mb-4">
          The Website uses only strictly necessary cookies required for security
          and basic functionality.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Cookie Name</th>
                <th className="border px-4 py-2 text-left">Function</th>
                <th className="border px-4 py-2 text-left">Expiration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">XSRF-TOKEN</td>
                <td className="border px-4 py-2">
                  Prevents Cross-Site Request Forgery (CSRF)
                </td>
                <td className="border px-4 py-2">Session-based</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">laravel_session</td>
                <td className="border px-4 py-2">
                  Maintains user session
                </td>
                <td className="border px-4 py-2">Session-based</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default Privacy;

