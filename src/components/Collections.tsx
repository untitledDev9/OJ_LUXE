import { categories } from "../data/products";
import CollectionCard from "./CollectionCard";
import Reveal from "./Reveal";

export default function Collections() {
  return (
    <section id="collections" className="relative bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Our Range
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ivory sm:text-4xl md:text-5xl">
            Explore Our Collections
          </h2>
          <p className="mt-5 font-sans leading-relaxed text-ivory-dim">
            Four carefully curated categories, one brand — everything OJ LUXE
            brings to your everyday life.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-12">
          <Reveal delay={80} className="lg:col-span-7">
            <CollectionCard category={categories[0]} size="large" />
          </Reveal>
          <Reveal delay={140} className="lg:col-span-5">
            <CollectionCard category={categories[1]} size="large" />
          </Reveal>
          <Reveal delay={200} className="lg:col-span-5">
            <CollectionCard category={categories[2]} size="large" />
          </Reveal>
          <Reveal delay={260} className="lg:col-span-7">
            <CollectionCard category={categories[3]} size="large" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
