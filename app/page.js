"use client";

import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Discover from "./components/Discover";
import FeaturedDeals from "./components/FeaturedDeals";
import Trending from "./components/Trending";
import Recommended from "./components/Recommended";
import PopularPlaces from "./components/PopularPlaces";
import Footer from "./components/Footer";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Hero />
      <Discover />
      <FeaturedDeals />

      <Trending setSearchQuery={setSearchQuery} />

      <Recommended />
      <PopularPlaces />
      <Footer />
    </>
  );
}
