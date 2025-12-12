import { ExternalLink } from "lucide-react";

const photos = [
  { src: "https://images.pexels.com/photos/32422633/pexels-photo-32422633.jpeg", alt: "Photography 1" },
  { src: "https://images.pexels.com/photos/32269531/pexels-photo-32269531.jpeg", alt: "Photography 2" },
  { src: "https://images.pexels.com/photos/31764282/pexels-photo-31764282.jpeg", alt: "Photography 3" },
  { src: "https://images.pexels.com/photos/14949826/pexels-photo-14949826.jpeg", alt: "Photography 4" },
  { src: "https://images.pexels.com/photos/14949825/pexels-photo-14949825.jpeg", alt: "Photography 5" },
  { src: "https://images.pexels.com/photos/24709088/pexels-photo-24709088.jpeg", alt: "Photography 6" },
];

const PhotographySection = () => {
  return (
    <section className="w-full py-12 flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,255,0,0.7)] mb-4 md:mb-0">
          Photography
        </h2>
        <a
          href="https://www.pexels.com/@abhishek-chouhan-255079711"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition text-black font-semibold shadow-md hover:shadow-lg"
        >
          View Full Portfolio <ExternalLink className="w-5 h-5" />
        </a>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl bg-[#111111] cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,0,0.5)]"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-72 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotographySection;
