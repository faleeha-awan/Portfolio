import { personal } from "../data/data";

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m2 7 10 7 10-7"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

export default function Sidebar() {
  return (
    <aside className="lg:w-[260px] lg:shrink-0 lg:sticky lg:top-8 lg:self-start flex flex-col gap-6">

      {/* ── MOBILE: horizontal profile strip ── */}
      <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/40 to-cyan/20 border border-border overflow-hidden">
            {personal.photo ? (
              <img src={personal.photo} alt={personal.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-accent text-xl font-display font-bold">
                {personal.name[0]}
              </div>
            )}
          </div>
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-bg" style={{ background: "#22c55e" }} />
        </div>

        {/* Name + pronouns + socials on mobile */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="font-display font-bold text-text-primary text-xl leading-tight">{personal.name}</h1>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#22c55e" className="shrink-0">
              <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z"/>
            </svg>
          </div>
          <p className="text-text-dim font-mono text-xs mt-0.5">{personal.pronouns}</p>

          {/* Socials visible inline on mobile */}
          <div className="flex gap-2 mt-2 lg:hidden">
            <a href={personal.socials.twitter} className="text-muted hover:text-text-primary transition-colors p-1 hover:bg-surface rounded">
              <TwitterIcon />
            </a>
            <a href={personal.socials.github} className="text-muted hover:text-text-primary transition-colors p-1 hover:bg-surface rounded">
              <GitHubIcon />
            </a>
            <a href={personal.socials.linkedin} className="text-muted hover:text-text-primary transition-colors p-1 hover:bg-surface rounded">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      {/* About */}
      <div>
        <p className="text-[10px] font-mono text-text-dim uppercase tracking-widest mb-2">About</p>
        <p className="text-text-secondary text-sm leading-relaxed font-body">{personal.about}</p>
      </div>

      {/* Contact */}
      <div>
        <p className="text-[10px] font-mono text-text-dim uppercase tracking-widest mb-2">Contact</p>
        <div className="flex flex-col gap-2">
          <a href={`mailto:${personal.contact.email}`}
            className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors text-sm group">
            <span className="text-muted group-hover:text-accent transition-colors shrink-0"><EmailIcon /></span>
            <span className="truncate">{personal.contact.email}</span>
          </a>
          <a href={`https://${personal.contact.website}`}
            className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors text-sm group">
            <span className="text-muted group-hover:text-accent transition-colors shrink-0"><GlobeIcon /></span>
            {personal.contact.website}
          </a>
          <div className="flex items-center gap-2 text-text-secondary text-sm">
            <span className="text-muted shrink-0"><PhoneIcon /></span>
            {personal.contact.phone}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <p className="text-[10px] font-mono text-text-dim uppercase tracking-widest mb-2">Skills</p>
        <div className="flex flex-wrap gap-1.5">
          {personal.skills.map((skill) => (
            <span key={skill}
              className="px-2 py-0.5 rounded text-[11px] font-mono text-text-secondary bg-surface border border-border hover:border-accent/40 hover:text-accent transition-all cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div>
        <p className="text-[10px] font-mono text-text-dim uppercase tracking-widest mb-2">Languages</p>
        <div className="flex flex-wrap gap-3">
          {personal.languages.map((lang) => (
            <span key={lang.name} className="flex items-center gap-1.5 text-sm text-text-secondary font-body">
              <img
                src={`https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/flags/4x3/${lang.code}.svg`}
                width="20"
                height="15"
                alt={lang.name}
                className="rounded-sm object-cover"
                onError={(e) => { e.target.style.display = "none"; }}
              />
              {lang.name}
            </span>
          ))}
        </div>
      </div>

      {/* Socials — desktop only (mobile shows inline above) */}
      <div className="hidden lg:flex gap-3 pt-2 border-t border-border">
        <a href={personal.socials.twitter} className="text-muted hover:text-text-primary transition-colors p-1.5 hover:bg-surface rounded">
          <TwitterIcon />
        </a>
        <a href={personal.socials.github} className="text-muted hover:text-text-primary transition-colors p-1.5 hover:bg-surface rounded">
          <GitHubIcon />
        </a>
        <a href={personal.socials.linkedin} className="text-muted hover:text-text-primary transition-colors p-1.5 hover:bg-surface rounded">
          <LinkedInIcon />
        </a>
      </div>

      {/* Divider below sidebar on mobile before main content */}
      <div className="block lg:hidden border-b border-border" />
    </aside>
  );
}