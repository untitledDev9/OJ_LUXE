import type { Category } from "../data/products";
import { productsByCategory } from "../data/products";
import SmartImage from "./SmartImage";
import { ArrowIcon } from "./icons";

interface CollectionCardProps {
  category: Category;
  size?: "large" | "small";
}

export default function CollectionCard({ category, size = "small" }: CollectionCardProps) {
  const items = productsByCategory(category.id);
  const cover = items[0];

  return (
    <a
      href="#gallery"
      className={`group relative block overflow-hidden rounded-2xl border-gold-thin ${
        size === "large" ? "aspect-[4/5] sm:aspect-[16/11]" : "aspect-[4/5]"
      }`}
    >
      {cover && (
        <SmartImage
          src={cover.image}
          alt={category.label}
          label={`Add ${category.id} images`}
          className="absolute inset-0 h-full w-full"
          imgClassName="transition-transform duration-700 ease-out group-hover:scale-110"
        />
      )}
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent transition-opacity duration-500 group-hover:from-ink/95" />

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <span className="mb-2 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-bright opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          Collection
        </span>
        <h3 className="font-display text-2xl font-semibold text-ivory sm:text-3xl">{category.label}</h3>
        <p className="mt-2 max-w-xs font-sans text-sm text-ivory-dim opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:translate-y-2">
          {category.tagline}
        </p>
        <span className="mt-4 inline-flex translate-y-2 items-center gap-2 font-sans text-sm font-medium text-gold-bright opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          View collection <ArrowIcon className="h-4 w-4" />
        </span>
      </div>
    </a>
  );
}
