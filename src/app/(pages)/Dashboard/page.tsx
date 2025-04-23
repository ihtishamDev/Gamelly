"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import CryptoGamesCard from "../components/CryptoGamesCard/CryptoGamesCard";

import Footer from "../Footer/pages";
import Topbar from "../Topbar/page";



const Dashbard = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isManualScroll = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const data = [
    { icon: "/btc.png", pair: "BTC/USDT", price: "76407.13" },
    { icon: "/eth.png", pair: "ETH/USDT", price: "1455.01" },
    { icon: "/dogecoin.png", pair: "DOGE/USDT", price: "0.144337" },
    { icon: "/eos.png", pair: "EOS/USDT", price: "0.6666" },
    { icon: "/litecoin.png", pair: "LTC/USDT", price: "70.29" },
    { icon: "/btc.png", pair: "BCH/USDT", price: "269.22" },
    { icon: "/xrp.png", pair: "XRP/USDT", price: "1.79024" },
    { icon: "/etc.png", pair: "ETC/USDT", price: "13.9773" },
    { icon: "/bcv.png", pair: "BSV/USDT", price: "25.883" },
    { icon: "/ada.png", pair: "ADA/USDT", price: "0.560135" },
    { icon: "/fil.png", pair: "FIL/USDT", price: "2.3017" },
    { icon: "/trx.png", pair: "TRX/USDT", price: "0.228031" },
    { icon: "/uni.png", pair: "UNI/USDT", price: "4.00" },
  ];

  const duplicatedData = [...data, ...data];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame: number;

    const autoScroll = () => {
      if (!isManualScroll.current) {
        slider.scrollLeft += 0.5;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    const handleUserScroll = () => {
      isManualScroll.current = true;

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        isManualScroll.current = false;
      }, ); // 0.5 seconds
    };

    slider.addEventListener("scroll", handleUserScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      slider.removeEventListener("scroll", handleUserScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="w-full">
        <Topbar/>
      {/* Poster */}
      <div className="relative sm:w-full w-xs h-[40vh] sm:h-[70vh]">
        <Image src="/Poster.png" alt="Poster" fill className="object-cover" />
      </div>

      {/* Horizontal Crypto Ticker */}
      <div
        ref={sliderRef}
        className="w-full overflow-x-auto bg-white shadow p-4 scroll-smooth"
      >
        <div className="flex items-center gap-6 sm:gap-8 min-w-max">
          {duplicatedData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 min-w-[120px] whitespace-nowrap"
            >
              <div className="w-6 h-6 relative">
                <Image
                  src={item.icon}
                  alt={item.pair}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-bold text-gray-800">
                {item.pair}
              </span>
              <span className="text-sm text-black">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats + Promo Card Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 px-4 sm:px-6 md:px-10 mt-10 w-full">
        {/* Rankings & Prices */}
        <div className="flex justify-between w-full lg:w-1/2 gap-6">
          {/* Rankings */}
          <div className="w-1/2">
            <div className="mb-5">
              <h1 className="font-bold text-lg">Rankings:</h1>
              <p className="text-gray-500 text-sm">Coins</p>
            </div>
            {data.map((item, index) => (
              <div key={index} className="flex items-center mb-3 gap-2">
                <Image src={item.icon} alt={item.pair} width={20} height={20} />
                <span className="text-sm">{item.pair}</span>
              </div>
            ))}
          </div>

          {/* Prices */}
          <div className="w-1/2">
            <div className="mb-5 mt-10 lg:mt-5">
              <p className="text-gray-500 text-sm">Price (USD)</p>
            </div>
            {data.map((item, index) => (
              <div key={index} className="mb-3">
                <p className="text-sm">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Crypto Games Promo Card */}
        <div className="w-full lg:w-1/2">
          <CryptoGamesCard />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Dashbard;
