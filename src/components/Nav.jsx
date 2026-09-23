import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { merchantCta, navLinks } from "../constants";
import Button from "./Button";
import Logo from "./Logo";

const normalize = (path) =>
  path.replace(/index\.html$/, "").replace(/\/?$/, "/");

function useScrolled(offset = 8) {
  const [scrolled, setScrolled] = useState(() => window.scrollY > offset);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return scrolled;
}

const Nav = () => {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const currentPath = normalize(window.location.pathname);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => event.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onResize = (event) => event.matches && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 [view-transition-name:site-header] ${
        open
          ? "bg-white shadow-lg ring-1 ring-black/5"
          : scrolled
            ? "bg-white/85 shadow-sm ring-1 ring-black/5 backdrop-blur-lg"
            : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="max-container flex h-18 items-center justify-between gap-6"
      >
        <a href="/" className="shrink-0 rounded-lg focus-ring">
          <Logo className="w-32 sm:w-36" />
          <span className="sr-only">Home</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = currentPath.startsWith(link.href);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-[15px] font-semibold focus-ring transition ${
                    isActive
                      ? "bg-pink-ish-50 text-pink-ish-700"
                      : "text-neutral-600 hover:text-neutral-950"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Button href={merchantCta.href} size="md" className="max-sm:hidden">
            {merchantCta.label}
          </Button>
          <button
            type="button"
            onClick={() => setOpen((isOpen) => !isOpen)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex size-11 items-center justify-center rounded-full text-neutral-800 focus-ring transition hover:bg-neutral-100 lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <X aria-hidden="true" className="size-6" />
            ) : (
              <Menu aria-hidden="true" className="size-6" />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-neutral-200/70 bg-white lg:hidden"
      >
        <ul className="max-container space-y-1 py-4">
          <li>
            <a
              href="/"
              onClick={close}
              aria-current={currentPath === "/" ? "page" : undefined}
              className="block rounded-xl px-4 py-3 text-base font-semibold text-neutral-700 hover:bg-neutral-100 aria-[current=page]:bg-pink-ish-50 aria-[current=page]:text-pink-ish-700"
            >
              Home
            </a>
          </li>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                aria-current={
                  currentPath.startsWith(link.href) ? "page" : undefined
                }
                className="block rounded-xl px-4 py-3 text-base font-semibold text-neutral-700 hover:bg-neutral-100 aria-[current=page]:bg-pink-ish-50 aria-[current=page]:text-pink-ish-700"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2 sm:hidden">
            <Button href={merchantCta.href} onClick={close} className="w-full">
              {merchantCta.label}
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
