"use client";
import { useState } from "react";

const Logout = () => {
  const [Openit, setOpenit] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setOpenit(true)}>
        <div className="flex items-center gap-4 py-2 cursor-pointer">
          <img src="/Account/Logout.png" alt="Logout" className="w-8 h-8" />
          <span className="text-sm text-gray-800">Logout</span>
        </div>
      </button>

      {Openit && (
        <div
          onClick={() => setOpenit(false)}
          className={`fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black/50 ${
            Openit ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-lg text-center"
          >
            <p className="mb-4 text-lg font-medium text-gray-800">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-center gap-4">
              <button
                type="button"
                className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setOpenit(false)}
                className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
