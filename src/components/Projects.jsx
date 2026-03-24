import { useState, useRef } from "react";
import { projects } from "../data/data";

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15,3 21,3 21,9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const CalIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const statusConfig = {
  "Live": { dot: "bg-emerald-400", text: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/20" },
  "In Progress": { dot: "bg-amber-400", text: "text-amber-400", bg: "bg-amber-400/10 border-amber-400/20" },
  "Hackathon": { dot: "bg-cyan-400", text: "text-cyan-400", bg: "bg-cyan-400/10 border-cyan-400/20" },
};

function ProjectCard({ project, isActive }) {
  const status = statusConfig[project.status] || statusConfig["In Progress"];

  return (
    <div className={`relative rounded-2xl border overflow-hidden transition-all duration-500 flex flex-col
      ${isActive
        ? "border-accent/40 shadow-[0_0_40px_#7B6EF615]"
        : "border-border hover:border-accent/20"
      }`}
      style={{ background: project.color || "#13131c", minHeight: 280 }}
    >
      {/* Cover image / placeholder */}
      <div className="relative h-40 overflow-hidden flex-shrink-0">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center"
            style={{ background: `radial-gradient(circle at 30% 50%, ${project.color}dd, #0a0a0f)` }}>
            {/* Abstract techy pattern */}
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="opacity-20">
              <rect x="10" y="10" width="20" height="20" rx="3" stroke="#7B6EF6" strokeWidth="1.5"/>
              <rect x="50" y="10" width="20" height="20" rx="3" stroke="#22d3ee" strokeWidth="1.5"/>
              <rect x="30" y="40" width="20" height="20" rx="3" stroke="#7B6EF6" strokeWidth="1.5"/>
              <line x1="20" y1="30" x2="20" y2="40" stroke="#7B6EF6" strokeWidth="1" strokeDasharray="3 3"/>
              <line x1="60" y1="30" x2="40" y2="50" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 3"/>
              <circle cx="20" cy="40" r="2" fill="#7B6EF6"/>
              <circle cx="60" cy="30" r="2" fill="#22d3ee"/>
              <circle cx="40" cy="50" r="2" fill="#7B6EF6"/>
            </svg>
          </div>
        )}

        {/* Status badge */}
        <div className={`absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-mono ${status.bg} ${status.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${status.dot} animate-pulse`}/>
          {project.status}
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-2.5 p-4 flex-1">
        {/* Category */}
        <p className="text-[10px] font-mono text-text-dim uppercase tracking-wider">{project.category}</p>

        {/* Title */}
        <h3 className="font-display font-bold text-text-primary text-base leading-tight">{project.title}</h3>

        {/* Tagline */}
        <p className="text-text-secondary text-xs leading-relaxed font-body flex-1">{project.tagline}</p>

        {/* Date */}
        <div className="flex items-center gap-1.5 text-text-dim text-[11px] font-mono">
          <CalIcon />
          {project.date}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="px-1.5 py-0.5 rounded text-[10px] font-mono text-text-dim bg-bg border border-border">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-text-dim">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-2 pt-1 border-t border-border/50">
          <a href={project.github}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[11px] font-mono text-text-dim hover:text-text-primary transition-colors px-2 py-1.5 rounded hover:bg-surface">
            <GitHubIcon /> GitHub
          </a>
          {project.live ? (
            <a href={project.live}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[11px] font-mono text-accent hover:text-accent/80 transition-colors px-2 py-1.5 rounded hover:bg-accent/10 ml-auto">
              <ExternalIcon /> Live Site
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-[11px] font-mono text-text-dim px-2 py-1.5 ml-auto opacity-40 cursor-not-allowed">
              <ExternalIcon /> Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  // Responsive card width — nearly full width on mobile, fixed on desktop
  const getCardWidth = () => {
    if (typeof window === "undefined") return 280;
    if (window.innerWidth < 480) return Math.min(window.innerWidth - 48, 300);
    return 280;
  };

  const [cardWidth, setCardWidth] = useState(getCardWidth());
  const gap = 16;

  // Update card width on resize
  useState(() => {
    const handleResize = () => setCardWidth(getCardWidth());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const scrollTo = (index) => {
    const clamped = Math.max(0, Math.min(index, projects.length - 1));
    setActiveIndex(clamped);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: clamped * (cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - dragStartX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const newIndex = Math.round(carouselRef.current.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.max(0, Math.min(newIndex, projects.length - 1)));
  };

  const handleScroll = () => {
    if (!isDragging && carouselRef.current) {
      const newIndex = Math.round(carouselRef.current.scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.max(0, Math.min(newIndex, projects.length - 1)));
    }
  };

  // Touch support for mobile swipe
  const touchStartX = useRef(0);
  const touchScrollLeft = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].pageX;
    touchScrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    const walk = (touchStartX.current - e.touches[0].pageX) * 1.2;
    carouselRef.current.scrollLeft = touchScrollLeft.current + walk;
  };

  const handleTouchEnd = () => {
    const newIndex = Math.round(carouselRef.current.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.max(0, Math.min(newIndex, projects.length - 1)));
  };

  return (
    <section>
      {/* Section header */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-[10px] font-mono text-text-dim uppercase tracking-widest">Projects</p>
        <div className="flex items-center gap-2">
          <button onClick={() => scrollTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-text-dim hover:text-text-primary hover:border-accent/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15,18 9,12 15,6"/>
            </svg>
          </button>
          <button onClick={() => scrollTo(activeIndex + 1)}
            disabled={activeIndex === projects.length - 1}
            className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-text-dim hover:text-text-primary hover:border-accent/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9,18 15,12 9,6"/>
            </svg>
          </button>
          <span className="text-[11px] font-mono text-text-dim ml-1">
            {activeIndex + 1}/{projects.length}
          </span>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`flex gap-4 overflow-x-auto pb-2 scroll-smooth ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {projects.map((project, i) => (
          <div key={project.id} style={{ minWidth: cardWidth, width: cardWidth }}>
            <ProjectCard project={project} isActive={i === activeIndex} />
          </div>
        ))}
        {/* Trailing space */}
        <div style={{ minWidth: 8 }} />
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-4">
        {projects.map((_, i) => (
          <button key={i} onClick={() => scrollTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-5 h-1.5 bg-accent"
                : "w-1.5 h-1.5 bg-border hover:bg-muted"
            }`}
          />
        ))}
      </div>
    </section>
  );
}