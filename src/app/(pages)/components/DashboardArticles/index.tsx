"use client";

import Image from "next/image";

const articles = [
  {
    src: "/1.png",
    label: "World Liberty Says it Hasn’t...",
    description:
      "World Liberty Financial, the DeFi project backed by U.S. President Donald Trump’s...",
  },
  {
    src: "/2.png",
    label: "XRP Could Hit $12.5 Before...",
    description:
      "XRP could rise to $12.50 before President Trump leaves office,  investment bank....",
  },
  {
    src: "/3.png",
    label: "The Protocol: EigenLayer R...",
    description:
      "Welcome to The Protocol, CoinDesk's weekly wrap-up of the most important sto...",
  },
  {
    src: "/1.png",
    label: "World Liberty Says it Hasn’t...",
    description:
      "World Liberty Financial, the DeFi project backed by U.S. President Donald Trump’s...",
  },
  {
    src: "/2.png",
    label: "XRP Could Hit $12.5 Before...",
    description:
      "XRP could rise to $12.50 before President Trump leaves office,  investment bank....",
  },
  {
    src: "/3.png",
    label: "The Protocol: EigenLayer R...",
    description:
      "Welcome to The Protocol, CoinDesk's weekly wrap-up of the most important sto...",
  },
  {
    src: "/1.png",
    label: "World Liberty Says it Hasn’t...",
    description:
      "World Liberty Financial, the DeFi project backed by U.S. President Donald Trump’s...",
  },
  {
    src: "/2.png",
    label: "XRP Could Hit $12.5 Before...",
    description:
      "XRP could rise to $12.50 before President Trump leaves office,  investment bank....",
  },
  {
    src: "/3.png",
    label: "The Protocol: EigenLayer R...",
    description:
      "Welcome to The Protocol, CoinDesk's weekly wrap-up of the most important sto...",
  },
];

export default function DashboardArticles() {
  return (
    <div className="py-6 overflow-hidden">
      <div className="flex gap-6 animate-marquee whitespace-nowrap">
        {[...articles, ...articles].map((article, idx) => (
          <div
            key={idx}
            className="inline-block w-[220px] sm:w-[250px] text-left"
          >
            <Image
              src={article.src}
              alt={article.label}
              width={250}
              height={150}
              className="rounded object-cover w-full h-[150px]"
            />
            <h3 className="mt-2 font-semibold text-sm sm:text-base text-gray-800 truncate">
              {article.label}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
              {article.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
