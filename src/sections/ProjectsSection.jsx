import { ExternalLink, Github } from "lucide-react";

const Projects = ({ projects }) => {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="mb-14 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-text-secondary dark:text-text-secondary-dark mt-3">
            A selection of projects I've built and contributed to
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <div
              key={i}
              className="
                group relative rounded-3xl overflow-hidden
                bg-white/80 dark:bg-[#111]/60
                backdrop-blur-xl
                shadow-[0_4px_18px_rgba(0,0,0,0.05)]
                hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.35)]
                hover:-translate-y-2
                transition-all duration-700
                cursor-pointer
              "
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="
                    w-full h-full object-cover 
                    transition-all duration-700 
                    group-hover:scale-[1.08] 
                  "
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col gap-5 relative">
                
                {/* Title */}
                <h3
                  className="
                    text-xl font-medium 
                    group-hover:text-primary-color 
                    transition-colors duration-300
                  "
                >
                  {p.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-sm text-text-color/70 dark:text-text-color/70 
                    leading-relaxed
                  "
                >
                  {p.description}
                </p>

                {/* Tech + Repo */}
                <div className="flex items-center justify-between mt-2">
                  
                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-2.5">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="
                          text-xs px-3 py-1.5 rounded-full
                          bg-primary-color/8 text-primary-color
                          dark:bg-primary-color/15 
                          font-medium
                          shadow-[0_0_12px_rgba(0,0,0,0.04)]
                        "
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Button */}
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg 
                      text-xs font-semibold 
                      text-white 
                      bg-gradient-to-r from-primary-color to-secondary-color
                      shadow-md hover:shadow-xl
                      hover:brightness-110
                      transition-all duration-300
                    "
                  >
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>

              {/* Full card clickable overlay */}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
