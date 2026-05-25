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
    <div className="flex flex-col h-[85vh]">

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

              AI is thinking...

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
  );
}