"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Login() {
  useEffect(() => {
    gsap.from("#loginContainer", {
      duration: 1.5,
      y: -100,
      opacity: 0,
      ease: "bounce.out",
    });

    gsap.from(".input", {
      duration: 1.2,
      x: -100,
      opacity: 0,
      stagger: 0.4,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefce8] via-[#fdba74] to-[#fb923c] flex justify-center items-center">
      <div
        id="loginContainer"
        className="bg-white/90 backdrop-blur-md shadow-xl p-10 rounded-3xl w-[400px] flex flex-col gap-6 items-center"
      >
        <h1 className="text-4xl font-bold text-[#d97706]">Login to Eventra</h1>

        <input
          type="text"
          placeholder="Username"
          className="input w-full px-4 py-3 border border-[#fcd34d] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f59e0b] text-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="input w-full px-4 py-3 border border-[#fcd34d] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f59e0b] text-lg"
        />

        <button className="mt-4 bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white font-bold text-xl py-3 px-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300">
          Submit
        </button>
      </div>
    </div>
  );
}
