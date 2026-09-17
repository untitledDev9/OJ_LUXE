import { business, whatsappLink } from "../data/products";
import { LocationIcon, TikTokIcon, WhatsAppIcon } from "./icons";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Why OJ LUXE", href: "#why-oj-luxe" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-line bg-ink pt-16">
      <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <a href="#home" className="font-display text-xl font-semibold tracking-[0.08em] text-ivory">
              OJ <span className="text-gold-gradient">LUXE</span>
            </a>
            <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-ivory-dim">
              Perfumes, clothing, household essentials and children's wear —
              quality products made accessible.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Explore
            </h4>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-ivory-dim transition-colors hover:text-gold-bright"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Connect
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={whatsappLink("Hi OJ LUXE, I'd like to know more about your collections.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-sm text-ivory-dim transition-colors hover:text-gold-bright"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {business.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={business.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-sm text-ivory-dim transition-colors hover:text-gold-bright"
                >
                  <TikTokIcon className="h-4 w-4" />
                  {business.tiktok}
                </a>
              </li>
              <li className="flex items-center gap-2 font-sans text-sm text-ivory-dim">
                <LocationIcon className="h-4 w-4" />
                {business.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-ink-line pt-6 text-center font-sans text-xs text-ivory-faint">
          © 2026 OJ LUXE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
