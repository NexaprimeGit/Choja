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
    <section className="py-20 theme-section">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold theme-heading">
            Trending Searches Near You
          </h2>

          <button className="theme-button-primary px-4 py-2 rounded-full text-sm">
            View More →
          </button>
        </div>

        <div className="flex flex-wrap gap-5">
          {tags.map((tag, i) => {
            const isActive = activeIndex === i;

            return (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  setSearchQuery(tag);
                }}
                className={`px-6 py-3 rounded-full text-sm font-medium border transition-all duration-300 ${
                  isActive ? "theme-button-primary" : "theme-card"
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
