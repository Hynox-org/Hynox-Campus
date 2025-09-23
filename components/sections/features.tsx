import { CheckCircle2 } from "lucide-react"

const items = [
  "Student & Teacher Database",
  "Attendance & Leave Management",
  "Timetable & Homework Assignments",
  "Progress Cards & Exam Reports",
  "Syllabus Tracking",
  "Announcements & Parent Communication",
  "Mobile App for Android & iOS",
  "Secure Cloud Hosting",
]

export function Features() {
  return (
    <section id="features" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="text-balance text-3xl font-semibold md:text-4xl">Everything your institution needs</h2>
        <p className="mt-3 text-muted-foreground md:text-lg">Powerful modules that work together seamlessly.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((text) => (
            <div key={text} className="flex items-start gap-3 rounded-lg border bg-card p-4">
              <CheckCircle2 className="mt-0.5 size-5 text-primary" aria-hidden="true" />
              <p className="text-pretty">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
