"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronsRight, Menu } from "lucide-react";
import Image from "next/image";
import { navItems } from "@/constants";

export default function BasicSidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleCollapseToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-gray text-white p-2.5 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-200"
        onClick={() => setIsMobileOpen(true)}
      >
        <Menu size={20} />
      </button>

      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full bg-gray text-white p-4 z-50 transition-all duration-300 ease-in-out
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static
          ${isCollapsed ? "w-20" : "w-64"}
          flex flex-col shadow-xl
        `}
      >
        <div className="mb-6 flex items-center justify-between">
          {!isCollapsed && (
            <h1 className="text-2xl font-bold text-white">Basic Sidebar</h1>
          )}
          <button
            onClick={handleCollapseToggle}
            className="p-1.5 rounded-lg hover:bg-white hover:text-gray transition-colors"
          >
            <ChevronsRight
              size={20}
              className={`transition-transform duration-300 ${
                isCollapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <Link
                  href={item.path}
                  onClick={() => setIsMobileOpen(false)}
                  className={`
                    group flex items-center p-2.5 rounded-lg transition-all duration-200
                    hover:bg-white hover:text-gray
                    ${isActive ? "bg-gray text-white font-medium" : ""}
                  `}
                >
                  <Icon
                    size={20}
                    className={`
                      transition-colors duration-200
                      ${
                        isActive
                          ? "text-white"
                          : "text-white group-hover:text-gray"
                      }
                    `}
                  />
                  {!isCollapsed && (
                    <span className="ml-3 whitespace-nowrap">{item.name}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="sidebar-user-info mt-auto border-t pt-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/404.png"
              alt="Avatar"
              width={44}
              height={44}
              className="rounded-full border-2 border-gray-700"
            />
            <div
              className={`${
                isCollapsed ? "hidden" : "block"
              } md:block transition-all duration-200 `}
            >
              <div className="flex flex-col gap-1 ">
                <p className="font-medium">Hicran Apaydın</p>
                <p className="text-sm ">hicran@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
