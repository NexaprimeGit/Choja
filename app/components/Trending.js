"use client";

import { useState } from "react";

export default function Trending({ setSearchQuery }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const tags = [
    "Vegan Restaurants",
    "Book Shops",
    "Coffee Shops",
    "Shopping Malls",
    "Historical Places",
    "Live Music Venues",
    "Art Galleries",
    "Pet-Friendly Cafes",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Trending Searches Near You
          </h2>

          <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition">
            View More →
          </button>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-5">
          {tags.map((tag, i) => {
            const isActive = activeIndex === i;

            return (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  setSearchQuery(tag); // 🔥 Updates Navbar input
                }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border
                ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-400 hover:shadow-md"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
