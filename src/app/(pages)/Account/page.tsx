import Image from "next/image";
import Footer from "../Footer/pages";
import Topbar from "../Topbar/page";
import AccountLimit from "../components/AccountLimit";
import AccountLevel from "../components/AccountLevel";
import Logout from "../Logout/page";
import Link from "next/link";

const Account = () => {
  return (
    <div>
      <Topbar />
      <div>
        <section className="">
          <div className="w-full rounded overflow-hidden shadow-md ">
            <div className="flex justify-between items-center px-12 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
              <div className="flex items-center space-x-3">
                <img
                  src="/Accountdp.png"
                  alt="Avatar"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <div>
                  <p className="font-semibold text-sm">Carl Dante</p>
                  {/* <span className="bg-purple-700 text-white text-xs px-2 py-0.5 rounded-full">
                    Level 5
                  </span> */}
                  <AccountLevel />
                </div>
              </div>

              <div className="text-right text-xs">
                <p>Joined:</p>
                <p className="font-semibold">4.2 years ago</p>
                <p>Status:</p>
                <p className="text-yellow-300 font-semibold">
                  Claim the reward ↑
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between px-12 py-1 bg-white text-sm space-y-2 md:space-y-0">
              <div className="flex items-center gap-2">
                <p className="font-medium text-gray-700">Game Points:</p>
                <p className="text-purple-700 font-bold text-lg">
                  4,894,910.23
                </p>
                <img
                  src="/Account/birthdaygift.png"
                  alt="Gift Icon"
                  className="w-6 h-6"
                />
                <span className="text-xs text-gray-400">+15.05 USDT</span>
              </div>

              <div className="flex items-center gap-2">
                <p className="font-medium text-gray-700">Level Profit:</p>
                <span className="text-black font-semibold">
                  10,000 Points per day
                </span>
                <button className="bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600">
                  Level Up
                </button>
              </div>

              <div className="flex gap-8">
                <div className="flex flex-col text-left">
                  <p className=" font-bold">Limit</p>
                  <span>500,000 Points Daily</span>
                </div>
                <div className="flex flex-col  ">
                  <AccountLimit />

                  <span>5,000,000 Points Monthly</span>
                </div>
              </div>
            </div>

            <div className="h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-b-md" />
          </div>
        </section>
      </div>
      <div className="flex justify-between px-40 py-3 text-center">
        <Link href="/Deposit">
          {/* <button type="button" className="cursor-pointer"> */}
          <div className="flex flex-col items-center">
            <img src="/Account/deposit.png" alt="deposit" className="mb-2" />
            <span>Deposit</span>
          </div>
          {/* </button> */}
        </Link>
        <Link href="/Withdraw">
          <div className="flex flex-col items-center">
            <img
              src="/Account/withdrawal.png"
              alt="withdrawal"
              className="mb-2"
            />
            <span>Withdraw</span>
          </div>
        </Link>

        <div className="flex flex-col items-center">
          <img src="/Account/transfer.png" alt="transfer" className="mb-2" />
          <span>Transfer</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/Account/diamond.png" alt="diamond" className="mb-2" />
          <span>Diamond</span>
        </div>
      </div>
      <hr className="text-gray-100" />
      <div className="relative">
        {/* Sidebar items */}
        <div className="flex flex-col divide-y divide-gray-200 px-6 ">
          {/* Notification */}
          <div className="flex items-center gap-4 py-2">
            <img
              src="/Account/notification.png"
              alt="Notification"
              className="w-8 h-8"
            />
            <span className="text-sm text-gray-800">Notifications</span>
          </div>

          {/* Buy USDT */}
          <div className="flex items-center gap-4 py-2">
            <img
              src="/Account/BuyUSDT.png"
              alt="Buy USDT now"
              className="w-8 h-8"
            />
            <span className="text-sm text-gray-800">Buy USDT now</span>
          </div>

          {/* Help Center */}
          <div className="flex items-center gap-4 py-2">
            <img
              src="/Account/HelpCenter.png"
              alt="Help Center"
              className="w-8 h-8"
            />
            <span className="text-sm text-gray-800">Help center</span>
          </div>

          {/* Convert Points */}
          <div className="flex items-center gap-4 py-2">
            <img
              src="/Account/ConvertPoint.png"
              alt="Convert Points"
              className="w-8 h-8"
            />
            <span className="text-sm text-gray-800">Convert Points</span>
          </div>

          {/* Logout */}
          <Logout />
          {/* <div className="flex items-center gap-4 py-2">
            <img src="/Account/Logout.png" alt="Logout" className="w-8 h-8" />
            <span className="text-sm text-gray-800">Logout</span>
          </div> */}
        </div>

        {/* Floating Service Button */}
        <div className="fixed right-0 top-3/5 -translate-y-1/2 z-50">
          <div className="relative bg-blue-900 w-10 h-28 rounded-l-3xl flex items-center justify-center">
            {/* Vertical Text */}
            <span className="text-white text-sm font-semibold absolute -rotate-90 tracking-wider whitespace-nowrap">
              Serve
            </span>

            {/* Circular Icon */}
            <div className="absolute bottom-[-10px] left-1/3 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center ">
              <img
                src="/Account/msg.jpeg"
                alt="chat"
                className=" rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Account;
