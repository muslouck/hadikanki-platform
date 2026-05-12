"use client";

import { useEffect, useState } from "react";

export default function AdBanner() {

  const [ad, setAd] = useState<any>(null);

  useEffect(() => {

    const savedAd = localStorage.getItem("heroAd");

    console.log(savedAd);

    if (savedAd) {
      setAd(JSON.parse(savedAd));
    }

  }, []);

  if (!ad) {
    return (
      <div className="text-center text-red-500 py-10">
        NO AD FOUND
      </div>
    );
  }

  return (

    <div className="max-w-7xl mx-auto px-8 mb-16">

      <a
        href={ad.link}
        target="_blank"
      >

        <div
          className="relative rounded-3xl overflow-hidden border border-purple-500/30 h-[280px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${ad.image})`
          }}
        >

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 h-full flex items-end p-10">

            <div>

              <p className="text-purple-200 text-sm mb-2">
                SPONSORED
              </p>

              <h2 className="text-5xl font-black text-white">
                {ad.title}
              </h2>

            </div>

          </div>

        </div>

      </a>

    </div>
  );
}