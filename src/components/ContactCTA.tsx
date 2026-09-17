import { business, whatsappLink } from "../data/products";
import { LocationIcon, TikTokIcon, WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl border-gold-thin bg-linear-to-br from-ink-raised via-ink-soft to-ink p-10 text-center sm:p-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(50% 60% at 50% 0%, color-mix(in srgb, var(--color-gold) 14%, transparent) 0%, transparent 70%)",
            }}
          />
          <div className="relative">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Get In Touch
            </span>
            <h2 className="mx-auto mt-4 max-w-lg font-display text-3xl font-semibold text-ivory sm:text-4xl md:text-5xl">
              Ready to Discover OJ LUXE?
            </h2>
            <p className="mx-auto mt-5 max-w-md font-sans leading-relaxed text-ivory-dim">
              Have a question or want to learn more about our collections?
              Connect with us directly.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappLink("Hi OJ LUXE, I'd like to know more about your collections.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold-deep via-gold to-gold-bright px-8 py-3.5 font-sans text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 border-t border-ink-line pt-8 font-sans text-sm text-ivory-dim">
              <a
                href={business.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-gold-bright"
              >
                <TikTokIcon className="h-4 w-4" />
                {business.tiktok}
              </a>
              <span className="flex items-center gap-2">
                <LocationIcon className="h-4 w-4 text-gold" />
                {business.location}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
