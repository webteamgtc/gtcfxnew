import React, { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

const LeveragePop = ({ copy, isOpen, onClose }) => {
  const pop = copy?.popUp || {};

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      role="dialog"
      aria-modal="true"
      aria-label={pop.leveragePopTitle}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div className="mx-auto w-[92%] max-w-2xl rounded-lg bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="HeadingH3 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text capitalize leading-10">
            {pop.leveragePopTitle}
          </h2>
          <button onClick={onClose} className="text-gray-600 outline-0">
            <IoCloseSharp className="h-6 w-6 rounded-xl bg-secondary text-white outline-0" />
          </button>
        </div>

        <p className="Text mt-4">{pop.description}</p>

        <div className="mt-6">
          <button
            onClick={onClose}
            className="TextButton bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#05033162] rounded-lg shadow-lg overflow-hidden text-white px-5 py-3 text-center md:w-auto md:m-0 mx-auto transition-colors duration-900 hover:bg-gradient-to-b hover:from-secondary hover:to-[#fff] duration-500 hover:text-primary"
          >
            {pop.agreedButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeveragePop;
