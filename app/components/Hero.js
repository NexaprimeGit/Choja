import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-10">
        
        {/* LEFT CARD */}
        <div className="bg-blue-100 p-12 rounded-3xl shadow-lg w-[520px] border border-blue-200 transition hover:shadow-xl">

          <h1 className="text-4xl font-bold mb-6 leading-tight text-gray-800">
            Best Deals & <br />
            Offers Near You! 🛍️
          </h1>

          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Save big on top discounts for various products and services.
            Discover amazing offers waiting just for you.
          </p>

          <div className="flex gap-5">
            
            {/* Secondary Button */}
            <button className="px-7 py-3 rounded-full font-medium bg-white border border-gray-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
              Learn More
            </button>

            {/* Primary Button */}
           <Link href="/choja">
  <button className="px-7 py-3 rounded-full font-medium bg-orange-500 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
    Switch To Choja
  </button>
</Link>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <Image
            src="/images/hero-cart.jpg"
            width={470}
            height={470}
            alt="Cart"
            className="drop-shadow-2xl"
            priority
          />

          {/* Floating Emojis */}
          <div className="absolute bottom-10 right-4 text-3xl animate-pulse">
            🎁
          </div>

          <div className="absolute bottom-20 -left-6 text-3xl animate-pulse">
            🛒
          </div>
        </div>

      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
}
