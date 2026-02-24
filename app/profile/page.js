"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileSidebar from "../components/ProfileSidebar";

export default function ProfilePage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#F8F6F2] py-12 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8">

          {/* LEFT SIDEBAR */}
          <ProfileSidebar />

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-3 space-y-8">

            {/* PROFILE CARD */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">

                <Image
                  src="/images/avatar.png"
                  alt="Profile"
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-[#F5B849]"
                />

                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-semibold text-black">
                    Atharv Apugade
                  </h2>
                  <p className="text-gray-500">atharv@email.com</p>
                  <p className="text-gray-500 mt-1">Nasik, India</p>

                  <button className="mt-4 bg-[#F5B849] hover:bg-[#e0a631] transition px-6 py-2 rounded-lg text-black font-medium">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>

            {/* ACCOUNT DETAILS */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-6 text-black">
                Account Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-500 text-sm">Full Name</p>
                  <p className="font-medium text-black">Atharv Apugade</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="font-medium text-black">atharv@email.com</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <p className="font-medium text-black">+91 98765 43210</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Member Since</p>
                  <p className="font-medium text-black">January 2025</p>
                </div>
              </div>
            </div>

            {/* MY ACTIVITY */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-6 text-black">
                My Activity
              </h3>

              <div className="grid md:grid-cols-3 gap-6 text-center">

                <div className="bg-[#FFF3D6] rounded-xl p-6">
                  <p className="text-2xl font-bold text-black">12</p>
                  <p className="text-gray-600">Active Ads</p>
                </div>

                <div className="bg-[#FFF3D6] rounded-xl p-6">
                  <p className="text-2xl font-bold text-black">34</p>
                  <p className="text-gray-600">Total Purchases</p>
                </div>

                <div className="bg-[#FFF3D6] rounded-xl p-6">
                  <p className="text-2xl font-bold text-black">5</p>
                  <p className="text-gray-600">Wishlist Items</p>
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