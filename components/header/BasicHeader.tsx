'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { navItems } from '@/constants';
import { ChevronDown } from 'lucide-react'
import { div } from 'framer-motion/client';

const BasicHeader = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleMouseEnter = (index: number) => setOpenIndex(index)
  const handleMouseLeave = () => setOpenIndex(null)

  return (
    <div className="bg-white shadow-md p-4 text-black flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link href = "/" className="text-2xl font-bold"> My Logo </Link>
      </div>

      <div className="hidden md:flex space-x-6 relative">
        {navItems.map((item, index) => (
          <div
            key={item.name}
            className="relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={item.path}
              className="text-indigo-400 hover:text-indigo-600 flex items-center gap-1"
            >
              {item.name}
              {item.subItems && <ChevronDown className="w-4 h-4" />}
            </Link>

           
            {openIndex === index && item.subItems && (
            <div className="absolute left-0 top-full w-48 pt-4">
                <div className="flex flex-col space-y-2 bg-white shadow-lg rounded-xl z-50">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <button className="bg-indigo-400 text-white hover:text-black px-4 py-2 rounded hover:bg-white transition-all duration-200">
          Login
        </button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-white">
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default BasicHeader
