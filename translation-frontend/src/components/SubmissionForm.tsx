import React, { useState } from "react";
import axios from "axios";
import { useLanguage } from "./LanguageContext";

interface FormData {
  name: string;
  email: string;
  phone_number: string;
  notes: string;
  file: File | null;
}

const SubmissionForm: React.FC = () => {

  const { t } = useLanguage();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone_number: "",
    notes: "",
    file: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.file) {
      setMessage(t.submission.messages.uploadRequired);
      setStatus("error");
      return;
    }

    const submission = new FormData();
    submission.append("name", formData.name);
    submission.append("email", formData.email);
    submission.append("phone_number", formData.phone_number);
    submission.append("notes", formData.notes);
    submission.append("file", formData.file);

    try {
      setLoading(true);
      setMessage(null);
      setStatus(null);

      const res = await axios.post(
        "https://necessary-mora-jonathanryan2015-d56bceca.koyeb.app/api/submissions",
        //"http://127.0.0.1:8000/api/submissions",
        submission,
        // {
        //   headers: { "Content-Type": "multipart/form-data" },
        // }
      );

      setMessage(`${t.submission.messages.success}: ${res.data.message}`);
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone_number: "",
        notes: "",
        file: null,
      });
    } catch (err: any) {
      console.error(err);
      setMessage(t.submission.messages.error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="submit" className="max-w-12xl mx-auto py-16">
      <div className="flex flex-col lg:flex-row gap-12 items-start">

        {/* LEFT — IMAGE (25%) */}
        <div className="lg:w-1/3 -ml-6 lg:-ml-70">
          <img
            src="/assets/batiksubmit.jpg"
            alt="Submit Document"
            className="w-[800px] h-[600px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* RIGHT — FORM (75%) */}
        <div className="lg:w-3/5 w-full">
          <h2 className="text-2xl font-playfair text-[#1E1E1E] mb-2">
            {t.submission.title}
          </h2>
          <p className="text-lg font-montserrat text-[#6E6457] mb-1">
            {t.submission.subtitle}
          </p>
          <div className="font-montserrat text-[#6E6457] mb-6 space-y-1">
            {t.submission.bullets.map((item: string, i: number) => (
              <p key={i}>- {item}</p>
            ))}
          </div>

          {message && (
            <p
              className={`mb-4 ${status === "success"
                  ? "text-green-600"
                  : status === "error"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
            >
              {message}
            </p>
          )}

          {/* FORM (UNCHANGED) */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-montserrat text-gray-700 mb-1">
                  {t.submission.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="font-montserrat w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 outline-none bg-white/80"
                  placeholder={t.submission.form.placeholders.name}
                />
              </div>

              <div>
                <label className="block text-sm font-montserrat text-gray-700 mb-1">
                  {t.submission.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="font-montserrat w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 outline-none bg-white/80"
                  placeholder={t.submission.form.placeholders.phone}
                />
              </div>

              <div>
                <label className="block text-sm font-montserrat text-gray-700 mb-1">
                  {t.submission.form.phone}
                </label>
                <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                  className="font-montserrat w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 outline-none bg-white/80"
                  placeholder={t.submission.form.placeholders.phone}
                />
              </div>

              <div>
                <label className="block text-sm font-montserrat text-gray-700 mb-1">
                  {t.submission.form.file}
                </label>
                <input
                  type="file"
                  name="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  className="font-montserrat w-full border p-2 rounded-md font-montserrat shadow-sm bg-white/80 cursor-pointer hover:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-montserrat text-gray-700 mb-1">
                {t.submission.form.notes}
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="font-montserrat w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 outline-none bg-white/80"
                placeholder={t.submission.form.placeholders.notes}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="font-montserrat w-full bg-[#1E1E1E] text-white p-3 rounded-md hover:bg-[#AB6A10] transition-colors shadow-md"
            >
              {loading
                ? t.submission.form.submitting
                : t.submission.form.submit}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default SubmissionForm;




