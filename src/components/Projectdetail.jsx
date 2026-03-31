const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15,3 21,3 21,9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const statusConfig = {
  "Live": { dot: "bg-emerald-400", text: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/20" },
  "In Progress": { dot: "bg-amber-400", text: "text-amber-400", bg: "bg-amber-400/10 border-amber-400/20" },
  "Hackathon": { dot: "bg-cyan-400", text: "text-cyan-400", bg: "bg-cyan-400/10 border-cyan-400/20" },
};

export default function ProjectDetail({ project, onClose }) {
  if (!project) return null;
  const status = statusConfig[project.status] || statusConfig["In Progress"];
  const d = project.detail;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-bg/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Slide-over panel */}
      <div className="fixed top-0 right-0 h-full z-50 w-full max-w-xl bg-surface border-l border-border shadow-2xl overflow-y-auto"
        style={{ animation: "slideInRight 0.3s ease forwards" }}>

        {/* Header */}
        <div className="sticky top-0 bg-surface/95 backdrop-blur border-b border-border px-6 py-4 flex items-center justify-between z-10">
          <button onClick={onClose}
            className="flex items-center gap-2 text-text-dim hover:text-text-primary transition-colors text-sm font-mono">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"/>
            </svg>
            Back to projects
          </button>

          {/* Links */}
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-text-dim hover:text-text-primary hover:border-accent/40 transition-all text-xs font-mono">
                <GitHubIcon /> GitHub
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-all text-xs font-mono">
                <ExternalIcon /> Live Site
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6 flex flex-col gap-8">

          {/* Title block */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-mono ${status.bg} ${status.text}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${status.dot} animate-pulse`}/>
                {project.status}
              </span>
              <span className="text-[10px] font-mono text-text-dim uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            <h2 className="font-display font-bold text-text-primary text-2xl leading-tight">
              {project.title}
            </h2>
            <p className="text-text-secondary font-body text-sm leading-relaxed">
              {project.tagline}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mt-1">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono text-text-dim bg-card border border-border">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Problem */}
          {d?.problem && (
            <div>
              <p className="text-[10px] font-mono text-text-dim uppercase tracking-widest mb-3">
                The Problem
              </p>
              <p className="text-text-secondary text-sm leading-relaxed font-body">
                {d.problem}
              </p>
            </div>
          )}

          {/* Solution */}
          {d?.solution && (
            <div>
              <p className="text-[10px] font-mono text-text-dim uppercase tracking-widest mb-3">
                The Solution
              </p>
              <p className="text-text-secondary text-sm leading-relaxed font-body">
                {d.solution}
              </p>
            </div>
          )}

          {/* Impact */}
          {d?.impact?.length > 0 && (
            <div>
              <p className="text-[10px] font-mono text-text-dim uppercase tracking-widest mb-3">
                Impact & Results
              </p>
              <ul className="flex flex-col gap-2">
                {d.impact.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm font-body text-text-secondary">
                    <span className="text-accent mt-0.5 shrink-0 font-mono">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical highlights */}
          {d?.highlights?.length > 0 && (
            <div className="bg-card border border-border rounded-xl p-4">
              <p className="text-[10px] font-mono text-text-dim uppercase tracking-widest mb-3">
                Technical Highlights
              </p>
              <ul className="flex flex-col gap-2">
                {d.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm font-body text-text-secondary">
                    <span className="text-cyan-400 mt-0.5 shrink-0 font-mono text-xs">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Date */}
          <p className="text-[11px] font-mono text-text-dim">{project.date}</p>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </>
  );
}