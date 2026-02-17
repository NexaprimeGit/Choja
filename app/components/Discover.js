"use client";

import { useState } from "react";
import { Utensils, Briefcase, ShoppingBag, Tag, Home, Wrench } from "lucide-react";

const items = [
  { name: "Restaurants", icon: Utensils },
  { name: "Jobs", icon: Briefcase },
  { name: "Shopping", icon: ShoppingBag },
  { name: "Deals", icon: Tag },
  { name: "Real Estate", icon: Home },
  { name: "Services", icon: Wrench },
  { name: "Restaurants", icon: Utensils },
  { name: "Jobs", icon: Briefcase },
  { name: "Shopping", icon: ShoppingBag },
  { name: "Deals", icon: Tag },
  { name: "Real Estate", icon: Home },
  { name: "Services", icon: Wrench },
];

export default function Discover() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-3xl font-bold text-gray-800">
            Discover What's Nearby
          </h2>

          <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition">
            View More →
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            const isActive = activeIndex === i;

            return (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`cursor-pointer rounded-2xl p-8 text-center border transition-all duration-300
                ${
                  isActive
                    ? "border-blue-500 shadow-lg bg-blue-50"
                    : "border-gray-200 bg-white hover:border-blue-400 hover:shadow-lg hover:-translate-y-2"
                }`}
              >
                <div
                  className={`w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full transition-all duration-300
                  ${
                    isActive
                      ? "bg-blue-100 text-blue-600"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="font-medium text-sm">{item.name}</h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
