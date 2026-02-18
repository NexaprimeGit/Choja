"use client";

import Image from "next/image";

const deals = [
  {
    title: "50% Off Pizza",
    img: "deal1.jpg",
    discount: "Flat 50% OFF",
  },
  {
    title: "Luxury Spa Package",
    img: "deal2.jpg",
    discount: "Save $30 Today",
  },
  {
    title: "Gym Membership",
    img: "deal3.jpg",
    discount: "Only $25/month",
  },
  {
    title: "Weekend Getaway",
    img: "deal4.jpg",
    discount: "Up to 40% OFF",
  },
];

export default function Recommended() {
  return (
    <section className="py-16 theme-section">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-semibold theme-heading">
            Recommended Deals
          </h2>

          <button className="theme-button-primary px-4 py-2 rounded-full text-sm transition">
            View More →
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {deals.map((deal, i) => (
            <div
              key={i}
              className="group rounded-xl shadow-md p-4 transition-all duration-300 theme-card hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={`/images/${deal.img}`}
                  width={300}
                  height={200}
                  alt={deal.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <h3 className="mt-4 font-semibold theme-heading">
                {deal.title}
              </h3>

              <p
                className="text-sm mt-1"
                style={{ color: "var(--color-text-muted)" }}
              >
                Discover amazing deals near you.
              </p>

              <p
                className="text-sm font-medium mt-2"
                style={{ color: "var(--color-accent)" }}
              >
                {deal.discount}
              </p>

              <button className="mt-4 px-4 py-2 rounded-full w-full theme-button-primary transition">
                View Deal
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
