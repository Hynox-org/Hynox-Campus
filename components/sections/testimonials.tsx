export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 border-t">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="text-balance text-3xl font-semibold md:text-4xl">What institutions say</h2>
        <p className="mt-3 text-muted-foreground md:text-lg">Trusted by schools and colleges across regions.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <figure key={i} className="rounded-lg border bg-card p-6">
              <blockquote className="text-pretty">
                “EduSphere ERP helped streamline attendance and reports—parents love the transparency.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">Principal, Placeholder High School</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
