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
    <div className="w-1/3 bg-white border-r border-gray-200 p-6 overflow-y-auto">

      <h2 className="text-2xl font-bold mb-8 text-gray-800">
        Messages
      </h2>

      <div className="space-y-4">
        {chats.map((chat, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all duration-300 border
            ${
              chat.active
                ? "bg-[#FFF3D6] border-[#F5B849] shadow-sm"
                : "border-transparent hover:bg-[#F8F6F2]"
            }`}
          >
            <div className="flex items-center gap-4">
              <Image
                src={chat.img}
                width={48}
                height={48}
                alt={chat.name}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">
                  {chat.name}
                </p>
                <p className="text-sm text-gray-500 truncate w-40">
                  {chat.message}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-400">{chat.time}</p>
              {chat.unread > 0 && (
                <div className="bg-[#157A4F] text-white text-xs w-6 h-6 flex items-center justify-center rounded-full mt-2 ml-auto">
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
