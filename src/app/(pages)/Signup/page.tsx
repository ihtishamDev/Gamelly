"use client";

import { useState, useEffect } from "react";
import Footer from "../Footer/pages";
import Topbar from "../Topbar/page";
import Backbutton from "../components/Backbutton";
import Link from "next/link";


export default function Signup() {
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
      alert("Signup successful!");
      // Submit logic goes here
    }
  };

  return (
    <div>
      <Topbar />
      <Link href="/Login">
        <Backbutton />
      </Link>

      <div className="min-h-screen flex items-center justify-center bg-white p-3">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full max-w-md space-y-4"
        >
          <h2 className="text-xl font-bold">Sign Up</h2>
          <p className="text-sm text-gray-600">
            You can create an account here.
          </p>

          <div>
            <label className="block font-medium mb-1">Username:</label>
            <input
              type="text"
              placeholder="Please enter your username"
              className="w-full bg-gray-100 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email:</label>
            <input
              type="email"
              placeholder="Please enter your username"
              className="w-full bg-gray-100 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Password:</label>
            <input
              type="password"
              placeholder="Please enter your password"
              className="w-full bg-gray-100 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Repeat Password:</label>
            <input
              type="password"
              placeholder="Please enter your password again"
              className="w-full bg-gray-100 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Phone Number:</label>
            <input
              type="tel"
              placeholder="+1 Please enter your phone number"
              className="w-full bg-gray-100 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Secret Key:</label>
            <input
              type="password"
              placeholder="Please enter your password"
              className="w-full bg-gray-100 rounded px-3 py-2"
            />
            <p className="text-red-600 text-sm mt-1">
              Note: The security key is your account’s unique credential. It
              cannot be changed or retrieved. Please keep it safe!
            </p>
          </div>

          <div>
            <label className="block font-medium mb-1">Repeat Secret Key:</label>
            <input
              type="password"
              placeholder="Please enter your password again"
              className="w-full bg-gray-100 rounded px-3 py-2"
            />
          </div>

          {/* CAPTCHA SECTION */}
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
              <div className="px-4 py-1 rounded bg-gray-100 font-mono text-lg tracking-wider">
                7DSH
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Sign Up
          </button>

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
}
