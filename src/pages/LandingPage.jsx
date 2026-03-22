import { Link } from "react-router-dom";
import { ArrowRight, Copy, Star } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Features from "../components/layout/Features";

// ---------- Hero ----------
function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-neutral-950 pt-20 pb-28 px-4">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 dark:opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-buildora-100/40 to-transparent dark:from-buildora-950/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-buildora-50 dark:bg-buildora-950 border border-buildora-200 dark:border-buildora-800 text-buildora-700 dark:text-buildora-300 text-xs font-medium mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-buildora-500 animate-pulse-soft" />
          240+ components · Updated weekly
          <ArrowRight size={11} />
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-6xl font-bold text-neutral-900 dark:text-white leading-[1.08] tracking-tight mb-6 text-balance animate-fade-up animation-delay-100">
          Ship your Product <span className="gradient-text">10× faster</span>
          <br />
          with premium UI
        </h1>

        <p className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animation-delay-200">
          Accurate library of production-ready React components, SaaS sections,
          and full-page templates — built with Tailwind CSS and obsessive
          attention to detail.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-up animation-delay-300">
          <Link to="/components" className="btn-primary text-base px-7 py-3.5">
            Browse components <ArrowRight size={16} />
          </Link>
          <Link to="/templates" className="btn-secondary text-base px-7 py-3.5">
            View templates
          </Link>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-6 mt-12 animate-fade-up animation-delay-400">
          <div className="flex -space-x-2">
            {["6374f1", "10b981", "f59e0b", "ef4444", "8b5cf6", "10b981"].map(
              (color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white dark:border-neutral-950 flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: `#${color}` }}
                >
                  {["PP", "AS", "MS", "PG", "DV", "HB"][i]}
                </div>
              ),
            )}
          </div>
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
              2,400+
            </span>{" "}
            developers building with UIBuildora
          </div>
          <div className="hidden sm:flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className="text-amber-400 fill-amber-400"
              />
            ))}
            <span className="text-sm text-neutral-500 ml-1">4.9</span>
          </div>
        </div>
      </div>

      {/* UI Showcase */}
      <div className="relative max-w-6xl mx-auto mt-20 animate-fade-up animation-delay-500">
        <ShowcasePreview />
      </div>
    </section>
  );
}

function ShowcasePreview() {
  return (
    <div className="relative">
      {/* Fade overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none rounded-b-3xl" />

      <div className="bg-neutral-950 rounded-3xl border border-neutral-800 overflow-hidden shadow-card">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-neutral-800">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <div className="flex-1 flex justify-center">
            <div className="bg-neutral-800 rounded-lg px-4 py-1 text-xs text-neutral-400 font-mono">
              uibuildora.com/components
            </div>
          </div>
        </div>

        {/* App layout preview */}
        <div className="flex h-72">
          {/* Sidebar */}
          <div className="w-44 border-r border-neutral-800 p-3 flex flex-col gap-1 flex-shrink-0">
            {[
              { label: "All Components", active: false },
              { label: "Buttons", active: true },
              { label: "Cards", active: false },
              { label: "Forms", active: false },
              { label: "Navigation", active: false },
              { label: "Modals", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`px-2.5 py-1.5 rounded-lg text-[11px] font-medium ${
                  item.active
                    ? "bg-buildora-600/20 text-buildora-400"
                    : "text-neutral-500"
                }`}
              >
                {item.label}
              </div>
            ))}
          </div>

          {/* Main */}
          <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="h-7 bg-neutral-800 rounded-lg flex-1 max-w-xs" />
              <div className="h-7 w-20 bg-buildora-600 rounded-lg opacity-80" />
            </div>
            <div className="grid grid-cols-3 gap-3 flex-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-neutral-900 rounded-xl border border-neutral-800 flex flex-col overflow-hidden"
                >
                  <div
                    className={`flex-1 flex items-center justify-center p-3 ${i === 0 ? "bg-neutral-800/60" : ""}`}
                  >
                    {i === 0 ? (
                      <div className="flex gap-1.5">
                        <div className="h-6 w-14 bg-buildora-600 rounded-lg" />
                        <div className="h-6 w-12 bg-neutral-700 rounded-lg" />
                      </div>
                    ) : i === 1 ? (
                      <div className="w-full max-w-[80px] bg-neutral-800 rounded-lg p-2">
                        <div className="h-1.5 bg-neutral-600 rounded w-3/4 mb-1.5" />
                        <div className="h-1 bg-neutral-700 rounded w-full mb-1" />
                        <div className="h-1 bg-neutral-700 rounded w-2/3" />
                      </div>
                    ) : i === 2 ? (
                      <div className="flex gap-1">
                        <div className="px-2 py-0.5 bg-buildora-900/60 text-buildora-400 rounded-full text-[9px]">
                          New
                        </div>
                        <div className="px-2 py-0.5 bg-emerald-900/40 text-emerald-400 rounded-full text-[9px]">
                          Active
                        </div>
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-neutral-700" />
                    )}
                  </div>
                  <div className="px-2.5 py-2 border-t border-neutral-800">
                    <div className="h-1.5 bg-neutral-700 rounded w-16 mb-1" />
                    <div className="h-1 bg-neutral-800 rounded w-10" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code panel */}
          <div className="w-56 border-l border-neutral-800 p-4 flex flex-col gap-3 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="px-2 py-0.5 bg-neutral-700 text-neutral-300 rounded text-[10px]">
                  React
                </div>
                <div className="px-2 py-0.5 text-neutral-600 rounded text-[10px]">
                  HTML
                </div>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-neutral-500">
                <Copy size={10} /> Copy
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              {[
                { w: "w-full", color: "bg-violet-500/30" },
                { w: "w-5/6", color: "bg-neutral-700" },
                { w: "w-full", color: "bg-neutral-700" },
                { w: "w-4/5", color: "bg-buildora-500/30" },
                { w: "w-full", color: "bg-neutral-700" },
                { w: "w-3/4", color: "bg-emerald-500/30" },
                { w: "w-full", color: "bg-neutral-700" },
                { w: "w-5/6", color: "bg-neutral-700" },
                { w: "w-2/3", color: "bg-amber-500/30" },
                { w: "w-full", color: "bg-neutral-700" },
                { w: "w-4/5", color: "bg-neutral-700" },
                { w: "w-3/5", color: "bg-violet-500/30" },
              ].map((line, i) => (
                <div
                  key={i}
                  className={`h-1.5 ${line.color} rounded ${line.w}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Stats Strip ----------
function StatsStrip() {
  const stats = [
    { value: "240+", label: "Components" },
    { value: "40+", label: "Sections" },
    { value: "12", label: "Templates" },
    { value: "100%", label: "Free to start" },
  ];
  return (
    <div className="border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.value} className="text-center">
            <p className="font-display text-4xl font-bold gradient-text">
              {s.value}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsStrip />
        <Features />
      </main>
    </div>
  );
};

export default LandingPage;
