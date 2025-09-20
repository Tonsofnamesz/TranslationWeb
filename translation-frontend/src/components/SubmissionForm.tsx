import React, { useState } from "react";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  phone_number: string;
  target_language: string;
  notes: string;
  file: File | null;
}

const SubmissionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone_number: "",
    target_language: "",
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
    submission.append("target_language", formData.target_language);
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
        target_language: "",
        notes: "",
        file: null,
      }); // clear form
    } catch (err: any) {
      console.error(err);
      setMessage("❌ Error: Could not submit");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Submit a Document</h2>
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

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="tel"
          name="phone_number"
          placeholder="Your Phone Number"
          value={formData.phone_number}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="target_language"
          placeholder="Target Language To Be Translated"
          value={formData.target_language}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="notes"
          placeholder="Notes"
          value={formData.notes}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="file"
          name="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          required
          className="w-full"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default SubmissionForm;

