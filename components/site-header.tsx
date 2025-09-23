"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button" // Import Button component from shadcn
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <img src="/images/HYNOX.jpg" alt="HYNOX logo" className="h-8 w-8 rounded-sm object-cover" />
          <span className="font-semibold tracking-tight">HYNOX · EduSphere ERP</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="#features" className="hover:text-primary">
            Features
          </Link>
          <Link href="#how" className="hover:text-primary">
            How it works
          </Link>
          <Link href="#why" className="hover:text-primary">
            Why us
          </Link>
          <Link href="#demo" className="hover:text-primary">
            Demo
          </Link>
          <Link href="#pricing" className="hover:text-primary">
            Pricing
          </Link>
          <Link href="#testimonials" className="hover:text-primary">
            Testimonials
          </Link>
          <Button asChild variant="default">
            <a href="#demo">Request Demo</a>
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
