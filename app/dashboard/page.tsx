export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white">
        Welcome to Svachalit
      </h1>

      <p className="text-gray-400 mt-2">
        Your autonomous AI operating system.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-white text-lg font-semibold">
            Conversations
          </h2>

          <p className="text-4xl font-bold text-cyan-400 mt-4">
            1,284
          </p>
        </div>

        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-white text-lg font-semibold">
            Leads Captured
          </h2>

          <p className="text-4xl font-bold text-violet-400 mt-4">
            342
          </p>
        </div>

        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-white text-lg font-semibold">
            AI Resolution
          </h2>

          <p className="text-4xl font-bold text-emerald-400 mt-4">
            94%
          </p>
        </div>
      </div>
    </div>
  );
}