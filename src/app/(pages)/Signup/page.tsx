"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Topbar from "../Topbar/page";
import Footer from "../Footer/pages";

import Backbutton from "../components/Backbutton";

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
        <div className="fixed right-0 top-3/5 -translate-y-1/2 z-50">
          <div className="relative bg-blue-900 w-10 h-28 rounded-l-3xl flex items-center justify-center">
            <span className="text-white text-sm font-semibold absolute -rotate-90 tracking-wider whitespace-nowrap">
              Serve
            </span>

            <div className="absolute bottom-[-10px] left-1/3 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Image
                src="/Account/msg.jpeg"
                alt="chat"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        {" "}
        <Footer />
      </div>
    </div>
  );
}
