"use client";

import { Flame, DollarSign, Building2 } from "lucide-react";

const pipeline = {
  "New Leads": [
    {
      name: "Rahul Sharma",
      company: "TechNova",
      budget: "₹15,000",
      score: "Hot",
    },
  ],

  Qualified: [
    {
      name: "Ananya Reddy",
      company: "EduCore",
      budget: "₹25,000",
      score: "Warm",
    },
  ],

  Interested: [
    {
      name: "Michael Johnson",
      company: "CloudSync",
      budget: "₹40,000",
      score: "Hot",
    },
  ],

  Scheduled: [
    {
      name: "Priya Verma",
      company: "StartX Labs",
      budget: "₹12,000",
      score: "Cold",
    },
  ],
};

export default function CRMPage() {
  return (
    <div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Smart CRM Pipeline
        </h1>

        <p className="text-gray-400 mt-2">
          AI-generated leads and automated sales tracking.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6">
          <p className="text-gray-400">
            Total Leads
          </p>

          <h2 className="text-4xl font-bold text-cyan-400 mt-3">
            128
          </h2>
        </div>

        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6">
          <p className="text-gray-400">
            Conversion Rate
          </p>

          <h2 className="text-4xl font-bold text-violet-400 mt-3">
            64%
          </h2>
        </div>

        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6">
          <p className="text-gray-400">
            Revenue Pipeline
          </p>

          <h2 className="text-4xl font-bold text-emerald-400 mt-3">
            ₹4.2L
          </h2>
        </div>
      </div>

      {/* Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {Object.entries(pipeline).map(([stage, leads]) => (
          <div
            key={stage}
            className="bg-[#0F172A] border border-white/10 rounded-2xl p-4"
          >

            <h2 className="text-white text-xl font-semibold mb-6">
              {stage}
            </h2>

            <div className="space-y-4">

              {leads.map((lead, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-violet-500/40 transition-all hover:scale-[1.02]"
                >

                  <div className="flex items-center justify-between">

                    <h3 className="text-white font-medium">
                      {lead.name}
                    </h3>

                    <div className="flex items-center gap-1 text-orange-400 text-sm">
                      <Flame size={16} />
                      {lead.score}
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">

                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Building2 size={16} />
                      {lead.company}
                    </div>

                    <div className="flex items-center gap-2 text-emerald-400 text-sm">
                      <DollarSign size={16} />
                      {lead.budget}
                    </div>
                  </div>

                  <div className="mt-4 bg-violet-500/10 border border-violet-500/20 rounded-lg p-3">
                    <p className="text-xs text-violet-300">
                      AI predicts high conversion probability.
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}