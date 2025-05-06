import Link from "next/link";
import { House } from "lucide-react";

export default function Home() {
  return (
  <div className="flex flex-col  text-black items-center justify-center min-h-screen py-2 mb-8">
      <div className="flex items-center space-x-2 justify-center mb-4">
      <House size={30} />
      <h1 className="text-3xl"> HOME </h1>
      </div>
      

      <ul className="space-y-2  text-blue-600 underline mt-4">
        <li>
          <Link href="/sidebars">Sidebars</Link>
        </li>
        <li>
        <Link href="/buttons">Buttons</Link>
        </li>
        <li>
        <Link href="/login">LoginPage</Link>
        </li>

      </ul>

    </div>
  );
}
