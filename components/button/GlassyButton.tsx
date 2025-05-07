import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const GlassyButton = () => {
  return (
    <button className="relative flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-lg text-white font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300">
      <span className="z-10">Glassy Button</span>
      <AiOutlineArrowRight size={20} className="z-10" />
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-400/30 blur-sm opacity-60 -z-10" />
    </button>
  );
};

export default GlassyButton;
