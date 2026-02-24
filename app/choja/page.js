import Navbar from "../components/Navbar";
import CategoryBar from "../components/CategoryBar";
import Categories from "../components/Categories";
import RecentListings from "../components/RecentListings";
import RecommendedDeals from "../components/Recommended";
import Footer from "../components/Footer";

export default function ChojaPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <div className="w-full">
        <CategoryBar />
        <RecentListings />
        <RecommendedDeals />
      </div>

      <Footer />
    </main>
  );
}