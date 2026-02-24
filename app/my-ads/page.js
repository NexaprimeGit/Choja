"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileSidebar from "../components/ProfileSidebar";
import AdCard from "../components/AdCard";
import Link from "next/link";

export default function MyAds() {
  return (
    <>
      <Navbar />

      <div className="bg-[#F8F6F2] min-h-screen py-14 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-10">

          {/* LEFT SIDEBAR */}
          <ProfileSidebar />

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-3">

            <div className="bg-white rounded-3xl shadow-sm p-10">

              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-6">
                <div>
                  <h1 className="text-3xl font-semibold text-black">
                    My Ads
                  </h1>
                  <p className="text-gray-500 mt-1">
                    Manage and track your posted ads
                  </p>
                </div>

                <Link
  href="/i-want"
  className="group relative inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#157A4F] text-white font-semibold shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95"
>
                  <span className="relative z-10">I Want</span>

                  <span className="absolute inset-0 rounded-full bg-[#1c9460] opacity-0 
                                   group-hover:opacity-20 blur-md transition duration-300"></span>
                </Link>
              </div>

              {/* Ads Grid */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                <AdCard image="/images/sofa.jpg" title="Vintage Leather Sofa - Excellent Condition" price="450" date="Oct 26, 2023" />
                <AdCard image="/images/bike.jpg" title="Mountain Bike - Trek Marlin 5 (Used)" price="300" date="Oct 20, 2023" />
                <AdCard image="/images/pc.jpg" title="Gaming PC - i7, RTX 3070, 16GB RAM" price="1200" date="Oct 18, 2023" />
                <AdCard image="/images/dresser.jpg" title="Antique Wooden Dresser with Mirror" price="280" date="Oct 15, 2023" />
                <AdCard image="/images/guitar.jpg" title="Electric Guitar - Fender Stratocaster" price="700" date="Sep 28, 2023" />
                <AdCard image="/images/tv.jpg" title="Samsung 4K Smart TV 55-inch" price="550" date="Oct 10, 2023" />
                <AdCard image="/images/vinyl.jpg" title="Collection of Classic Vinyl Records" price="150" date="Oct 05, 2023" />
                <AdCard image="/images/washer.jpg" title="Used Washing Machine - Whirlpool" price="200" date="Oct 01, 2023" />
                <AdCard image="/images/handbag.jpg" title="Designer Handbag - barely used" price="350" date="Sep 25, 2023" />

              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center gap-3 mt-16">

                <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:border-[#157A4F] hover:text-[#157A4F] transition">
                  Previous
                </button>

                <button className="px-4 py-2 rounded-lg bg-[#157A4F] text-white font-semibold shadow-sm">
                  1
                </button>

                <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:border-[#157A4F] hover:text-[#157A4F] transition">
                  2
                </button>

                <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:border-[#157A4F] hover:text-[#157A4F] transition">
                  3
                </button>

                <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:border-[#157A4F] hover:text-[#157A4F] transition">
                  Next
                </button>

              </div>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}