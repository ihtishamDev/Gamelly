"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LoginForm from "../Login/page";


const Topbar = () => {
  const [language, setLanguage] = useState("English");
  const pathname = usePathname();

  return (
    <div className="w-full shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Image src="/pngwing.png" alt="logo" width={24} height={24} />
            <span className="font-semibold text-lg">Gamelly</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-black">
            <a href="#">Home</a>
            <a href="#">Markets</a>
            <a href="#">Trade</a>
            <a href="/Account">My Account</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/Login">
            <button className="bg-sky-500 text-white px-4 py-1.5 text-sm rounded">
              Login
            </button>
          </Link>

          <Link href="/Signup">
            <button className="bg-green-500 text-white px-4 py-1.5 text-sm rounded">
              Sign Up
            </button>
          </Link>

          <div className="flex items-center gap-1 text-sm text-black cursor-pointer">
            <span>{language}</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
