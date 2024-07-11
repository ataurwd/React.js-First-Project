import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md mb-2">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://www.ataurwd.com/wp-content/uploads/2024/02/Screenshot_2024-03-02_125602-removebg-preview.png" alt="Logo" className=" mr-2
          w-[143px] cursor-pointer" />
          <span className="text-xl font-bold"></span>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-600 hover:text-gray-800">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-600 hover:text-gray-800">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
