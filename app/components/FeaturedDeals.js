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
    <section className="py-20 theme-section">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold theme-heading">
            Featured Deals
          </h2>

          <button className="theme-button-primary px-4 py-2 rounded-full text-sm">
            View More →
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {deals.map((deal, i) => {
            const isActive = activeIndex === i;

            return (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ${
                  isActive ? "theme-card-active" : "theme-card"
                }`}
              >
                <div className="overflow-hidden">
                  <Image
                    src={`/images/${deal.img}`}
                    width={400}
                    height={250}
                    alt={deal.title}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-lg theme-heading">
                    {deal.title}
                  </h3>

                  <p
                    className="text-sm font-medium mt-1"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {deal.discount}
                  </p>

                  <button className="mt-5 w-full py-2.5 rounded-full theme-button-accent">
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
