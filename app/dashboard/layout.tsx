import Sidebar from "@/components/layout/sidebar";
import Topbar from "@/components/layout/topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <div className="flex min-h-screen bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#111827] overflow-hidden">

      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">

        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-violet-500/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      </div>

      {/* Sidebar */}
      <div className="relative z-10">
        <Sidebar />
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col relative z-10">

        {/* Topbar */}
        <div className="backdrop-blur-xl bg-white/[0.02] border-b border-white/10">

          <Topbar />

        </div>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">

          <div className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-6 shadow-2xl">

            {children}

          </div>

        </main>

      </div>

    </div>
  );
}