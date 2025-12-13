import { ExternalLink } from "lucide-react";
import { PHOTOS_DATA } from "../../data/configs";

const PhotographySection = () => {
  return (
    <section className="relative w-full py-4 bg-[#0a0a0a] font-mono text-green-400">
      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {PHOTOS_DATA.map((photo, idx) => (
          <a
            key={idx}
            href={photo.src}
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative overflow-hidden rounded-sm
              bg-[#111111]
              border border-transparent
              hover:shadow-[0_0_20px_rgba(0,255,0,0.5)]
              transition-colors duration-200
              group
            "
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="
                w-full h-64 object-cover
                transition-opacity duration-200
                group-hover:opacity-90
              "
            />

            {/* Terminal-style label */}
            <div className="absolute bottom-1 left-2 text-[10px] text-green-500 opacity-80">
              {photo.alt}
            </div>
          </a>
        ))}
      </div>

      {/* Fixed View Profile Button (bottom-right) */}
      <a
        href="https://www.pexels.com/@abhishek-chouhan-255079711"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed bottom-6 right-6 z-50
          flex items-center gap-2
          px-4 py-2
          text-xs
          text-green-400
          bg-[#0f0f0f]
          border border-green-700
          rounded-sm
          hover:text-green-200
          hover:border-green-500
          transition-colors
        "
      >
        view profile
        <ExternalLink className="w-4 h-4" />
      </a>
    </section>
  );
};

export default PhotographySection;
