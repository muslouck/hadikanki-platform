"use client";

import { useEffect, useState } from "react";

export default function AdCard() {

  const [ad, setAd] = useState<any>(null);

  useEffect(() => {

    const savedAd = localStorage.getItem("cardAd");

    if (savedAd) {
      setAd(JSON.parse(savedAd));
    }

  }, []);

  if (!ad) return null;

  return (

    <a
      href={ad.link}
      target="_blank"
      className="block"
    >

      <div className="bg-[#0F172A] border border-cyan-500/30 rounded-3xl overflow-hidden hover:scale-[1.02] transition duration-300">

        <div
          className="h-56 bg-cover bg-center"
          style={{
            backgroundImage: `url(${ad.image})`
          }}
        />

        <div className="p-8">

          <p className="text-cyan-300 text-sm mb-2">
            SPONSORED
          </p>

          <h3 className="text-3xl font-black text-white">
            {ad.title}
          </h3>

        </div>

      </div>

    </a>
  );
}