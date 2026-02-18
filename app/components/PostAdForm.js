"use client";
import { useState, useRef } from "react";
import {
  GraduationCap,
  Heart,
  Car,
  Briefcase,
  Plane,
  Sparkles,
  Home,
  Megaphone,
  Search,
  Wrench,
  User,
  PawPrint,
  Smartphone,
  Tv,
  Sofa,
  Package,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function PostAdForm() {
  const scrollRef = useRef(null);

  const inputStyle =
    "w-full border border-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";

  const categories = [
    { name: "Education", icon: GraduationCap },
    { name: "Matrimonial", icon: Heart },
    { name: "Vehicle", icon: Car, sub: ["Rent", "Sell"] },
    { name: "Business", icon: Briefcase, sub: ["Promotion"] },
    { name: "Travel", icon: Plane },
    { name: "Astrology", icon: Sparkles },
    { name: "Property", icon: Home, sub: ["Rent", "Sell"] },
    { name: "Public Notice", icon: Megaphone },
    { name: "Lost & Found", icon: Search },
    { name: "Service", icon: Wrench },
    { name: "Personal", icon: User },
    { name: "Employment", icon: Briefcase },
    { name: "Pets", icon: PawPrint },
    { name: "Mobiles", icon: Smartphone },
    { name: "Electronics", icon: Tv },
    { name: "Furniture", icon: Sofa },
    { name: "Other", icon: Package },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedSub, setSelectedSub] = useState(null);
  const [selectedDates, setSelectedDates] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 260;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Format date to readable string
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);

  // Get month names
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Generate year options
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);

  return (
    <div className="space-y-10">

      {/* Choose Category */}
      <div className="bg-white pt-8 pb-6 px-5 rounded-2xl shadow-md border border-gray-200 relative">
        <h3 className="font-semibold text-xl mb-4 text-gray-800">Choose Category</h3>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-md rounded-full p-2 hover:bg-gray-50 transition z-10"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-md rounded-full p-2 hover:bg-gray-50 transition z-10"
        >
          <ChevronRight size={16} />
        </button>

        {/* Horizontal Scroll Area */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth px-10 snap-x snap-mandatory"
        >
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            const isActive = selectedCategory.name === cat.name;

            return (
              <div
                key={index}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedSub(null);
                }}
                className={`snap-start flex-shrink-0 w-[100px] h-[120px] flex flex-col items-center justify-center rounded-xl cursor-pointer transition-all duration-300 border
                  ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                      : "bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:shadow-md hover:-translate-y-1"
                  }`}
              >
                <Icon size={28} className="mb-2" />
                <span className="text-xs font-medium text-center px-2">{cat.name}</span>
              </div>
            );
          })}
        </div>

        {/* Subcategory Options */}
        {selectedCategory?.sub && (
          <div className="flex gap-4 mt-6 justify-center">
            {selectedCategory.sub.map((option, i) => (
              <button
                key={i}
                onClick={() => setSelectedSub(option)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition
                ${
                  selectedSub === option
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 hover:bg-blue-50 text-gray-700"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Basic Info */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 space-y-6">
        <h3 className="font-semibold text-xl text-gray-800">Basic Information</h3>
        <input placeholder="Ad Title" className={inputStyle} />
        <textarea placeholder="Description" rows={4} className={inputStyle} />
        <input placeholder="Price (₹)" className={`${inputStyle} w-1/2`} />
      </div>

      {/* Dynamic Details */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 space-y-6">
        <h3 className="font-semibold text-xl text-gray-800">{selectedCategory.name} Details</h3>
        <div className="grid grid-cols-2 gap-6">
          <input placeholder="Field 1" className={inputStyle} />
          <input placeholder="Field 2" className={inputStyle} />
          <input placeholder="Field 3" className={inputStyle} />
          <input placeholder="Field 4" className={inputStyle} />
        </div>
      </div>

      {/* Scheduling */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 space-y-6">
        <h3 className="font-semibold text-xl text-gray-800">Ad Scheduling</h3>

        {/* Month & Year Dropdowns */}
        <div className="flex gap-4 mb-4 justify-center">
          <select
            className="border border-gray-300 rounded-lg px-3 py-1"
            value={currentMonth.getMonth()}
            onChange={(e) =>
              setCurrentMonth(new Date(currentMonth.getFullYear(), Number(e.target.value), 1))
            }
          >
            {months.map((month, i) => (
              <option key={i} value={i}>{month}</option>
            ))}
          </select>

          <select
            className="border border-gray-300 rounded-lg px-3 py-1"
            value={currentMonth.getFullYear()}
            onChange={(e) =>
              setCurrentMonth(new Date(Number(e.target.value), currentMonth.getMonth(), 1))
            }
          >
            {years.map((year, i) => (
              <option key={i} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-center">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
            <DayPicker
              mode="multiple"
              selected={selectedDates}
              onSelect={setSelectedDates}
              fromDate={new Date()}
              month={currentMonth}
              onMonthChange={setCurrentMonth}
              className="text-sm"
            />
          </div>
        </div>

        {/* Selected Dates Label */}
        {selectedDates.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {selectedDates.map((date, index) => (
              <span
                key={index}
                className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm shadow-md"
              >
                {formatDate(date)}
              </span>
            ))}
          </div>
        )}
      </div>

     {/* Media Upload */}
<div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
  <h3 className="font-semibold text-xl mb-6 text-gray-800">Media & Photos</h3>

  <div className="grid grid-cols-4 gap-6">
    {/* Display uploaded images */}
    {uploadedImages.map((image, index) => (
      <div
        key={index}
        className="h-28 w-full border-2 border-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden"
      >
        <img
          src={image.url}
          alt={`uploaded-${index}`}
          className="h-full w-full object-cover rounded-2xl"
        />
        {/* Remove button */}
        <button
          type="button"
          onClick={() => removeImage(index)}
          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
        >
          &times;
        </button>
      </div>
    ))}

    {/* Upload button */}
    <label className="h-28 flex items-center justify-center border-2 border-dashed rounded-2xl cursor-pointer text-gray-400 hover:border-blue-500 hover:text-blue-500 transition">
      +
      <input
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFileUpload(e)}
      />
    </label>
  </div>
</div>

    </div>
  );
}
