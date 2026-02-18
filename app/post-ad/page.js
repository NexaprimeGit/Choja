"use client";

import Image from "next/image";
import { Heart, Share2, MapPin, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

export default function PostAdPage() {
  const [selected, setSelected] = useState(null);
  const router = useRouter();

  const templates = [
    {
      id: 1,
      type: "Product",
      time: "20m ago",
      image: "/images/template1.webp",
      title: "Home tiffin service now available",
      description:
        "Pure veg meals, monthly plans open. Nutritious home-cooked food delivered at your doorstep.",
      location1: "Model Town, 0.8km",
      location2: "Ghar ka Tiffin",
      price: "₹5",
      bundle1: "₹40",
      bundle2: "₹110",
    },
    {
      id: 2,
      type: "Service",
      time: "15m ago",
      image: "/images/template2.webp",
      title: "New café opening this Sunday ☕",
      description:
        "Opening offer: Flat 20% off for first 3 days. Come experience the finest artisan coffee.",
      location1: "Model Town, 0.8km",
      location2: "Brew & Bites Café",
      price: "₹3",
      bundle1: "₹24",
      bundle2: "₹66",
    },
    {
      id: 3,
      type: "Text Ad",
      time: "5m ago",
      image: null,
      title: "Garba workshop this weekend",
      description:
        "Free entry for college students. Everyone welcome to learn traditional Garba moves.",
      location1: "Model Town, 0.8km",
      location2: "City Hall Club",
      price: "₹2",
      bundle1: "₹16",
      bundle2: "₹44",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-16">

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Choose Your Template
            </h1>
            <p className="text-gray-500 mt-4 text-lg">
              Select from high-performing templates designed for maximum engagement.
            </p>
          </div>

          {/* Templates */}
          <div className="grid md:grid-cols-3 gap-10 mt-16 items-stretch">
            {templates.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setSelected(item.id);
                  router.push("/post-ad/form");
                }}
                className={`group flex flex-col h-full bg-white/80 backdrop-blur-md rounded-3xl shadow-md border transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-2xl ${
                  selected === item.id
                    ? "border-blue-600 shadow-2xl"
                    : "border-gray-200"
                }`}
              >
                {/* Main Content */}
                <div className="p-6 flex-1 flex flex-col">

                  {/* Top Row */}
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-600">
                        {item.type}
                      </span>
                      <p className="text-xs text-gray-400 mt-2">{item.time}</p>
                    </div>

                    <div className="flex gap-3 text-gray-400 group-hover:text-blue-600 transition">
                      <Heart size={18} />
                      <Share2 size={18} />
                    </div>
                  </div>

                  {/* Image OR Text Ad */}
                  {item.image ? (
                    <div className="relative w-full h-52 mt-6 rounded-2xl overflow-hidden">
                      <Image
                        src={item.image}
                        alt="template"
                        fill
                        className="object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                  ) : (
                    <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 text-center">
                      <h3 className="text-xl font-semibold text-blue-700">
                        TEXT ONLY AD
                      </h3>
                      <p className="text-sm text-blue-600 mt-2">
                        Simple & budget-friendly promotion
                      </p>
                    </div>
                  )}

                  {/* Title + Price */}
                  <div className="flex justify-between items-start mt-6">
                    <h3 className="font-semibold text-gray-800 w-2/3">
                      {item.title}
                    </h3>
                    <div className="text-right">
                      <p className="font-bold text-gray-800 text-lg">
                        {item.price}
                      </p>
                      <span className="text-xs text-gray-400">
                        PER DAY
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-500 mt-4">
                    {item.description}
                  </p>

                  {/* Location */}
                  <div className="mt-4 text-sm text-gray-500 space-y-1">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {item.location1}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {item.location2}
                    </div>
                  </div>
{/* Buttons */}
<div className="flex gap-4 mt-6">
  <button
    onClick={(e) => {
      e.stopPropagation(); // Prevent card click
      router.push("/chats");
    }}
    className="flex-1 py-3 rounded-full bg-gray-100 hover:bg-blue-50 transition text-gray-700 flex items-center justify-center gap-2"
  >
    <MessageCircle size={16} />
    Chat
  </button>

  <button
    onClick={(e) => e.stopPropagation()} 
    className="flex-1 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition flex items-center justify-center gap-2"
  >
    <Phone size={16} />
    Call
  </button>
</div>


                  {/* Bundle Section */}
                  <div className="mt-6 bg-blue-50 rounded-2xl p-4">
                    <div className="flex justify-between text-xs text-blue-600 font-semibold">
                      <span>BUNDLE OFFERS</span>
                      <span className="bg-blue-100 px-2 py-1 rounded-full">
                        Best Value
                      </span>
                    </div>

                    <div className="flex justify-between mt-4">
                      <div className="bg-white rounded-xl px-4 py-3 text-center shadow-sm w-[48%]">
                        <p className="text-xs text-gray-400">10 Days</p>
                        <p className="font-bold text-blue-600 mt-1">
                          {item.bundle1}
                        </p>
                      </div>
                      <div className="bg-white rounded-xl px-4 py-3 text-center shadow-sm w-[48%]">
                        <p className="text-xs text-gray-400">30 Days</p>
                        <p className="font-bold text-blue-600 mt-1">
                          {item.bundle2}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Strip (Now Perfectly Aligned) */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 rounded-b-3xl flex justify-between items-center text-sm">
                  <span className="text-blue-600 font-semibold">
                    TEMPLATE #{item.id}
                  </span>
                  <span className="text-indigo-600 font-semibold group-hover:translate-x-2 transition">
                    Select →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { title: "SETUP", desc: "Instant Activation" },
              { title: "FORMATS", desc: "Optimized Ad Formats" },
              { title: "ENGAGEMENT", desc: "Real-time Direct Chats" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition"
              >
                <h4 className="font-semibold text-gray-800 text-lg">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
