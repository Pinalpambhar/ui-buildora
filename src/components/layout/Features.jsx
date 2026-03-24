import featureData from "../../data/features.json";
import * as Icons from "lucide-react";

export default function Features() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-buildora-600  mb-3">
            Why UIbuildora
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-neutral-900 mb-4 text-balance">
            Everything your team needs
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto">
            Stop rebuilding the same UI patterns. UIbuildora gives you a
            complete, consistent design system.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureData.map((f, i) => {
            const IconComponent = Icons[f.icon];

            return (
              <div
                key={f.title}
                className="group bg-white rounded-2xl p-7 border border-neutral-200 hover:border-buildora-200 hover:shadow-card transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-full h-11 rounded-2xl gap-2 flex items-center justify-center text-2xl mb-2.5 group-hover:scale-110 transition-transform duration-300">
                   {IconComponent && <IconComponent size={22} />}
                  <h3 className="font-display font-semibold text-neutral-900 text-lg">
                    {f.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
