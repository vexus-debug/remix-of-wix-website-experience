import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ChevronDown, Search, Plus, ArrowUpRight, Sparkles, ArrowRight, Check, Globe, TrendingUp, CalendarCheck, ShoppingBag } from "lucide-react";
import ceramics from "@/assets/ceramics.jpg";
import fashion from "@/assets/fashion.jpg";
import dining from "@/assets/dining.jpg";
import wellness from "@/assets/wellness.jpg";
import architecture from "@/assets/architecture.jpg";
import coffee from "@/assets/coffee.jpg";
import florist from "@/assets/florist.jpg";
import product from "@/assets/product.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Website Builder — Create your future online" },
      { name: "description", content: "Create your future on the leading website builder with AI, templates, domains, marketing and analytics." },
      { property: "og:title", content: "Website Builder — Create your future online" },
      { property: "og:description", content: "AI website creation, templates, domains and business tools in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const H2 = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <h2 className={`font-display tight text-4xl font-medium leading-[1.05] md:text-[56px] ${className}`}>{children}</h2>
);
const Btn = ({ children, dark = true }: { children: ReactNode; dark?: boolean }) => (
  <button className={`rounded-full px-6 py-3 text-sm font-medium transition hover:opacity-85 ${dark ? "bg-primary text-primary-foreground" : "border border-foreground/20 bg-background"}`}>{children}</button>
);
const Sec = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <section className={`mx-auto max-w-[1280px] px-5 py-20 md:px-10 md:py-28 ${className}`}>{children}</section>
);
const PHOTOS = [ceramics, fashion, dining, wellness, architecture, coffee, florist, product];
const pic = (n: number) => PHOTOS[((n % PHOTOS.length) + PHOTOS.length) % PHOTOS.length];
const Mock = ({ hue = 150, label, className = "", img }: { hue?: number; label?: string | undefined; className?: string; img?: string }) => {
  const src = img ?? pic(Math.round(hue / 37));
  return (
    <div className={`group/m relative overflow-hidden rounded-2xl border border-border bg-background shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] ${className}`}>
      <div className="relative z-10 flex items-center gap-1.5 border-b border-border bg-background/95 px-3 py-2">
        {[0, 1, 2].map((i) => <span key={i} className="h-2 w-2 rounded-full bg-foreground/15" />)}
        <span className="ml-3 h-3 flex-1 max-w-[50%] rounded-full bg-muted" />
      </div>
      <div className="absolute inset-0 top-8 overflow-hidden">
        <img src={src} alt={label ?? "Website preview"} loading="lazy" className="h-full w-full object-cover transition duration-[1.2s] ease-out group-hover/m:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
        <div className="absolute left-4 right-4 top-3 flex items-center justify-between text-[10px] font-medium text-background">
          <span className="font-display text-xs font-bold tracking-wide">{(label ?? "Studio").split(" ")[0]?.toUpperCase()}</span>
          <span className="hidden gap-3 sm:flex"><span>Shop</span><span>About</span><span>Contact</span></span>
        </div>
      </div>
      {label && <div className="absolute bottom-3 left-3 z-10 rounded-lg bg-background/90 px-3 py-1.5 font-display text-sm font-semibold backdrop-blur">{label}</div>}
    </div>
  );
};
const Widget = ({ className = "", children, delay = 0 }: { className?: string; children: ReactNode; delay?: number }) => (
  <div className={`floaty absolute z-20 rounded-2xl border border-border bg-background/95 p-3 text-left text-xs shadow-xl backdrop-blur ${className}`} style={{ animationDelay: `${delay}s` }}>{children}</div>
);

