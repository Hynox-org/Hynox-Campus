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
];

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 border-t">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="text-balance text-3xl font-semibold md:text-4xl">How it works</h2>
        <p className="mt-3 text-slate-500 md:text-lg">Get started in minutes, not months.</p>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-base font-semibold text-blue-600 shadow-sm">
                {i + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-800">{s.title}</h3>
              <p className="mt-2 text-slate-500">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
