"use client";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navItems } from "@/constants";
import { ChevronsRight, ChevronRight, Menu } from "lucide-react";
import * as Avatar from "@radix-ui/react-avatar";
import { motion, AnimatePresence } from "framer-motion";
import { BsStars } from "react-icons/bs";

export default function AnimatedSidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Collapse/expand logic
  const handleCollapseToggle = () => {
    setIsCollapsed((prev) => !prev);
    setOpenDropdown(null);
  };

  // Dropdown logic
  const handleDropdownClick = (name: string) => {
    if (!isCollapsed) {
      setOpenDropdown(openDropdown === name ? null : name);
    }
  };

  return (
    <div className="relative">
      {/* Hamburger menu for mobile */}
      {!isMobileOpen && (
        <button
          className="md:hidden fixed top-4 left-4 z-[60] p-2.5 rounded-lg shadow-lg bg-indigo-500 text-white hover:bg-white hover:text-indigo-500 transition-all"
          onClick={() => setIsMobileOpen(true)}
        >
          <Menu size={20} />
        </button>
      )}

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[50] md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: isMobileOpen ? 256 : isCollapsed ? 72 : 256,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 22,
          mass: 0.8,
        }}
        className={`
          fixed top-0 left-0 h-screen py-6 z-[55]
          bg-white shadow-xl flex flex-col
          ${
            isMobileOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0 md:static"
          }
          transition-colors duration-300
        `}
        style={{
          width: isMobileOpen ? 256 : isCollapsed ? 72 : 256,
        }}
      >
        {/* Header */}
        <div className="px-4 mb-8">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div className="flex items-center gap-2">
                <BsStars size={24} className="text-indigo-500" />
                <h1 className="text-lg font-semibold text-slate-800">
                  Brayns AI
                </h1>
              </div>
            )}
            <button
              onClick={handleCollapseToggle}
              className="absolute top-10 -right-3 z-10 hidden md:block"
            >
              <ChevronsRight
                size={20}
                className={`w-6 h-6 p-1 rounded-full bg-indigo-500 text-white shadow-md transition-transform duration-300 ${
                  isCollapsed ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 px-4 flex-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.path);
            const Icon = item.icon;
            const hasSubItems = item.subItems && item.subItems.length > 0;
            const isDropdownOpen = openDropdown === item.name;

            return (
              <div key={item.name} className="relative">
                <button
                  onClick={() => handleDropdownClick(item.name)}
                  className={`w-full rounded-full p-3 flex items-center justify-between transition-all ${
                    isActive
                      ? "bg-indigo-500 text-white shadow-md"
                      : "hover:bg-indigo-50 text-slate-700"
                  } ${isCollapsed ? "px-3" : "px-4"}`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={20}
                      className={isActive ? "text-white" : "text-gray-500"}
                    />
                    {!isCollapsed && (
                      <span className="font-medium">{item.name}</span>
                    )}
                  </div>
                  {!isCollapsed && hasSubItems && (
                    <ChevronRight
                      size={16}
                      className={`transition-transform ${
                        isDropdownOpen ? "rotate-90" : ""
                      } ${isActive ? "text-white" : "text-gray-400 "}`}
                    />
                  )}
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {!isCollapsed && hasSubItems && isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 ml-6 space-y-1"
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.path}
                          onClick={() => setIsMobileOpen(false)}
                          className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                            pathname === subItem.path
                              ? "text-indigo-600 bg-indigo-100"
                              : "text-gray-700 hover:bg-indigo-50"
                          }`}
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

        {/* Footer */}
        <div className="mt-auto border-t border-gray-100 px-4 py-4 flex items-center gap-3">
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
      </motion.aside>
    </div>
  );
}
