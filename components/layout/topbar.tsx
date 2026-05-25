export default function Topbar() {
  return (
    <header className="h-16 border-b border-white/10 bg-[#0F172A] flex items-center justify-between px-6">
      <div>
        <h2 className="text-white text-lg font-semibold">
          AI Command Center
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
      </div>
    </header>
  );
}