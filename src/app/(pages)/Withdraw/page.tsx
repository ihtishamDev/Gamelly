import Link from "next/link";
import Image from "next/image";
import Topbar from "../Topbar/page";
import Backbutton from "../components/Backbutton";

const Withdraw = () => {
  return (
    <div>
      <Topbar />
      <Link href="/Account">
        <Backbutton />
      </Link>
      <div className="max-w-sm mx-auto  p-4">
        <h2 className="text-lg font-semibold mb-1">Deposit</h2>
        <p className="text-sm text-gray-600 mb-4">
          You can add funds to your account.{" "}
        </p>

        <form className="space-y-4">
          <div>
            <label className="block font-semibold  text-lg mb-1">
              Choose a Currency:
            </label>

            <button
              type="button"
              className="flex items-center justify-between w-full px-3 py-2  bg-gray-100 text-sm"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/USDTDeposit.png"
                  alt="TRC20"
                  width={20}
                  height={20}
                  className="rounded-full"
                />

                <span className="text-sm font-medium text-gray-800">
                  TRC20 (Tron)
                </span>
              </div>

              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <span className="text-xs text-gray-600">
              Only USDT deposit available at that moment
            </span>
          </div>

          <div>
            <label className="block font-semibold  text-lg mb-1">
              Choose a Chain:
            </label>

            <button
              type="button"
              className="flex items-center justify-between w-full px-3 py-2  bg-gray-100 text-sm"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/tron.png"
                  alt="TRC20"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <span className="text-sm font-medium text-gray-800">
                  TRC20 (Tron)
                </span>
              </div>

              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          <div>
            <label className="block font-semibold  text-lg mb-1">
              Enter the Amount
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter the code"
                className="w-full px-3 py-2  bg-gray-100 text-sm"
                // value={code}
                // onChange={(e) => setCode(e.target.value)}
                required
              />
              {/* Replace below with actual CAPTCHA image */}
            </div>
          </div>

          <button
            type="submit"
            className="w-1/2 bg-orange-600  text-white py-1.5 rounded text-sm font-medium"
          >
            Generate Payment
          </button>

          {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
        </form>
      </div>
    </div>
  );
};
export default Withdraw;
