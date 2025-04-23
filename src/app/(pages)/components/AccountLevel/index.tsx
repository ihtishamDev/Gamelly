"use client";

import { useState } from "react";

const AccountLevel = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="bg-purple-700 text-white text-xs px-2 py-0.5 rounded-full"
        type="button"
      >
        Level 5
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black/50"
        >
          <div
            className="relative w-80 rounded-lg bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-700 hover:text-black"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="flex flex-col items-center text-center px-6 pt-12 pb-6">
              <img
                src="/Account/diamond.png"
                alt="Diamond Icon"
                className="w-12 mb-3"
              />
              <h2 className="text-lg font-semibold mb-2">Level</h2>
              <p className="text-gray-600 text-sm mb-2">
                “Level” is an amazing feature that allows you to generate
                rewards on a daily basis.
              </p>
              <p className="text-sm text-black mt-2">
                Your Level: <span className="font-bold">5</span>
              </p>
              <p className="text-sm text-black">
                Daily Profit: <span className="font-bold">10,000 Points</span>
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Next Level: <span className="font-bold">6</span><br />
                (25,000 Points per day)
              </p>
              <button
                type="button"
                className="bg-orange-500 text-white text-xs px-4 py-2 rounded"
              >
                Level Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountLevel;
