import React from "react";

const Header: React.FC = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg flex flex-col justify-between">
      {/* Logo / Brand */}
      <div>
        <div className="px-6 py-6 border-b">
          <h1 className="text-2xl font-bold text-gray-800">Lorem Ipsum</h1>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6">
          <ul className="flex flex-col space-y-2 px-4 text-gray-700 font-medium">
            <li>
              <a href="#home" className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#service" className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition">
                Service
              </a>
            </li>
            <li>
              <a href="#about" className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="#process" className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition">
                Process
              </a>
            </li>
            <li>
              <a href="#contact" className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition">
                Contact
              </a>
            </li>
            <li className="pt-4 border-t mt-2">
              <a
                href="#submit"
                className="block text-center px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-semibold"
              >
                Submit Form
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer Section (optional small tagline or copyright) */}
      <div className="px-6 py-4 border-t text-sm text-gray-500">
        © 2025 Lorem Ipsum
      </div>
    </aside>
  );
};

export default Header;

