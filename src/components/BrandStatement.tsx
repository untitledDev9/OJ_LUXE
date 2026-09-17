import { siteImages } from "../data/products";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

export default function BrandStatement() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute inset-0">
        <SmartImage
          src={siteImages.statement}
          alt="OJ LUXE campaign"
          label="Add /images/brand/statement.jpg"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-ink/60" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            The OJ LUXE Standard
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-semibold leading-tight text-ivory sm:text-4xl md:text-5xl">
            Quality doesn't have to be{" "}
            <span className="text-gold-gradient">complicated.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-ivory-dim sm:text-lg">
            From everyday essentials to pieces that make a statement, OJ LUXE
            brings style, comfort and quality together.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
