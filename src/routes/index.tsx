import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Plus, ArrowUpRight, Sparkles, ArrowRight, Check, Globe, TrendingUp, CalendarCheck } from "lucide-react";
import { H2, Sec, Mock, StartLink, PHOTOS } from "@/components/site/primitives";
const { ceramics, fashion, florist } = PHOTOS;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexites — Create your website with AI and full design control" },
      { name: "description", content: "Nexites is the website builder for creating, designing and growing your business online with AI, templates, an online store and built-in tools." },
      { property: "og:title", content: "Nexites — Create your website with AI and full design control" },
      { property: "og:description", content: "Build a professional website with AI, designer templates, an online store and built-in business tools." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

};
const Widget = ({ className = "", children, delay = 0 }: { className?: string; children: ReactNode; delay?: number }) => (
  <div className={`floaty absolute z-20 rounded-2xl border border-border bg-background/95 p-3 text-left text-xs shadow-xl backdrop-blur ${className}`} style={{ animationDelay: `${delay}s` }}>{children}</div>
);


function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-20 text-center">
      <div className="iridescent absolute inset-0 -z-10 opacity-60" />
      <h1 className="font-display mx-auto max-w-4xl px-5 text-5xl font-medium leading-[1.02] md:text-[82.5px]" style={{ letterSpacing: "-1.65px" }}>
        Create your website on Nexites
      </h1>
      <p className="mx-auto mt-6 max-w-xl px-5 text-lg">Describe your idea and Nexites AI creates your site. Then make it yours with full drag-and-drop design control.</p>
      <div className="mt-8 flex flex-col items-center gap-3"><StartLink /><span className="text-xs text-muted-foreground">Start for free. No credit card required.</span></div>
      <div className="iridescent drift absolute left-1/2 top-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-3xl" />
      <div className="relative mx-auto mt-14 h-[300px] max-w-6xl px-5 md:h-[440px]">
        <Mock img={florist} label="Bloom Studio" className="floaty absolute left-[2%] top-12 h-40 w-[34%] md:h-72 md:w-[30%]" />
        <Mock img={ceramics} label="Clay & Co." className="absolute left-[25%] top-0 z-10 h-52 w-[50%] md:left-[31%] md:h-96 md:w-[38%]" />
        <div className="floaty absolute right-[2%] top-16 h-40 w-[30%] md:h-72 md:w-[28%]" style={{ animationDelay: "1.5s" }}><Mock img={fashion} label="Atelier" className="h-full w-full" /></div>
        <Widget className="left-[4%] top-0 hidden md:block" delay={0.5}><div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-chart-2" /><b>Store revenue</b></div><div className="mt-1 font-display text-xl font-semibold">+138%</div><div className="mt-2 flex h-8 items-end gap-1">{[30, 45, 40, 60, 55, 80, 95].map((h, k) => <span key={k} className="w-2 rounded-sm bg-chart-2" style={{ height: `${h}%` }} />)}</div></Widget>
        <Widget className="bottom-6 right-[6%] hidden md:block" delay={2}><div className="flex items-center gap-2"><CalendarCheck className="h-4 w-4" /><b>New booking confirmed</b></div><div className="mt-1 text-muted-foreground">Pottery class · Sat 10:00</div></Widget>
        <Widget className="-bottom-4 left-1/2 z-30 -translate-x-1/2" delay={1}><div className="flex items-center gap-2 whitespace-nowrap"><Sparkles className="h-4 w-4" /><span>Create a site for my ceramics studio</span><span className="ml-1 h-4 w-px animate-pulse bg-foreground" /></div></Widget>
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
        <div className="self-end"><p className="mb-5 text-muted-foreground">Describe what you need and Nexites AI builds it. Keep chatting, or take the wheel with drag-and-drop.</p><StartLink>Try Nexites AI</StartLink></div></div>
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
      <div className="grid gap-8 md:grid-cols-2"><H2>Website templates for any industry</H2><div className="self-end"><p className="mb-5 text-muted-foreground">Choose a designer-made template and customize every detail.</p><Link to="/templates" className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-85">Browse Templates</Link></div></div>
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
      <div className="grid gap-8 md:grid-cols-2"><H2>Radical customization, remarkably simple</H2><div className="self-end"><StartLink /></div></div>
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
      <H2 className="mx-auto max-w-3xl px-5">Meet Nexa, your<br /><span key={r} className="fadeup inline-block">{ROLES[r]}</span></H2>
      <div className="mt-8"><StartLink>Meet Nexa</StartLink></div>
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
      <div className="grid gap-8 md:grid-cols-2"><H2>Spot the gaps, grab the opportunities</H2><div className="self-end"><StartLink /></div></div>
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
      <div className="grid gap-8 md:grid-cols-2"><H2>Manage it all, wherever you are</H2><div className="self-end"><StartLink /></div></div>
      <div className="mt-12 grid items-end gap-6 md:grid-cols-[1fr_2fr]">
        <div><div className="mx-auto h-[460px] w-[230px] rounded-[36px] border-8 border-foreground bg-muted p-3"><Mock hue={150} className="h-full" label="Owner App" /></div><p className="mt-3 text-center text-sm">Nexites mobile app</p></div>
        <div><Mock hue={230} className="h-[380px]" label="Business dashboard" /><p className="mt-3 text-sm">Dashboard</p></div>
      </div>
    </Sec>
  );
}

