"use client";
import Link from "next/link";
import { useState } from "react";
import Topbar from "../Topbar/page";
import Footer from "../Footer/pages";
import Backbutton from "../components/Backbutton";

const Login = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Dummy CAPTCHA code for demonstration
    const correctCode = "7DSH";
    if (code !== correctCode) {
      setError("Incorrect security code. Please try again.");
    } else {
      setError("");
      alert("Login successful!");
      // Submit logic goes here
    }
  };

  return (
    <div>
      <Topbar />
      <Link href="/Dashboard">
        <Backbutton />
      </Link>
      <div className="max-w-sm mx-auto  p-4">
        <h2 className="text-xl font-semibold mb-1">Login</h2>
        <p className="text-sm text-gray-600 mb-4">
          Please login to your account to proceed.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-sm mb-1">Account:</label>
            <input
              type="text"
              placeholder="Please enter your username"
              className="w-full px-3 py-2  bg-gray-100 text-sm"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-medium text-sm mb-1">Password:</label>
            <input
              type="password"
              placeholder="Please enter your password"
              className="w-full px-3 py-2  bg-gray-100 text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-medium text-sm mb-1">
              Verification Code:
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter the code"
                className="w-1/2 px-3 py-2  bg-gray-100 text-sm"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
              {/* Replace below with actual CAPTCHA image */}
              <div className="px-4 py-1  bg-gray-100 font-mono text-lg tracking-wider">
                7DSH
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded text-sm font-medium"
          >
            Login
          </button>

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
