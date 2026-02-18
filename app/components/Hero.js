import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="theme-section py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-10">

        {/* Left Card */}
        <div className="theme-hero-card p-12 rounded-3xl shadow-lg w-[520px] transition hover:shadow-xl">

          <h1 className="text-4xl font-bold mb-6 leading-tight theme-heading">
            Best Deals & <br />
            Offers Near You! 🛍️
          </h1>

          <p className="mb-8 text-lg leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            Save big on top discounts for various products and services.
            Discover amazing offers waiting just for you.
          </p>

          <div className="flex gap-5">

            <button className="px-7 py-3 rounded-full font-medium theme-card">
              Learn More
            </button>

            <Link href="/choja">
              <button className="px-7 py-3 rounded-full font-medium theme-button-accent">
                Switch To Choja
              </button>
            </Link>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <Image
            src="/images/hero-cart.jpg"
            width={470}
            height={470}
            alt="Cart"
            className="drop-shadow-2xl"
            priority
          />

          <div className="absolute bottom-10 right-4 text-3xl animate-pulse">
            🎁
          </div>

          <div className="absolute bottom-20 -left-6 text-3xl animate-pulse">
            🛒
          </div>
        </div>

      </div>

      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl theme-glow"></div>
    </section>
  );
}
