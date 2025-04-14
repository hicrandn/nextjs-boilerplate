import Link from 'next/link';

export default function SidebarsHome() {
  return (
    <div className="p-6">
      <h1 className="text-2xl text-black font-bold mb-4">Sidebar Example</h1>
      <ul className="space-y-2 text-blue-600 underline">
        <li>
          <Link href="/sidebar/BasicSidebar">Basic Sidebar</Link>
        </li>
        <li>
          <Link href="/examples/sidebars/sidebar2">Sidebar Two</Link>
        </li>
        <li>
          <Link href="/examples/sidebars/sidebar2">Sidebar Three</Link>
        </li>
        <li>
          <Link href="/examples/sidebars/sidebar2">Sidebar Four</Link>
        </li>
        
      </ul>
    </div>
  );
}
