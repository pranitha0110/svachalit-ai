"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

const responseData = [
  { day: "Mon", responses: 120 },
  { day: "Tue", responses: 210 },
  { day: "Wed", responses: 180 },
  { day: "Thu", responses: 320 },
  { day: "Fri", responses: 410 },
  { day: "Sat", responses: 290 },
];

const leadData = [
  { name: "Hot", leads: 48 },
  { name: "Warm", leads: 30 },
  { name: "Cold", leads: 12 },
];

export default function AnalyticsPage() {
  return (
    <div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          AI Analytics
        </h1>

        <p className="text-gray-400 mt-2">
          Real-time autonomous workflow intelligence.
        </p>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6">
          <p className="text-gray-400">
            AI Conversations
          </p>

          <h2 className="text-4xl font-bold text-cyan-400 mt-4">
            12.4K
          </h2>
        </div>

        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6">
          <p className="text-gray-400">
            Leads Generated
          </p>

          <h2 className="text-4xl font-bold text-violet-400 mt-4">
            842
          </h2>
        </div>

        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6">
          <p className="text-gray-400">
            AI Resolution Rate
          </p>

          <h2 className="text-4xl font-bold text-emerald-400 mt-4">
            94%
          </h2>
        </div>

        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6">
          <p className="text-gray-400">
            Revenue Generated
          </p>

          <h2 className="text-4xl font-bold text-orange-400 mt-4">
            ₹12.8L
          </h2>
        </div>

      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Response Analytics */}
        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6">

          <h2 className="text-white text-xl font-semibold mb-6">
            AI Response Activity
          </h2>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={responseData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />

                <XAxis dataKey="day" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="responses"
                  stroke="#8B5CF6"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* Lead Quality */}
        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6">

          <h2 className="text-white text-xl font-semibold mb-6">
            Lead Quality Analysis
          </h2>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={leadData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />

                <XAxis dataKey="name" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />

                <Tooltip />

                <Bar
                  dataKey="leads"
                  fill="#06B6D4"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

      </div>

      {/* AI Insights */}
      <div className="mt-10 bg-[#0F172A] border border-violet-500/20 rounded-2xl p-6">

        <h2 className="text-white text-xl font-semibold mb-4">
          Autonomous AI Insights
        </h2>

        <div className="space-y-4">

          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-violet-300">
              Sales AI detected 34% increase in high-intent leads this week.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-cyan-300">
              Support AI reduced average response time by 42%.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-emerald-300">
              Scheduler AI optimized meeting allocation efficiency by 28%.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}