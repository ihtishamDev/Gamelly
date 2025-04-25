import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-white px-4 py-2 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Image src="/pngwing.png" alt="Gamelly" width={24} height={24} />
            <span className="font-bold text-lg">Gamelly</span>
          </div>
          <p className="text-gray-500">Your Crypto Gaming Friend</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">About</h4>
          <ul className="space-y-1 text-gray-600">
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
            <li>
              <Link href="#">Join Us</Link>
            </li>
            <li>
              <Link href="#">Terms of Services</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <div className="grid grid-cols-2 gap-x-4 text-gray-600">
            <ul className="space-y-1">
              <li>
                <Link href="#">Game Maker</Link>
              </li>
              <li>
                <Link href="#">Syncer</Link>
              </li>
              <li>
                <Link href="#">Referral Reward</Link>
              </li>
              <li>
                <Link href="#">RocketFi</Link>
              </li>
            </ul>
            <ul className="space-y-1">
              <li>
                <Link href="#">VIP</Link>
              </li>

              <li>
                <Link href="#">Crypto List</Link>
              </li>
              <li>
                <Link href="#">Partner</Link>
              </li>
              <li>
                <Link href="#">Crypto Program</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul className="space-y-1 text-gray-600">
            <li>
              <Link href="#">Academy</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Help Center</Link>
            </li>
            <li>
              <Link href="#">ST Alert</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-end ">
          <Link href="/Login" className=""><button className="w-full bg-sky-500 hover:bg-sky-600 text-white px-20 py-2 rounded text-sm w-full md:w-auto mb-1">
            Login
          </button></Link>
          
          <Link href="/Signup"><button className="bg-green-500 hover:bg-green-600 text-white px-18 py-2 rounded text-sm w-full md:w-auto">
            Sign Up
          </button></Link>
          {/* <div className="items-center">
          <button
            type="button"
            className="flex items-center text-right bg-blue-600 text-white rounded-2xl sm:py-3 py-2 sm:px-7 px-4 hover:bg-blue-700 shadow-lg mt-5 gap-3"
          >
            <p className="text-xs font-semibold items-center text-right bg-blue-600 text-white hover:bg-blue-700  ">
              Messages
            </p>
            <MessageCircle className="w-5 h-5 " />
          </button>
          </div> */}
          
        </div>
      </div>

      <div className=" text-center text-gray-400 text-xs sm:mt-1 mt-3">
        © 2017–2025 Gamelly.app. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
