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
    message: "Got it. Will check the",
    time: "Yesterday",
    unread: 0,
    img: "/images/user2.jpg",
  },
  {
    name: "Mrs. Patel",
    message: "The tiffin service is",
    time: "2 days ago",
    unread: 0,
    img: "/images/user3.jpg",
  },
  {
    name: "Rahul Joshi",
    message: "I'm interested in rent",
    time: "3 days ago",
    unread: 1,
    img: "/images/user4.jpg",
  },
  {
    name: "Anjali Verma",
    message: "Let's catch up tomorrow",
    time: "4 days ago",
    unread: 0,
    img: "/images/user5.jpg",
  },
];

export default function ChatSidebar() {
  return (
    <div className="w-1/3 border-r bg-gray-50 p-6 overflow-y-auto">

      <h2 className="text-xl font-semibold mb-6">Chats</h2>

      <div className="space-y-3">
        {chats.map((chat, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition
            ${chat.active ? "bg-blue-100" : "hover:bg-gray-100"}`}
          >
            <div className="flex items-center gap-4">
              <Image
                src={chat.img}
                width={45}
                height={45}
                alt={chat.name}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-800">{chat.name}</p>
                <p className="text-sm text-gray-500 truncate w-40">
                  {chat.message}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-400">{chat.time}</p>
              {chat.unread > 0 && (
                <div className="bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full mt-2 ml-auto">
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
