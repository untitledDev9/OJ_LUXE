import { HeartHandIcon, LayersIcon, SparkleIcon, TagIcon } from "./icons";
import Reveal from "./Reveal";

const values = [
  {
    icon: SparkleIcon,
    title: "Quality Products",
    text: "Carefully selected products with quality in mind.",
  },
  {
    icon: TagIcon,
    title: "Affordable Prices",
    text: "Beautiful products without unnecessary complexity.",
  },
  {
    icon: HeartHandIcon,
    title: "Smooth Experience",
    text: "A simple and friendly way to discover and connect with the business.",
  },
  {
    icon: LayersIcon,
    title: "One-Stop Collection",
    text: "Fashion, fragrance, home essentials and children's wear brought together.",
  },
];

export default function WhyOJLuxe() {
  return (
    <section id="why-oj-luxe" className="relative bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Our Promise
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ivory sm:text-4xl md:text-5xl">
            Why OJ LUXE
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-ink-line bg-ink/40 p-7 transition-all duration-500 hover:border-gold/40 hover:bg-linear-to-b hover:from-gold-deep/10 hover:to-transparent">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-gold-thin text-gold transition-all duration-500 group-hover:glow-gold group-hover:text-gold-bright">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ivory">{value.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ivory-dim">{value.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
