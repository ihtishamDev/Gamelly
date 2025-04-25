"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Countrydropdown from "../Countrydropdown";


const TopbarAccount = () => {

  return (
    <div className="w-full shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
        <Link href="/Dashboard">

          <div className="flex items-center gap-2">
            <Image src="/pngwing.png" alt="logo" width={24} height={24} />
            
            <span className="font-semibold text-lg">Gamelly</span>
            
          </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-black">
            <a href="/Dashboard">Home</a>
            <a href="#">Markets</a>
            <a href="#">Trade</a>
            <a href="/Account">My Account</a>
          </div>
        </div>

       <Countrydropdown/>
      </div>
    </div>
  );
};

export default TopbarAccount;
