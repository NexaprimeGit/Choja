import Navbar from "../components/Navbar";
import HeroChoja from "../components/HeroChoja";
import Categories from "../components/Categories";
import RecentListings from "../components/RecentListings";
import RecommendedDeals from "../components/Recommended";
import Footer from "../components/Footer";

export default function ChojaPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroChoja />
        <Categories />
        <RecentListings />
        <RecommendedDeals />
      </div>
      <Footer />
    </main>
  );
}