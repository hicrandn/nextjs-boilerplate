"use client";
import Link from "next/link";
import React, { useState } from "react";
import { navItems } from "@/constants";
import { Menu, X } from "lucide-react";
import { BsStars } from "react-icons/bs";

const DarkHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mainMenuItems = navItems.filter((item) => !item.subItems);

  return (
    <div className="w-full bg-gradient-to-br from-black via-zinc-900 to-neutral-900 py-6 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md flex items-center justify-center bg-gradient-to-br from-zinc-800 to-black shadow-lg">
            <BsStars size={28} className="text-white" />
          </div>
          <Link href="/" className="text-2xl font-bold">
            Brayns AI
          </Link>
        </div>

        <nav className="hidden md:flex items-center justify-center flex-1 mx-12">
          <div
            className="flex items-center gap-8 px-10 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
            style={{ boxShadow: "0 4px 32px 0 rgba(30, 30, 30, 0.10)" }}
          >
            {mainMenuItems.map((item, idx) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-lg font-medium transition-colors ${
                  idx === 0 ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden md:block ml-4">
          <Link
            href="/get-started"
            className="px-8 py-3 rounded-2xl font-semibold text-white bg-gradient-to-br from-zinc-800 to-black shadow-lg border border-white/10 hover:from-zinc-700 hover:to-neutral-800 transition-all text-lg"
            style={{ boxShadow: "0 2px 16px 0 rgba(30,30,30,0.25)" }}
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden text-gray-200 hover:text-white ml-2 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Open menu"
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex items-start justify-center pt-24">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div
            className="relative w-full max-w-xs mx-auto rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg p-8 flex flex-col items-center gap-6 z-50 overflow-y-auto"
            style={{ boxShadow: "0 4px 32px 0 rgba(30, 30, 30, 0.10)" }}
          >
            {mainMenuItems.map((item, idx) => (
              <Link
                key={item.name}
                href={item.path}
                className={`w-full text-center text-xl font-semibold py-2 rounded-lg transition-colors text-white hover:underline hover:opacity-90`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/get-started"
              className="w-full mt-4 px-6 py-3 rounded-2xl font-semibold text-white bg-gradient-to-br from-zinc-800 to-black shadow-lg border border-white/10 hover:from-zinc-700 hover:to-neutral-800 transition-all text-lg text-center"
              style={{ boxShadow: "0 2px 16px 0 rgba(30,30,30,0.25)" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DarkHeader;
