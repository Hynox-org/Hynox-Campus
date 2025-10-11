const points = [
  "Affordable SaaS model (monthly/yearly subscription)",
  "Scalable for small schools to large universities",
  "Mobile-first design",
  "Data security with cloud hosting",
  "24/7 customer support",
  "Customizable features to meet your institution's needs",
];

export function WhyChooseUs() {
  return (
    <section id="why" className="scroll-mt-20 border-t">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="text-balance text-3xl font-semibold md:text-4xl">Why choose us?</h2>
        <p className="mt-3 text-slate-500 md:text-lg">
          The reliable, modern foundation for your institution.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {points.map((p, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow p-4"
            >
              {/* Soft blue checkmark icon */}
              <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-lg">
                <svg fill="none" viewBox="0 0 20 20" className="h-4 w-4" stroke="currentColor">
                  <path strokeLinejoin="round" strokeWidth="2" strokeLinecap="round" d="M6 10l3 3 5-5" />
                </svg>
              </div>
              <p className="text-slate-700">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
