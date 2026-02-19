"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "./../../components/Navbar";
import Footer from "./../../components/Footer";
import Recommended from "@/app/components/Recommended";
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

  const images = [
    "/images/listing1.webp",
    "/images/listing2.webp",
    "/images/listing3.webp",
    "/images/listing4.webp",
  ];

  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <Navbar />

      <div className="bg-[#F8F6F2] min-h-screen">
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

                {/* Thumbnails */}
                <div className="flex flex-col gap-4">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 cursor-pointer transition
                        ${
                          selectedImage === index
                            ? "border-[#157A4F]"
                            : "border-gray-200 hover:border-[#157A4F]"
                        }`}
                    >
                      <Image
                        src={img}
                        width={100}
                        height={100}
                        alt={`thumbnail-${index}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>

                {/* Main Image */}
                <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm relative border border-gray-200">
                  <Image
                    src={images[selectedImage]}
                    width={900}
                    height={600}
                    alt="Product"
                    className="rounded-xl w-full object-cover transition-all duration-300"
                  />
                  <div className="absolute bottom-8 right-10 bg-[#157A4F] text-white text-xs px-3 py-1 rounded-full">
                    {selectedImage + 1} / {images.length} Photos
                  </div>
                </div>

              </div>

              {/* Tags */}
              <div className="flex gap-3 mt-8">
                <span className="text-xs font-semibold bg-[#FFF3D6] text-[#157A4F] px-3 py-1 rounded-full">
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
                  <Heart className="cursor-pointer hover:text-[#F5B849] transition" size={20} />
                  <Share2 className="cursor-pointer hover:text-[#F5B849] transition" size={20} />
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
                  <Star size={14} className="text-[#F5B849] fill-[#F5B849]" />
                  4.2 (128 Reviews)
                </span>
              </div>

              {/* Description Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm mt-8 border border-gray-200">
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
              <div className="bg-white p-6 rounded-2xl shadow-sm mt-6 border border-gray-200">
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
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-500 font-medium">Final Price</p>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Star size={14} className="text-[#F5B849] fill-[#F5B849]" />
                      4.8
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mt-3 text-[#157A4F]">
                    ₹2,499
                  </h2>

                  <button className="w-full mt-6 py-3 rounded-xl bg-[#157A4F] hover:bg-[#0f5c3a] text-white font-semibold flex items-center justify-center gap-2 transition">
                    <MessageCircle size={18} />
                    Chat with Seller
                  </button>

                  <button className="w-full mt-4 py-3 rounded-xl bg-[#F5B849] hover:bg-[#e0a837] text-white font-semibold flex items-center justify-center gap-2 transition">
                    <Phone size={18} />
                    Call for Details
                  </button>
                </div>

                {/* Seller Card */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
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

                  <button className="w-full mt-6 py-3 rounded-xl border border-[#157A4F] text-[#157A4F] hover:bg-[#FFF3D6] transition">
                    Message Seller
                  </button>
                </div>

                {/* Safety Tips */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck size={18} className="text-[#157A4F]" />
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

        </div>
      </div>
<Recommended />
      <Footer />
    </>
  );
}
