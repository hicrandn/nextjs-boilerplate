import Link from 'next/link';

export default function SidebarsHome() {
  return (
    <div className="p-6">
      <h1 className="text-2xl text-black font-bold mb-4">Sidebar Example</h1>
      <ul className="space-y-2 text-blue-600 underline">
        <li>
          <Link href="/sidebars/BasicSidebar">Basic Sidebar</Link>
        </li>
        <li>
          <Link href="/sidebars/DropdownSidebar">Dropdown Sidebar</Link>
        </li>
        <li>
          <Link href="/sidebars/AnimatedSidebar">Animated Sidebar</Link>
        </li>
        
      </ul>
    </div>
  );
}
