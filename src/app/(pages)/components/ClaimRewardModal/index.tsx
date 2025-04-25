"use client"
import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const ClaimRewardModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleConfirm = () => {
    if (code !== "1234") { // Example correct code
      setError("Wrong code! Please try again.");
    } else {
      setError("");
      alert("Code accepted! 🎉");
      setShowModal(false);
    }
  };

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 text-yellow-300 font-semibold"
      >
        <span>Claim the reward</span>
        <Image
          src="/Account/birthdaygift.png"
          alt="Gift Icon"
          width={20}
          height={20}
        />
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0  bg-black/50  flex justify-center items-center z-50 ">
          <div className="relative bg-white w-80 rounded-lg p-6 text-center">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-black hover:text-black"
            >
              <X size={20} />
            </button>

            {/* Gift Image */}
            <Image
              src="/Account/birthdaygift.png"
              alt="Gift"
              width={64}
              height={64}
              className="mx-auto mb-4"
            />

            {/* Title */}
            <h2 className="text-lg text-gray-800 font-semibold mb-2">
              You can claim your reward!
            </h2>

            {/* Message */}
            <p className="text-sm mb-4 text-gray-800 ">
              Congratulations! You have received a reward of 1,000,000 Points!
            </p>

            <p className="text-sm mb-4 text-gray-700 ">Please enter the code you have received to unlock:</p>

            {/* Input */}
            <input
              type="text"
              placeholder="Enter the code for the gift "
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full bg-gray-100 rounded p-2 text-sm mb-3 focus:outline-none focus:border-blue-500 text-gray-800 "
            />

            {/* Confirm Button */}
            <button
              onClick={handleConfirm}
              className=" bg-black text-white text-sm font-semibold py-2 px-4 rounded mb-2 hover:bg-gray-800 text-gray-800 "
            >
              Confirm
            </button>

            {/* Error Message */}
            {error && <p className="text-red-500 text-xs mb-2">{error}</p>}

            {/* Level Up Option */}
            <p className="text-xs mb-2 text-gray-800 ">
              Or you can level up to receive the reward without the code.
            </p>
            <button className="bg-red-500 text-white font-semibold text-sm py-2 px-4 rounded hover:bg-red-600 text-gray-800 ">
              Level Up
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ClaimRewardModal;
