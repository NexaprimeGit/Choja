"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileSidebar from "../components/ProfileSidebar";

export default function WishlistPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#F8F6F2] py-14 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-10">

          {/* SIDEBAR */}
          <ProfileSidebar />

          {/* CONTENT */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-sm p-10">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-semibold text-black">
                  My Wishlist
                </h2>
                <span className="text-gray-500 text-sm">
                  2 Items
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-8">

                {/* ITEM 1 */}
                <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

                  <div className="relative overflow-hidden">
                    <Image
                      src="/images/listing1.webp"
                      alt="Water Purifier"
                      width={500}
                      height={300}
                      className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-black group-hover:text-[#F5B849] transition">
                      Water Purifier
                    </h3>

                    <p className="text-[#157A4F] text-xl font-bold mt-2">
                      ₹2,499
                    </p>

                    <Link href="/product/1">
                      <button className="mt-6 w-full bg-[#F5B849] hover:bg-[#e0a631] transition-all duration-300 py-3 rounded-xl text-black font-medium shadow-sm hover:shadow-md">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

                  <div className="relative overflow-hidden">
                    <Image
                      src="/images/listing2.webp"
                      alt="Office Chair"
                      width={500}
                      height={300}
                      className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-black group-hover:text-[#F5B849] transition">
                      Office Chair
                    </h3>

                    <p className="text-[#157A4F] text-xl font-bold mt-2">
                      ₹3,999
                    </p>

                    <Link href="/product/1">
                      <button className="mt-6 w-full bg-[#F5B849] hover:bg-[#e0a631] transition-all duration-300 py-3 rounded-xl text-black font-medium shadow-sm hover:shadow-md">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}