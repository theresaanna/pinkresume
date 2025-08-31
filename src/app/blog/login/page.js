"use client";

import { useState } from "react";

export default function BlogLogin() {
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      window.location.href = "/blog/new"; // redirect after login
    } else {
      alert("❌ Wrong password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 bg-white shadow rounded">
        <h1 className="text-xl mb-4">🔑 Blog Admin Login</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="border p-2 rounded w-full mb-4"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
}