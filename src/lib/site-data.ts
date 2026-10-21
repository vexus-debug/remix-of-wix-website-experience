import { pic } from "@/components/site/primitives";

export type Template = { name: string; style: string; type: string; industry: string; img: string; isNew?: boolean };

export const TEMPLATE_TYPES = ["All", "Online Store", "Business", "Portfolio", "Services", "Restaurants", "Blog"] as const;
export const INDUSTRIES = ["All industries", "Fashion", "Home & Decor", "Food & Drink", "Health & Wellness", "Architecture", "Beauty", "Creative"] as const;

const RAW: [string, string, string, string, boolean?][] = [
  ["Clay & Co.", "Minimal", "Online Store", "Home & Decor", true],
  ["Atelier Noir", "Editorial", "Online Store", "Fashion"],
  ["Ember Table", "Warm", "Restaurants", "Food & Drink"],
  ["Still Studio", "Soft", "Services", "Health & Wellness", true],
  ["Form & Line", "Modern", "Portfolio", "Architecture"],
  ["Morning Ritual", "Fresh", "Online Store", "Food & Drink"],
  ["Petal House", "Playful", "Business", "Creative"],
  ["Objet", "Simple", "Online Store", "Home & Decor"],
  ["Linen Days", "Earthy", "Blog", "Fashion"],
  ["Hearth", "Classic", "Restaurants", "Food & Drink", true],
  ["Calm Rooms", "Serene", "Services", "Health & Wellness"],
  ["Monolith", "Bold", "Portfolio", "Architecture"],
  ["Bloom Studio", "Romantic", "Business", "Creative"],
  ["Vessel", "Crafted", "Online Store", "Home & Decor"],
  ["Glow Lab", "Clean", "Services", "Beauty", true],
  ["Field Notes", "Editorial", "Blog", "Creative"],
  ["Roast & Pour", "Warm", "Business", "Food & Drink"],
  ["Studio North", "Minimal", "Portfolio", "Creative"],
];

export const TEMPLATES: Template[] = RAW.map(([name, style, type, industry, isNew], i) => ({ name, style, type, industry, isNew, img: pic(i) }));