function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const menus: Record<string, string[]> = {
    Product: ["AI Website Builder", "Templates", "Domains", "Hosting", "Mobile App"],
    Solutions: ["Online Store", "Scheduling", "Blog", "Portfolio", "Events"],
    Resources: ["Help Center", "Blog", "Academy", "Hire a Pro"],
    Enterprise: ["Overview", "Security", "Contact Sales"],
  };
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur" onMouseLeave={() => setOpen(null)}>
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-6 px-5 md:px-10">
        <span className="font-display text-2xl font-bold tracking-tighter">WIX</span>
        <nav className="hidden items-center gap-5 text-sm md:flex">
          {[...Object.keys(menus), "Pricing"].map((m) => (
            <button key={m} onMouseEnter={() => setOpen(menus[m] ? m : null)} className="flex items-center gap-1 hover:opacity-70">
              {m}{menus[m] && <ChevronDown className="h-3.5 w-3.5" />}
            </button>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4 text-sm">
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline">Log In</span>
          <button className="rounded-full bg-primary px-5 py-2 text-primary-foreground">Get Started</button>
        </div>
      </div>
      {open && (
        <div className="fadeup absolute inset-x-0 top-16 border-b border-border bg-background">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-4 px-10 py-8 md:grid-cols-5">
            {(menus[open] ?? []).map((l) => <a key={l} className="font-display text-lg hover:underline">{l}</a>)}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-20 text-center">
      <div className="iridescent absolute inset-0 -z-10 opacity-60" />
      <h1 className="font-display mx-auto max-w-4xl px-5 text-5xl font-medium leading-[1.02] md:text-[82.5px]" style={{ letterSpacing: "-1.65px" }}>
        Create your future on the leading website builder
      </h1>
      <p className="mx-auto mt-6 max-w-xl px-5 text-lg">Meet Wix Harmony — a new way to create your site with AI, then make it yours with full design control.</p>
      <div className="mt-8 flex flex-col items-center gap-3"><Btn>Get Started</Btn><span className="text-xs text-muted-foreground">Start for free. No credit card required.</span></div>
      <div className="iridescent drift absolute left-1/2 top-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-3xl" />
      <div className="relative mx-auto mt-14 h-[300px] max-w-6xl px-5 md:h-[440px]">
        <Mock img={florist} label="Bloom Studio" className="floaty absolute left-[2%] top-12 h-40 w-[34%] md:h-72 md:w-[30%]" />
        <Mock img={ceramics} label="Clay & Co." className="absolute left-[25%] top-0 z-10 h-52 w-[50%] md:left-[31%] md:h-96 md:w-[38%]" />
        <div className="floaty absolute right-[2%] top-16 h-40 w-[30%] md:h-72 md:w-[28%]" style={{ animationDelay: "1.5s" }}><Mock img={fashion} label="Atelier" className="h-full w-full" /></div>
        <Widget className="left-[4%] top-0 hidden md:block" delay={0.5}><div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-chart-2" /><b>Store revenue</b></div><div className="mt-1 font-display text-xl font-semibold">+138%</div><div className="mt-2 flex h-8 items-end gap-1">{[30, 45, 40, 60, 55, 80, 95].map((h, k) => <span key={k} className="w-2 rounded-sm bg-chart-2" style={{ height: `${h}%` }} />)}</div></Widget>
        <Widget className="bottom-6 right-[6%] hidden md:block" delay={2}><div className="flex items-center gap-2"><CalendarCheck className="h-4 w-4" /><b>New booking confirmed</b></div><div className="mt-1 text-muted-foreground">Pottery class · Sat 10:00</div></Widget>
        <Widget className="-bottom-4 left-1/2 z-30 -translate-x-1/2" delay={1}><div className="flex items-center gap-2 whitespace-nowrap"><Sparkles className="h-4 w-4" /><span>Create a site for my ceramics studio</span><span className="ml-1 h-4 w-px animate-pulse bg-foreground" /></div></Widget>
      </div>
      <div className="mt-6 flex justify-center gap-16">
        {[["300M+", "Sites built on Wix"], ["90K+", "Sites created daily"]].map(([n, l]) => (
          <div key={n}><div className="font-display text-4xl font-medium">{n}</div><div className="text-sm text-muted-foreground">{l}</div></div>
        ))}
      </div>
    </section>
  );
}

function Harmony() {
  const [prompt, setPrompt] = useState("A minimalist site for my ceramics studio");
  const [gen, setGen] = useState(0);
  return (
    <Sec>
      <div className="grid gap-8 md:grid-cols-2"><H2>Website creation, as natural as thinking</H2>
        <div className="self-end"><p className="mb-5 text-muted-foreground">Describe what you need and Wix Harmony builds it. Keep chatting, or take the wheel with drag-and-drop.</p><Btn>Try Wix Harmony</Btn></div></div>
      <div className="mt-12 rounded-3xl border border-border bg-muted p-4 md:p-8">
        <div key={gen} className="fadeup grid h-[380px] grid-cols-3 gap-3">
          <Mock hue={30 + gen * 47} className="col-span-2 row-span-2" label={prompt.slice(0, 32)} />
          <Mock hue={90 + gen * 47} /><Mock hue={200 + gen * 47} />
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setGen((g) => g + 1); }} className="mx-auto -mt-8 flex max-w-xl gap-2 rounded-full border border-border bg-background p-2 shadow-lg">
          <input value={prompt} onChange={(e) => setPrompt(e.target.value)} className="flex-1 bg-transparent px-4 text-sm outline-none" />
          <button className="rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground">Generate</button>
        </form>
      </div>
    </Sec>
  );
}

const SOLUTIONS = ["eCommerce", "Scheduling", "Lead Management", "Portfolio", "Blog", "Online Courses", "Events", "Payments"];
function Solutions() {
  const [i, setI] = useState(0);
  return (
    <Sec>
      <div className="grid gap-8 md:grid-cols-2"><H2>Solutions for every industry</H2><p className="self-end text-muted-foreground">Get the business tools you need built right into your site.</p></div>
      <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
        <Mock key={i} hue={i * 45} label={SOLUTIONS[i] ?? ""} className="fadeup h-[420px]" />
        <div>
          {SOLUTIONS.map((s, k) => (
            <button key={s} onClick={() => setI(k)} className={`block font-display text-3xl tight transition md:text-[44px] md:leading-[1.25] ${k === i ? "text-foreground" : "text-foreground/20 hover:text-foreground/50"}`}>{s}</button>
          ))}
          <a className="mt-6 inline-flex items-center gap-1 text-sm underline">Explore {SOLUTIONS[i]} <ArrowRight className="h-4 w-4" /></a>
        </div>
      </div>
    </Sec>
  );
}

function Templates() {
  const cats = ["Business", "Store", "Creative", "Community"];
  const [c, setC] = useState(0);
  const [preview, setPreview] = useState<string | null>(null);
  const names = ["Mochi & Oak", "Dreams", "Folio", "Harbor", "Lumen", "Nest"];
  return (
    <Sec>
      <div className="grid gap-8 md:grid-cols-2"><H2>Website templates for any industry</H2><div className="self-end"><p className="mb-5 text-muted-foreground">Choose from 2,000+ designer-made templates.</p><Btn>Browse Templates</Btn></div></div>
      <div className="mt-10 flex flex-wrap gap-2">{cats.map((x, k) => <button key={x} onClick={() => setC(k)} className={`rounded-full px-4 py-2 text-sm ${k === c ? "bg-primary text-primary-foreground" : "border border-border"}`}>{x}</button>)}</div>
      <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3">
        {names.map((n, k) => (
          <button key={n + c} onClick={() => setPreview(`${cats[c]} · ${n}`)} className="fadeup text-left transition hover:-translate-y-1">
            <Mock hue={c * 70 + k * 30} className="h-56" /><div className="mt-2 text-sm font-medium">{n}</div>
          </button>
        ))}
      </div>
      {preview && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-foreground/50 p-6" onClick={() => setPreview(null)}>
          <div className="fadeup w-full max-w-3xl rounded-2xl bg-background p-5" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex justify-between"><b className="font-display">{preview}</b><button onClick={() => setPreview(null)}>Close</button></div>
            <Mock hue={c * 70} className="h-[420px]" label="Live preview" />
          </div>
        </div>
      )}
    </Sec>
  );
}

