"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Grid } from "lucide-react";
import { createPortal } from "react-dom";

const mainCategories = [
  { name: "Education" },
  { name: "Vehicle", sub: ["Rent", "Buy"] },
  { name: "Property", sub: ["Rent", "Buy"] },
  { name: "Employment" },
  { name: "Mobiles" },
  { name: "Electronics & Home Appliances" },
  { name: "Matrimonial" },
  { name: "Business" },
];

const extraCategories = [
  "Astrology",
  "Lost & Found",
  "Service",
  "Personal",
  "Pets",
  "Obituary",
  "Others",
  "Public Notice",
  "Travel",
  "Furniture",
];

export default function CategoryBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showAllModal, setShowAllModal] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState(null);

  const buttonRefs = useRef({});
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategoryClick = (cat) => {
    if (!cat.sub) {
      console.log("Navigate to:", cat.name);
      setActiveDropdown(null);
      return;
    }

    if (activeDropdown === cat.name) {
      setActiveDropdown(null);
      return;
    }

    const rect = buttonRefs.current[cat.name].getBoundingClientRect();

    setDropdownPosition({
      top: rect.bottom + window.scrollY + 10,
      left: rect.left + window.scrollX,
    });

    setActiveDropdown(cat.name);
  };

  const handleSubClick = (parent, sub) => {
    console.log("Navigate to:", parent, sub);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* MAIN BAR */}
      <div
        ref={wrapperRef}
        className="w-full bg-white border-b border-gray-200"
      >
        <div className="w-full flex items-center h-16 px-10">

          {/* Categories stretched full width */}
          <div className="flex items-center justify-between w-full">

            {mainCategories.map((cat) => (
              <div key={cat.name} className="relative flex-1 text-center">
                <button
                  ref={(el) => (buttonRefs.current[cat.name] = el)}
                  onClick={() => handleCategoryClick(cat)}
                  className="group relative inline-flex items-center justify-center gap-1 text-[14px] font-semibold text-gray-700 whitespace-nowrap transition"
                >
                  <span className="transition group-hover:text-[var(--accent-500)]">
                    {cat.name}
                  </span>

                  {cat.sub && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        activeDropdown === cat.name
                          ? "rotate-180 text-[var(--accent-500)]"
                          : ""
                      }`}
                    />
                  )}

                  {/* Modern underline */}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[var(--accent-500)] transition-all duration-300 group-hover:w-full rounded-full" />
                </button>
              </div>
            ))}

            {/* SEE ALL (fixed width, not stretched) */}
            <div className="flex-shrink-0 ml-6">
              <button
                onClick={() => setShowAllModal(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:shadow-sm transition"
              >
                <Grid size={16} />
                See All
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* DROPDOWN */}
      {activeDropdown &&
        dropdownPosition &&
        createPortal(
          <div
            style={{
              position: "absolute",
              top: dropdownPosition.top,
              left: dropdownPosition.left,
              zIndex: 9999,
            }}
            className="bg-white shadow-2xl rounded-2xl py-3 border border-gray-100 min-w-[180px]"
          >
            {mainCategories
              .find((c) => c.name === activeDropdown)
              ?.sub?.map((subItem) => (
                <button
                  key={subItem}
                  onClick={() =>
                    handleSubClick(activeDropdown, subItem)
                  }
                  className="w-full text-left px-5 py-2 text-sm font-medium text-gray-700 hover:bg-[var(--accent-50)] hover:text-[var(--accent-600)] transition rounded-lg"
                >
                  {subItem}
                </button>
              ))}
          </div>,
          document.body
        )}

      {/* SEE ALL MODAL */}
      {showAllModal &&
        createPortal(
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]">
            <div className="bg-white w-[90%] max-w-3xl rounded-3xl p-8 shadow-2xl">

              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold">
                  All Categories
                </h3>
                <button
                  onClick={() => setShowAllModal(false)}
                  className="text-gray-500 hover:text-black text-sm"
                >
                  Close
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {extraCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => console.log("Navigate to:", cat)}
                    className="p-4 rounded-xl border border-gray-200 hover:shadow-md hover:-translate-y-1 hover:border-[var(--accent-200)] cursor-pointer text-sm font-semibold text-gray-700 transition text-center bg-white"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}