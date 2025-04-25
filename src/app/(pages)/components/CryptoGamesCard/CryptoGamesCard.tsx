// components/CryptoGamesSection.tsx
import Image from "next/image";

const CryptoGamesCard = () => {
  return (
    <div className="w-full bg-white  px-4">

      <div className="flex justify-center mt-10 mb-10 gap-30">
        <div className="item-center ">
          <div className="mb-5">
            <p className="text-xl font-bold">317</p>
            <p className="text-gray-600 text-sm">Games</p>
          </div>

          <div>
            <p className="text-xl font-bold">$27.01K</p>
            <p className="text-gray-600 text-sm">24 Hour Tx</p>
          </div>
        </div>
        <div>
          <div className="mb-5">
            <p className="text-xl font-bold">21</p>
            <p className="text-gray-600 text-sm">Devs</p>
          </div>
          <div>
            <p className="text-xl font-bold">$410.2K</p>
            <p className="text-gray-600 text-sm">30 Days Tx</p>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="bg-gray-100 rounded-lg flex flex-col md:flex-row items-center p-6 max-w-3xl mx-auto gap-9">
        <div className="relative w-40 h-28 md:w-48 md:h-32 mb-4 md:mb-0 md:mr-6">
          <Image
            src="/Cryptogames.png" // replace with your actual image path
            alt="Crypto Games"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800">Crypto Games</h3>
          <p className="text-sm text-gray-600">Anytime. Anywhere.</p>
          <div className="mt-3 flex justify-center md:justify-start gap-3">
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Login
            </button>
            <button className="px-4 py-2 text-sm bg-green-500 text-white rounded-md hover:bg-green-600 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoGamesCard;
