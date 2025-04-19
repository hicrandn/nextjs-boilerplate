'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  House,
  UserRoundPen,
  Settings,
  ChevronsRight,
  Menu,
} from 'lucide-react';
import Image from 'next/image'

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: House },
  { name: 'Profile', path: '/profile', icon: UserRoundPen },
  { name: 'Settings', path: '/settings', icon: Settings },
];

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
        className="md:hidden fixed top-4 left-4 z-50 bg-gray text-white p-2 rounded "
        onClick={() => setIsMobileOpen(true)}
      >
        <Menu size={20} />
      </button>

      
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      
      <aside
        className={`
          fixed top-0 left-0 h-full bg-gray text-white p-4 z-50 transition-all duration-300 
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static 
          ${isCollapsed ? 'w-20' : 'w-64'}
          flex flex-col
        `}
      >
        
        <div className="mb-6 flex items-center justify-between">
          {!isCollapsed && <h1 className="text-2xl font-bold"> Basic Sidebar</h1>}
          <button onClick={handleCollapseToggle}>
            <ChevronsRight
              size={20}
              className={`transition-transform duration-300 ${
                isCollapsed ? 'rotate-180' : ''
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
                    flex items-center p-2 rounded transition-colors
                    hover:bg-white hover:text-gray-900
                    ${isActive ? 'bg-gray font-semibold' : ''}
                  `}
                >
                  <Icon size={20} />
                  {!isCollapsed && (
                    <span className="ml-2 whitespace-nowrap ">{item.name}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="sidebar-user-info mt-auto">
        <Image
          src="/images/404.png"
          alt="Avatar"
          width={44}
          height={44}
          className="sidebar-user-avatar"
        />
        <div className={`${isCollapsed ? 'hidden' : 'block'} md:block`}>
          <p className="subtitle-2 capitalize">Hicran Apaydın</p>
          <p className="caption">hicran@gmail.com</p>
        </div>
      </div>
      </aside>
    </>
  );
}
