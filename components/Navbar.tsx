import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-[#0B1020]/80 backdrop-blur sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <Link
          href="/"
          className="text-3xl font-bold tracking-wide text-white"
        >
          HADIKANKI
        </Link>

        <div className="flex items-center gap-8 text-lg text-gray-300">

          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          <Link href="/" className="hover:text-white transition">
            Leaderboard
          </Link>

          <Link href="/" className="hover:text-white transition">
            Profile
          </Link>

        </div>

      </div>

    </nav>
  );
}