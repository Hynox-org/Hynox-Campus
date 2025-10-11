import { Button } from "@/components/ui/button";

const models = [
  {
    name: "One-time Setup",
    tag: "Own & operate",
    desc: "One-time implementation on your infra, with optional care plans for updates.",
    highlights: ["Full control", "Custom integrations", "Training & handover"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="text-balance text-3xl font-semibold md:text-4xl text-slate-900">
          Pricing, simplified
        </h2>
        <p className="mt-3 text-slate-500 md:text-lg">
          Choose the model that fits your institution. We’ll guide you with a
          free consultation.
        </p>

        {/* Free Consultation Card */}
        <div className="mt-6 rounded-xl border border-slate-100 bg-blue-50/[0.55] shadow-sm p-5 md:p-6 motion-safe:animate-fade-in">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-slate-800">Free Consultation</h3>
              <p className="text-sm text-slate-500">
                No pricing listed publicly. Tell us your needs — we’ll tailor a
                proposal for you.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700">
                EDU
              </span>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-700">
                ERP
              </span>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-red-100 text-red-700">
                Mobile
              </span>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-green-100 text-green-700">
                Integrations
              </span>
            </div>
            <Button asChild>
              <a href="https://www.hynox.in/contact" target="_blank">
                Talk to Solutions Expert
              </a>
            </Button>
          </div>
        </div>

        {/* Pricing Models */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {models.map((m, idx) => (
            <div
              key={m.name}
              className="rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md p-6 motion-safe:animate-fade-up"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-800">{m.name}</h3>
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                  {m.tag}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-500">{m.desc}</p>
              <ul className="mt-4 grid gap-2">
                {m.highlights.map((h) => (
                  <li key={h} className="text-sm text-slate-700">
                    • {h}
                  </li>
                ))}
              </ul>
              <Button className="mt-6 w-full cursor-pointer" variant="secondary">
                <a href="https://www.hynox.in/contact" target="_blank">
                  Contact Us
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
