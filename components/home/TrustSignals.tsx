import type { Dictionary } from "@/lib/dictionaries";
import { trustIcons } from "@/components/icons";

export default function TrustSignals({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            {dict.trust.heading}
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">{dict.trust.subheading}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.trust.items.map((item) => {
            const Icon = trustIcons[item.key];
            return (
              <div
                key={item.key}
                className="group rounded-2xl border border-slate-100 bg-slate-50/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:bg-white hover:shadow-card-hover"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-gold-400 transition-transform duration-300 group-hover:scale-110">
                  {Icon && <Icon className="h-6 w-6" aria-hidden />}
                </span>
                <h3 className="mt-5 font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
