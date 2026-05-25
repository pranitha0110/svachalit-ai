"use client";

import {
  BrainCircuit,
  Activity,
  Clock3,
  Sparkles,
} from "lucide-react";

const agents = [
  {
    name: "Sales AI",
    description:
      "Qualifies leads and handles customer sales conversations.",
    status: "Active",
    tasks: "128 conversations",
    intelligence: "94%",
    color: "violet",
  },

  {
    name: "Support AI",
    description:
      "Resolves customer queries using AI knowledge base.",
    status: "Running",
    tasks: "342 tickets resolved",
    intelligence: "91%",
    color: "cyan",
  },

  {
    name: "Scheduler AI",
    description:
      "Books appointments and manages calendar workflows.",
    status: "Optimizing",
    tasks: "48 meetings scheduled",
    intelligence: "96%",
    color: "emerald",
  },

  {
    name: "Analytics AI",
    description:
      "Tracks business metrics and predicts conversion trends.",
    status: "Analyzing",
    tasks: "24 reports generated",
    intelligence: "89%",
    color: "orange",
  },
];

export default function AgentsPage() {
  return (
    <div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          AI Workforce
        </h1>

        <p className="text-gray-400 mt-2">
          Autonomous AI employees managing business operations.
        </p>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <BrainCircuit className="text-violet-400" />

            <p className="text-gray-400">
              Active AI Agents
            </p>
          </div>

          <h2 className="text-4xl font-bold text-white mt-4">
            4
          </h2>
        </div>

        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <Activity className="text-cyan-400" />

            <p className="text-gray-400">
              Autonomous Tasks
            </p>
          </div>

          <h2 className="text-4xl font-bold text-white mt-4">
            1,248
          </h2>
        </div>

        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <Sparkles className="text-emerald-400" />

            <p className="text-gray-400">
              AI Efficiency
            </p>
          </div>

          <h2 className="text-4xl font-bold text-white mt-4">
            93%
          </h2>
        </div>

      </div>

      {/* AI Agent Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {agents.map((agent, index) => (
          <div
            key={index}
            className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 hover:border-violet-500/40 transition-all hover:scale-[1.01]"
          >

            <div className="flex items-start justify-between">

              <div>
                <h2 className="text-2xl font-semibold text-white">
                  {agent.name}
                </h2>

                <p className="text-gray-400 mt-2 max-w-md">
                  {agent.description}
                </p>
              </div>

              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-gray-400 text-sm">
                  Status
                </p>

                <p className="text-white font-medium mt-2">
                  {agent.status}
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-gray-400 text-sm">
                  Intelligence
                </p>

                <p className="text-violet-400 font-medium mt-2">
                  {agent.intelligence}
                </p>
              </div>

            </div>

            {/* Tasks */}
            <div className="mt-6 bg-violet-500/10 border border-violet-500/20 rounded-xl p-4">

              <div className="flex items-center gap-2 text-violet-300">
                <Clock3 size={16} />

                <p className="text-sm">
                  {agent.tasks}
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}