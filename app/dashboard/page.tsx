import { leads } from "@/lib/store";

export default function DashboardPage() {

  const hotLeads = leads.filter(
    (lead) => lead.score >= 80
  );

  const warmLeads = leads.filter(
    (lead) => lead.score >= 50 && lead.score < 80
  );

  const coldLeads = leads.filter(
    (lead) => lead.score < 50
  );

  return (

    <div>

      <h1 className="text-3xl font-bold text-white">
        Welcome to Svachalit
      </h1>

      <p className="text-gray-400 mt-2">
        Your autonomous AI operating system.
      </p>

      {/* TOP STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6">

          <h2 className="text-white text-lg font-semibold">
            Total Leads
          </h2>

          <p className="text-4xl font-bold text-cyan-400 mt-4">
            {leads.length}
          </p>

        </div>

        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6">

          <h2 className="text-white text-lg font-semibold">
            Hot Leads
          </h2>

          <p className="text-4xl font-bold text-violet-400 mt-4">
            {hotLeads.length}
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

      {/* CRM PIPELINE */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        {/* HOT LEADS */}
        <div className="bg-[#0F172A] border border-red-500/20 rounded-2xl p-6">

          <h2 className="text-xl font-bold text-red-400 mb-6">
            🔥 Hot Leads
          </h2>

          <div className="space-y-4">

            {hotLeads.map((lead, index) => (

              <div
                key={index}
                className="bg-[#1E293B] rounded-xl p-4 border border-white/10"
              >

                <h3 className="text-white font-semibold">
                  {lead.name}
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  {lead.company}
                </p>

                <div className="flex justify-between mt-4 text-sm">

                  <span className="text-cyan-400">
                    Score: {lead.score}
                  </span>

                  <span className="text-orange-400">
                    {lead.urgency}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* WARM LEADS */}
        <div className="bg-[#0F172A] border border-yellow-500/20 rounded-2xl p-6">

          <h2 className="text-xl font-bold text-yellow-400 mb-6">
            ⚡ Warm Leads
          </h2>

          <div className="space-y-4">

            {warmLeads.map((lead, index) => (

              <div
                key={index}
                className="bg-[#1E293B] rounded-xl p-4 border border-white/10"
              >

                <h3 className="text-white font-semibold">
                  {lead.name}
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  {lead.company}
                </p>

                <div className="flex justify-between mt-4 text-sm">

                  <span className="text-cyan-400">
                    Score: {lead.score}
                  </span>

                  <span className="text-orange-400">
                    {lead.urgency}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* COLD LEADS */}
        <div className="bg-[#0F172A] border border-blue-500/20 rounded-2xl p-6">

          <h2 className="text-xl font-bold text-blue-400 mb-6">
            ❄️ Cold Leads
          </h2>

          <div className="space-y-4">

            {coldLeads.map((lead, index) => (

              <div
                key={index}
                className="bg-[#1E293B] rounded-xl p-4 border border-white/10"
              >

                <h3 className="text-white font-semibold">
                  {lead.name}
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  {lead.company}
                </p>

                <div className="flex justify-between mt-4 text-sm">

                  <span className="text-cyan-400">
                    Score: {lead.score}
                  </span>

                  <span className="text-orange-400">
                    {lead.urgency}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
      {/* LIVE AI ACTIVITY */}
<div className="mt-10 bg-[#0F172A] border border-violet-500/20 rounded-2xl p-6">

  <div className="flex items-center justify-between mb-6">

    <h2 className="text-2xl font-bold text-white">
      Live AI Activity
    </h2>

    <div className="flex items-center gap-2">

      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />

      <span className="text-emerald-400 text-sm">
        Autonomous System Active
      </span>

    </div>

  </div>

  <div className="space-y-4">

    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-center">

      <div>
        <p className="text-white">
          🔥 Sales AI qualified a high-intent enterprise lead
        </p>

        <p className="text-gray-400 text-sm mt-1">
          Lead score exceeded 92%
        </p>
      </div>

      <span className="text-cyan-400 text-sm">
        2s ago
      </span>

    </div>

    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-center">

      <div>
        <p className="text-white">
          ⚡ CRM AI automatically updated sales pipeline
        </p>

        <p className="text-gray-400 text-sm mt-1">
          Lead categorized into HOT pipeline
        </p>
      </div>

      <span className="text-violet-400 text-sm">
        8s ago
      </span>

    </div>

    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-center">

      <div>
        <p className="text-white">
          📅 Scheduler AI optimized follow-up workflow
        </p>

        <p className="text-gray-400 text-sm mt-1">
          Meeting slot intelligently allocated
        </p>
      </div>

      <span className="text-emerald-400 text-sm">
        14s ago
      </span>

    </div>

    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-center">

      <div>
        <p className="text-white">
          📊 Analytics AI generated business intelligence insights
        </p>

        <p className="text-gray-400 text-sm mt-1">
          Conversion prediction accuracy improved
        </p>
      </div>

      <span className="text-orange-400 text-sm">
        20s ago
      </span>

    </div>

  </div>

</div>

    </div>
  );
}