"use client";
import { useState, useEffect } from "react";
import useAuth from "@/hooks/useauth";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Login() {
  const router = useRouter();
  const { LoginUser, loading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await LoginUser({ email, password });
      console.log(user);
      setEmail("");
      setPassword("");
      router.push("/userdashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-[400px]">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md "
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300"
          >
            {loading ? "Logging in..." : "Submit"}
          </Button>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>
        <div className="mt-4 text-center">
          <Button
            onClick={() => router.push("/register")}
            className="text-blue-500"
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
