import Link from "next/link";
import Image from "next/image";
import Logout from "../Logout/page";
import Topbar from "../Topbar/page";
import Footer from "../Footer/pages";
import AccountLevel from "../components/AccountLevel";
import AccountLimit from "../components/AccountLimit";

const Account = () => {
  return (
    <div>
      <Topbar />
      <div>
        <section className="">
          <div className="w-full rounded overflow-hidden shadow-md ">
            <div className="flex justify-between items-center px-12 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
              <div className="flex items-center space-x-3">
                <Image
                  src="/Accountdp.png"
                  alt="Avatar"
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-white"
                />
                <div>
                  <p className="font-semibold text-sm">Carl Dante</p>
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
                <p className="text-purple-700 font-bold text-lg">4,894,910.23</p>
                <Image
                  src="/Account/birthdaygift.png"
                  alt="Gift Icon"
                  width={24}
                  height={24}
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
          <div className="flex flex-col items-center">
            <Image src="/Account/deposit.png" alt="deposit" width={40} height={40} className="mb-2" />
            <span>Deposit</span>
          </div>
        </Link>
        <Link href="/Withdraw">
          <div className="flex flex-col items-center">
            <Image src="/Account/withdrawal.png" alt="withdrawal" width={40} height={40} className="mb-2" />
            <span>Withdraw</span>
          </div>
        </Link>
        <div className="flex flex-col items-center">
          <Image src="/Account/transfer.png" alt="transfer" width={40} height={40} className="mb-2" />
          <span>Transfer</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/Account/diamond.png" alt="diamond" width={40} height={40} className="mb-2" />
          <span>Diamond</span>
        </div>
      </div>

      <hr className="text-gray-100" />

      <div className="relative">
        <div className="flex flex-col divide-y divide-gray-200 px-6 ">
          <div className="flex items-center gap-4 py-2">
            <Image src="/Account/notification.png" alt="Notification" width={32} height={32} />
            <span className="text-sm text-gray-800">Notifications</span>
          </div>

          <div className="flex items-center gap-4 py-2">
            <Image src="/Account/BuyUSDT.png" alt="Buy USDT now" width={32} height={32} />
            <span className="text-sm text-gray-800">Buy USDT now</span>
          </div>

          <div className="flex items-center gap-4 py-2">
            <Image src="/Account/HelpCenter.png" alt="Help Center" width={32} height={32} />
            <span className="text-sm text-gray-800">Help center</span>
          </div>

          <div className="flex items-center gap-4 py-2">
            <Image src="/Account/ConvertPoint.png" alt="Convert Points" width={32} height={32} />
            <span className="text-sm text-gray-800">Convert Points</span>
          </div>

          <Logout />
        </div>

        <div className="fixed right-0 top-3/5 -translate-y-1/2 z-50">
          <div className="relative bg-blue-900 w-10 h-28 rounded-l-3xl flex items-center justify-center">
            <span className="text-white text-sm font-semibold absolute -rotate-90 tracking-wider whitespace-nowrap">
              Serve
            </span>

            <div className="absolute bottom-[-10px] left-1/3 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center ">
              <Image src="/Account/msg.jpeg" alt="chat" width={32} height={32} className="rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Account;