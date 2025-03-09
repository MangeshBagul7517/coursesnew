"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    alert("Signup successful! Check your email for verification.");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-2 w-80"
      />
      
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-2 w-80"
      />
      
      <button
        onClick={handleSignup}
        disabled={loading}
        className="bg-blue-500 text-white p-2 rounded w-80"
      >
        {loading ? "Signing up..." : "Sign Up"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default SignupPage;
