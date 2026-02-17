import Image from "next/image"; // <--- Make sure this is imported

const listings = [
  { id: 1, title: "Home Tiffin Service", price: "₹ 450/month", img: "/images/place1.jpg", tag: "Service", description: "Delicious home-cooked meals delivered daily." },
  { id: 2, title: "Reliable Plumber", price: "₹ 8,500", img: "/images/place2.avif", tag: "Service", description: "Expert plumbing services for your home and office." },
  { id: 3, title: "Need Camera for Rent", price: "₹ 300/day", img: "/images/place3.webp", tag: "Product", description: "High-quality camera available for rent at affordable prices." },
  { id: 4, title: "New Cafe Opening!", price: "Free Entry", img: "/images/place4.jpg", tag: "Service", description: "Enjoy free coffee and snacks during the grand opening." },
  { id: 5, title: "Acoustic Guitar", price: "₹ 7,000", img: "/images/deal2.jpg", tag: "Product", description: "Perfect acoustic guitar for beginners and professionals." },
  { id: 6, title: "Laptop Repair", price: "₹ 1,200", img: "/images/deal1.jpg", tag: "Service", description: "Fast and reliable laptop repair service with warranty." },
];

export default function RecentListings() {
  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">Recent Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20">
        {listings.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-transform transition-shadow duration-300 cursor-pointer group"
          >
            <div className="relative h-56 w-full">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                {item.tag}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-gray-800 text-lg leading-snug h-14">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
              <p className="text-blue-600 font-extrabold text-xl mt-1">{item.price}</p>
              <button className="w-full mt-4 bg-[#007bff] hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors">
                Chat
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