function Steps() {
  const s = [["Define your goals", "Know what you want your site to achieve."], ["Pick a domain", "Choose a name that fits your brand."], ["Create with AI", "Let Nexites AI generate your first draft."], ["Customize your site", "Fine-tune every pixel."], ["Optimize for SEO", "Get found on search and AI engines."], ["Publish & grow", "Go live and scale with built-in tools."]];
  return (
    <Sec>
      <div className="grid gap-8 md:grid-cols-2"><H2>How to create a website for free</H2><div className="self-end"><StartLink /></div></div>
      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {s.map(([t, d], k) => <div key={t} className="border-t border-border pt-5"><div className="text-sm text-muted-foreground">0{k + 1}</div><div className="mt-1 font-display text-xl font-medium">{t}</div><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>)}
      </div>
    </Sec>
  );
}

function Showcase() {
  return (
    <section className="py-24 text-center">
      <H2>Made for every kind of business</H2>
      <div className="mt-4"><Link to="/templates" className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-85">Explore Templates</Link></div>
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
      <H2>Nexites FAQs</H2>
      <div className="divide-y divide-border border-y border-border">
        {qs.map(([q, a], k) => (
          <div key={q}><button onClick={() => setO(o === k ? null : k)} className="flex w-full items-center justify-between py-5 text-left font-medium">{q}<Plus className={`h-4 w-4 transition ${o === k ? "rotate-45" : ""}`} /></button>
            {o === k && <p className="fadeup pb-5 text-sm text-muted-foreground">{a}</p>}</div>
        ))}
      </div>
    </Sec>
  );
}


function Index() {
  return (
    <div className="font-sans text-foreground">
      <Hero />
      <Harmony />
      <Solutions />
      <Templates />
      <Customization />
      <Aria />
      <ListTabs title="Build on reliable foundations" sub="Infrastructure that scales with you." items={[["Reliability", "Secure, scalable hosting included with every site."], ["Security", "Enterprise-grade protection, 24/7 monitoring."], ["Expert core", "Technical SEO best practices built in."], ["Functionality", "Built-in business features out of the box."]]} />
      <Domain />
      <Analytics />
      <ListTabs title="A better way to run your day to day" sub="Keep operations and customers in one place." items={[["Custom automations", "Automate routine tasks and follow-ups."], ["Contact management", "One database for every customer."], ["Unified inbox", "Chat, email and social in a single inbox."]]} />
      <ListTabs title="Turn first click into repeat visits" sub="Marketing tools that grow your audience." items={[["GEO & AI visibility", "Track brand mentions across LLMs."], ["Social media manager", "Plan and publish posts."], ["Google & Meta ads", "Launch campaigns in minutes."], ["Email marketing", "Beautiful campaigns that convert."], ["SEO assistant", "Step-by-step guidance to rank."]]} />
      <OwnerApp />
      <Steps />
      <Showcase />
      <section className="iridescent py-32 text-center"><H2 className="!text-6xl md:!text-[82px]">This is what ready<br />feels like.</H2><div className="mt-8"><StartLink /></div></section>
      <Faq />
    </div>
  );
}
