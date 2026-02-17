import Image from "next/image";

const deals = [
  { img: "deal1.jpg", title: "Smart Watch Pro", discount: "30% OFF" },
  { img: "deal2.avif", title: "Luxury Spa Package", discount: "30% OFF" },
  { img: "deal3.jpg", title: "Fashion Apparel Sale", discount: "25% OFF" },
  { img: "deal4.jpg", title: "Weekend Getaway", discount: "40% OFF" },
];

export default function Recommended() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Recommended Deals
          </h2>

          <button className="text-blue-600 font-medium text-sm hover:underline transition">
            View More →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {deals.map((deal, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl shadow-md p-4 border border-transparent hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={`/images/${deal.img}`}
                  width={300}
                  height={200}
                  alt={deal.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="mt-4 font-semibold text-gray-800 group-hover:text-blue-600 transition">
                {deal.title}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Discover amazing deals near you.
              </p>

              <p className="text-orange-500 text-sm font-medium mt-2">
                {deal.discount}
              </p>

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full w-full transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:scale-105 active:scale-95 active:bg-blue-800">
                View Deal
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
