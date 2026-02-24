"use client";

import Image from "next/image";

const chats = [
  {
    name: "Priya Sharma",
    message: "Sure, I can meet you",
    time: "10:30 AM",
    unread: 2,
    img: "/images/user1.jpg",
    active: true,
  },
  {
    name: "Amit Singh",
    message: "Got it. Will check the details.",
    time: "Yesterday",
    unread: 0,
    img: "/images/user2.jpg",
  },
];

export default function ChatSidebar() {
  return (
    <div className="flex flex-col h-full">

      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">
          Messages
        </h2>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">

        {chats.map((chat, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-300
            ${
              chat.active
                ? "bg-[#FFF3D6] border border-[#F5B849]"
                : "hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <Image
                src={chat.img}
                width={45}
                height={45}
                alt={chat.name}
                className="rounded-full object-cover"
              />

              <div>
                <p className="font-semibold text-gray-800">
                  {chat.name}
                </p>
                <p className="text-sm text-gray-500 truncate w-[160px]">
                  {chat.message}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-400">{chat.time}</p>

              {chat.unread > 0 && (
                <div className="bg-[#157A4F] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full mt-2 ml-auto">
                  {chat.unread}
                </div>
              )}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}