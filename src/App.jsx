import Sidebar from "./components/Sidebar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import ContactFooter from "./components/Contactfooter";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text-primary font-body">
      {/* Subtle grid background */}
      <div className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(123,110,246,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(123,110,246,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(123,110,246,0.06) 0%, transparent 70%)" }}
      />
      <div className="fixed bottom-0 right-0 w-80 h-80 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)" }}
      />

      {/* Layout */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-6 sm:py-10 flex flex-col lg:flex-row gap-6 lg:gap-12">
        {/* Sidebar */}
        <Sidebar />

        {/* Right main content */}
        <main className="flex-1 flex flex-col gap-8 sm:gap-10 min-w-0 pb-10">
          <Intro />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <ContactFooter />
        </main>
      </div>
    </div>
  );
}