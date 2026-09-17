import { useEffect, useState } from "react";
import { business, whatsappLink } from "../data/products";
import { MenuIcon, CloseIcon, WhatsAppIcon } from "./icons";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Why OJ LUXE", href: "#why-oj-luxe" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/90 backdrop-blur-md border-b border-ink-line" : "bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a href="#home" className="font-display text-xl font-semibold tracking-[0.08em] text-ivory sm:text-2xl">
          OJ <span className="text-gold-gradient">LUXE</span>
        </a>

        <ul className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative font-sans text-sm tracking-wide text-ivory-dim transition-colors hover:text-ivory"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink("Hi OJ LUXE, I'd like to know more about your collections.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full border-gold-thin bg-linear-to-r from-gold-deep/20 to-gold/10 px-5 py-2.5 font-sans text-sm font-medium text-gold-bright transition-all hover:glow-gold hover:from-gold-deep/30 hover:to-gold/20 lg:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Chat on WhatsApp
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-ivory lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col bg-ink/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <span className="font-display text-xl font-semibold text-ivory">
            OJ <span className="text-gold-gradient">LUXE</span>
          </span>
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-ivory">
            <CloseIcon />
          </button>
        </div>
        <ul className="mt-10 flex flex-1 flex-col items-center justify-center gap-8">
          {links.map((link, i) => (
            <li
              key={link.href}
              style={{
                transitionDelay: open ? `${i * 60 + 100}ms` : "0ms",
              }}
              className={`transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-ivory hover:text-gold-bright"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={whatsappLink("Hi OJ LUXE, I'd like to know more about your collections.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-6 mb-10 flex items-center justify-center gap-2 rounded-full border-gold-thin bg-linear-to-r from-gold-deep/20 to-gold/10 px-5 py-3.5 font-sans text-sm font-medium text-gold-bright"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Chat on WhatsApp
        </a>
        <p className="pb-6 text-center font-sans text-xs tracking-[0.2em] text-ivory-faint">
          {business.location.toUpperCase()}
        </p>
      </div>
    </header>
  );
}
