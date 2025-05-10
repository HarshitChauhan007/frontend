"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="fixed top-0 left-0 w-full bg-transparent z-50 backdrop-blur-md">
      <nav className="flex justify-between items-center px-6 py-4">
        {/* Left Side - Logo */}
        <h1 className="text-black font-bold text-4xl pl-20">Eventra</h1>

        {/* Right Side - Buttons */}
        <ul className="flex gap-6 items-center">
          <li>
            <button
              className="text-black font-semibold text-4xl px-4 py-2 hover:text-amber-500 transition"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
          </li>
          <li>
            <button
              className="text-black font-semibold text-4xl px-4 py-2 hover:text-amber-500 transition"
              onClick={() => router.push("/register")}
            >
              Register
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
