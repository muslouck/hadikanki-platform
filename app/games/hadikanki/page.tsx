export default function HadikankiPage() {
  return (
    <main className="min-h-screen bg-[#0B1020] text-white p-10">
         
      <div className="max-w-6xl mx-auto">

        <h1 className="text-6xl font-bold mb-4">
          HADIKANKI
        </h1>

        <p className="text-gray-400 text-xl mb-10">
          Learn languages through memory challenges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-[#121A2B] p-8 rounded-3xl border border-purple-500">
            <h2 className="text-3xl font-bold mb-4">
              Classic Mode
            </h2>

            <p className="text-gray-400 mb-6">
              Match words and improve your memory.
            </p>

            <button className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-xl">
              Start Game
            </button>
          </div>

          <div className="bg-[#121A2B] p-8 rounded-3xl border border-cyan-500">
            <h2 className="text-3xl font-bold mb-4">
              Speed Mode
            </h2>

            <p className="text-gray-400 mb-6">
              Race against time and train faster.
            </p>

            <button className="bg-cyan-600 hover:bg-cyan-700 transition px-6 py-3 rounded-xl">
              Coming Soon
            </button>
          </div>

        </div>

      </div>

    </main>
  );
}