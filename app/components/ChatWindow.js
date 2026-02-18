"use client";

import { Phone, Users, Send, Link } from "lucide-react";
import Image from "next/image";

export default function ChatWindow() {
  return (
    <div className="flex-1 flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b bg-white">
        <div className="flex items-center gap-4">
          <Image
            src="/images/user1.jpg"
            width={45}
            height={45}
            alt="Priya"
            className="rounded-full"
          />
          <h3 className="font-semibold text-lg">Priya Sharma</h3>
        </div>

        <div className="flex gap-4 text-gray-500">
          <Phone className="cursor-pointer hover:text-blue-600" size={20} />
          <Users className="cursor-pointer hover:text-blue-600" size={20} />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-8 space-y-6 overflow-y-auto bg-gray-50">

        {/* Incoming */}
        <div className="bg-gray-200 text-gray-800 p-4 rounded-xl w-fit max-w-sm">
          Hi, is the item still available?
          <div className="text-xs text-gray-500 mt-2">09:45 AM</div>
        </div>

        {/* Outgoing */}
        <div className="bg-blue-400 text-white p-4 rounded-xl w-fit max-w-sm ml-auto">
          Yes, it is!
          <div className="text-xs text-blue-100 mt-2">09:47 AM</div>
        </div>

        <div className="bg-gray-200 text-gray-800 p-4 rounded-xl w-fit max-w-sm">
          Great! Can we arrange a pickup?
          <div className="text-xs text-gray-500 mt-2">10:00 AM</div>
        </div>

        <div className="bg-blue-400 text-white p-4 rounded-xl w-fit max-w-sm ml-auto">
          Absolutely. What time works for you tomorrow?
          <div className="text-xs text-blue-100 mt-2">10:05 AM</div>
        </div>

        <div className="bg-gray-200 text-gray-800 p-4 rounded-xl w-fit max-w-sm">
          How about 10 AM?
          <div className="text-xs text-gray-500 mt-2">10:10 AM</div>
        </div>

        <div className="bg-blue-400 text-white p-4 rounded-xl w-fit max-w-sm ml-auto">
          10 AM works perfectly for me. See you then!
          <div className="text-xs text-blue-100 mt-2">10:15 AM</div>
        </div>

      </div>

      {/* Message Input */}
      <div className="p-4 border-t bg-white flex items-center gap-4">
        <Link size={20} className="text-gray-400 cursor-pointer" />

        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 bg-gray-100 rounded-full px-6 py-3 focus:outline-none"
        />

        <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
