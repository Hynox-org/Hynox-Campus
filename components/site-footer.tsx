export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <img src="/images/HYNOX.jpg" alt="HYNOX logo" className="h-8 w-8 rounded-sm object-cover" />
            <div>
              <p className="font-semibold">HYNOX · EduSphere ERP</p>
              <p className="text-sm text-muted-foreground">Smart ERP for Smarter Schools</p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} HYNOX. All rights reserved.</div>
          {/* Additional content can be added here */}
        </div>
      </div>
    </footer>
  )
}
