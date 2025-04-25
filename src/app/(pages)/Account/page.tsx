import Link from "next/link";
import Image from "next/image";
import { Info } from "lucide-react";
import Logout from "../Logout/page";
import Footer from "../Footer/pages";
import AccountLevel from "../components/AccountLevel";
import AccountLimit from "../components/AccountLimit";
import TopbarAccount from "../components/TopbarAccount";
import ClaimRewardModal from "../components/ClaimRewardModal";
import AccClainReward from "../components/AccClaimReward";

const Account = () => {
  return (
    <div>
      <TopbarAccount />

      <section className="p-4">
        <div className="w-full rounded overflow-hidden shadow-md">
          <div className="flex sm:flex-col md:flex-row justify-between sm:items-center px-4 md:px-12 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white space-y-4 md:space-y-0">
            <div className="flex sm:items-center space-x-3">
              <Image
                src="/Accountdp.png"
                alt="Avatar"
                width={60}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <div>
                <p className="font-semibold text-sm">Carl Dante</p>
                <AccountLevel />
              </div>
            </div>

            <div className="text-right text-xs flex flex-col gap-1">
              <p>Joined:</p>
              <p className="font-semibold">4.2 years ago</p>
              <p>Status:</p>
              {/* <div className="flex items-center gap-2 text-yellow-300 font-semibold">
                <span>Claim the reward</span>

                <Image
                  src="/Account/birthdaygift.png"
                  alt="Gift Icon"
                  width={20}
                  height={20}
                />
              </div> */}
              <ClaimRewardModal />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-12 py-4 bg-white text-sm space-y-4 md:space-y-0">
            {/* Game Points and USDT */}
            <div className="flex  items-start md:flex-row md:items-center gap-2">
              <div className="flex flex-col">
                <p className="font-medium text-gray-700">Game Points:</p>
                <p className="text-purple-700 font-bold text-lg">
                  4,894,910.23
                </p>
              </div>
              {/* <div className="flex flex-row"><p className="text-gray-500 text-xs sm:mt-5  mt-7">≈ 15.05 USDT</p>
              <Image
                src="/Account/birthdaygift.png"
                alt="Avatar"
                width={25}
                height={40}
                className="rounded-full border-2 border-white mt-3"
              /></div> */}
              <AccClainReward />
            </div>

            {/* Daily Points and Level Up Button */}
            <div className="flex items-start md:flex-row md:items-center gap-2">
              <div className="flex flex-col">
                <p className="font-medium text-gray-700">Daily Points:</p>
                <p className="text-black font-semibold">
                  10,000 Points per day
                </p>
              </div>
              <button className="bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600 mt-3">
                Level Up
              </button>
            </div>

            {/* Limit Section */}
            <div className="flex  items-left sm:gap-4 gap-5 text-sm text-gray-800">
              <div className="flex flex-col">
                <span className="font-medium">Limit:</span>
                <span className="font-semibold flex ">
                  500,000 Points{" "}
                  <span className="font-normal text-gray-500">Daily</span>
                </span>
              </div>

              <div className="flex flex-col text-gray-900 cursor-pointer hover:text-black">
                <div className="flex gap-1 items-right">
                  <Info className="w-3 h-3 mt-1" />

                  <AccountLimit />
                </div>
                <span className="font-semibold flex ">
                  5,000,000 Points{" "}
                  <span className="font-normal text-gray-500">Monthly</span>
                </span>
              </div>
            </div>
          </div>

          <div className="h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-b-md" />
        </div>
      </section>

      <div className="flex justify-between sm:grid-cols-4 gap-6 px-4 md:px-40 py-4 text-center">
        <Link href="/Deposit">
          <div className="flex flex-col items-center">
            <Image
              src="/Account/deposit.png"
              alt="deposit"
              width={40}
              height={40}
              className="mb-2"
            />
            <span>Deposit</span>
          </div>
        </Link>
        <Link href="/Withdraw">
          <div className="flex flex-col items-center">
            <Image
              src="/Account/withdrawal.png"
              alt="withdrawal"
              width={40}
              height={40}
              className="mb-2"
            />
            <span>Withdraw</span>
          </div>
        </Link>
        <div className="flex flex-col items-center">
          <Image
            src="/Account/transfer.png"
            alt="transfer"
            width={40}
            height={40}
            className="mb-2"
          />
          <span>Transfer</span>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/Account/diamond.png"
            alt="diamond"
            width={40}
            height={40}
            className="mb-2"
          />
          <span>Diamond</span>
        </div>
      </div>

      <hr className="text-gray-100" />

      <div className="relative">
        <div className="flex flex-col divide-y divide-gray-200 px-6">
          <div className="flex items-center gap-4 py-2">
            <Image
              src="/Account/notification.png"
              alt="Notification"
              width={32}
              height={32}
            />
            <span className="text-sm text-gray-800">Notifications</span>
          </div>

          <div className="flex items-center gap-4 py-2">
            <Image
              src="/Account/BuyUSDT.png"
              alt="Buy USDT now"
              width={32}
              height={32}
            />
            <span className="text-sm text-gray-800">Buy USDT now</span>
          </div>

          <div className="flex items-center gap-4 py-2">
            <Image
              src="/Account/HelpCenter.png"
              alt="Help Center"
              width={32}
              height={32}
            />
            <span className="text-sm text-gray-800">Help center</span>
          </div>

          <div className="flex items-center gap-4 py-2">
            <Image
              src="/Account/ConvertPoint.png"
              alt="Convert Points"
              width={32}
              height={32}
            />
            <span className="text-sm text-gray-800">Convert Points</span>
          </div>

          <Logout />
        </div>

        <div className="fixed right-0 top-3/5 -translate-y-1/2 z-50">
          <div className="relative bg-blue-900 w-10 h-28 rounded-l-3xl flex items-center justify-center">
            <span className="text-white text-sm font-semibold absolute -rotate-90 tracking-wider whitespace-nowrap">
              Serve
            </span>

            <div className="absolute bottom-[-10px] left-1/3 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Image
                src="/Account/msg.jpeg"
                alt="chat"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:mt-10 mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Account;
