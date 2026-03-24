import { education } from "../data/data";

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

export default function Education() {
  return (
    <section>
      <p className="text-[10px] font-mono text-text-dim uppercase tracking-widest mb-4">Education</p>
      <div className="flex flex-col gap-2.5">
        {education.map((item) => (
          <div key={item.id}
            className="border border-border rounded-xl p-4 bg-card hover:border-accent/20 transition-all duration-300 flex gap-3">
            {/* Logo */}
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-[10px] font-mono font-bold shrink-0 border border-border"
              style={{ background: `${item.color}20`, color: item.color }}>
              {item.logo}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-semibold text-text-primary text-sm">{item.degree}</h3>
              <p className="text-text-secondary text-xs font-body mt-0.5">{item.institution}</p>

              <div className="flex items-center gap-3 mt-2">
                <span className="flex items-center gap-1 text-[11px] font-mono text-text-dim">
                  <CalIcon /> {item.date}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-text-dim">
                  <LocationIcon /> {item.location}
                </span>
              </div>

              <p className="text-text-secondary text-xs leading-relaxed font-body mt-2.5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}