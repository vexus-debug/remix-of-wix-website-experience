import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Eyebrow, Mock, PHOTOS } from "@/components/site/primitives";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Everything you need to build and grow | Nexites" },
      { name: "description", content: "Explore Nexites features: AI website creation, drag-and-drop design, online store, bookings, marketing, SEO, domains and hosting." },
      { property: "og:title", content: "Nexites Features" },
      { property: "og:description", content: "All the tools you need to create your website and grow online." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FeaturesPage,
});

type Group = { id: string; eyebrow: string; title: string; img: string; intro: string; items: [string, string][] };
const GROUPS: Group[] = [
  { id: "ai", eyebrow: "Create a website", title: "Generate with AI", img: PHOTOS.ceramics, intro: "Describe your business and get a complete, editable site in minutes.",
    items: [["AI site creation", "Turn a short description into pages, layout and copy."], ["AI text", "Write and rewrite headlines, descriptions and posts."], ["AI images", "Create or edit visuals to match your brand."], ["Chat to edit", "Ask for changes in plain words and see them applied."], ["Brand styling", "Generate a matching color palette and font pairing."], ["Section suggestions", "Get recommended sections for your type of business."]] },
  { id: "design", eyebrow: "Create a website", title: "Design features", img: PHOTOS.architecture, intro: "Full creative control, from the first pixel to the last.",
    items: [["Drag-and-drop editor", "Place any element exactly where you want it."], ["Mobile editor", "Fine-tune how your site looks on phones."], ["Sections", "Add ready-made sections to structure each page."], ["Animations", "Bring elements to life as visitors scroll."], ["Custom fonts", "Upload your own fonts to match your brand."], ["Color & text themes", "Change your whole site's look in one place."]] },
  { id: "store", eyebrow: "Run & scale your business", title: "Online store", img: PHOTOS.product, intro: "Sell products online with a checkout built in.",
    items: [["Product catalog", "Add products with variants, images and inventory."], ["Secure checkout", "Accept online payments from your customers."], ["Orders", "Track, fulfill and manage every order."], ["Discounts", "Create coupons and sales."], ["Shipping & tax", "Set shipping rules and tax settings."], ["Abandoned carts", "Remind shoppers about items they left behind."]] },
  { id: "business", eyebrow: "Run & scale your business", title: "Bookings & services", img: PHOTOS.wellness, intro: "Let clients book, pay and manage appointments online.",
    items: [["Online booking", "Let clients book sessions from your site."], ["Calendar", "Manage availability in one calendar."], ["Events", "Sell tickets and manage guest lists."], ["Forms", "Collect leads, requests and sign-ups."], ["Contacts", "Keep every customer in one place."], ["Inbox", "Reply to messages from one inbox."]] },
  { id: "marketing", eyebrow: "Grow", title: "Marketing & SEO", img: PHOTOS.coffee, intro: "Get found, bring visitors back and turn them into customers.",
    items: [["SEO tools", "Edit page titles, descriptions and URLs."], ["Email marketing", "Design and send email campaigns."], ["Social posts", "Create posts for your social channels."], ["Analytics", "See traffic, sales and visitor behavior."], ["Blog", "Publish articles to reach more people."], ["Pop-ups", "Capture sign-ups with timed pop-ups."]] },
  { id: "hosting", eyebrow: "Foundations", title: "Domains & hosting", img: PHOTOS.florist, intro: "Everything you need to go live, included.",
    items: [["Web hosting", "Secure, reliable hosting with every site."], ["Custom domains", "Connect a domain or register a new one."], ["SSL", "Encrypted connection on every site."], ["Site backups", "Restore earlier versions of your site."], ["Multilingual", "Translate your site for new markets."], ["Collaborators", "Invite people and set their roles."]] },
];

function FeaturesPage() {
  const [active, setActive] = useState(GROUPS[0]!.id);
  useEffect(() => {
    const obs = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-40% 0px -55% 0px" });
    GROUPS.forEach((g) => { const el = document.getElementById(g.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <main className="mx-auto grid max-w-[1440px] gap-10 px-5 py-8 md:grid-cols-[220px_1fr] md:px-10">
      {/* Sticky side nav (Wix features pattern) */}
      <aside className="hidden md:block">
        <nav className="sticky top-24 space-y-1 text-sm">
          {GROUPS.map((g) => (
            <a key={g.id} href={`#${g.id}`} className={`block rounded-lg px-3 py-2 transition ${active === g.id ? "bg-muted font-medium" : "text-muted-foreground hover:text-foreground"}`}>{g.title}</a>
          ))}
        </nav>
      </aside>

      <div>
        <section className="iridescent rounded-3xl px-6 py-20 text-center md:py-28">
          <h1 className="font-display tight text-5xl font-medium md:text-[80px] md:leading-[1]">Nexites Features</h1>
          <p className="mx-auto mt-5 max-w-md text-lg">Explore all the features you need to create your website and grow online.</p>
          <Link to="/pricing" className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-85">Create your site</Link>
        </section>

        {GROUPS.map((g, gi) => (
          <section key={g.id} id={g.id} className="scroll-mt-24 py-16 md:py-20">
            <Eyebrow>{g.eyebrow}</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
              <h2 className="font-display tight text-4xl font-medium md:text-5xl">{g.title}</h2>
              <Link to="/pricing" className="inline-flex items-center gap-1 text-sm underline-offset-4 hover:underline">Get started <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className={`mt-10 grid items-center gap-10 lg:grid-cols-2 ${gi % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <Mock img={g.img} label={g.title} className="h-[340px]" />
              <div>
                <p className="mb-8 text-lg">{g.intro}</p>
                <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                  {g.items.map(([t, d]) => <div key={t}><div className="font-semibold">{t}</div><p className="mt-1 text-sm text-muted-foreground">{d}</p></div>)}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="mb-10 rounded-3xl bg-primary px-6 py-20 text-center text-primary-foreground">
          <h2 className="font-display tight text-4xl font-medium md:text-6xl">Ready to create your site?</h2>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/pricing" className="rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground">Get started</Link>
            <Link to="/templates" className="rounded-full border border-primary-foreground/40 px-6 py-3 text-sm">Browse templates</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
