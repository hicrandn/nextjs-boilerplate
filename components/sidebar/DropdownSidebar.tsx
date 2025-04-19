"use client"
import React from 'react'
import { navItems } from '@/constants'
import Link from 'next/link';
import { usePathname } from 'next/navigation';




export default function  DropdownSidebar  ()  {
    const pathname= usePathname();

   
  return (
    <aside className='bg-gray min-h-full'>
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  href={item.path}
                  
                  className={`
                    flex items-center p-2 rounded transition-colors
                    hover:bg-white hover:text-gray-900
                    ${isActive ? 'bg-gray font-semibold' : ''}
                  `}
                >
                  <Icon size={20} />
                 
                </Link>
              </li>
            );
          })}
        </ul>
    </aside>
  )
}


