'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Countrydropdown from '../components/Countrydropdown';

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
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

        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/Login">
              <button className="bg-sky-500 text-white sm:px-4 px-2 py-1 sm:py-1.5 text-sm rounded">
                Login
              </button>
            </Link>

            <Link href="/Signup">
              <button className="bg-green-500 text-white sm:px-4 px-2 py-1 sm:py-1.5 text-sm rounded">
                Sign Up
              </button>
            </Link>

            <Countrydropdown />
          </div>
        </div>

        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 flex flex-col gap-4 px-4 py-4 md:hidden z-50">
            <a href="/Dashboard">Home</a>
            <a href="#">Markets</a>
            <a href="#">Trade</a>
            <a href="/Account">My Account</a>
            <Link href="/Login">
              <button className="bg-sky-500 text-white w-full py-1.5 rounded text-sm">
                Login
              </button>
            </Link>
            <Link href="/Signup">
              <button className="bg-green-500 text-white w-full py-1.5 rounded text-sm">
                Sign Up
              </button>
            </Link>
            <Countrydropdown />
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
