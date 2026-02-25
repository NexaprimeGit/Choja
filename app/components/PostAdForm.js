"use client";
import { useState, useRef, useEffect } from "react";
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
  // All hooks at top level
  const scrollRef = useRef(null);
  const [cities, setCities] = useState(["Mumbai", "Pune"]);
  const [input, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);
  const [selectedDates, setSelectedDates] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [uploadedImages, setUploadedImages] = useState([]);
  const [educationMode, setEducationMode] = useState("");
  const [educationDemo, setEducationDemo] = useState("");
  const [matrimonialGender, setMatrimonialGender] = useState("");
  const [matrimonialMarital, setMatrimonialMarital] = useState("");
  const [vehicleSellTransmission, setVehicleSellTransmission] = useState("");
  const [vehicleSellRC, setVehicleSellRC] = useState("");
  const [vehicleRentDriver, setVehicleRentDriver] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [validTillDate, setValidTillDate] = useState(null);
  const [travelDate, setTravelDate] = useState(null);
  const [calendarMonth, setCalendarMonth] = useState(new Date());
  const [socialMedia, setSocialMedia] = useState([]);
  const [socialInput, setSocialInput] = useState({ platform: "", url: "" });
  const [consultationMode, setConsultationMode] = useState("");
  const [propertyTypeRent, setPropertyTypeRent] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [securityDeposit, setSecurityDeposit] = useState("");
  const [maintenanceCost, setMaintenanceCost] = useState("");
  const [availableFromDate, setAvailableFromDate] = useState(null);
  const [preferredTenant, setPreferredTenant] = useState("");
  const [leaseDuration, setLeaseDuration] = useState("");
  const [propertyTypeSell, setPropertyTypeSell] = useState("");
  const [bhk, setBhk] = useState("");
  const [builtUpArea, setBuiltUpArea] = useState("");
  const [furnishing, setFurnishing] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [parkingAvailable, setParkingAvailable] = useState("");
  const [floor, setFloor] = useState("");
  const [age, setAge] = useState("");
  const [facingSide, setFacingSide] = useState("");
  const [askingPrice, setAskingPrice] = useState("");
  const [noticeType, setNoticeType] = useState("");
  const [issuingAuthority, setIssuingAuthority] = useState("");
  const [detailedNotice, setDetailedNotice] = useState("");
  const [supportingDocuments, setSupportingDocuments] = useState([]);
  const [lfStatus, setLfStatus] = useState("");
  const [itemType, setItemType] = useState("");
  const [itemName, setItemName] = useState("");
  const [lfDate, setLfDate] = useState(null);
  const [lfLocation, setLfLocation] = useState("");
  const [lfDescription, setLfDescription] = useState("");
  const [reward, setReward] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");
  const [serviceExperience, setServiceExperience] = useState("");
  const [serviceArea, setServiceArea] = useState("");
  const [availableTime, setAvailableTime] = useState("");
  const [charges, setCharges] = useState("");
  const [serviceBio, setServiceBio] = useState("");
  const [available24x7, setAvailable24x7] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(null);
  const [calendarDateMonth, setCalendarDateMonth] = useState(new Date());

  const inputStyle = "w-full border border-gray-200 bg-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#157A4F] focus:border-[#157A4F] transition shadow-sm";

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

  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);

  // Helper functions
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };

  const addCity = () => {
    if (input.trim() && !cities.includes(input.trim())) {
      setCities([...cities, input.trim()]);
      setInput("");
    }
  };

  const removeCity = (cityToRemove) => {
    setCities(cities.filter((city) => city !== cityToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addCity();
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const images = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setUploadedImages((prev) => [...prev, ...images]);
  };

  const removeImage = (index) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);

  const addSocialMedia = () => {
    if (socialInput.platform && socialInput.url) {
      setSocialMedia([...socialMedia, { ...socialInput, id: Date.now() }]);
      setSocialInput({ platform: "", url: "" });
    }
  };

  const removeSocialMedia = (id) => {
    setSocialMedia(socialMedia.filter((item) => item.id !== id));
  };

  const handleDocumentUpload = (e) => {
    const files = Array.from(e.target.files);
    const docs = files.map((file) => ({
      file,
      name: file.name,
      id: Date.now() + Math.random(),
    }));
    setSupportingDocuments((prev) => [...prev, ...docs]);
  };

  const removeDocument = (id) => {
    setSupportingDocuments((prev) => prev.filter((doc) => doc.id !== id));
  };

  // Initialize selectedCategory on mount
  useEffect(() => {
    if (selectedCategory === null && categories.length > 0) {
      setSelectedCategory(categories[0]);
    }
  }, []);

  return (
    <div className="space-y-12 bg-[#F8F6F2] p-6 rounded-3xl">

      {/* Choose Category */}
<div className="bg-white p-10 rounded-3xl shadow-md border border-gray-100 relative min-h-[320px]">

  <h3 className="font-semibold text-2xl mb-8 text-gray-800 text-center">
    Choose Category
  </h3>

  {/* Left Scroll Button */}
  <button
    onClick={() => scroll("left")}
    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-md rounded-full p-2 hover:bg-[#FFF3D6] transition z-10"
  >
    <ChevronLeft size={18} />
  </button>

  {/* Right Scroll Button */}
  <button
    onClick={() => scroll("right")}
    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-md rounded-full p-2 hover:bg-[#FFF3D6] transition z-10"
  >
    <ChevronRight size={18} />
  </button>

  {/* Categories Scroll Row */}
  <div
    ref={scrollRef}
    className="flex items-center gap-8 overflow-x-auto scroll-smooth px-14 snap-x snap-mandatory py-6"
  >
    {categories.map((cat, index) => {
      const Icon = cat.icon;
      const isActive = selectedCategory?.name === cat.name;

      return (
        <div
          key={index}
          onClick={() => {
            setSelectedCategory(cat);
            setSelectedSub(null);
          }}
          className={`snap-start flex-shrink-0 w-[130px] h-[160px] flex flex-col items-center justify-center rounded-2xl cursor-pointer transition-all duration-300 border
          ${
            isActive
              ? "bg-[#157A4F] text-white border-[#157A4F] shadow-xl scale-105"
              : "bg-white text-gray-700 border-gray-200 hover:border-[#157A4F] hover:-translate-y-2 hover:shadow-lg"
          }`}
        >
          <Icon size={34} className="mb-3" />
          <span className="text-sm font-medium text-center px-2">
            {cat.name}
          </span>
        </div>
      );
    })}
  </div>

  {/* Subcategories */}
  {selectedCategory?.sub && (
    <div className="flex gap-4 mt-10 justify-center flex-wrap">
      {selectedCategory.sub.map((option, i) => (
        <button
          key={i}
          onClick={() => setSelectedSub(option)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition
          ${
            selectedSub === option
              ? "bg-[#157A4F] text-white shadow-md"
              : "bg-[#FFF3D6] text-gray-700 hover:bg-[#F5B849] hover:text-white"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )}

</div>

{/* Basic Information */}
<div className="bg-[#f8f8f8] p-8 rounded-2xl border border-gray-200 space-y-8">

  {/* Heading */}
  <div>
    <h2 className="text-xl font-semibold text-gray-900">
      Basic Information
    </h2>
    <p className="text-sm text-gray-500 mt-1">
      Core details required for all listing types.
    </p>
  </div>

  {/* Language + Primary Contact (2 Columns) */}
  <div className="grid grid-cols-2 gap-6">
    
    {/* Language */}
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">
        Language
      </label>
      <select className="w-full h-11 px-4 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-300">
        <option>English (India)</option>
        <option>Marathi</option>
        <option>Hindi</option>
      </select>
    </div>

    {/* Primary Contact */}
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">
        Primary Contact
      </label>
      <input
          type="text"
          placeholder="Enter primary contact"
          className="w-full h-11 px-4 rounded-lg border border-gray-300 bg-gray-100 text-sm focus:outline-none"
      />
    </div>

  </div>

  {/* Ad Title */}
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <label className="text-sm font-medium text-gray-700">
        Ad Title
      </label>
      <span className="text-xs text-gray-500">
        42 / 100
      </span>
    </div>

    <input
      type="text"
      placeholder="Enter ad title"
      className="w-full h-11 px-4 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
    />

    <p className="text-xs text-gray-500">
      Catchy titles sell faster!
    </p>
  </div>

  {/* Description */}
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <label className="text-sm font-medium text-gray-700">
        Description
      </label>
      <span className="text-xs text-gray-500">
        156 / 2000
      </span>
    </div>

    <textarea
      rows={5}
      placeholder="Describe your listing"
      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gray-300"
    />
  </div>

  {/* Locations */}
<div className="space-y-3">
  <label className="text-sm font-medium text-gray-700">
    Locations
  </label>

  <div className="w-full min-h-[56px] px-3 py-2 rounded-lg border border-gray-300 bg-white flex flex-wrap items-center gap-2 focus-within:ring-2 focus-within:ring-gray-300">

    {/* City Chips */}
    {cities.map((city, index) => (
      <span
        key={index}
        className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 rounded-full border border-gray-200"
      >
        {city}
        <button
          type="button"
          onClick={() => removeCity(city)}
          className="text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </span>
    ))}

    {/* Inline Input */}
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Add city"
      className="flex-1 min-w-[120px] outline-none text-sm"
    />
  </div>
</div>

</div>

      {/* Dynamic Details */}
      {selectedCategory && (
        <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 space-y-6">
          <h3 className="font-semibold text-2xl text-gray-800">
            {selectedCategory.sub && selectedSub ? `${selectedCategory.name} ${selectedSub} Details` : `${selectedCategory.name} Details`}
          </h3>

          {selectedCategory.name === "Education" && (
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="text-sm font-medium text-gray-700">Course Type</label>
                <select className={inputStyle}>
                  <option value="">Course Type (e.g. Tuition)</option>
                  <option value="Tuition">Tuition</option>
                  <option value="Coaching">Coaching</option>
                  <option value="Online Course">Online Course</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Class/Standard</label>
                <input placeholder="10th Grade" className={inputStyle} />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Subject</label>
                <input placeholder="Mathematics" className={inputStyle} />
              </div>
              <div className="col-span-2">
                <label className="text-sm font-medium text-gray-700">Mode of Education</label>
                <div className="flex gap-4">
                  <button type="button" className={`px-6 py-2 rounded-full text-sm font-medium ${educationMode === "Online" ? "bg-[#157A4F] text-white shadow-md" : "bg-[#FFF3D6] text-gray-700 hover:bg-[#F5B849] hover:text-white"}`} onClick={() => setEducationMode("Online")}>Online</button>
                  <button type="button" className={`px-6 py-2 rounded-full text-sm font-medium ${educationMode === "Offline" ? "bg-[#157A4F] text-white shadow-md" : "bg-[#FFF3D6] text-gray-700 hover:bg-[#F5B849] hover:text-white"}`} onClick={() => setEducationMode("Offline")}>Offline</button>
                </div>
              </div>
              <div className="col-span-2">
                <label className="text-sm font-medium text-gray-700">Demo Class Available?</label>
                <div className="flex gap-4">
                  <button type="button" className={`px-6 py-2 rounded-full text-sm font-medium ${educationDemo === "Yes" ? "bg-[#157A4F] text-white shadow-md" : "bg-[#FFF3D6] text-gray-700 hover:bg-[#F5B849] hover:text-white"}`} onClick={() => setEducationDemo("Yes")}>Yes</button>
                  <button type="button" className={`px-6 py-2 rounded-full text-sm font-medium ${educationDemo === "No" ? "bg-[#157A4F] text-white shadow-md" : "bg-[#FFF3D6] text-gray-700 hover:bg-[#F5B849] hover:text-white"}`} onClick={() => setEducationDemo("No")}>No</button>
                </div>
              </div>
              <div><label className="text-sm font-medium text-gray-700">Institute Name / Personal Brand</label><input placeholder="ABC Academy" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Duration</label><input placeholder="6 months" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Fees</label><input placeholder="₹5000" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Teaching Experience</label><input placeholder="5 years" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Qualification</label><input placeholder="MSc Mathematics" className={inputStyle} /></div>
            </div>
          )}

          {selectedCategory.name === "Matrimonial" && (
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Profile For</label><select className={inputStyle}><option value="">Profile For (e.g. Self)</option><option value="Self">Self</option><option value="Relative">Relative</option></select></div>
              <div><label className="text-sm font-medium text-gray-700">Name</label><input placeholder="Rahul Sharma" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Age</label><input placeholder="28" className={inputStyle} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Gender</label><select className={inputStyle} value={matrimonialGender} onChange={e => setMatrimonialGender(e.target.value)}><option value="">Gender (e.g. Male)</option><option value="Male">Male</option><option value="Female">Female</option><option value="Other">Other</option></select></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Marital Status</label><select className={inputStyle} value={matrimonialMarital} onChange={e => setMatrimonialMarital(e.target.value)}><option value="">Marital Status (e.g. Single)</option><option value="Single">Single</option><option value="Divorced">Divorced</option></select></div>
              <div><label className="text-sm font-medium text-gray-700">Religion</label><input placeholder="Hindu" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Caste</label><input placeholder="Brahmin" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Education</label><input placeholder="MBA" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Occupation</label><input placeholder="Engineer" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Annual Income</label><input placeholder="₹10,00,000" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Height</label><input placeholder={'5\'8"'} className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Location</label><input placeholder="Pune" className={inputStyle} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">About Me</label><textarea placeholder="I am a fun-loving person..." className={inputStyle + " resize-none h-24"} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Partner Preference</label><textarea placeholder="Looking for..." className={inputStyle + " resize-none h-24"} /></div>
            </div>
          )}

          {selectedCategory.name === "Vehicle" && selectedSub === "Sell" && (
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Vehicle Type</label><select className={inputStyle}><option value="">Vehicle Type (e.g. Four Wheeler)</option><option value="Four Wheeler">Four Wheeler</option><option value="Two Wheeler">Two Wheeler</option><option value="Three Wheeler">Three Wheeler</option><option value="Truck">Truck</option><option value="Other">Other</option></select></div>
              <div><label className="text-sm font-medium text-gray-700">Brand</label><input placeholder="Maruti" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Model</label><input placeholder="Swift" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Variant</label><input placeholder="VXi" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Year</label><input placeholder="2020" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">KM Driven</label><input placeholder="15000" className={inputStyle} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Fuel Type</label><select className={inputStyle}><option value="">Fuel Type (e.g. Petrol)</option><option value="Petrol">Petrol</option><option value="Diesel">Diesel</option><option value="Electric">Electric</option><option value="CNG">CNG</option></select></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Transmission</label><div className="flex gap-4"><button type="button" className={`px-6 py-2 rounded-full text-sm font-medium ${vehicleSellTransmission === "Manual" ? "bg-[#157A4F] text-white shadow-md" : "bg-[#FFF3D6] text-gray-700"}`} onClick={() => setVehicleSellTransmission("Manual")}>Manual</button><button type="button" className={`px-6 py-2 rounded-full text-sm font-medium ${vehicleSellTransmission === "Automatic" ? "bg-[#157A4F] text-white shadow-md" : "bg-[#FFF3D6] text-gray-700"}`} onClick={() => setVehicleSellTransmission("Automatic")}>Automatic</button></div></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Ownership</label><select className={inputStyle}><option value="">Ownership (e.g. Single Owner)</option><option value="Single Owner">Single Owner</option><option value="Second Owner">Second Owner</option><option value="Third Owner">Third Owner</option></select></div>
              <div><label className="text-sm font-medium text-gray-700">Insurance Valid Till</label><input placeholder="Dec 2026" className={inputStyle} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">RC Available</label><div className="flex gap-4"><button type="button" className={`px-6 py-2 rounded-full text-sm font-medium ${vehicleSellRC === "Yes" ? "bg-[#157A4F] text-white shadow-md" : "bg-[#FFF3D6] text-gray-700"}`} onClick={() => setVehicleSellRC("Yes")}>Yes</button><button type="button" className={`px-6 py-2 rounded-full text-sm font-medium ${vehicleSellRC === "No" ? "bg-[#157A4F] text-white shadow-md" : "bg-[#FFF3D6] text-gray-700"}`} onClick={() => setVehicleSellRC("No")}>No</button></div></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Condition</label><select className={inputStyle}><option value="">Condition (e.g. Excellent)</option><option value="Excellent">Excellent</option><option value="Very Good">Very Good</option><option value="Good">Good</option></select></div>
              <div><label className="text-sm font-medium text-gray-700">Price</label><input placeholder="₹5,00,000" className={inputStyle} /></div>
            </div>
          )}

          {selectedCategory.name === "Vehicle" && selectedSub === "Rent" && (
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Vehicle Type</label><select className={inputStyle}><option value="">Vehicle Type (e.g. Four Wheeler)</option><option value="Four Wheeler">Four Wheeler</option><option value="Two Wheeler">Two Wheeler</option><option value="Three Wheeler">Three Wheeler</option><option value="Truck">Truck</option><option value="Other">Other</option></select></div>
              <div><label className="text-sm font-medium text-gray-700">Brand / Model</label><input placeholder="Maruti Swift" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Per Day Rent Amount</label><input placeholder="₹1000" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Security Deposit</label><input placeholder="₹5000" className={inputStyle} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Includes Driver</label><div className="flex gap-4"><button type="button" className={`px-6 py-2 rounded-full text-sm font-medium ${vehicleRentDriver === "Yes" ? "bg-[#157A4F] text-white shadow-md" : "bg-[#FFF3D6] text-gray-700"}`} onClick={() => setVehicleRentDriver("Yes")}>Yes</button><button type="button" className={`px-6 py-2 rounded-full text-sm font-medium ${vehicleRentDriver === "No" ? "bg-[#157A4F] text-white shadow-md" : "bg-[#FFF3D6] text-gray-700"}`} onClick={() => setVehicleRentDriver("No")}>No</button><button type="button" className={`px-6 py-2 rounded-full text-sm font-medium ${vehicleRentDriver === "Both" ? "bg-[#157A4F] text-white shadow-md" : "bg-[#FFF3D6] text-gray-700"}`} onClick={() => setVehicleRentDriver("Both")}>Both</button></div></div>
              <div><label className="text-sm font-medium text-gray-700">Min Rental Duration</label><input placeholder="2 days" className={inputStyle} /></div>
            </div>
          )}

          {selectedCategory.name === "Business" && selectedSub === "Promotion" && (
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Business Name</label><input placeholder="Your Business Name" className={inputStyle} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Business Type</label><select className={inputStyle}><option value="">Select Business Type</option><option value="Retail">Retail</option><option value="SaaS">SaaS</option><option value="Hospitality">Hospitality</option><option value="Other">Other</option></select></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Services Offered</label><input placeholder="e.g. Web Development, Consulting" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">GST Number</label><input placeholder="18AABCU9603R1Z0 (optional)" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Website URL</label><input placeholder="https://www.example.com (optional)" className={inputStyle} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Social Media Presence</label><div className="space-y-3"><div className="flex gap-2"><select value={socialInput.platform} onChange={(e) => setSocialInput({...socialInput, platform: e.target.value})} className={inputStyle}><option value="">Select Platform</option><option value="Facebook">Facebook</option><option value="Instagram">Instagram</option><option value="LinkedIn">LinkedIn</option><option value="Twitter">Twitter</option><option value="YouTube">YouTube</option></select><button type="button" onClick={addSocialMedia} className="px-4 py-2 bg-[#157A4F] text-white rounded-lg font-medium hover:bg-[#0f5c3d] transition">Add</button></div><div className="flex gap-2"><input value={socialInput.url} onChange={(e) => setSocialInput({...socialInput, url: e.target.value})} placeholder="https://facebook.com/yourpage" className={inputStyle} /></div><div className="flex flex-wrap gap-2 mt-3">{socialMedia.map((item) => (<span key={item.id} className="flex items-center gap-2 px-3 py-2 bg-[#157A4F] text-white rounded-full text-sm"><span>{item.platform}: {item.url}</span><button type="button" onClick={() => removeSocialMedia(item.id)} className="text-white hover:text-red-200">×</button></span>))}</div></div></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Campaign Name</label><input placeholder="Summer Sale 2026" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Valid Till</label><div className="relative"><input type="text" placeholder="Click to select date" readOnly className={inputStyle + " cursor-pointer"} value={validTillDate ? formatDate(validTillDate) : ""} onClick={() => setOpenCalendar(openCalendar === "validTill" ? null : "validTill")} />{openCalendar === "validTill" && (<div className="absolute top-14 left-0 bg-[#FFF3D6] p-4 rounded-2xl border border-gray-200 shadow-xl z-20"><DayPicker mode="single" selected={validTillDate} onSelect={(date) => {setValidTillDate(date); setOpenCalendar(null);}} month={calendarDateMonth} onMonthChange={setCalendarDateMonth} fromDate={new Date()} /></div>)}</div></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Campaign Description</label><textarea placeholder="Describe your campaign details..." className={inputStyle + " resize-none h-24"} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Shop Address</label><input placeholder="123 Business Street, City, State" className={inputStyle} /></div>
            </div>
          )}

          {selectedCategory.name === "Travel" && (
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Package Type</label><select className={inputStyle}><option value="">Select Package Type</option><option value="Tour Package">Tour Package</option><option value="Bus Rental">Bus Rental</option><option value="Hotel Only">Hotel Only</option><option value="Other">Other</option></select></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Destination</label><input placeholder="e.g. Paris, Rome, Venice" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Duration</label><input placeholder="7 days" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Travel Date</label><div className="relative"><input type="text" placeholder="Click to select date" readOnly className={inputStyle + " cursor-pointer"} value={travelDate ? formatDate(travelDate) : ""} onClick={() => setOpenCalendar(openCalendar === "travelDate" ? null : "travelDate")} />{openCalendar === "travelDate" && (<div className="absolute top-14 left-0 bg-[#FFF3D6] p-4 rounded-2xl border border-gray-200 shadow-xl z-20"><DayPicker mode="single" selected={travelDate} onSelect={(date) => {setTravelDate(date); setOpenCalendar(null);}} month={calendarDateMonth} onMonthChange={setCalendarDateMonth} fromDate={new Date()} /></div>)}</div></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Inclusions</label><textarea placeholder="Flights, Hotels, Meals, Tours..." className={inputStyle + " resize-none h-20"} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Exclusions</label><textarea placeholder="Personal expenses, Travel insurance..." className={inputStyle + " resize-none h-20"} /></div>
              <div><label className="text-sm font-medium text-gray-700">Price Per Person</label><input placeholder="₹25,000" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Available Seats</label><input placeholder="20" className={inputStyle} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Pickup Location</label><input placeholder="Airport, Hotel, City Center" className={inputStyle} /></div>
            </div>
          )}

          {selectedCategory.name === "Astrology" && (
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Service Type</label><select className={inputStyle}><option value="">Select Service Type</option><option value="Horoscope">Horoscope</option><option value="Kundali">Kundali</option><option value="Palm Reading">Palm Reading</option><option value="Vastu">Vastu</option><option value="Other">Other</option></select></div>
              <div><label className="text-sm font-medium text-gray-700">Experience</label><input placeholder="15 years" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Consultation Fee</label><input placeholder="₹500" className={inputStyle} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Consultation Mode</label><div className="flex gap-4"><button type="button" className={`px-6 py-2 rounded-full text-sm font-medium ${consultationMode === "Online" ? "bg-[#157A4F] text-white shadow-md" : "bg-[#FFF3D6] text-gray-700 hover:bg-[#F5B849] hover:text-white"}`} onClick={() => setConsultationMode("Online")}>Online</button><button type="button" className={`px-6 py-2 rounded-full text-sm font-medium ${consultationMode === "Offline" ? "bg-[#157A4F] text-white shadow-md" : "bg-[#FFF3D6] text-gray-700 hover:bg-[#F5B849] hover:text-white"}`} onClick={() => setConsultationMode("Offline")}>Offline</button><button type="button" className={`px-6 py-2 rounded-full text-sm font-medium ${consultationMode === "Both" ? "bg-[#157A4F] text-white shadow-md" : "bg-[#FFF3D6] text-gray-700 hover:bg-[#F5B849] hover:text-white"}`} onClick={() => setConsultationMode("Both")}>Both</button></div></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Languages Spoken</label><input placeholder="Hindi, English, Marathi" className={inputStyle} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Availability Time</label><input placeholder="Monday-Friday: 10 AM - 6 PM" className={inputStyle} /></div>
            </div>
          )}

          {selectedCategory.name === "Property" && selectedSub === "Rent" && (
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Property Type</label><select value={propertyTypeRent} onChange={(e) => setPropertyTypeRent(e.target.value)} className={inputStyle}><option value="">Select Property Type</option><option value="Commercial">Commercial</option><option value="Plot">Plot</option><option value="Residential">Residential</option><option value="Office">Office</option></select></div>
              <div><label className="text-sm font-medium text-gray-700">Monthly Rent</label><input placeholder="₹25,000" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Security Deposit</label><input placeholder="₹75,000" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Maintenance Cost Per Month</label><input placeholder="₹2,000" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Available From</label><div className="relative"><input type="text" placeholder="Click to select date" readOnly className={inputStyle + " cursor-pointer"} value={availableFromDate ? formatDate(availableFromDate) : ""} onClick={() => setOpenCalendar(openCalendar === "availableFrom" ? null : "availableFrom")} />{openCalendar === "availableFrom" && (<div className="absolute top-14 left-0 bg-[#FFF3D6] p-4 rounded-2xl border border-gray-200 shadow-xl z-20"><DayPicker mode="single" selected={availableFromDate} onSelect={(date) => {setAvailableFromDate(date); setOpenCalendar(null);}} month={calendarDateMonth} onMonthChange={setCalendarDateMonth} fromDate={new Date()} /></div>)}</div></div>
              <div><label className="text-sm font-medium text-gray-700">Preferred Tenant</label><select value={preferredTenant} onChange={(e) => setPreferredTenant(e.target.value)} className={inputStyle}><option value="">Select Tenant Type</option><option value="Family">Family</option><option value="Bachelor">Bachelor</option><option value="Company">Company</option></select></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Lease Duration</label><input placeholder="6 months or 1 year" className={inputStyle} /></div>
            </div>
          )}

          {selectedCategory.name === "Property" && selectedSub === "Sell" && (
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Property Type</label><select value={propertyTypeSell} onChange={(e) => setPropertyTypeSell(e.target.value)} className={inputStyle}><option value="">Select Property Type</option><option value="Apartment">Apartment</option><option value="House">House</option><option value="Plot">Plot</option><option value="Commercial">Commercial</option></select></div>
              <div><label className="text-sm font-medium text-gray-700">BHK</label><input placeholder="2 BHK" value={bhk} onChange={(e) => setBhk(e.target.value)} className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Built-up Area</label><input placeholder="1200 sq.ft" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Furnishing</label><select value={furnishing} onChange={(e) => setFurnishing(e.target.value)} className={inputStyle}><option value="">Select Furnishing</option><option value="Furnished">Furnished</option><option value="Semi-Furnished">Semi-Furnished</option><option value="Unfurnished">Unfurnished</option></select></div>
              <div><label className="text-sm font-medium text-gray-700">Bathrooms</label><input placeholder="2" className={inputStyle} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Parking Available</label><div className="flex gap-4"><button type="button" className={`px-6 py-2 rounded-full text-sm font-medium ${parkingAvailable === "Yes" ? "bg-[#157A4F] text-white shadow-md" : "bg-[#FFF3D6] text-gray-700"}`} onClick={() => setParkingAvailable("Yes")}>Yes</button><button type="button" className={`px-6 py-2 rounded-full text-sm font-medium ${parkingAvailable === "No" ? "bg-[#157A4F] text-white shadow-md" : "bg-[#FFF3D6] text-gray-700"}`} onClick={() => setParkingAvailable("No")}>No</button></div></div>
              <div><label className="text-sm font-medium text-gray-700">Floor</label><input placeholder="3rd Floor" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Property Age</label><input placeholder="5 years" className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Facing Side</label><input placeholder="North, East, South, West" className={inputStyle} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Asking Price</label><input placeholder="₹40,00,000" className={inputStyle} /></div>
            </div>
          )}

          {selectedCategory.name === "Public Notice" && (
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Notice Type</label><select value={noticeType} onChange={(e) => setNoticeType(e.target.value)} className={inputStyle}><option value="">Select Notice Type</option><option value="Tender">Tender</option><option value="Government">Government</option><option value="Legal">Legal</option><option value="Announcement">Announcement</option></select></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Issuing Authority</label><input placeholder="Department Name/Organization Name" value={issuingAuthority} onChange={(e) => setIssuingAuthority(e.target.value)} className={inputStyle} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Detailed Notice</label><textarea placeholder="Enter complete notice details..." value={detailedNotice} onChange={(e) => setDetailedNotice(e.target.value)} className={inputStyle + " resize-none h-32"} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Supporting Documents</label><div className="space-y-3"><label className="flex items-center justify-center h-20 px-4 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#157A4F] hover:bg-[#FFF3D6] transition"><input type="file" multiple className="hidden" onChange={handleDocumentUpload} /><span className="text-gray-600 font-medium">Click to upload documents</span></label><div className="flex flex-wrap gap-2">{supportingDocuments.map((doc) => (<span key={doc.id} className="flex items-center gap-2 px-3 py-2 bg-[#157A4F] text-white rounded-full text-sm"><span>📄 {doc.name}</span><button type="button" onClick={() => removeDocument(doc.id)} className="text-white hover:text-red-200">×</button></span>))}</div></div></div>
            </div>
          )}

          {selectedCategory.name === "Lost & Found" && (
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Status</label><div className="flex gap-4"><button type="button" className={`px-6 py-2 rounded-full text-sm font-medium ${lfStatus === "Lost" ? "bg-[#157A4F] text-white shadow-md" : "bg-[#FFF3D6] text-gray-700"}`} onClick={() => setLfStatus("Lost")}>Lost</button><button type="button" className={`px-6 py-2 rounded-full text-sm font-medium ${lfStatus === "Found" ? "bg-[#157A4F] text-white shadow-md" : "bg-[#FFF3D6] text-gray-700"}`} onClick={() => setLfStatus("Found")}>Found</button></div></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Item Type</label><input placeholder="e.g. Phone, Wallet, Keys, Jewelry" value={itemType} onChange={(e) => setItemType(e.target.value)} className={inputStyle} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Item Name</label><input placeholder="iPhone 15 Pro Max, Brown Leather Wallet" value={itemName} onChange={(e) => setItemName(e.target.value)} className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Date</label><div className="relative"><input type="text" placeholder="Click to select date" readOnly className={inputStyle + " cursor-pointer"} value={lfDate ? formatDate(lfDate) : ""} onClick={() => setOpenCalendar(openCalendar === "lfDate" ? null : "lfDate")} />{openCalendar === "lfDate" && (<div className="absolute top-14 left-0 bg-[#FFF3D6] p-4 rounded-2xl border border-gray-200 shadow-xl z-20"><DayPicker mode="single" selected={lfDate} onSelect={(date) => {setLfDate(date); setOpenCalendar(null);}} month={calendarDateMonth} onMonthChange={setCalendarDateMonth} fromDate={new Date()} /></div>)}</div></div>
              <div><label className="text-sm font-medium text-gray-700">Location</label><input placeholder="Bandra, Mumbai" value={lfLocation} onChange={(e) => setLfLocation(e.target.value)} className={inputStyle} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Description</label><textarea placeholder="Describe the item, markings, condition..." value={lfDescription} onChange={(e) => setLfDescription(e.target.value)} className={inputStyle + " resize-none h-24"} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Reward Amount (Optional)</label><input placeholder="₹5,000 or No Reward" value={reward} onChange={(e) => setReward(e.target.value)} className={inputStyle} /></div>
            </div>
          )}

          {selectedCategory.name === "Service" && (
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Service Category</label><select value={serviceCategory} onChange={(e) => setServiceCategory(e.target.value)} className={inputStyle}><option value="">Select Service Category</option><option value="Plumbing">Plumbing</option><option value="Electrical">Electrical</option><option value="Carpentry">Carpentry</option><option value="Cleaning">Cleaning</option><option value="Beauty">Beauty</option><option value="IT Support">IT Support</option><option value="Tutoring">Tutoring</option></select></div>
              <div><label className="text-sm font-medium text-gray-700">Years of Experience</label><input placeholder="8 years" value={serviceExperience} onChange={(e) => setServiceExperience(e.target.value)} className={inputStyle} /></div>
              <div><label className="text-sm font-medium text-gray-700">Service Charges</label><input placeholder="₹500 per hour" value={charges} onChange={(e) => setCharges(e.target.value)} className={inputStyle} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Service Area</label><input placeholder="Mumbai Central, Bandra, Andheri" value={serviceArea} onChange={(e) => setServiceArea(e.target.value)} className={inputStyle} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Available Time</label><input placeholder="9 AM - 6 PM, Monday to Saturday" value={availableTime} onChange={(e) => setAvailableTime(e.target.value)} className={inputStyle} /></div>
              <div className="col-span-2"><label className="text-sm font-medium text-gray-700">Service Bio & Skills</label><textarea placeholder="Describe your expertise, certifications, special skills..." value={serviceBio} onChange={(e) => setServiceBio(e.target.value)} className={inputStyle + " resize-none h-24"} /></div>
              <div className="col-span-2"><label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" checked={available24x7} onChange={(e) => setAvailable24x7(e.target.checked)} className="w-4 h-4 border border-gray-300 rounded accent-[#157A4F]" /><span className="text-sm font-medium text-gray-700">Available 24/7</span></label></div>
            </div>
          )}
        </div>
      )}

     {/* Scheduling */}
<div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">

  <h3 className="font-semibold text-2xl text-gray-800 mb-8 text-center">
    Ad Scheduling
  </h3>

  <div className="grid md:grid-cols-2 gap-8 items-start">

    {/* LEFT COLUMN — CALENDAR */}
    <div className="space-y-6">

      {/* Month & Year Selectors */}
      <div className="flex gap-4 justify-center">
        <select
          className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#157A4F] focus:outline-none transition"
          value={currentMonth.getMonth()}
          onChange={(e) =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), Number(e.target.value), 1)
            )
          }
        >
          {months.map((month, i) => (
            <option key={i} value={i}>{month}</option>
          ))}
        </select>

        <select
          className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#157A4F] focus:outline-none transition"
          value={currentMonth.getFullYear()}
          onChange={(e) =>
            setCurrentMonth(
              new Date(Number(e.target.value), currentMonth.getMonth(), 1)
            )
          }
        >
          {years.map((year, i) => (
            <option key={i} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {/* Calendar Card */}
      <div className="bg-[#FFF3D6] p-6 rounded-2xl border border-gray-200 shadow-sm flex justify-center">
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

    {/* RIGHT COLUMN — SELECTED DATES */}
    <div className="bg-gray-50 rounded-2xl border border-gray-200 shadow-inner flex flex-col h-[420px]">

      {/* Header */}
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <h4 className="text-lg font-semibold text-gray-700">
          Selected Dates
        </h4>

        {selectedDates.length > 0 && (
          <span className="bg-[#157A4F] text-white px-3 py-1 rounded-lg text-xs font-medium shadow">
            {selectedDates.length} Day{selectedDates.length > 1 && "s"}
          </span>
        )}
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-[#157A4F]/60 scrollbar-track-transparent">

        {selectedDates.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {selectedDates.map((date, index) => (
              <span
                key={index}
                className="bg-[#157A4F] text-white px-4 py-2 rounded-full text-sm shadow-md hover:scale-105 transition"
              >
                {formatDate(date)}
              </span>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 text-sm">
            No dates selected yet
          </div>
        )}

      </div>

    </div>

  </div>

</div>

      {/* Media Upload */}
      <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
        <h3 className="font-semibold text-2xl mb-6 text-gray-800">
          Media & Photos
        </h3>

        <div className="grid grid-cols-4 gap-6">
          {uploadedImages.map((image, index) => (
            <div
              key={index}
              className="h-32 border border-gray-200 rounded-2xl relative overflow-hidden shadow-sm"
            >
              <img
                src={image.url}
                alt={`uploaded-${index}`}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          <label className="h-32 flex items-center justify-center border-2 border-dashed rounded-2xl cursor-pointer text-gray-400 hover:border-[#157A4F] hover:text-[#157A4F] transition bg-[#FFF3D6]">
            + Add
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        </div>
      </div>

    </div>
  );
}
