"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const listings = [
  {
    id: 1,
    title: "PureView Pro RO + UV Water Purifier - High Capacity (15L)",
    description: "Advanced purification with UV + RO.",
    price: "₹2,499",
    img: "/images/listing1.webp",
    tag: "Appliances",
  },
  {
    id: 2,
    title: "Smart LED TV - 32 Inch",
    description: "HD display with smart apps.",
    price: "₹5,400",
    img: "/images/listing2.webp",
    tag: "Appliances",
  },
  {
    id: 3,
    title: "Air Purifier HEPA Filter",
    description: "Removes 99.9% dust & allergens.",
    price: "₹3,200",
    img: "/images/listing3.webp",
    tag: "Appliances",
  },
  {
    id: 4,
    title: "iPhone 14 Pro Max - Excellent Condition",
    description: "128GB, Space Black, barely used with box.",
    price: "$899",
    img: "/images/listing1.webp",
    tag: "Mobiles",
  },
  {
    id: 5,
    title: "2BHK Apartment for Rent in Downtown",
    description: "Semi-furnished, prime location, parking available.",
    price: "$1,200 / month",
    img: "/images/listing2.webp",
    tag: "Property",
  },
  {
    id: 6,
    title: "Honda City 2022 - Low Mileage",
    description: "Petrol, automatic transmission, single owner.",
    price: "$15,500",
    img: "/images/listing3.webp",
    tag: "Vehicle",
  },
  {
    id: 7,
    title: "iPhone 14 Pro Max - Excellent Condition",
    description: "128GB, Space Black, barely used with box.",
    price: "$899",
    img: "/images/listing1.webp",
    tag: "Mobiles",
  },
  {
    id: 8,
    title: "2BHK Apartment for Rent in Downtown",
    description: "Semi-furnished, prime location, parking available.",
    price: "$1,200 / month",
    img: "/images/listing2.webp",
    tag: "Property",
  },
  {
    id: 9,
    title: "Honda City 2022 - Low Mileage",
    description: "Petrol, automatic transmission, single owner.",
    price: "$15,500",
    img: "/images/listing3.webp",
    tag: "Vehicle",
  },
];

export default function RecentListings() {
  const router = useRouter();

  return (
    <section className="py-10 theme-section">
      <h2 className="text-2xl font-bold text-center mb-10 theme-heading">
        Recent Listings
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20">
        {listings.map((item) => (
          <div
            key={item.id}
            onClick={() => router.push(`/product/${item.id}`)}
            className="rounded-2xl overflow-hidden shadow-sm transition duration-300 cursor-pointer group theme-card hover:shadow-lg hover:-translate-y-2"
          >
            <div className="relative h-56 w-full">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded uppercase tracking-wider bg-blue-600 text-white">
                {item.tag}
              </span>
            </div>

            <div className="p-5">
              <h3 className="font-bold text-lg leading-snug h-14 theme-heading">
                {item.title}
              </h3>

              <p className="text-sm mb-2 text-gray-500">
                {item.description}
              </p>

              <p className="font-extrabold text-xl mt-1 text-blue-600">
                {item.price}
              </p>

              <button className="w-full mt-4 py-3 rounded-xl font-bold theme-button-primary">
                Chat
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}