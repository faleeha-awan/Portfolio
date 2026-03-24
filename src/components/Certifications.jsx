import { certifications } from "../data/data";

export default function Certifications() {
  return (
    <section>
      <p className="text-[10px] font-mono text-text-dim uppercase tracking-widest mb-4">
        Certifications / Awards
      </p>
      <div className="flex flex-col gap-2">
        {certifications.map((item) => (
          <div key={item.id}
            className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all duration-300
              ${item.highlight
                ? "border-accent/30 bg-accent/5 hover:border-accent/50"
                : "border-border bg-card hover:border-border/80"
              }`}>
            {/* Icon */}
            <span className="text-xl shrink-0">{item.icon}</span>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-display font-semibold leading-tight
                ${item.highlight ? "text-text-primary" : "text-text-secondary"}`}>
                {item.title}
              </p>
              <p className="text-[11px] font-mono text-text-dim mt-0.5">{item.subtitle}</p>
            </div>

            {/* Year */}
            <span className="text-[11px] font-mono text-text-dim shrink-0 bg-surface px-2 py-0.5 rounded border border-border">
              {item.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}