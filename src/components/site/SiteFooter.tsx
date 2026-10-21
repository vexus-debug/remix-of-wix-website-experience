import { Link } from "@tanstack/react-router";

type To = "/" | "/templates" | "/features" | "/pricing";
const COLS: Record<string, [string, To | null][]> = {
  Product: [["Website Builder", "/features"], ["Website Templates", "/templates"], ["AI Website Builder", "/features"], ["Online Store", "/features"], ["Domains", "/features"], ["Pricing", "/pricing"]],
  Solutions: [["Online Store", "/templates"], ["Portfolio", "/templates"], ["Bookings", "/templates"], ["Restaurants", "/templates"], ["Blog", "/templates"]],
  Resources: [["Help Center", null], ["Blog", null], ["Guides", null], ["Developers", null]],
  Company: [["About", null], ["Careers", null], ["Contact", null], ["Privacy", null], ["Terms", null]],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 px-5 py-16 md:grid-cols-6 md:px-10">
        <div className="col-span-2">
          <Link to="/" className="font-display text-2xl font-bold tracking-tighter">Nexites</Link>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">Nexites is a website builder that gives anyone the freedom to create, design, manage and grow a professional online presence.</p>
        </div>
        {Object.entries(COLS).map(([h, ls]) => (
          <div key={h}>
            <div className="mb-3 text-sm font-semibold">{h}</div>
            {ls.map(([l, to]) =>
              to ? <Link key={l} to={to} className="block py-1 text-sm text-muted-foreground hover:text-foreground">{l}</Link>
                 : <span key={l} className="block py-1 text-sm text-muted-foreground">{l}</span>,
            )}
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-3 border-t border-border px-5 py-5 text-xs text-muted-foreground md:px-10">
        <span>© {new Date().getFullYear()} Nexites. All rights reserved.</span>
        <select aria-label="Language" className="bg-transparent"><option>English</option><option>Français</option><option>Español</option></select>
      </div>
    </footer>
  );
}
