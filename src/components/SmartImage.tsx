import { useState } from "react";

interface SmartImageProps {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
  fit?: "cover" | "contain";
}

/**
 * Renders the given image; if it fails to load (e.g. the real product
 * photo hasn't been dropped into /public/images yet), falls back to a
 * styled placeholder so the layout still looks intentional.
 */
export default function SmartImage({
  src,
  alt,
  label,
  className = "",
  imgClassName = "",
  eager = false,
  fit = "cover",
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-ink-raised ${className}`}
      >
        <div className="absolute inset-0 bg-linear-to-br from-ink-raised via-ink-soft to-ink" />
        <div className="absolute inset-0 bg-noise opacity-40" />
        <div className="relative flex flex-col items-center gap-2 px-4 text-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="text-gold/70"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M21 15l-5-5-9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-ivory-faint">
            {label ?? alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        onError={() => setFailed(true)}
        className={`h-full w-full ${fit === "cover" ? "object-cover" : "object-contain"} ${imgClassName}`}
      />
    </div>
  );
}
