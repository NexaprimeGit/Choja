const deals = [
  { title: "50% Off Pizza", price: "$10" },
  { title: "Spa Package", price: "$40" },
  { title: "Gym Membership", price: "$25" },
];

export default function Deals() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Trending Deals
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {deal.title}
              </h3>
              <p className="text-orange-500 text-2xl font-bold mb-4">
                {deal.price}
              </p>

              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
                Grab Deal
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
