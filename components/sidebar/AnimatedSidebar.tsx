"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/constants";
import Link from "next/link";
import { ChevronRight, ChevronsRight } from "lucide-react";
import * as Avatar from "@radix-ui/react-avatar";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function AnimatedSidebar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleDropdownClick = (name: string) => {
    if (!isCollapsed) {
      setOpenDropdown(openDropdown === name ? null : name);
    }
  };

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
    if (!isCollapsed) {
      setOpenDropdown(null);
    }
  };

  return (
    <aside
      className={`
      relative min-h-screen py-6
      bg-white shadow-xl
      transition-all duration-300 ease-in-out
      ${isCollapsed ? "w-20" : "w-64"}
      flex flex-col
    `}
    >
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between ">
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <h1 className="text-lg font-semibold text-slate-800 whitespace-nowrap">
                Animated Sidebar
              </h1>
            </div>
          )}

          <button
            onClick={handleCollapseToggle}
            className="absolute top-10 -right-3 z-10"
          >
            <ChevronsRight
              size={20}
              className={`rounded-full w-6 h-6 bg-indigo-500 text-white shadow-md p-1 transition-transform duration-300  ease-in-out hover:scale-105
    ${isCollapsed ? "rotate-180" : ""}
  `}
            />
          </button>
        </div>
      </div>

      <nav className="space-y-2 px-4 flex-1">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.path);
          const Icon = item.icon;
          const hasSubItems = item.subItems && item.subItems.length > 0;
          const isDropdownOpen = openDropdown === item.name;

          return (
            <div key={item.name} className="relative">
              <button
                onClick={() => handleDropdownClick(item.name)}
                className={`
                  w-full rounded-full p-3
                  flex items-center justify-between
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-indigo-500 text-white shadow-md"
                      : "hover:bg-indigo-50 text-slate-700"
                  }
                  ${isCollapsed ? "px-3" : "px-4"}
                `}
              >
                <div className="flex items-center gap-3">
                  {isCollapsed ? (
                    <div className="relative group flex items-center">
                      <Icon
                        size={20}
                        className={
                          isActive
                            ? "text-white"
                            : "text-gray-500 hover:text-indigo-500 hover:scale-130 transition-transform duration-300"
                        }
                      />
                      <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-xs bg-indigo-500 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                        {item.name}
                      </span>
                    </div>
                  ) : (
                    <>
                      <Icon
                        size={20}
                        className={isActive ? "text-white" : "text-gray-500 "}
                      />
                      <span className="font-medium">{item.name}</span>
                    </>
                  )}
                </div>

                {!isCollapsed && (
                  <div className=" flex items-center gap-2 ">
                    {hasSubItems && (
                      <ChevronRight
                        size={16}
                        className={`
                          transition-transform 
                          ${isDropdownOpen ? "rotate-90" : ""}
                          ${isActive ? "text-white" : "text-gray-400"}
                        `}
                      />
                    )}
                  </div>
                )}
              </button>

              <AnimatePresence>
                {hasSubItems && isDropdownOpen && !isCollapsed && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className=" 
                    absolute 
                    right-1 top-2 
                    md:-right-52 md:top-2 z-50
                    w-30 md:w-48
                    max-h-60 overflow-y-auto
                   bg-white shadow-xl rounded-xl
                   p-1 space-y-1
                   scrollbar-custom
                   border border-indigo-200
                   " 
  
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.path}
                        className={`
            block px-4 py-2 rounded-md text-sm font-medium
            transition-colors duration-200
            ${
              pathname === subItem.path
                ? "text-indigo-600 bg-indigo-100"
                : "text-gray-700 hover:bg-indigo-50"
            }
          `}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-gray-100">
        <div className="px-4 py-4 flex items-center gap-3">
          <Avatar.Root className="flex items-center justify-center">
            <Avatar.Image
              className="h-10 w-10 rounded-full object-cover"
              src="https://api.dicebear.com/9.x/pixel-art/svg"
              alt="Hicran Apaydın"
            />
            <Avatar.Fallback
              className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center"
              delayMs={600}
            >
              <span className="text-indigo-600 font-medium text-sm">HA</span>
            </Avatar.Fallback>
          </Avatar.Root>

          {!isCollapsed && (
            <div className="flex flex-col min-w-0">
              <p className="text-sm font-medium text-slate-800 truncate">
                Hicran Apaydın
              </p>
              <p className="text-xs text-slate-500 truncate">
                hicran@gmail.com
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
