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
                ? "border-[#5F2E1B60] bg-[#5F2E1B08] hover:border-[#5F2E1B]"
                : "border-border bg-card hover:border-[#5F2E1B60]"
              }`}>

            {/* Image or emoji fallback */}
            <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 flex items-center justify-center bg-surface border border-border">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain p-0.5"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
              ) : null}
              <span
                style={{ display: item.image ? "none" : "flex" }}
                className="text-lg w-full h-full items-center justify-center">
                {item.icon}
              </span>
            </div>

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