import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="border-b">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 md:grid-cols-2 md:py-20">
        <div className="space-y-6">
          <p className="text-sm font-medium text-primary">Hynox Campus</p>
          <h1 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">
            All-in-One ERP for Schools & Colleges
          </h1>
          <p className="text-pretty text-muted-foreground md:text-lg">
            From attendance to exam reports — manage everything in one platform.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <a href="https://www.hynox.in/contact" target="_blank">Request Demo</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#pricing">Get Started</a>
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <img src="/images/HYNOX.jpg" alt="HYNOX logo" className="h-10 w-10 rounded-sm object-cover" />
            <p className="text-sm text-muted-foreground">Trusted by forward-thinking institutions</p>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-4 md:p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-md bg-secondary p-4">
              <p className="text-sm text-muted-foreground">Attendance processed</p>
              <p className="mt-2 text-3xl font-semibold">1.2M+</p>
            </div>
            <div className="rounded-md bg-secondary p-4">
              <p className="text-sm text-muted-foreground">Exam reports generated</p>
              <p className="mt-2 text-3xl font-semibold">350k+</p>
            </div>
            <div className="rounded-md bg-secondary p-4">
              <p className="text-sm text-muted-foreground">Active institutions</p>
              <p className="mt-2 text-3xl font-semibold">800+</p>
            </div>
            <div className="rounded-md bg-secondary p-4">
              <p className="text-sm text-muted-foreground">Parent communications</p>
              <p className="mt-2 text-3xl font-semibold">4.1M+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
