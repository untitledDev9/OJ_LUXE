import { siteImages } from "../data/products";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

const stats = [
  { label: "4+ Collections" },
  { label: "Quality-focused" },
  { label: "Benin / Abraka" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-6/5">
              <SmartImage
                src={siteImages.aboutPrimary}
                alt="OJ LUXE lifestyle"
                label="Add /images/brand/about-1.jpg"
                className="absolute inset-0 h-[80%] w-[80%] rounded-2xl border-gold-thin"
              />
              <SmartImage
                src={siteImages.aboutSecondary}
                alt="OJ LUXE product detail"
                label="Add /images/brand/about-2.jpg"
                className="absolute bottom-0 right-0 h-[60%] w-[60%] translate-x-4 translate-y-4 rounded-2xl border-gold-thin glow-gold sm:translate-x-8 sm:translate-y-8"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              About Us
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ivory sm:text-4xl md:text-5xl">
              More Than a Store.
              <br />
              It's <span className="text-gold-gradient">OJ LUXE.</span>
            </h2>
            <p className="mt-6 max-w-xl font-sans leading-relaxed text-ivory-dim">
              OJ LUXE is a lifestyle and fashion business bringing together
              fragrance, fashion, home essentials and children's wear —
              beautiful, quality products at affordable prices, with a
              shopping experience built to feel effortless from start to
              finish.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 font-sans text-sm text-ivory-dim">
              <span className="rounded-full border-gold-thin px-4 py-1.5">Fragrance</span>
              <span className="rounded-full border-gold-thin px-4 py-1.5">Fashion</span>
              <span className="rounded-full border-gold-thin px-4 py-1.5">Home Essentials</span>
              <span className="rounded-full border-gold-thin px-4 py-1.5">Children's Wear</span>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-ink-line pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-lg font-semibold text-gold-bright sm:text-xl">
                    {stat.label.split(" ")[0]}
                  </p>
                  <p className="mt-1 font-sans text-xs text-ivory-faint">
                    {stat.label.split(" ").slice(1).join(" ")}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
