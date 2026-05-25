"use client";
import { motion } from "framer-motion";
import { Bot, MessageSquare, Phone, Send } from "lucide-react";

const conversations = [
  {
    id: 1,
    name: "Rahul Sharma",
    platform: "WhatsApp",
    message: "Need pricing details for coworking spaces.",
  },
  {
    id: 2,
    name: "Ananya",
    platform: "Instagram",
    message: "Can I book a demo for tomorrow?",
  },
  {
    id: 3,
    name: "Michael",
    platform: "Call",
    message: "Interested in enterprise plan.",
  },
];

export default function InboxPage() {
  return (
    <div className="grid grid-cols-12 gap-6 h-[85vh]">

      {/* Conversations List */}
      <div className="col-span-3 bg-[#0F172A] border border-white/10 rounded-2xl p-4">
        
        <h2 className="text-white text-xl font-semibold mb-6">
          Conversations
        </h2>

        <div className="space-y-4">
          {conversations.map((chat) => (
            <div
              key={chat.id}
              className="p-4 rounded-xl bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-white/5"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white font-medium">
                  {chat.name}
                </h3>

                <span className="text-xs text-cyan-400">
                  {chat.platform}
                </span>
              </div>

              <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                {chat.message}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="col-span-6 bg-[#0F172A] border border-white/10 rounded-2xl flex flex-col">

        {/* Header */}
        <div className="border-b border-white/10 p-4 flex items-center justify-between">
          
          <div>
            <h2 className="text-white font-semibold">
              Rahul Sharma
            </h2>

            <p className="text-sm text-gray-400">
              Active now
            </p>
          </div>

          <div className="flex gap-3">
            <Phone className="text-gray-400" size={20} />
            <Send className="text-gray-400" size={20} />
            <MessageSquare className="text-gray-400" size={20} />
          </div>
        </div>

        {/* Messages */}
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    duration: 1,
    repeat: Infinity,
    repeatType: "reverse",
  }}
  className="flex justify-start"
>
  <div className="bg-white/5 border border-violet-500/20 text-violet-300 px-4 py-3 rounded-2xl max-w-md">
    
    <p className="text-sm">
      AI is analyzing customer intent...
    </p>

  </div>
</motion.div>
        <div className="flex-1 p-6 space-y-4 overflow-y-auto">

          <div className="flex justify-start">
            <div className="bg-white/10 text-white px-4 py-3 rounded-2xl max-w-md">
              Hi, I need pricing for coworking spaces.
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-violet-600 text-white px-4 py-3 rounded-2xl max-w-md">
              Sure! We offer flexible plans starting at ₹4999/month.
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-violet-600 text-white px-4 py-3 rounded-2xl max-w-md">
              Would you like me to schedule a visit tomorrow?
            </div>
          </div>

        </div>

        {/* Input */}
        <div className="border-t border-white/10 p-4">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full bg-black/30 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 transition-all"
          />
        </div>
      </div>

      {/* AI Activity Panel */}
      <div className="col-span-3 bg-[#0F172A] border border-white/10 rounded-2xl p-4">

        <div className="flex items-center gap-3 mb-6">
          <Bot className="text-violet-400" />

          <h2 className="text-white text-xl font-semibold">
            AI Activity
          </h2>
        </div>

        <div className="space-y-4">

          <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-violet-500/40 transition-all">
            <p className="text-sm text-violet-400">
              Sales AI
            </p>

            <p className="text-white mt-2 text-sm">
              Detected high-intent lead.
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-cyan-500/40 transition-all">
            <p className="text-sm text-cyan-400">
              Scheduler AI
            </p>

            <p className="text-white mt-2 text-sm">
              Suggested meeting slot for tomorrow.
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-emerald-500/40 transition-all">
            <p className="text-sm text-emerald-400">
              CRM AI
            </p>

            <p className="text-white mt-2 text-sm">
              Lead added to pipeline automatically.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}