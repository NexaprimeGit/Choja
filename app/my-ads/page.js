import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdCard from "../components/AdCard";
import Link from "next/link";


export default function MyAds() {
  return (
    <>
      <Navbar />

      <div className="myads-wrapper">
        <div className="breadcrumb">
          <span>Home</span> <span className="arrow">›</span> <span>My Ads</span>
        </div>

        <div className="myads-header">
          <h1>My Ads</h1>
          <Link href="/i-want" className="want-button">
        I Want
      </Link>
        </div>

        <div className="ads-grid">
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

        <div className="pagination">
          <button className="page-btn">Previous</button>
          <button className="page-number active">1</button>
          <button className="page-number">2</button>
          <button className="page-number">3</button>
          <button className="page-btn">Next</button>
        </div>
      </div>

      <Footer />
    </>
  );
}
