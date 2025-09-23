import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section id="demo" className="scroll-mt-20 border-t">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="rounded-lg border bg-primary text-primary-foreground">
          <div className="grid gap-6 p-6 md:grid-cols-2 md:p-10">
            <div>
              <h3 className="text-balance text-2xl font-semibold md:text-3xl">Transform Your Institution Today</h3>
              <p className="mt-2 text-primary-foreground/80">Book a free demo and see EduSphere ERP in action.</p>
            </div>
            <div className="flex items-center md:justify-end">
              <Button size="lg" variant="secondary">
                Book a Free Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
