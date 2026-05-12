import Link from "next/link";
import Navbar from "../components/Navbar";
import AdCard from "@/components/AdCard";
import AdBanner from "@/components/AdBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      <Navbar />

      <AdBanner />

      {/* HERO */}

      <section className="relative">

        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600/30 blur-[140px] rounded-full"></div>

        <div className="absolute top-[100px] right-[-150px] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-8 pt-28 pb-24 relative z-10">

          <div className="text-center">

            <div className="inline-block mb-6 px-6 py-2 rounded-full border border-purple-500 text-purple-300 bg-purple-500/10">
              NEXT GENERATION LANGUAGE GAMING
            </div>

            <h1 className="text-8xl md:text-9xl font-black leading-none mb-8">

              <span className="bg-gradient-to-r from-white via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                HADIKANKI
              </span>

            </h1>

            <p className="max-w-3xl mx-auto text-2xl text-gray-400 leading-relaxed mb-12">
              Learn English, Russian and more through immersive game experiences,
              memory challenges and competitive missions.
            </p>

          </div>

        </div>

      </section>

      {/* GAMES */}

      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-5xl font-black">
            Featured Games
          </h2>

          <button className="text-cyan-400 text-xl hover:text-cyan-300 transition">
            View All
          </button>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {/* GAME CARD */}

          <div className="group bg-[#0F172A] border border-purple-500/40 hover:border-purple-400 rounded-3xl overflow-hidden transition duration-300 hover:scale-[1.02] shadow-2xl shadow-purple-900/20">

            <div className="h-56 bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center">

              <h3 className="text-4xl font-black">
                ARMED FORCES HQ
              </h3>

            </div>

            <div className="p-8">

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Military themed English learning operation with ranks,
                missions and progression system.
              </p>

              <Link
                href="/games/word-adventure/index.html"
                className="inline-block bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-xl text-xl font-bold"
              >
                Launch Mission
              </Link>

            </div>

          </div>

          {/* CARD 2 */}

          <AdCard />

          {/* CARD 3 */}

          <div className="group bg-[#0F172A] border border-cyan-500/40 hover:border-cyan-400 rounded-3xl overflow-hidden transition duration-300 hover:scale-[1.02] shadow-2xl shadow-cyan-900/20">

            <div className="h-56 bg-gradient-to-br from-cyan-600 to-cyan-900 flex items-center justify-center">

              <h3 className="text-4xl font-black">
                KELİME ARENA
              </h3>

            </div>

            <div className="p-8">

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Fast paced vocabulary combat challenge against time.
              </p>

              <Link
                href="/games/kelime-arena/index.html"
                className="inline-block bg-cyan-600 hover:bg-cyan-700 transition px-6 py-3 rounded-xl text-xl font-bold"
              >
                Play Now
              </Link>

            </div>

          </div>

          {/* CARD 4 */}

          <div className="group bg-[#0F172A] border border-pink-500/40 hover:border-pink-400 rounded-3xl overflow-hidden transition duration-300 hover:scale-[1.02] shadow-2xl shadow-pink-900/20">

            <div className="h-56 bg-gradient-to-br from-pink-600 to-pink-900 flex items-center justify-center">

              <h3 className="text-4xl font-black">
                BEN BİLİRİM
              </h3>

            </div>

            <div className="p-8">

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Interactive Russian vocabulary memory missions.
              </p>

              <Link
                href="/games/ben-bilirim/index.html"
                className="inline-block bg-pink-600 hover:bg-pink-700 transition px-6 py-3 rounded-xl text-xl font-bold"
              >
                Play Now
              </Link>

            </div>

          </div>

          {/* MATCH ADVENTURE */}

          <div className="group bg-[#0F172A] border border-yellow-500/40 hover:border-yellow-400 rounded-3xl overflow-hidden transition duration-300 hover:scale-[1.02] shadow-2xl shadow-yellow-900/20">

            <div className="h-56 bg-gradient-to-br from-yellow-600 to-orange-900 flex items-center justify-center">

              <h3 className="text-4xl font-black">
                MATCH ADVENTURE
              </h3>

            </div>

            <div className="p-8">

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Military themed English matching operation with ranks and missions.
              </p>

              <Link
                href="/games/military-match/index.html"
                className="inline-block bg-yellow-600 hover:bg-yellow-700 transition px-6 py-3 rounded-xl text-xl font-bold"
              >
                Play Now
              </Link>

            </div>

          </div>

          {/* CYBER STORM */}

          <div className="group bg-[#0F172A] border border-red-500/40 hover:border-red-400 rounded-3xl overflow-hidden transition duration-300 hover:scale-[1.02] shadow-2xl shadow-red-900/20">

            <div className="h-56 bg-gradient-to-br from-red-700 to-black flex items-center justify-center">

              <h3 className="text-4xl font-black">
                CYBER STORM
              </h3>

            </div>

            <div className="p-8">

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Elite cyber defense typing operation with ranks, explosions and special powers.
              </p>

              <Link
                href="/games/cyber-storm/index.html"
                className="inline-block bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-xl text-xl font-bold"
              >
                Enter Warzone
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 py-10">

        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <h2 className="text-3xl font-black">
            HADIKANKI
          </h2>

          <p className="text-gray-500">
            Next Generation Language Learning Platform
          </p>

        </div>

      </footer>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-8 mb-24">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-[#0B1020] border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-black text-purple-400 mb-2">
              5+
            </h2>
            <p className="text-gray-400 text-xl">
              Active Games
            </p>
          </div>

          <div className="bg-[#0B1020] border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-black text-cyan-400 mb-2">
              2
            </h2>
            <p className="text-gray-400 text-xl">
              Languages
            </p>
          </div>

          <div className="bg-[#0B1020] border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-black text-pink-400 mb-2">
              24/7
            </h2>
            <p className="text-gray-400 text-xl">
              Training Mode
            </p>
          </div>

          <div className="bg-[#0B1020] border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-black text-green-400 mb-2">
              XP
            </h2>
            <p className="text-gray-400 text-xl">
              Rank System
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}