function Customization() {
  const mods = [["Vibe-style creation", "Turn a prompt into a full design."], ["Drag-and-drop freedom", "Pixel precision on a fluid canvas."], ["Components & animations", "Thousands of elements, ready to go."], ["Brand styling", "Tokens, fonts and color palettes."]];
  return (
    <Sec>
      <div className="grid gap-8 md:grid-cols-2"><H2>Radical customization, remarkably simple</H2><div className="self-end"><Btn>Get Started</Btn></div></div>
      <div className="mt-12 grid gap-5 md:grid-cols-4">
        {mods.map(([t, d], k) => (
          <div key={t}><Mock hue={k * 80 + 10} className="h-80" /><div className="mt-3 font-medium">{t}</div><p className="text-sm text-muted-foreground">{d}</p></div>
        ))}
      </div>
    </Sec>
  );
}

const ROLES = ["personal AI agent", "expert web designer", "business strategist", "hands-on collaborator", "intuitive guide"];
function Aria() {
  const [r, setR] = useState(0);
  useEffect(() => { const t = setInterval(() => setR((x) => (x + 1) % ROLES.length), 2200); return () => clearInterval(t); }, []);
  const chips = ["Improve the site's SEO", "Create a $250 pay link", "Make my site look more modern", "Draft a newsletter", "Add a booking form"];
  return (
    <section className="relative overflow-hidden py-32 text-center">
      <div className="iridescent absolute inset-0 -z-10 opacity-70" />
      <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground"><Sparkles /></div>
      <H2 className="mx-auto max-w-3xl px-5">Meet Aria, your<br /><span key={r} className="fadeup inline-block">{ROLES[r]}</span></H2>
      <div className="mt-8"><Btn>Meet Aria</Btn></div>
      <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3 px-5">
        {chips.map((c, k) => <button key={c} className="floaty rounded-full border border-border bg-background/80 px-4 py-2 text-sm shadow-sm hover:bg-background" style={{ animationDelay: `${k * 0.6}s` }}>{c}</button>)}
      </div>
    </section>
  );
}

