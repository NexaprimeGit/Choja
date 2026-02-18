import Image from "next/image";

const places = [
  { img: "place1.jpg", name: "Mahalakshmi Temple" },
  { img: "place2.avif", name: "Rankala Lake" },
  { img: "place3.webp", name: "New Palace" },
  { img: "place4.jpg", name: "Panhala Fort" },
];

export default function PopularPlaces() {
  return (
    <section className="py-16 theme-section">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-semibold theme-heading">
            Explore Popular Places
          </h2>

          <button className="theme-button-primary px-4 py-2 rounded-full text-sm">
            View More →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {places.map((place, i) => (
            <div
              key={i}
              className="group rounded-xl shadow-md p-4 transition-all duration-300 theme-card"
            >
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={`/images/${place.img}`}
                  width={300}
                  height={200}
                  alt={place.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="mt-4 font-semibold theme-heading">
                {place.name}
              </h3>

              <p
                className="text-sm mt-1"
                style={{ color: "var(--color-text-muted)" }}
              >
                A historic and beautiful place to visit.
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
