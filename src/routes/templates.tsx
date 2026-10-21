import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronDown, Search, X, Monitor, Smartphone } from "lucide-react";
import { H2, Sec } from "@/components/site/primitives";
import { TEMPLATES, TEMPLATE_TYPES, INDUSTRIES, type Template } from "@/lib/site-data";

export const Route = createFileRoute("/templates")({
  head: () => ({
    meta: [
      { title: "Website Templates — Pick a design you love | Nexites" },
      { name: "description", content: "Browse designer-made Nexites website templates for online stores, portfolios, services, restaurants and blogs. Customize every detail." },
      { property: "og:title", content: "Website Templates | Nexites" },
      { property: "og:description", content: "Designer-made templates for every kind of business, fully customizable." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TemplatesPage,
});

const PER_PAGE = 9;

function TemplatesPage() {
  const [q, setQ] = useState("");
  const [type, setType] = useState<string>("All");
  const [industry, setIndustry] = useState<string>("All industries");
  const [page, setPage] = useState(0);
  const [preview, setPreview] = useState<Template | null>(null);

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return TEMPLATES.filter((t) =>
      (type === "All" || t.type === type) &&
      (industry === "All industries" || t.industry === industry) &&
      (!s || `${t.name} ${t.style} ${t.type} ${t.industry}`.toLowerCase().includes(s)));
  }, [q, type, industry]);
  const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
  const shown = list.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);
  const reset = (fn: () => void) => { fn(); setPage(0); };

  return (
    <main>
      {/* Title + search (Wix pattern) */}
      <section className="mx-auto max-w-[1280px] px-5 pb-8 pt-16 text-center md:px-10 md:pt-24">
        <h1 className="font-display tight text-4xl font-medium md:text-[64px] md:leading-[1.02]">Pick the website template you love</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Start with a designer-made template, then customize every detail to fit your brand.</p>
        <label className="mx-auto mt-8 flex max-w-xl items-center gap-3 border-b border-foreground/30 py-3 focus-within:border-foreground">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input value={q} onChange={(e) => reset(() => setQ(e.target.value))} placeholder="Search all templates..." className="flex-1 bg-transparent text-sm outline-none" />
          {q && <button aria-label="Clear" onClick={() => reset(() => setQ(""))}><X className="h-4 w-4" /></button>}
        </label>
      </section>

      {/* Filter bar */}
      <div className="sticky top-16 z-30 border-y border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-2 px-5 py-3 md:px-10">
          <div className="flex gap-2 overflow-x-auto">
            {TEMPLATE_TYPES.map((t) => (
              <button key={t} onClick={() => reset(() => setType(t))} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${t === type ? "bg-primary text-primary-foreground" : "border border-border hover:border-foreground/40"}`}>{t}</button>
            ))}
          </div>
          <label className="relative ml-auto flex items-center">
            <select value={industry} onChange={(e) => reset(() => setIndustry(e.target.value))} className="appearance-none rounded-full border border-border bg-background py-2 pl-4 pr-9 text-sm">
              {INDUSTRIES.map((i) => <option key={i}>{i}</option>)}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 h-4 w-4" />
          </label>
        </div>
      </div>

      {/* Grid */}
      <section className="bg-muted/60">
        <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-10">
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="font-display text-xl">{type === "All" ? "All website templates" : `${type} templates`}</h2>
            <span className="text-sm text-muted-foreground">{list.length} templates</span>
          </div>
          {shown.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-background py-20 text-center">
              <p className="font-display text-xl">No templates match your search</p>
              <button onClick={() => { setQ(""); setType("All"); setIndustry("All industries"); setPage(0); }} className="mt-4 text-sm underline">Clear filters</button>
            </div>
          ) : (
            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((t) => <TemplateCard key={t.name} t={t} onPreview={() => setPreview(t)} />)}
            </div>
          )}
          {pages > 1 && (
            <div className="mt-12 flex justify-center gap-2">
              {Array.from({ length: pages }, (_, i) => (
                <button key={i} onClick={() => setPage(i)} className={`h-10 w-10 rounded-full text-sm ${i === page ? "bg-primary text-primary-foreground" : "hover:bg-background"}`}>{i + 1}</button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* What every template gets you (Shopify pattern) */}
      <Sec>
        <div className="grid gap-10 border-y border-border py-12 md:grid-cols-2">
          <H2 className="!text-4xl">What every template gets you</H2>
          <dl className="space-y-4 text-sm">
            {[["Fully customizable", "Change any color, font, image or section with drag and drop."], ["Mobile-ready", "Every template adapts to phones and tablets automatically."], ["Business tools built in", "Add a store, bookings, forms or a blog whenever you need them."], ["Switch freely", "Start from blank or start over with a new template any time."]].map(([a, b]) => (
              <div key={a}><dt className="inline font-semibold">{a}</dt> <dd className="inline text-muted-foreground">— {b}</dd></div>
            ))}
          </dl>
        </div>
        <div className="mt-16 rounded-3xl bg-muted p-10 text-center md:p-16">
          <H2 className="!text-4xl">Prefer to start from scratch?</H2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">Describe your business and Nexites AI will create a first draft for you.</p>
          <Link to="/features" className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-85">Create with AI</Link>
        </div>
      </Sec>

      {preview && <PreviewModal t={preview} onClose={() => setPreview(null)} />}
    </main>
  );
}

function TemplateCard({ t, onPreview }: { t: Template; onPreview: () => void }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-lg border border-border bg-background shadow-sm transition group-hover:shadow-xl">
        <div className="flex items-center gap-1 border-b border-border px-3 py-2">{[0, 1, 2].map((i) => <span key={i} className="h-1.5 w-1.5 rounded-full bg-foreground/20" />)}</div>
        <div className="aspect-[16/10] overflow-hidden">
          <img src={t.img} alt={`${t.name} template preview`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        </div>
        <div className="absolute inset-0 top-6 flex items-center justify-center gap-3 bg-foreground/40 opacity-0 transition group-hover:opacity-100">
          <Link to="/pricing" className="rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground">Edit</Link>
          <button onClick={onPreview} className="rounded-full bg-background px-5 py-2 text-sm">View</button>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-sm">
        <span>{t.name} <span className="text-muted-foreground">({t.style})</span></span>
        <span className="flex gap-2">
          {t.isNew && <span className="rounded-full bg-mint px-2 py-0.5 text-xs">New</span>}
          <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">{t.type}</span>
        </span>
      </div>
    </article>
  );
}

function PreviewModal({ t, onClose }: { t: Template; onClose: () => void }) {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-background" role="dialog" aria-label={`${t.name} preview`}>
      <div className="flex h-14 items-center gap-4 border-b border-border px-5">
        <span className="font-display font-semibold">{t.name}</span>
        <span className="hidden text-sm text-muted-foreground sm:inline">{t.type} · {t.industry}</span>
        <div className="mx-auto flex rounded-full border border-border p-1">
          <button aria-label="Desktop" onClick={() => setDevice("desktop")} className={`rounded-full px-3 py-1 ${device === "desktop" ? "bg-primary text-primary-foreground" : ""}`}><Monitor className="h-4 w-4" /></button>
          <button aria-label="Mobile" onClick={() => setDevice("mobile")} className={`rounded-full px-3 py-1 ${device === "mobile" ? "bg-primary text-primary-foreground" : ""}`}><Smartphone className="h-4 w-4" /></button>
        </div>
        <Link to="/pricing" className="rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground">Edit this site</Link>
        <button aria-label="Close" onClick={onClose}><X className="h-5 w-5" /></button>
      </div>
      <div className="flex flex-1 justify-center overflow-auto bg-muted p-6">
        <div className={`fadeup overflow-hidden rounded-xl border border-border bg-background shadow-xl transition-all ${device === "desktop" ? "w-full max-w-6xl" : "w-[375px]"}`}>
          <div className="flex items-center justify-between border-b border-border px-6 py-4 text-sm">
            <b className="font-display">{t.name}</b><span className="flex gap-4 text-muted-foreground"><span>Shop</span><span>About</span><span>Contact</span></span>
          </div>
          <img src={t.img} alt="" className="h-[60vh] w-full object-cover" />
          <div className="p-8"><div className="font-display text-3xl">{t.name}</div><p className="mt-2 text-muted-foreground">A {t.style.toLowerCase()} template for {t.industry.toLowerCase()}.</p></div>
        </div>
      </div>
    </div>
  );
}
