"use client";

import { motion } from "framer-motion";

const agents = [
  {
    name: "Sales AI",
    description:
      "Autonomously converts leads and handles pricing conversations.",
    status: "Active",
    performance: "94%",
    color: "from-violet-500 to-fuchsia-500",
  },

  {
    name: "Support AI",
    description:
      "Handles customer support tickets and resolves issues instantly.",
    status: "Running",
    performance: "91%",
    color: "from-cyan-500 to-blue-500",
  },

  {
    name: "Scheduler AI",
    description:
      "Automatically schedules meetings and follow-ups with leads.",
    status: "Optimizing",
    performance: "89%",
    color: "from-emerald-500 to-green-500",
  },

  {
    name: "CRM AI",
    description:
      "Analyzes customer sentiment and prioritizes business opportunities.",
    status: "Analyzing",
    performance: "96%",
    color: "from-orange-500 to-red-500",
  },

  {
    name: "Analytics AI",
    description:
      "Tracks performance metrics and generates intelligent insights.",
    status: "Monitoring",
    performance: "93%",
    color: "from-pink-500 to-rose-500",
  },
];

export default function AgentsPage() {

  return (

    <div>

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-white">
          Autonomous AI Agents
        </h1>

        <p className="text-gray-400 mt-2">
          Multi-agent AI orchestration system powering Svachalit.
        </p>

      </div>

      {/* Agent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {agents.map((agent, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#0F172A] border border-white/10 rounded-2xl p-6"
          >

            {/* Top */}
            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-2xl font-bold text-white">
                  {agent.name}
                </h2>

                <p className="text-gray-400 mt-2 text-sm">
                  {agent.description}
                </p>

              </div>

              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${agent.color}`}
              />

            </div>

            {/* Stats */}
            <div className="mt-8 space-y-4">

              <div className="flex justify-between">

                <span className="text-gray-400">
                  Status
                </span>

                <span className="text-emerald-400 font-medium">
                  {agent.status}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-400">
                  Performance
                </span>

                <span className="text-cyan-400 font-medium">
                  {agent.performance}
                </span>

              </div>

            </div>

            {/* AI Activity */}
            <div className="mt-6">

              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: agent.performance }}
                  transition={{ duration: 1.5 }}
                  className={`h-full bg-gradient-to-r ${agent.color}`}
                />

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}