import React, { useState } from "react";

const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  return (
    <div
      className={`bg-gray-800 text-white w-64 py-6 px-4 fixed h-full top-0 left-0 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        className="text-white hover:text-gray-300 absolute top-4 right-4"
        onClick={onClose}
      >
        Close
      </button>
      <h2 className="text-xl font-semibold">Menu</h2>
      <ul className="space-y-2 mt-6">
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

const ContactForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("Active");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    onClose(); // Close the form after submission
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white flex flex-col justify-center items-center shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 font-bold mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="border rounded w-full py-2 px-3"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-700 font-bold mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="border rounded w-full py-2 px-3"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <span className="block text-gray-700 font-bold mb-2">Status</span>
          <div className="flex">
            <label className="mr-4">
              <input
                type="radio"
                name="status"
                value="Active"
                checked={status === "Active"}
                onChange={() => setStatus("Active")}
              />
              <span className="ml-2">Active</span>
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="Inactive"
                checked={status === "Inactive"}
                onChange={() => setStatus("Inactive")}
              />
              <span className="ml-2">Inactive</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const HomeComp: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <div className="flex justify-center">
      <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
      <div className={` p-6 ps-40 ${showContactForm ? "hidden" : "block"}`}>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleContactForm}
        >
          Create Contact
        </button>
        <div className="mt-4 text-red-500">
          {showContactForm ? (
            "No contact form found. Please add a contact form."
          ) : (
            <p>Create a contact or select one to edit.</p>
          )}
        </div>
      </div>
      {showContactForm && <ContactForm onClose={toggleContactForm} />}
    </div>
  );
};

export default HomeComp;
