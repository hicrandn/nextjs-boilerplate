import BasicLogin from "@/components/login/BasicLogin";
import React from "react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl text-black font-bold mb-4">Login Example</h1>
      <ul className="space-y-2 text-blue-600 underline">
        <li>
          <Link href="/login/BasicLogin">Basic Login Page</Link>
        </li>
        <li>
          <Link href="/login/DarkLogin">DarkLogin Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default LoginPage;
