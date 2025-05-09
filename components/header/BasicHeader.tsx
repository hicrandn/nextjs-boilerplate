"use client";
import Link from "next/link";
import React, { useState } from "react";
import { navItems } from "@/constants";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import { BsStars } from "react-icons/bs";

const BasicHeader = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );

  const handleMouseEnter = (index: number) => setOpenIndex(index);
  const handleMouseLeave = () => setOpenIndex(null);

  return (
    <div className="bg-white shadow-md p-4 text-black flex justify-between items-center relative">
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 rounded-md flex items-center justify-center bg-gradient-to-br from-indigo-800 to-white ">
          <BsStars size={28} className="text-white" />
        </div>
        <Link href="/" className="text-2xl font-bold">
          Brayns AI
        </Link>
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

      <div className="hidden md:flex items-center space-x-4">
        <button className="bg-indigo-400 text-white hover:text-black px-4 py-2 rounded hover:bg-white transition-all duration-200">
          Login
        </button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-white">
          Sign Up
        </button>
      </div>

      <button
        className="md:hidden text-gray-700 hover:text-indigo-600 ml-2 z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Open menu"
      >
        {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex items-start justify-center pt-24 transition-all duration-300 ease-in-out">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="relative w-full max-w-xs mx-auto rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl p-6 flex flex-col items-stretch gap-2 z-50 overflow-y-auto transform transition-all duration-300 ease-in-out">
            {navItems.map((item) => (
              <div key={item.name} className="w-full">
                {item.subItems ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between text-base font-medium py-2.5 rounded-lg text-gray-800 hover:text-indigo-500 hover:bg-indigo-50/80 transition-all duration-200"
                      onClick={() =>
                        setOpenMobileDropdown(
                          openMobileDropdown === item.name ? null : item.name
                        )
                      }
                    >
                      <span className="text-left flex-1">{item.name}</span>
                      <ChevronRight
                        className={`ml-2 transition-transform duration-200 ${
                          openMobileDropdown === item.name ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {openMobileDropdown === item.name && (
                      <div className="pl-4 mt-1 flex flex-col gap-1 border-l-2 border-indigo-100 ml-2 animate-fadeIn">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            className="block text-sm text-gray-600 py-1.5 px-3 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 text-left"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className="block w-full text-base text-gray-800 py-2.5 rounded-lg hover:bg-indigo-50/80 hover:text-indigo-500 text-left transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
                <div className="border-b border-gray-100 my-1" />
              </div>
            ))}
            <div className="w-full flex flex-col gap-3 mt-4">
              <button className="w-full bg-indigo-500 text-white px-4 py-2.5 rounded-lg hover:bg-indigo-600 hover:shadow-md transition-all duration-200 text-base font-medium">
                Login
              </button>
              <button className="w-full bg-gray-100 text-gray-800 px-4 py-2.5 rounded-lg hover:bg-gray-200 hover:shadow-md transition-all duration-200 text-base font-medium">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicHeader;
