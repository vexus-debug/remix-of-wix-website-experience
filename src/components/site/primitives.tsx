import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import ceramics from "@/assets/ceramics.jpg";
import fashion from "@/assets/fashion.jpg";
import dining from "@/assets/dining.jpg";
import wellness from "@/assets/wellness.jpg";
import architecture from "@/assets/architecture.jpg";
import coffee from "@/assets/coffee.jpg";
import florist from "@/assets/florist.jpg";
import product from "@/assets/product.jpg";

export const PHOTOS = { ceramics, fashion, dining, wellness, architecture, coffee, florist, product };
const LIST = [ceramics, fashion, dining, wellness, architecture, coffee, florist, product];
export const pic = (n: number) => LIST[((n % LIST.length) + LIST.length) % LIST.length]!;

export const H2 = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <h2 className={`font-display tight text-4xl font-medium leading-[1.05] md:text-[56px] ${className}`}>{children}</h2>
);

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <div className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">{children}</div>
);

export const Btn = ({ children, dark = true, onClick, className = "" }: { children: ReactNode; dark?: boolean; onClick?: () => void; className?: string }) => (
  <button
    onClick={onClick}
    className={`rounded-full px-6 py-3 text-sm font-medium transition hover:opacity-85 ${dark ? "bg-primary text-primary-foreground" : "border border-foreground/20 bg-background"} ${className}`}
  >
    {children}
  </button>
);

export const StartLink = ({ children = "Get Started", dark = true }: { children?: ReactNode; dark?: boolean }) => (
  <Link
    to="/pricing"
    className={`inline-block rounded-full px-6 py-3 text-sm font-medium transition hover:opacity-85 ${dark ? "bg-primary text-primary-foreground" : "border border-foreground/20 bg-background"}`}
  >
    {children}
  </Link>
);

export const Sec = ({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`mx-auto max-w-[1280px] px-5 py-20 md:px-10 md:py-28 ${className}`}>{children}</section>
);

export const Mock = ({ hue = 150, label, className = "", img }: { hue?: number; label?: string; className?: string; img?: string }) => {
  const src = img ?? pic(Math.round(hue / 37));
  return (
    <div className={`group/m relative overflow-hidden rounded-2xl border border-border bg-background shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] ${className}`}>
      <div className="relative z-10 flex items-center gap-1.5 border-b border-border bg-background/95 px-3 py-2">
        {[0, 1, 2].map((i) => <span key={i} className="h-2 w-2 rounded-full bg-foreground/15" />)}
        <span className="ml-3 h-3 max-w-[50%] flex-1 rounded-full bg-muted" />
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
