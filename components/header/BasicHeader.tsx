"use client";
import Link from "next/link";
import React, { useState } from "react";
import { navItems } from "@/constants";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";

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
        <Link href="/" className="text-2xl font-bold">
          My Logo
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
        <div className="fixed inset-0 z-40 flex items-start justify-center pt-24">
          <div
            className="absolute inset-0 bg-black/10 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="relative w-full max-w-xs mx-auto rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl p-6 flex flex-col items-stretch gap-2 z-50 overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name} className="w-full">
                <button
                  className="w-full flex items-center justify-between text-base font-semibold py-2 rounded-lg text-indigo-500 hover:bg-indigo-50 transition-colors"
                  onClick={() =>
                    item.subItems
                      ? setOpenMobileDropdown(
                          openMobileDropdown === item.name ? null : item.name
                        )
                      : setIsMobileMenuOpen(false)
                  }
                >
                  <span className="text-left flex-1">{item.name}</span>
                  {item.subItems && (
                    <ChevronRight
                      className={`ml-2 transition-transform ${
                        openMobileDropdown === item.name ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </button>
                {/* Submenu for mobile */}
                {item.subItems && openMobileDropdown === item.name && (
                  <div className="pl-4 mt-1 flex flex-col gap-0.5 border-l border-indigo-100 ml-2">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.path}
                        className="block text-sm text-gray-500 py-1 px-2 rounded hover:bg-indigo-50 hover:text-indigo-600 transition-colors text-left"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
                {/* Direct link for items without subItems */}
                {!item.subItems && (
                  <Link
                    href={item.path}
                    className="block w-full text-base text-indigo-500 py-2 rounded hover:bg-indigo-50 hover:text-indigo-600 text-left transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
                <div className="border-b border-gray-100 my-1" />
              </div>
            ))}
            <div className="w-full flex flex-col gap-2 mt-2">
              <button className="w-full bg-indigo-400 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-indigo-600 transition-all text-base">
                Login
              </button>
              <button className="w-full bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-white transition-all text-base">
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
