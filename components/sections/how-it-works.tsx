const steps = [
  {
    title: "Setup School Data",
    desc: "Import classes, sections, subjects, and academic sessions.",
  },
  {
    title: "Teachers & Students Onboard",
    desc: "Create accounts, assign roles, and connect parents.",
  },
  {
    title: "Track, Manage & Report",
    desc: "Automate attendance, evaluate exams, and share reports.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 border-t">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="text-balance text-3xl font-semibold md:text-4xl">How it works</h2>
        <p className="mt-3 text-muted-foreground md:text-lg">Get started in minutes, not months.</p>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-lg border bg-card p-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                {i + 1}
              </div>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
