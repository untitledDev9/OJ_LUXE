import { business, siteImages, whatsappLink } from "../data/products";
import { ArrowIcon, LocationIcon, WhatsAppIcon } from "./icons";
import SmartImage from "./SmartImage";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-24">
      <div className="absolute inset-0">
        <SmartImage
          src={siteImages.hero}
          alt="OJ LUXE — featured collection"
          label="Hero image — add /images/hero/main.jpg"
          className="h-full w-full"
          eager
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-linear-to-r from-ink/80 via-ink/20 to-transparent" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 50% at 15% 100%, color-mix(in srgb, var(--color-gold) 18%, transparent) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl animate-fade-in" style={{ animationDelay: "150ms", opacity: 0, animationFillMode: "forwards" }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border-gold-thin bg-ink/40 px-4 py-1.5 backdrop-blur-sm">
            <LocationIcon className="h-3.5 w-3.5 text-gold" />
            <span className="font-sans text-xs tracking-[0.15em] text-ivory-dim">
              {business.location.replace(" / ", " • ").toUpperCase()}
            </span>
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-ivory sm:text-5xl md:text-6xl lg:text-[4.2rem]">
            Style. Comfort.{" "}
            <span className="text-gold-gradient bg-[length:200%_auto] animate-shimmer">Quality.</span>
            <br />
            All in One Place.
          </h1>

          <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-ivory-dim sm:text-lg">
            Discover carefully selected perfumes, fashion, household essentials
            and children's wear — quality products made accessible.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#collections"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold-deep via-gold to-gold-bright px-7 py-3.5 font-sans text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Explore Our Collections
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappLink("Hi OJ LUXE, I'd like to know more about your collections.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-gold-thin bg-ink/40 px-7 py-3.5 font-sans text-sm font-medium text-ivory backdrop-blur-sm transition-colors hover:border-gold hover:text-gold-bright"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="font-sans text-[10px] tracking-[0.3em] text-ivory-faint">SCROLL</span>
        <div className="h-10 w-px bg-linear-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
