"use client";

import { Phone, Users, Send, Link } from "lucide-react";
import Image from "next/image";

export default function ChatWindow() {
  return (
    <div className="flex-1 flex flex-col bg-[#F8F6F2]">

      {/* Header */}
      <div className="flex items-center justify-between p-6 bg-white border-b border-gray-200">
        <div className="flex items-center gap-4">
          <Image
            src="/images/user1.jpg"
            width={45}
            height={45}
            alt="Priya"
            className="rounded-full"
          />
          <h3 className="font-semibold text-lg text-gray-800">
            Priya Sharma
          </h3>
        </div>

        <div className="flex gap-6 text-gray-500">
          <Phone
            className="hover:text-[#157A4F] cursor-pointer transition"
            size={20}
          />
          <Users
            className="hover:text-[#157A4F] cursor-pointer transition"
            size={20}
          />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-8 space-y-6 overflow-y-auto">

        {/* Incoming */}
        <div className="bg-white border border-gray-200 text-gray-800 p-4 rounded-2xl w-fit max-w-sm shadow-sm">
          Hi, is the item still available?
          <div className="text-xs text-gray-400 mt-2">09:45 AM</div>
        </div>

        {/* Outgoing */}
        <div className="bg-[#157A4F] text-white p-4 rounded-2xl w-fit max-w-sm ml-auto shadow-md">
          Yes, it is!
          <div className="text-xs text-green-100 mt-2">09:47 AM</div>
        </div>

        <div className="bg-white border border-gray-200 text-gray-800 p-4 rounded-2xl w-fit max-w-sm shadow-sm">
          Great! Can we arrange pickup?
          <div className="text-xs text-gray-400 mt-2">10:00 AM</div>
        </div>

        <div className="bg-[#157A4F] text-white p-4 rounded-2xl w-fit max-w-sm ml-auto shadow-md">
          Absolutely. What time works?
          <div className="text-xs text-green-100 mt-2">10:05 AM</div>
        </div>
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-gray-200 flex items-center gap-4">

        <Link
          size={20}
          className="text-gray-400 cursor-pointer hover:text-[#F5B849] transition"
        />

        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 bg-[#F8F6F2] rounded-full px-6 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#157A4F]"
        />

        <button className="bg-[#F5B849] text-white p-3 rounded-full hover:bg-[#e0a837] transition shadow-sm">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
