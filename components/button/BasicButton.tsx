import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function BasicButton() {
  return (
    <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base">
      Basic Button
      <AiOutlineArrowRight size={20} />
    </button>
  );
}