function ListTabs({ title, items, sub }: { title: string; items: [string, string][]; sub: string }) {
  const [i, setI] = useState(0);
  return (
    <Sec>
      <div className="grid gap-8 md:grid-cols-2"><H2>{title}</H2><p className="self-end text-muted-foreground">{sub}</p></div>
      <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
        <div className="divide-y divide-border">
          {items.map(([t, d], k) => (
            <button key={t} onClick={() => setI(k)} className="block w-full py-4 text-left">
              <div className={`font-display text-3xl tight ${k === i ? "" : "text-foreground/30"}`}>{t}</div>
              {k === i && <p className="fadeup mt-2 text-sm text-muted-foreground">{d}</p>}
            </button>
          ))}
        </div>
        <Mock key={i} hue={i * 60 + 180} label={items[i]?.[0]} className="fadeup h-96" />
      </div>
    </Sec>
  );
}

function Domain() {
  const [q, setQ] = useState("");
  const [res, setRes] = useState<string | null>(null);
  return (
    <Sec className="text-center">
      <H2 className="mx-auto max-w-2xl !text-4xl">Create a website, get the perfect domain to match</H2>
      <form onSubmit={(e) => { e.preventDefault(); setRes(q.trim().toLowerCase().replace(/[^a-z0-9-]/g, "") || "mybrand"); }} className="mx-auto mt-8 flex max-w-xl gap-2 rounded-full border border-border p-2">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Type the domain you want" className="flex-1 bg-transparent px-4 outline-none" />
        <button className="rounded-full bg-primary px-6 py-2 text-sm text-primary-foreground">Search</button>
      </form>
      {res && (
        <div className="fadeup mx-auto mt-6 grid max-w-xl gap-2 text-left">
          {[".com", ".org", ".net", ".store"].map((t, k) => (
            <div key={t} className="flex items-center justify-between rounded-xl border border-border px-4 py-3">
              <span className="flex items-center gap-2"><Globe className="h-4 w-4" />{res}{t}</span>
              {k === 1 ? <span className="text-sm text-muted-foreground">Taken</span> : <span className="flex items-center gap-2 text-sm"><Check className="h-4 w-4" /> Available · <b className="rounded-full bg-mint px-2">Free for 1 year</b></span>}
            </div>
          ))}
        </div>
      )}
    </Sec>
  );
}

