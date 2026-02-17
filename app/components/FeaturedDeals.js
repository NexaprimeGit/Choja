"use client";

import Image from "next/image";
import { useState } from "react";

const deals = [
  { img: "del1.webp", title: "Smart Watch Pro", discount: "30% OFF" },
  { img: "deal2.jpg", title: "Luxury Spa Package", discount: "30% OFF" },
  { img: "deal3.jpg", title: "Fashion Apparel Sale", discount: "25% OFF" },
  { img: "deal4.jpg", title: "Weekend Getaway", discount: "40% OFF" },
];

export default function FeaturedDeals() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Featured Deals
          </h2>

          <button className="text-orange-500 font-medium text-sm hover:text-orange-600 transition">
            View More →
          </button>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {deals.map((deal, i) => {
            const isActive = activeIndex === i;

            return (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300
                ${
                  isActive
                    ? "border-orange-500 shadow-xl bg-orange-50"
                    : "border-gray-200 bg-white hover:shadow-xl hover:-translate-y-2 hover:border-orange-400"
                }`}
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <Image
                    src={`/images/${deal.img}`}
                    width={400}
                    height={250}
                    alt={deal.title}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {deal.title}
                  </h3>

                  <p className="text-orange-500 text-sm font-medium mt-1">
                    {deal.discount}
                  </p>

                  <button
                    className={`mt-5 w-full py-2.5 rounded-full font-medium transition-all duration-300
                    ${
                      isActive
                        ? "bg-orange-600 text-white"
                        : "bg-orange-500 text-white hover:bg-orange-600 active:scale-95"
                    }`}
                  >
                    View Deal
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
