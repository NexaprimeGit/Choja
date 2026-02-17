"use client";

import { useState } from "react";
import {
  BookOpen,       // Education
  Users,          // Matrimonial, Pets
  Truck,          // Vehicle Rent/Sell
  Megaphone,      // Business Promotion
  Airplay,        // Travel
  Star,           // Astrology
  Home,           // Property
  FileText,       // Public Notice
  Search,         // Lost & Found
  Toolbox,        // Service
  User,           // Personal
  Briefcase,      // Employment
  Smartphone,     // Mobiles
  Archive,        // Electronics / Furniture / Other
} from "lucide-react";

const categories = [
  { name: "Education", icon: BookOpen },
  { name: "Matrimonial", icon: Users },
  { name: "Vehicle Rent", icon: Truck },
  { name: "Vehicle Sell", icon: Truck },
  { name: "Business Promotion", icon: Megaphone },
  { name: "Travel", icon: Airplay },
  { name: "Astrology", icon: Star },
  { name: "Property Rent", icon: Home },
  { name: "Property Sell", icon: Home },
  { name: "Public Notice", icon: FileText },
  { name: "Lost & Found", icon: Search },
  { name: "Service", icon: Toolbox },
  { name: "Personal", icon: User },
  { name: "Employment", icon: Briefcase },
  { name: "Pets", icon: Users },
  { name: "Mobiles", icon: Smartphone },
  { name: "Electronics & Home Appliances", icon: Archive },
  { name: "Furniture", icon: Archive },
  { name: "Other", icon: Archive },
];

export default function Categories() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Determine how many categories to show initially (1 row)
  const itemsPerRow = 6; // for lg screens
  const visibleCategories = showAll ? categories : categories.slice(0, itemsPerRow);

  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Explore Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 md:px-12">
        {visibleCategories.map((cat, i) => {
          const isActive = activeIndex === i;
          const Icon = cat.icon;

          return (
            <div
              key={cat.name}
              onClick={() => setActiveIndex(i)}
              className={`cursor-pointer rounded-2xl p-6 flex flex-col items-center justify-center
                          border transition-all duration-300 ease-in-out
                          ${
                            isActive
                              ? "border-blue-500 bg-blue-50 shadow-lg"
                              : "border-gray-200 bg-white hover:border-blue-400 hover:shadow-xl hover:-translate-y-2"
                          }`}
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 text-3xl shadow-lg transition-all duration-300
                            ${
                              isActive
                                ? "bg-blue-100 text-blue-600"
                                : "bg-gray-100 text-gray-700"
                            }`}
              >
                <Icon size={28} />
              </div>
              <span
                className={`text-center font-semibold text-sm md:text-base ${
                  isActive ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {cat.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* View More / View Less Button */}
      {categories.length > itemsPerRow && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </section>
  );
}
