import React from 'react'
import { ChevronRight } from "lucide-react";

export default function BasicButton  ()  {
  return (
    <div className='flex text-base  '>
      <button className=" flex items-center gap-2 bg-gradient-to-b from-orange-400 to-orange-200 font-semibold text-gray-600  hover:opacity-90 py-2 px-4  rounded border border-slate-300 shadow-md transition duration-300 ease-in-out transform hover:scale-105">
        Basic Button
        <ChevronRight 
        size={20} className="" />
      </button>
      
    </div>
  )
}


