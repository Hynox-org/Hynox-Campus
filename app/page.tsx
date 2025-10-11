import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { HowItWorks } from "@/components/sections/how-it-works"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Pricing } from "@/components/sections/pricing"
import { Testimonials } from "@/components/sections/testimonials"
import { CallToAction } from "@/components/sections/cta"
import { SiteFooter } from "@/components/site-footer"
import { DemoVideo } from "@/components/sections/demo-video"

export default function Page() {
  return (
    <main>
      <SiteHeader />
            <Hero />
      <DemoVideo />
      <Features />
      <HowItWorks />
      <WhyChooseUs />
      {/* <DemoVideo /> */}
      <Pricing />
      {/* <Testimonials /> */}
      <CallToAction />
      <SiteFooter />
    </main>
  )
}