function Analytics() {
  const tabs = ["Subscriptions", "Marketing performance", "Real-time traffic", "Benchmark reporting"];
  const [i, setI] = useState(0);
  const bars = Array.from({ length: 12 }, (_, k) => 30 + ((k * 37 + i * 23) % 60));
  return (
    <Sec>
      <div className="grid gap-8 md:grid-cols-2"><H2>Spot the gaps, grab the opportunities</H2><div className="self-end"><Btn>Get Started</Btn></div></div>
      <div className="mt-10 flex flex-wrap gap-2">{tabs.map((t, k) => <button key={t} onClick={() => setI(k)} className={`rounded-full px-4 py-2 text-sm ${k === i ? "bg-primary text-primary-foreground" : "border border-border"}`}>{t}</button>)}</div>
      <div className="mt-6 rounded-3xl border border-border bg-muted p-8">
        <div className="font-display text-sm">{tabs[i]}</div><div className="font-display text-5xl">{(12.4 + i * 3.1).toFixed(1)}K</div>
        <div className="mt-6 flex h-48 items-end gap-2">{bars.map((h, k) => <div key={k} className="flex-1 rounded-t bg-chart-2 transition-all duration-500" style={{ height: `${h}%` }} />)}</div>
      </div>
    </Sec>
  );
}

function OwnerApp() {
  return (
    <Sec>
      <div className="grid gap-8 md:grid-cols-2"><H2>Manage it all, wherever you are</H2><div className="self-end"><Btn>Get Started</Btn></div></div>
      <div className="mt-12 grid items-end gap-6 md:grid-cols-[1fr_2fr]">
        <div><div className="mx-auto h-[460px] w-[230px] rounded-[36px] border-8 border-foreground bg-muted p-3"><Mock hue={150} className="h-full" label="Owner App" /></div><p className="mt-3 text-center text-sm">Wix Owner App</p></div>
        <div><Mock hue={230} className="h-[380px]" label="Business dashboard" /><p className="mt-3 text-sm">Dashboard</p></div>
      </div>
    </Sec>
  );
}

function Steps() {
  const s = [["Define your goals", "Know what you want your site to achieve."], ["Pick a domain", "Choose a name that fits your brand."], ["Create with AI", "Let Harmony generate your first draft."], ["Customize your site", "Fine-tune every pixel."], ["Optimize for SEO", "Get found on search and AI engines."], ["Publish & grow", "Go live and scale with built-in tools."]];
  return (
    <Sec>
      <div className="grid gap-8 md:grid-cols-2"><H2>How to create a website for free</H2><div className="self-end"><Btn>Get Started</Btn></div></div>
      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {s.map(([t, d], k) => <div key={t} className="border-t border-border pt-5"><div className="text-sm text-muted-foreground">0{k + 1}</div><div className="mt-1 font-display text-xl font-medium">{t}</div><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>)}
      </div>
    </Sec>
  );
}

