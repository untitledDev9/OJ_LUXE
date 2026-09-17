import { useEffect } from "react";
import type { Product } from "../data/products";
import { categories } from "../data/products";
import SmartImage from "./SmartImage";
import { ArrowIcon, CloseIcon } from "./icons";

interface ProductLightboxProps {
  product: Product;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ProductLightbox({ product, onClose, onPrev, onNext }: ProductLightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const categoryLabel = categories.find((c) => c.id === product.category)?.label;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md animate-fade-in sm:p-8"
      style={{ opacity: 0, animationFillMode: "forwards", animationDuration: "300ms" }}
      onClick={onClose}
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute right-5 top-5 text-ivory-dim transition-colors hover:text-gold-bright sm:right-8 sm:top-8"
      >
        <CloseIcon className="h-7 w-7" />
      </button>

      <button
        aria-label="Previous"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border-gold-thin bg-ink/60 p-2.5 text-ivory transition-colors hover:text-gold-bright sm:left-6"
      >
        <ArrowIcon className="h-5 w-5 rotate-180" />
      </button>
      <button
        aria-label="Next"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border-gold-thin bg-ink/60 p-2.5 text-ivory transition-colors hover:text-gold-bright sm:right-6"
      >
        <ArrowIcon className="h-5 w-5" />
      </button>

      <div
        className="w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <SmartImage
          src={product.image}
          alt={product.name}
          label={`Add image for ${product.name}`}
          className="max-h-[70vh] w-full rounded-xl border-gold-thin bg-ink-raised"
          fit="contain"
          eager
        />
        <div className="mt-5 text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {categoryLabel}
          </span>
          <h3 className="mt-2 font-display text-2xl font-semibold text-ivory">{product.name}</h3>
          {product.description && (
            <p className="mx-auto mt-2 max-w-md font-sans text-sm text-ivory-dim">{product.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
