import React from 'react'

const GlassyButton = () => {
  return (
<div className="relative">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-purple-300 blur-sm rounded-full opacity-60"></div>
  <button className="relative z-10 bg-white/30 backdrop-blur-md border border-white/40
    shadow-lg rounded-full px-4 py-2 text-gray-700 font-medium
    transition-all duration-300 hover:scale-105">
    Glassy Button
  </button>
</div>


 
  )
}

export default GlassyButton
