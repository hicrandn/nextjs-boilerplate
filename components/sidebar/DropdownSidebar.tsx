"use client"
import React, { useState } from 'react'
import { navItems } from '@/constants'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, ChevronsRight } from 'lucide-react';
import * as Avatar from '@radix-ui/react-avatar';

export default function DropdownSidebar() {
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
    <aside className={`
      min-h-screen py-6
      bg-white shadow-lg
      transition-all duration-300 ease-in-out
      ${isCollapsed ? 'w-20' : 'w-64'}
      flex flex-col
    `}>
      
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center p-3">
                <span className="text-pink-500 font-bold text-sm">WW</span>
              </div>
              <h1 className="text-lg font-semibold text-gray whitespace-nowrap">Dropdown Sidebar</h1>
            </div>
          )}
          {isCollapsed && (
            <div className="w-18 h-8 bg-pink-200 rounded-full flex items-center justify-center p-3 ">
              <span className="text-pink-500 font-semibold text-sm">WW</span>
            </div>
          )}
          <button 
            onClick={handleCollapseToggle}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronsRight
              size={20}
              className={`transition-transform duration-300 text-gray-500
                ${isCollapsed ? 'rotate-180' : ''}
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
                  ${isActive 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'hover:bg-gray-100 text-gray-700'}
                  ${isCollapsed ? 'px-3' : 'px-4'}
                `}
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} className={isActive ? 'text-white' : 'text-gray-500'} />
                  {!isCollapsed && <span className="font-medium">{item.name}</span>}
                </div>
                {!isCollapsed && (
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className={`
                        rounded-full w-6 h-6 flex items-center justify-center text-sm
                        ${isActive ? 'bg-white text-pink-500' : 'bg-pink-200 text-pink-500'}
                      `}>
                        {item.badge}
                      </span>
                    )}
                    {hasSubItems && (
                      <ChevronRight
                        size={16}
                        className={`
                          transition-transform duration-200
                          ${isDropdownOpen ? 'rotate-90' : ''}
                          ${isActive ? 'text-white' : 'text-gray-400'}
                        `}
                      />
                    )}
                  </div>
                )}
              </button>

              {hasSubItems && isDropdownOpen && !isCollapsed && (
                <div className="mt-2 ml-6 space-y-1">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.path}
                      className={`
                        block px-4 py-2 rounded-md text-sm
                        transition-colors duration-200
                        ${pathname === subItem.path
                          ? 'text-blue-500 bg-blue-50 font-medium'
                          : 'text-gray-600 hover:bg-gray-50'}
                      `}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
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
              className="h-10 w-10 rounded-full bg-pink-200 flex items-center justify-center"
              delayMs={600}
            >
              <span className="text-pink-500 font-medium text-sm">HA</span>
            </Avatar.Fallback>
          </Avatar.Root>
          
          {!isCollapsed && (
            <div className="flex flex-col min-w-0">
              <p className="text-sm font-medium text-gray-700 truncate">
                Hicran Apaydın
              </p>
              <p className="text-xs text-gray-500 truncate">
                hicran@gmail.com
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}