function Showcase() {
  return (
    <section className="py-24 text-center">
      <H2>You're in good company</H2>
      <div className="mt-4"><Btn>Explore Sites</Btn></div>
      <div className="mt-12 flex gap-5 overflow-x-auto px-5 pb-4 md:px-10">
        {["Koa Coffee", "Studio Nara", "Peak Gym", "Linen & Co", "Orbit Labs", "Fern Florals"].map((n, k) => (
          <a key={n} className="group w-72 shrink-0 text-left transition hover:-translate-y-2">
            <Mock hue={k * 55} className="h-80 group-hover:shadow-xl" /><div className="mt-2 flex items-center justify-between text-sm font-medium">{n}<ArrowUpRight className="h-4 w-4" /></div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  const qs = [["What is a website builder?", "A platform that lets you create a website without writing code, using templates, AI and drag-and-drop tools."], ["Can I create a website for free?", "Yes. You can build and publish a site for free, and upgrade any time for a custom domain and premium features."], ["How does AI website creation work?", "Describe your business and goals, and the AI generates a complete site you can keep refining."], ["Do I need coding skills?", "No. Everything can be done visually, though developers can add custom code."], ["Can I get a domain?", "Yes, premium plans include a free domain for one year."]];
  const [o, setO] = useState<number | null>(0);
  return (
    <Sec className="grid gap-10 md:grid-cols-[1fr_2fr]">
      <H2>Website builder FAQs</H2>
      <div className="divide-y divide-border border-y border-border">
        {qs.map(([q, a], k) => (
          <div key={q}><button onClick={() => setO(o === k ? null : k)} className="flex w-full items-center justify-between py-5 text-left font-medium">{q}<Plus className={`h-4 w-4 transition ${o === k ? "rotate-45" : ""}`} /></button>
            {o === k && <p className="fadeup pb-5 text-sm text-muted-foreground">{a}</p>}</div>
        ))}
      </div>
    </Sec>
  );
}

function Footer() {
  const cols: Record<string, string[]> = {
    Product: ["Website Templates", "Website Builder", "Website Design", "Mobile App", "Domains", "Hosting"],
    Solutions: ["Online Store", "Online Booking", "Restaurant Website", "Blog", "Portfolio", "Events"],
    Community: ["Wix Studio Community", "Hire a Pro", "Partners", "Developers"],
    Support: ["Help Center", "Report Abuse", "Status", "Accessibility"],
    Company: ["About", "Careers", "Press", "Investors", "Privacy", "Terms"],
  };
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 px-5 py-16 md:grid-cols-6 md:px-10">
        {Object.entries(cols).map(([h, ls]) => <div key={h}><div className="mb-3 text-sm font-semibold">{h}</div>{ls.map((l) => <a key={l} className="block py-1 text-sm text-muted-foreground hover:text-foreground">{l}</a>)}</div>)}
        <div><span className="font-display text-2xl font-bold">WIX</span><p className="mt-3 text-xs text-muted-foreground">Create a professional online presence with a free website builder.</p></div>
      </div>
      <div className="mx-auto flex max-w-[1280px] justify-between border-t border-border px-5 py-5 text-xs text-muted-foreground md:px-10">
        <span>© 2006–2026 Website Builder</span>
        <select className="bg-transparent"><option>English</option><option>Español</option><option>Deutsch</option><option>Français</option><option>日本語</option></select>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="font-sans text-foreground">
      <Header />
      <Hero />
      <Harmony />
      <Solutions />
      <Templates />
      <Customization />
      <Aria />
      <ListTabs title="Build on reliable foundations" sub="Infrastructure that scales with you." items={[["Reliability", "Multi-cloud hosting with 99.99% uptime."], ["Security", "Enterprise-grade protection, 24/7 monitoring."], ["Expert core", "Technical SEO best practices built in."], ["Functionality", "Built-in business features out of the box."]]} />
      <Domain />
      <Analytics />
      <ListTabs title="A better way to run your day to day" sub="Keep operations and customers in one place." items={[["Custom automations", "Automate routine tasks and follow-ups."], ["Contact management", "One database for every customer."], ["Unified inbox", "Chat, email and social in a single inbox."]]} />
      <ListTabs title="Turn first click into repeat visits" sub="Marketing tools that grow your audience." items={[["GEO & AI visibility", "Track brand mentions across LLMs."], ["Social media manager", "Plan and publish posts."], ["Google & Meta ads", "Launch campaigns in minutes."], ["Email marketing", "Beautiful campaigns that convert."], ["SEO assistant", "Step-by-step guidance to rank."]]} />
      <OwnerApp />
      <Steps />
      <Showcase />
      <section className="iridescent py-32 text-center"><H2 className="!text-6xl md:!text-[82px]">This is what ready<br />feels like.</H2><div className="mt-8"><Btn>Get Started</Btn></div></section>
      <Faq />
      <Footer />
    </div>
  );
}
