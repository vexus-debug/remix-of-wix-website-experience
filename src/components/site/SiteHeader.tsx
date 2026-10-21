import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";

type Item = { label: string; to: "/" | "/templates" | "/features" | "/pricing" };
const MENUS: Record<string, { desc: string; items: Item[] }> = {
  Product: {
    desc: "Everything you need to create, run and grow a website.",
    items: [
      { label: "All Features", to: "/features" },
      { label: "AI Website Builder", to: "/features" },
      { label: "Website Templates", to: "/templates" },
      { label: "Online Store", to: "/features" },
      { label: "Domains & Hosting", to: "/features" },
    ],
  },
  Solutions: {
    desc: "Purpose-built tools for every kind of business.",
    items: [
      { label: "Online Store", to: "/templates" },
      { label: "Portfolio", to: "/templates" },
      { label: "Services & Bookings", to: "/templates" },
      { label: "Restaurants", to: "/templates" },
      { label: "Blog", to: "/templates" },
    ],
  },
};

const navCls = "flex items-center gap-1 text-sm hover:opacity-70";

export function SiteHeader() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur" onMouseLeave={() => setOpen(null)}>
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-8 px-5 md:px-10">
        <Link to="/" className="font-display text-2xl font-bold tracking-tighter">Nexites</Link>
        <nav className="hidden items-center gap-6 md:flex">
          {Object.keys(MENUS).map((m) => (
            <button key={m} onMouseEnter={() => setOpen(m)} onClick={() => setOpen(open === m ? null : m)} className={navCls}>
              {m}<ChevronDown className={`h-3.5 w-3.5 transition ${open === m ? "rotate-180" : ""}`} />
            </button>
          ))}
          <Link to="/templates" onMouseEnter={() => setOpen(null)} className={navCls} activeProps={{ className: "font-medium underline underline-offset-8" }}>Templates</Link>
          <Link to="/features" onMouseEnter={() => setOpen(null)} className={navCls} activeProps={{ className: "font-medium underline underline-offset-8" }}>Features</Link>
          <Link to="/pricing" onMouseEnter={() => setOpen(null)} className={navCls} activeProps={{ className: "font-medium underline underline-offset-8" }}>Pricing</Link>
        </nav>
        <div className="ml-auto flex items-center gap-5 text-sm">
          <span className="hidden cursor-pointer underline-offset-4 hover:underline sm:inline">Log In</span>
          <Link to="/pricing" className="rounded-full bg-primary px-5 py-2 text-primary-foreground transition hover:opacity-85">Get Started</Link>
          <button className="md:hidden" aria-label="Menu" onClick={() => setMobile(!mobile)}>{mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </div>

      {open && MENUS[open] && (
        <div className="fadeup absolute inset-x-0 top-16 hidden border-b border-border bg-background md:block">
          <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_2fr] gap-10 px-10 py-10">
            <div><div className="font-display text-2xl font-medium">{open}</div><p className="mt-2 max-w-xs text-sm text-muted-foreground">{MENUS[open].desc}</p></div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-3">
              {MENUS[open].items.map((l) => (
                <Link key={l.label} to={l.to} onClick={() => setOpen(null)} className="font-display text-lg hover:underline">{l.label}</Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {mobile && (
        <div className="fadeup border-t border-border bg-background px-5 py-6 md:hidden">
          {(["/", "/templates", "/features", "/pricing"] as const).map((to) => (
            <Link key={to} to={to} onClick={() => setMobile(false)} className="block border-b border-border py-4 font-display text-2xl">
              {to === "/" ? "Home" : to.slice(1, 2).toUpperCase() + to.slice(2)}
            </Link>
          ))}
          <div className="mt-6 text-sm">Log In</div>
        </div>
      )}
    </header>
  );
}
