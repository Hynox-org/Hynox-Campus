"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export function DemoVideo() {
  return (
    <section id="demo" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-semibold md:text-4xl">See Hynox Campus in action</h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Watch a quick walkthrough of key workflows students, teachers, and admins use every day.
          </p>
        </div>

        <div className="mt-6 motion-safe:animate-fade-up">
          <AspectRatio ratio={16 / 9}>
            <video
              className="h-full w-full rounded-lg border bg-black object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
              poster="/erp-software-demo.jpg"
            >
              <source src="https://kipkprekfsybarwttqkr.supabase.co/storage/v1/object/public/file-storage/hynox-campus-demo.mov" type="video/mp4" />
            </video>
          </AspectRatio>
        </div>
      </div>
    </section>
  )
}
