"use client";

import { useState } from "react";

const AccountLimit = () => {
  const [Open, setOpen] = useState(false);
  //   const [Close , setClose] = useState(false)
  return (
    <div>
      <button
        //   data-dialog-target="web-3-modal"
        onClick={() => setOpen(true)}
        className="text-xs font-bold mb-1 ml-22 cursor-pointer"
        type="button"
      >
        What is limit?
      </button>
      {Open && (
        <div
          onClick={() => setOpen(false)}
          className={` fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black/50  ${
            Open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="relative m-4 w-1/4 rounded-lg bg-white shadow-sm"
            onClick={(e) => e.stopPropagation()}

            // data-dialog="web-3-modal"
          >
            <button
                onClick={() => setOpen(false)}
                className="relative cursor-pointer h-8 max-h-[32px] w-8 max-w-[32px] rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <span className="absolute top-1/2 left-10/1 -translate-x-1/2 -translate-y-1/2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    className="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </span>
              </button>
            <div className="flex items-start justify-between p-5 ">
              <div>
                <h5 className="text-xl font-medium text-slate-800 text-center">
                  What is the Limit?
                </h5>
                <p className="text-slate-500 text-sm font-light px-10 text-center">
                This is the maximum amount of Points your account can receive via Internal Transfer.
                In order to raise this amount, you can upgrade your Level.
                </p>
                <div className="text-center mt-5">
                <button type="button" className="bg-orange-500 text-white text-xs px-3 py-2 rounded">Level Up</button>

                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AccountLimit;
