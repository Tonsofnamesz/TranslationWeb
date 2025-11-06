import React, { useState } from "react";
import axios from "axios";
import { Mail, MapPin } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone_number: string;
  notes: string;
  file: File | null;
}

const SubmissionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone_number: "",
    notes: "",
    file: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

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
      setMessage("⚠️ Please upload a file before submitting.");
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

      const res = await axios.post(
        "http://127.0.0.1:8000/api/submissions",
        submission,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setMessage("✅ Success: " + res.data.message);
      setFormData({
        name: "",
        email: "",
        phone_number: "",
        notes: "",
        file: null,
      });
    } catch (err: any) {
      console.error(err);
      setMessage("❌ Error: Could not submit");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side — Form */}
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Submit a Document
          </h2>
          <p className="text-lg font-medium text-[#AB6A10] mb-1">
            Get Your Document Translated – Fast & Easy!
          </p>
          <p className="text-[#1E1E1E] mb-6">
            Order your Indonesian or Malay translation in just one click.
          </p>

          {message && (
            <p
              className={`mb-4 ${
                message.startsWith("✅")
                  ? "text-green-600"
                  : message.startsWith("❌")
                  ? "text-red-600"
                  : "text-yellow-600"
              }`}
            >
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Two-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 outline-none bg-white/80"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 outline-none bg-white/80"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 outline-none bg-white/80"
                  placeholder="Enter your phone number"
                />
              </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload File
              </label>
              <input
                type="file"
                name="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
                className="w-full border p-2 rounded-md shadow-sm bg-white/80 cursor-pointer hover:bg-white"
              />
            </div>

            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notes
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 outline-none bg-white/80"
                placeholder="Additional details or instructions"
              />
            </div>

            {/* File upload */}

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1E1E1E] text-white p-3 rounded-md font-semibold hover:bg-[#AB6A10] transition-colors shadow-md"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Right Side — Description & Contact */}
        <div className="lg:w-1/3 flex flex-col justify-start mt-10 lg:mt-16">
          <p className="text-[#1E1E1E] mb-8">
            <span className="font-semibold">
              Official Sworn Translator | High-Quality, Accurate,
              </span>{" "}
             I provide translations that combine technical precision with linguistic finesse. Request your free, non-binding quote by sending your document in just one click!
          </p>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-left">
              Contact
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Mail className="text-[#1E1E1E]" size={20} />
                  <h4 className="font-semibold text-[#000000]">Email</h4>
                </div>
                <p className="text-[#6E6457] ml-7">
                  sguerande@yahoo.fr
                </p>
              </div>

              {/* Address */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="text-[##6E6457]" size={20} />
                  <h4 className="font-semibold text-[#000000]">Address</h4>
                </div>
                <p className="text-[#6E6457] ml-7">
                  Toulouse - 06.509.63.507
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionForm;




