import { personal } from "../data/data";

export default function ContactFooter() {
  return (
    <section className="border-t border-border pt-8 mt-2">
      <p className="text-[10px] font-mono text-text-dim uppercase tracking-widest mb-4">Contact</p>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 flex-wrap">
        {/* Email + Meeting */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-text-dim w-14">Email</span>
            <a href={`mailto:${personal.contact.email}`}
              className="text-sm font-body text-text-secondary hover:text-accent transition-colors">
              {personal.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-text-dim w-14">Meeting</span>
            <a href="#"
              className="text-sm font-body text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1">
              Book call
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15,3 21,3 21,9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Availability badge */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-emerald-400/20 bg-emerald-400/5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono text-emerald-400">
            Open to internships & freelance
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-8 pt-4 border-t border-border/50">
        <p className="text-[11px] font-mono text-text-dim">© 2025 Resume by Faliha Awan</p>

        {/* Social icons row */}
        <div className="flex items-center gap-2">
          {[
            { label: "X", href: personal.socials.twitter },
            { label: "GH", href: personal.socials.github },
            { label: "LI", href: personal.socials.linkedin },
          ].map((s) => (
            <a key={s.label} href={s.href}
              className="w-7 h-7 rounded border border-border flex items-center justify-center text-[10px] font-mono text-text-dim hover:text-text-primary hover:border-accent/40 transition-all">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}