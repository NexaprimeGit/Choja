import Image from "next/image";

const places = [
  { img: "place1.jpg", name: "Mahalakshmi Temple" },
  { img: "place2.avif", name: "Rankala Lake" },
  { img: "place3.webp", name: "New Palace" },
  { img: "place4.jpg", name: "Panhala Fort" },
];

export default function PopularPlaces() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Explore Popular Places
          </h2>

          <button className="text-blue-600 font-medium text-sm hover:underline transition">
            View More →
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {places.map((place, i) => (
            <div
              key={i}
              className="group bg-gray-50 rounded-xl shadow-md p-4 border border-transparent hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={`/images/${place.img}`}
                  width={300}
                  height={200}
                  alt={place.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* CONTENT */}
              <h3 className="mt-4 font-semibold text-gray-800 group-hover:text-blue-600 transition">
                {place.name}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                A historic and beautiful place to visit.
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

