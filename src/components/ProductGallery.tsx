import { useMemo, useState, type ReactNode } from "react";
import type { CategoryId } from "../data/products";
import { categories, products } from "../data/products";
import SmartImage from "./SmartImage";
import ProductLightbox from "./ProductLightbox";
import Reveal from "./Reveal";

type Filter = CategoryId | "all";

export default function ProductGallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? products : products.filter((p) => p.category === filter)),
    [filter]
  );

  const activeProduct = activeIndex !== null ? filtered[activeIndex] : null;

  const goTo = (delta: number) => {
    if (activeIndex === null) return;
    const next = (activeIndex + delta + filtered.length) % filtered.length;
    setActiveIndex(next);
  };

  return (
    <section id="gallery" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Product Showcase
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ivory sm:text-4xl md:text-5xl">
            A Closer Look
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-12">
          <FilterPill active={filter === "all"} onClick={() => setFilter("all")}>
            All
          </FilterPill>
          {categories.map((c) => (
            <FilterPill key={c.id} active={filter === c.id} onClick={() => setFilter(c.id)}>
              {c.label}
            </FilterPill>
          ))}
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {filtered.map((product, i) => (
            <button
              key={product.id}
              onClick={() => setActiveIndex(i)}
              className="group relative aspect-square overflow-hidden rounded-xl border-gold-thin text-left transition-transform duration-300 hover:-translate-y-1"
            >
              <SmartImage
                src={product.image}
                alt={product.name}
                label={product.name}
                className="h-full w-full"
                imgClassName="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 right-3 translate-y-2 font-sans text-xs font-medium text-ivory opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {product.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeProduct && (
        <ProductLightbox
          product={activeProduct}
          onClose={() => setActiveIndex(null)}
          onPrev={() => goTo(-1)}
          onNext={() => goTo(1)}
        />
      )}
    </section>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-5 py-2 font-sans text-sm font-medium transition-all ${
        active
          ? "border-gold-thin bg-linear-to-r from-gold-deep/25 to-gold/15 text-gold-bright"
          : "border border-ink-line text-ivory-dim hover:border-gold/40 hover:text-ivory"
      }`}
    >
      {children}
    </button>
  );
}
