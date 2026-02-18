"use client";

import Image from "next/image";
import {
  Heart,
  Share2,
  MapPin,
  Star,
  Phone,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export default function ProductDetails() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-6">
          Home &nbsp;›&nbsp; Electronics &nbsp;›&nbsp; Home Appliances &nbsp;›&nbsp;
          <span className="text-gray-800 font-medium">
            PureView RO Water Purifier
          </span>
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {/* ================= LEFT SECTION ================= */}
          <div className="md:col-span-2">

            {/* Image + Thumbnails */}
            <div className="flex gap-6">

              {/* Main Image */}
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm relative">
                <Image
                  src="/images/listing1.webp"
                  width={900}
                  height={600}
                  alt="Product"
                  className="rounded-xl w-full object-cover"
                />
                <div className="absolute bottom-8 right-10 bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
                  1 / 4 Photos
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex flex-col gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="w-20 h-20 rounded-xl overflow-hidden border-2 border-gray-200 hover:border-blue-600 cursor-pointer"
                  >
                    <Image
                      src="/images/listing1.webp"
                      width={100}
                      height={100}
                      alt="thumb"
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex gap-3 mt-8">
              <span className="text-xs font-semibold bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                Featured Ad
              </span>
              <span className="text-xs font-semibold bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                Kitchenware
              </span>
            </div>

            {/* Title */}
            <div className="flex justify-between items-start mt-4">
              <h1 className="text-2xl font-bold text-gray-800 w-4/5">
                PureView Pro RO + UV Water Purifier - High Capacity (15L)
              </h1>

              <div className="flex gap-3 text-gray-400">
                <Heart size={20} className="cursor-pointer" />
                <Share2 size={20} className="cursor-pointer" />
              </div>
            </div>

            {/* Info Row */}
            <div className="flex items-center gap-6 text-sm text-gray-500 mt-3">
              <span>Posted 2 hours ago</span>
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                Model Town, Sector 4
              </span>
              <span className="flex items-center gap-1">
                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                4.2 (128 Reviews)
              </span>
            </div>

            {/* Description Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm mt-8">
              <h2 className="font-semibold text-lg mb-4">
                Detailed Description
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Maintain your family's health with the PureView Pro RO Purifier.
                This advanced water purification system ensures every drop is
                safe, clean, and infused with essential minerals.
              </p>

              <ul className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <li>✓ 15 Litre Storage Capacity</li>
                <li>✓ RO + UV + UF + TDS Control</li>
                <li>✓ 1 Year Brand Warranty</li>
                <li>✓ Food Grade Plastic Tank</li>
                <li>✓ Smart LED Indicator</li>
                <li>✓ Energy Efficient Operation</li>
              </ul>
            </div>

            {/* Second Description */}
            <div className="bg-white p-6 rounded-2xl shadow-sm mt-6">
              <h2 className="font-semibold text-lg mb-4">
                Detailed Description
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Special features include an auto shut-off mechanism when the tank
                is full and a leak-proof design. Installation is provided free of
                charge by the seller for local customers.
              </p>

              <ul className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <li>✓ 15 Litre Storage Capacity</li>
                <li>✓ RO + UV + UF + TDS Control</li>
                <li>✓ 1 Year Brand Warranty</li>
                <li>✓ Food Grade Plastic Tank</li>
                <li>✓ Smart LED Indicator</li>
                <li>✓ Energy Efficient Operation</li>
              </ul>
            </div>

          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div>

            <div className="sticky top-24 space-y-6">

              {/* Price Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 font-medium">Final Price</p>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    4.8
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-3">₹2,499</h2>

                <button className="w-full mt-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold flex items-center justify-center gap-2">
                  <MessageCircle size={18} />
                  Chat with Seller
                </button>

                <button className="w-full mt-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2">
                  <Phone size={18} />
                  Call for Details
                </button>
              </div>

              {/* Seller Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300" />
                  <div>
                    <p className="font-semibold">Rajesh Kumar</p>
                    <p className="text-xs text-gray-500">
                      Member Since Jan 2022
                    </p>
                  </div>
                </div>

                <div className="flex justify-between mt-6 text-sm text-gray-600">
                  <div>
                    <p className="font-semibold">RESPONSE</p>
                    <p>Under 1 hour</p>
                  </div>
                  <div>
                    <p className="font-semibold">LISTINGS</p>
                    <p>14 Active Ads</p>
                  </div>
                </div>

                <button className="w-full mt-6 py-3 rounded-xl border border-gray-300 text-gray-700">
                  Message Seller
                </button>
              </div>

              {/* Safety Tips */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck size={18} className="text-blue-600" />
                  <p className="font-semibold">Safety Tips</p>
                </div>

                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Meet in a public location</li>
                  <li>• Inspect the product before paying</li>
                  <li>• Avoid making advance payments</li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Recommended Listings */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-gray-800">
              Recommended Listings
            </h2>
            <button className="border px-4 py-1 rounded-md text-sm">
              View all
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-sm border overflow-hidden"
              >
                <Image
                  src="/images/listing1.webp"
                  width={300}
                  height={200}
                  alt="rec"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <p className="text-xs text-blue-600 font-semibold">
                    APPLIANCES
                  </p>
                  <h4 className="font-medium mt-2">
                    PureIt Copper Water Purifier
                  </h4>
                  <p className="font-bold mt-2">₹1,800</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
