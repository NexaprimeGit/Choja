"use client";

import { useState, useRef, useEffect } from "react";
import { Search, MapPin, User, X } from "lucide-react";

export default function Navbar({ searchQuery = "", setSearchQuery = () => {} }) {
  const [location, setLocation] = useState("Kolhapur");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dropdownRef = useRef(null);

  const locations = [
    { city: "Kolhapur", state: "Maharashtra" },
    { city: "Pune", state: "Maharashtra" },
    { city: "Mumbai", state: "Maharashtra" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md sticky top-0 z-50">
      <div className="w-full px-6 h-16 flex items-center justify-between">

        {/* LEFT - LOGO */}
        <div className="flex items-center gap-3 cursor-pointer min-w-[180px]">
          <div className="w-9 h-9 bg-white text-blue-600 font-bold rounded-lg flex items-center justify-center shadow-md">
            G
          </div>
          <span className="text-xl font-semibold tracking-wide">
            GOLO
          </span>
        </div>

        {/* CENTER */}
        <div className="hidden md:flex items-center gap-4 flex-1 mx-10 max-w-4xl">

          {/* SEARCH INPUT */}
          <div className="flex-[2] flex items-center bg-white rounded-full px-5 h-11 shadow-md focus-within:ring-2 focus-within:ring-blue-300 transition">
            
            <Search size={18} className="text-gray-400 mr-2" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search listings..."
              className="flex-1 outline-none text-black text-sm bg-transparent"
            />

            {/* CLEAR BUTTON */}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="ml-2 text-gray-400 hover:text-gray-600 transition"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* LOCATION */}
          <div className="relative flex-[1]" ref={dropdownRef}>
            <div className="flex items-center bg-white rounded-full px-5 h-11 shadow-md focus-within:ring-2 focus-within:ring-blue-300 transition">
              
              <MapPin size={18} className="text-gray-400 mr-2" />

              <input
                type="text"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Location"
                className="w-full outline-none text-black text-sm bg-transparent"
              />
            </div>

            {showSuggestions && (
              <div className="absolute top-14 left-0 w-full bg-white text-black rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                {locations.map((place, index) => (
                  <div key={index}>
                    <div
                      onClick={() => {
                        setLocation(place.city);
                        setShowSuggestions(false);
                      }}
                      className="flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-blue-50 transition"
                    >
                      <MapPin size={16} className="text-blue-500 mt-1" />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">
                          {place.city}
                        </span>
                        <span className="text-xs text-gray-500">
                          {place.state}
                        </span>
                      </div>
                    </div>

                    {index !== locations.length - 1 && (
                      <div className="border-t border-gray-100 mx-4"></div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 min-w-[250px] justify-end">
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#" className="hover:opacity-80 transition">Home</a>
            <a href="#" className="hover:opacity-80 transition">Post Your Ad</a>
            <a href="#" className="hover:opacity-80 transition">My Ads</a>
            <a href="#" className="hover:opacity-80 transition">Chats</a>
          </nav>

          <div className="w-9 h-9 bg-white text-blue-600 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition cursor-pointer">
            <User size={18} />
          </div>
        </div>

      </div>
    </header>
  );
}
