import { Button } from "@/components/ui/button";

const models = [
  {
    name: "SaaS Subscription",
    tag: "Pay-as-you-scale",
    desc: "Cloud-hosted with automatic updates, uptime monitoring, and priority support.",
    highlights: [
      "Fast setup",
      "No servers to manage",
      "Regular feature updates",
    ],
  },
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
        <h2 className="text-balance text-3xl font-semibold md:text-4xl">
          Pricing, simplified
        </h2>
        <p className="mt-3 text-muted-foreground md:text-lg">
          Choose the model that fits your institution. We’ll guide you with a
          free consultation.
        </p>

        <div className="mt-6 rounded-lg border bg-card p-5 md:p-6 motion-safe:animate-fade-in">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Free Consultation</h3>
              <p className="text-sm text-muted-foreground">
                No pricing listed publicly. Tell us your needs — we’ll tailor a
                proposal for you.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  background: "var(--hynox-blue-10)",
                  color: "var(--hynox-blue-90)",
                }}
              >
                EDU
              </span>
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  background: "var(--hynox-yellow-10)",
                  color: "var(--hynox-yellow-90)",
                }}
              >
                ERP
              </span>
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  background: "var(--hynox-red-10)",
                  color: "var(--hynox-red-90)",
                }}
              >
                Mobile
              </span>
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  background: "var(--hynox-green-10)",
                  color: "var(--hynox-green-90)",
                }}
              >
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

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {models.map((m, idx) => (
            <div
              key={m.name}
              className="rounded-lg border bg-card p-6 motion-safe:animate-fade-up"
              style={{ animationDelay: `${idx * 120}ms` as unknown as string }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{m.name}</h3>
                <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  {m.tag}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
              <ul className="mt-4 grid gap-2">
                {m.highlights.map((h) => (
                  <li key={h} className="text-sm">
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
