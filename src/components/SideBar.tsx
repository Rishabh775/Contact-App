import React, { useState } from "react";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`bg-gray-800 text-white w-64 py-6 px-4 space-y-6 ${
        isOpen ? "h-screen" : "h-screen"
      }`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Menu</h2>
        <button
          className="text-white hover:text-gray-300"
          onClick={toggleSidebar}
        >
          {isOpen ? "Close" : "Open"}
        </button>
      </div>
      <ul className={`space-y-2 ${isOpen ? "block" : "hidden"}`}>
        <li>
          <a
            href="#"
            className="block text-white hover:bg-gray-700 rounded py-2 px-4"
          >
            Charts and Maps
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-white hover:bg-gray-700 rounded py-2 px-4"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
