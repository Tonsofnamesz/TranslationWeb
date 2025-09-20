import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-100 mt-12 py-6">
      <div className="max-w-5xl mx-auto px-6 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Lorem Ipsum. All rights reserved.</p>
        <p>Email: Lorem Ipsum | Phone: Lorem Ipsum</p>
      </div>
    </footer>
  );
};

export default Footer;
