import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="border-b min-h-screen relative">
      <div className="min-h-screen w-full relative">
        {/* White Sphere Grid Background */}
 <div
   className="absolute inset-0 z-[-1]"
   style={{
     backgroundImage: `
       linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
       linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
       radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
     `,
     backgroundSize: "32px 32px, 32px 32px, 100% 100%",
   }}
 />
        <div className="mx-auto flex max-w-6xl flex-col justify-center pt-30 items-center justify-center px-4 z-0">
          <div className="space-y-6 text-center">
            <p className="text-sm font-medium text-primary">Hynox Campus</p>
            <h1 className="text-balance max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
              All-in-One ERP for Schools & Colleges
            </h1>
            <p className="max-w-2xl text-pretty text-muted-foreground md:text-lg">
              From attendance to exam reports — manage everything in one
              platform.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" asChild>
                <a href="https://www.hynox.in/contact" target="_blank">
                  Request Demo
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="#pricing">Get Started</a>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-4 pt-2">
              <img
                src="/images/HYNOX.jpg"
                alt="HYNOX logo"
                className="h-10 w-10 rounded-sm object-cover"
              />
              <p className="text-sm text-muted-foreground">
                Trusted by forward-thinking institutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
