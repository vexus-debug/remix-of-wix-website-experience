import { createFileRoute, Link } from "@tanstack/react-router";
import { Fragment, useState } from "react";
import { Check, Minus, Plus, Globe, Server, Sparkles, Headphones } from "lucide-react";
import { H2, Sec } from "@/components/site/primitives";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Find the right plan for you | Nexites" },
      { name: "description", content: "Compare Nexites plans. Start for free and upgrade when you're ready for a custom domain, online store and advanced tools." },
      { property: "og:title", content: "Nexites Pricing" },
      { property: "og:description", content: "Start for free. Upgrade for a custom domain, online store and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

type Plan = { name: string; tag: string; monthly: number; yearly: number; recommended?: boolean; features: string[] };
// Placeholder prices — replace with final Nexites pricing.
const PLANS: Plan[] = [
  { name: "Free", tag: "Get started", monthly: 0, yearly: 0, features: ["Nexites subdomain", "Reliable web hosting", "Drag-and-drop editor", "Designer templates"] },
  { name: "Starter", tag: "Get the basics", monthly: 15, yearly: 12, features: ["Custom domain", "Remove Nexites branding", "5 GB storage", "Basic marketing tools"] },
  { name: "Business", tag: "Grow your brand", monthly: 35, yearly: 28, recommended: true, features: ["Everything in Starter", "Online store & payments", "50 GB storage", "Standard marketing suite", "Bookings & events"] },
  { name: "Scale", tag: "Scale your business", monthly: 79, yearly: 64, features: ["Everything in Business", "Unlimited storage", "Advanced marketing suite", "Advanced analytics", "Priority support"] },
];

type Cell = boolean | string;
const MATRIX: [string, [string, Cell[]][]][] = [
  ["Website", [["Custom domain", [false, true, true, true]], ["Remove Nexites branding", [false, true, true, true]], ["Storage", ["500 MB", "5 GB", "50 GB", "Unlimited"]], ["Site collaborators", ["1", "2", "10", "Unlimited"]], ["AI site creation", [true, true, true, true]]]],
  ["Commerce", [["Online store", [false, false, true, true]], ["Accept online payments", [false, false, true, true]], ["Products", ["—", "—", "Unlimited", "Unlimited"]], ["Abandoned cart recovery", [false, false, true, true]]]],
  ["Marketing", [["SEO tools", [true, true, true, true]], ["Email campaigns", [false, "Basic", "Standard", "Advanced"]], ["Analytics", ["Basic", "Basic", "Standard", "Advanced"]]]],
  ["Support", [["Help Center", [true, true, true, true]], ["Customer care", ["Standard", "Standard", "Standard", "Priority"]]]],
];

const FAQ = [
  ["Can I start for free?", "Yes. You can create and publish a site on the Free plan and upgrade whenever you're ready."],
  ["Can I change plans later?", "Yes. You can upgrade or downgrade your plan at any time from your dashboard."],
  ["Do I need a custom domain?", "No, but a custom domain makes your site look professional. Paid plans let you connect one."],
  ["What payment methods are accepted?", "Major credit and debit cards are accepted for plan payments."],
];

function PricingPage() {
  const [yearly, setYearly] = useState(true);
  const [open, setOpen] = useState<number | null>(0);
  return (
    <main>
      {/* Plans panel (Wix pattern) */}
      <section className="mx-auto max-w-[1440px] px-3 pt-6 md:px-6">
        <div className="iridescent rounded-3xl px-5 pb-14 pt-16 text-center md:px-10">
          <h1 className="font-display tight text-4xl font-medium md:text-[64px] md:leading-[1.02]">Find the right plan for you</h1>
          <p className="mt-4 text-muted-foreground">Create your site for free and choose a plan when you're ready.</p>
          <div className="mt-8 inline-flex items-center rounded-full border border-border bg-background p-1 text-sm">
            <button onClick={() => setYearly(false)} className={`rounded-full px-5 py-2 ${!yearly ? "bg-primary text-primary-foreground" : ""}`}>Monthly</button>
            <button onClick={() => setYearly(true)} className={`rounded-full px-5 py-2 ${yearly ? "bg-primary text-primary-foreground" : ""}`}>Yearly <span className="ml-1 rounded-full bg-mint px-2 py-0.5 text-xs text-foreground">Save</span></button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            {[[Globe, "Hosting included"], [Sparkles, "AI creation tools"], [Server, "Secure SSL"], [Headphones, "Customer care"]].map(([I, l]) => {
              const Icon = I as typeof Globe;
              return <span key={l as string} className="flex items-center gap-1.5"><Icon className="h-3.5 w-3.5" />{l as string}</span>;
            })}
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((p) => (
              <div key={p.name} className={`relative flex flex-col rounded-2xl border bg-background p-6 ${p.recommended ? "border-foreground shadow-xl" : "border-border"}`}>
                {p.recommended && <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">Recommended</span>}
                <div className="font-display text-xl">{p.name}</div>
                <div className="text-xs text-muted-foreground">{p.tag}</div>
                <div className="mt-5 font-display text-4xl font-medium">${yearly ? p.yearly : p.monthly}<span className="text-base text-muted-foreground">/mo</span></div>
                <div className="mt-1 h-4 text-xs text-muted-foreground">{p.monthly > 0 && (yearly ? "Billed yearly" : "Billed monthly")}</div>
                <Link to="/templates" className={`mt-5 rounded-full py-2.5 text-center text-sm font-medium transition hover:opacity-85 ${p.recommended ? "bg-primary text-primary-foreground" : "border border-foreground/20"}`}>{p.monthly === 0 ? "Start for free" : "Select"}</Link>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {p.features.map((f) => <li key={f} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0" />{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <a href="#compare" className="mt-10 inline-block rounded-full border border-foreground/30 bg-background px-6 py-3 text-sm">Compare plan features</a>
        </div>
      </section>

      {/* Foundation cards */}
      <Sec>
        <div className="flex flex-wrap items-end justify-between gap-6"><H2>Get a strong foundation<br />with every plan</H2><Link to="/templates" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Start for free</Link></div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[["AI website builder", "Create your site from a single prompt, then refine it with drag and drop."], ["Designer templates", "Choose a template for your industry and customize every detail."], ["Business tools", "Run a store, take bookings and publish a blog from one place."], ["Domains", "Connect a domain you own or register a new one."], ["Web hosting", "Secure, reliable hosting is included with every site."], ["Marketing & SEO", "Built-in tools to get found and bring visitors back."]].map(([t, d], k) => (
            <div key={t} className={`flex min-h-[200px] flex-col justify-between rounded-2xl p-7 ${["bg-mint", "bg-iris", "bg-peach"][k % 3]}`}>
              <div className="font-display text-2xl">{t}</div><p className="text-sm">{d}</p>
            </div>
          ))}
        </div>
      </Sec>

      {/* Compare matrix (Shopify pattern) */}
      <Sec id="compare" className="!pt-0">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead className="sticky top-16 bg-background">
              <tr className="border-b border-border">
                <th className="w-[34%] py-6 text-left font-display text-2xl font-medium">Compare all features</th>
                {PLANS.map((p) => (
                  <th key={p.name} className="py-6 text-left font-normal">
                    <div className="font-display text-lg">{p.name}</div>
                    <div className="text-muted-foreground">${yearly ? p.yearly : p.monthly}/mo</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MATRIX.map(([group, rows]) => (
                <Fragment key={group}>
                  <tr><td colSpan={5} className="pb-3 pt-10 font-display text-xl">{group}</td></tr>
                  {rows.map(([label, cells]) => (
                    <tr key={label} className="border-b border-border">
                      <td className="py-3.5">{label}</td>
                      {cells.map((c, i) => (
                        <td key={i} className="py-3.5">
                          {c === true ? <Check className="h-4 w-4" aria-label="Included" /> : c === false ? <Minus className="h-4 w-4 text-muted-foreground" aria-label="Not included" /> : c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </Sec>

      {/* FAQ */}
      <Sec className="grid gap-10 !pt-0 md:grid-cols-[1fr_2fr]">
        <H2 className="!text-4xl">Pricing FAQs</H2>
        <div className="divide-y divide-border border-y border-border">
          {FAQ.map(([q, a], k) => (
            <div key={q}>
              <button onClick={() => setOpen(open === k ? null : k)} className="flex w-full items-center justify-between py-5 text-left font-medium">{q}<Plus className={`h-4 w-4 transition ${open === k ? "rotate-45" : ""}`} /></button>
              {open === k && <p className="fadeup pb-5 text-sm text-muted-foreground">{a}</p>}
            </div>
          ))}
        </div>
      </Sec>
    </main>
  );
}
