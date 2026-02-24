"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
];

export default function RecentListings() {
  return (
    <section className="w-full py-20">
      <div className="w-full mb-14 px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Recent Listings
        </h2>
        <p className="text-gray-500 mt-3 text-sm md:text-base max-w-2xl mx-auto">
          Discover the latest items posted near you
        </p>
      </div>

      <div className="w-full px-6 lg:px-8">
        <div className="grid grid-cols-12 auto-rows-[220px] gap-6">

          <MultiImageAd listing={listings[0]} className="col-span-12 lg:col-span-6 row-span-2" />
          <SingleImageAd listing={listings[1]} className="col-span-12 sm:col-span-6 lg:col-span-3 row-span-1" />
          <SingleImageAd listing={listings[2]} className="col-span-12 sm:col-span-6 lg:col-span-3 row-span-1" />
          <TextAd listing={listings[3]} className="col-span-12 sm:col-span-6 lg:col-span-3 row-span-1" />
          <SingleImageAd listing={listings[4]} className="col-span-12 sm:col-span-6 lg:col-span-3 row-span-1" />
          <TextAd listing={listings[5]} className="col-span-12 sm:col-span-6 lg:col-span-3 row-span-1" />
          <SingleImageAd listing={listings[6]} className="col-span-12 sm:col-span-6 lg:col-span-3 row-span-1" />
          <MultiImageAd listing={listings[7]} className="col-span-12 lg:col-span-6 row-span-2" />
          <TextAd listing={listings[0]} className="col-span-12 sm:col-span-6 lg:col-span-3 row-span-1" />
          <TextAd listing={listings[1]} className="col-span-12 sm:col-span-6 lg:col-span-3 row-span-1" />
          <SingleImageAd listing={listings[2]} className="col-span-12 sm:col-span-6 lg:col-span-3 row-span-1" />
          <TextAd listing={listings[3]} className="col-span-12 sm:col-span-6 lg:col-span-3 row-span-1" />
          <SingleImageAd listing={listings[4]} className="col-span-12 sm:col-span-6 lg:col-span-3 row-span-1" />
          <TextAd listing={listings[5]} className="col-span-12 sm:col-span-6 lg:col-span-3 row-span-1" />
        </div>
      </div>
    </section>
  );
}

function TextAd({ className, listing }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/${listing.id}`)}
      className={`bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition cursor-pointer flex flex-col justify-between ${className}`}
    >
      <div>
        <span className="text-xs uppercase tracking-wide text-gray-400">
          Sponsored
        </span>

        <h3 className="mt-3 font-semibold text-gray-900 leading-snug">
          {listing.title}
        </h3>

        <p className="mt-2 text-lg font-bold text-[var(--accent-500)]">
          {listing.price}
        </p>
      </div>

      <div className="flex gap-2 mt-4">
  <button
    onClick={(e) => {
      e.stopPropagation();
      router.push("/chats");
    }}
    className="flex-1 py-2 text-xs rounded-lg theme-button-accent"
  >
    Chat
  </button>

  <button
    onClick={(e) => e.stopPropagation()}
    className="flex-1 py-2 text-xs rounded-lg theme-button-primary"
  >
    Call
  </button>
</div>
    </div>
  );
}

function SingleImageAd({ className, listing }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/${listing.id}`)}
      className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition ${className}`}
    >
      <Image
        src={listing.img}
        alt="Ad"
        fill
        className="object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute bottom-0 p-4 text-white w-full">
        <h3 className="text-sm font-semibold">
          {listing.title}
        </h3>

        <p className="text-lg font-bold text-yellow-400 mt-1">
          {listing.price}
        </p>

        <div className="flex gap-2 mt-3">
  <button
    onClick={(e) => {
      e.stopPropagation();
      router.push("/chats");
    }}
    className="flex-1 py-2 text-xs rounded-lg theme-button-accent"
  >
    Chat
  </button>

  <button
    onClick={(e) => e.stopPropagation()}
    className="flex-1 py-2 text-xs rounded-lg theme-button-primary"
  >
    Call
  </button>
</div>
      </div>
    </div>
  );
}

function MultiImageAd({ className, listing }) {
  const router = useRouter();

  const images = [
    "/images/listing1.webp",
    "/images/listing2.webp",
    "/images/listing3.webp",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      onClick={() => router.push(`/product/${listing.id}`)}
      className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition ${className}`}
    >
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt="Ad"
          fill
          className={`object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute bottom-0 p-8 text-white w-full">
        <h2 className="text-2xl font-bold leading-snug">
          {listing.title}
        </h2>

        <p className="mt-2 text-sm opacity-90">
          {listing.description}
        </p>

        <p className="mt-4 text-2xl font-bold text-yellow-400">
          {listing.price}
        </p>

        <div className="flex gap-3 mt-4">
  <button
    onClick={(e) => {
      e.stopPropagation();
      router.push("/chats");
    }}
    className="px-4 py-2 text-sm rounded-xl theme-button-accent"
  >
    Chat
  </button>

  <button
    onClick={(e) => e.stopPropagation()}
    className="px-4 py-2 text-sm rounded-xl theme-button-primary"
  >
    Call
  </button>
</div>
      </div>

      <div className="absolute bottom-6 right-6 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}