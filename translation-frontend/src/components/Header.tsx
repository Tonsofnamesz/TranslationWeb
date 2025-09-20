import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Lorem Ipsum
        </h1>
        <nav>
          <ul className="flex space-x-6 text-gray-600 font-medium">
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#submit" className="hover:text-blue-600">Submit</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
