import { useState } from "react";
import { experience } from "../data/data";

const typeColors = {
  Work: "text-accent bg-accent/10 border-accent/20",
  Fellowship: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
};

const LocationIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
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

const ChevronIcon = ({ open }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}>
    <polyline points="6,9 12,15 18,9"/>
  </svg>
);

function ExperienceCard({ item }) {
  const [open, setOpen] = useState(false);
  const typeClass = typeColors[item.type] || "text-text-dim bg-surface border-border";

  return (
    <div className="border border-border rounded-xl overflow-hidden hover:border-accent/20 transition-all duration-300 bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-3 p-4 text-left"
      >
        {/* Logo */}
        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-[10px] font-mono font-bold shrink-0 border border-border overflow-hidden"
          style={{ background: `${item.color}20`, color: item.color }}>
          {item.image
            ? <img src={item.image} alt={item.company} className="w-full h-full object-contain p-1" onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
            : null}
          <span style={{ display: item.image ? 'none' : 'flex' }} className="w-full h-full items-center justify-center">
            {item.logo}
          </span>
        </div>

        {/* Main info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-display font-semibold text-text-primary text-sm">{item.title}</h3>
              <p className="text-text-secondary text-xs font-body mt-0.5">{item.company}</p>
            </div>
            <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border shrink-0 ${typeClass}`}>
              {item.type}
            </span>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <span className="flex items-center gap-1 text-[11px] font-mono text-text-dim">
              <CalIcon /> {item.date}
            </span>
            <span className="flex items-center gap-1 text-[11px] font-mono text-text-dim">
              <LocationIcon /> {item.location}
            </span>
          </div>
        </div>

        {/* Chevron */}
        <span className="text-text-dim shrink-0 mt-1">
          <ChevronIcon open={open} />
        </span>
      </button>

      {/* Expanded content */}
      <div style={{
        maxHeight: open ? "400px" : "0",
        opacity: open ? 1 : 0,
        overflow: "hidden",
        transition: "max-height 0.35s ease, opacity 0.25s ease",
      }}>
        <div className="px-4 pb-4 border-t border-border/50 pt-3 ml-12">
          <p className="text-text-secondary text-xs leading-relaxed font-body mb-3">
            {item.description}
          </p>
          <ul className="flex flex-col gap-1.5">
            {item.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-xs font-body text-text-secondary">
                <span className="text-accent mt-0.5 shrink-0">▸</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section>
      <p className="text-[10px] font-mono text-text-dim uppercase tracking-widest mb-4">Experience</p>
      <div className="flex flex-col gap-2.5">
        {experience.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}