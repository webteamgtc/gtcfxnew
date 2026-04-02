"use client";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const InformationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    details: "",
    marketing: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <IoCloseSharp className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-[#24358b] mb-6">Information</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#24358b]"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#24358b]"
              required
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#24358b]"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#24358b]"
              required
            />
          </div>

          <div>
            <textarea
              name="details"
              placeholder="Detailed information on your request"
              value={formData.details}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#24358b] resize-none"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="marketing"
              id="marketing"
              checked={formData.marketing}
              onChange={handleChange}
              className="w-4 h-4 text-[#24358b] border-gray-300 rounded focus:ring-[#24358b]"
            />
            <label htmlFor="marketing" className="ml-2 text-sm text-gray-700">
              I agree to receive marketing information
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#8B4513] hover:bg-[#6B3410] text-white py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Confirm Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default InformationForm;
