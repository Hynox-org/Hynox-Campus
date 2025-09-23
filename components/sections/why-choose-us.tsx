const points = [
  "Affordable SaaS model (monthly/yearly subscription)",
  "Scalable for small schools to large universities",
  "Mobile-first design",
  "Data security with cloud hosting",
  "24/7 customer support",
  "Customizable features to meet your institution's needs",
]

export function WhyChooseUs() {
  return (
    <section id="why" className="scroll-mt-20 border-t">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="text-balance text-3xl font-semibold md:text-4xl">Why choose us?</h2>
        <p className="mt-3 text-muted-foreground md:text-lg">The reliable, modern foundation for your institution.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {points.map((p, index) => (
            <div key={index} className="rounded-lg border bg-card p-4">
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
