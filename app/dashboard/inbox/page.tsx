"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Message = {
  role: "user" | "ai";
  content: string;
};

export default function InboxPage() {

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "user",
      content: "Hi, I need pricing for coworking spaces.",
    },

    {
      role: "ai",
      content:
        "Sure! We offer flexible plans starting at ₹4999/month.",
    },
  ]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  // NEW AI ANALYSIS STATE
  const [aiAnalysis, setAiAnalysis] = useState<any>(null);

  async function sendMessage() {

    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    setLoading(true);

    try {

      // CHAT API
      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: input,
        }),
      });

      const data = await response.json();

      // ANALYZE API
      const analysisResponse = await fetch("/api/analyze", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: input,
        }),
      });

      const analysisData = await analysisResponse.json();

      setAiAnalysis(analysisData.analysis);

      const aiMessage: Message = {
        role: "ai",
        content: data.reply,
      };

      setMessages((prev) => [...prev, aiMessage]);

    } catch (error) {

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: "Something went wrong.",
        },
      ]);

    } finally {

      setLoading(false);
    }
  }

  return (

    <div className="grid grid-cols-12 gap-6 h-[85vh]">

      {/* LEFT CHAT SECTION */}
      <div className="col-span-8 flex flex-col">

        {/* Header */}
        <div className="mb-6">

          <h1 className="text-3xl font-bold text-white">
            AI Inbox
          </h1>

          <p className="text-gray-400 mt-2">
            Multi-channel autonomous AI conversations.
          </p>

        </div>

        {/* Chat Area */}
        <div className="flex-1 bg-[#0F172A] border border-white/10 rounded-2xl p-6 overflow-y-auto space-y-4">

          {messages.map((message, index) => (

            <div
              key={index}
              className={`flex ${
                message.role === "user"
                  ? "justify-start"
                  : "justify-end"
              }`}
            >

              <div
                className={`max-w-xl px-4 py-3 rounded-2xl ${
                  message.role === "user"
                    ? "bg-white/10 text-white"
                    : "bg-violet-600 text-white"
                }`}
              >

                {message.content}

              </div>

            </div>
          ))}

          {/* AI Thinking */}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="flex justify-end"
            >

              <div className="bg-violet-500/20 border border-violet-500/20 text-violet-300 px-4 py-3 rounded-2xl">

                Svachalit AI is analyzing customer...

              </div>

            </motion.div>
          )}

        </div>

        {/* Input */}
        <div className="mt-6 flex gap-4">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
          />

          <button
            onClick={sendMessage}
            className="bg-violet-600 hover:bg-violet-700 transition-all px-6 rounded-xl text-white font-medium"
          >

            Send

          </button>

        </div>

      </div>

      {/* RIGHT AI INSIGHTS PANEL */}
      <div className="col-span-4">

        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 h-full">

          <h2 className="text-2xl font-bold text-white mb-6">
            AI Lead Intelligence
          </h2>

          <div className="space-y-4">

            <div className="bg-[#1E293B] rounded-2xl p-4 border border-white/10">

              <p className="text-sm text-gray-400">
                Lead Score
              </p>

              <h2 className="text-3xl font-bold text-cyan-400 mt-2">
                {aiAnalysis?.leadScore || "--"}%
              </h2>

            </div>

            <div className="bg-[#1E293B] rounded-2xl p-4 border border-white/10">

              <p className="text-sm text-gray-400">
                Intent
              </p>

              <h2 className="text-xl font-bold text-violet-400 mt-2">
                {aiAnalysis?.intent || "--"}
              </h2>

            </div>

            <div className="bg-[#1E293B] rounded-2xl p-4 border border-white/10">

              <p className="text-sm text-gray-400">
                Urgency
              </p>

              <h2 className="text-xl font-bold text-orange-400 mt-2">
                {aiAnalysis?.urgency || "--"}
              </h2>

            </div>

            <div className="bg-[#1E293B] rounded-2xl p-4 border border-white/10">

              <p className="text-sm text-gray-400">
                Sentiment
              </p>

              <h2 className="text-xl font-bold text-pink-400 mt-2">
                {aiAnalysis?.sentiment || "--"}
              </h2>

            </div>

            <div className="bg-[#1E293B] rounded-2xl p-4 border border-white/10">

              <p className="text-sm text-gray-400">
                Estimated Budget
              </p>

              <h2 className="text-xl font-bold text-emerald-400 mt-2">
                {aiAnalysis?.estimatedBudget || "--"}
              </h2>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}