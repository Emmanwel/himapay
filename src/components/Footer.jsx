import { contact, footerLinks, socialLinks } from "../constants";
import Logo from "./Logo";
import Newsletter from "./Newsletter";

const linkClass = "focus-ring rounded transition hover:text-pink-ish";

const Footer = () => (
  <footer className="bg-black text-white-400">
    <div className="max-container">
      <div className="border-b border-white/10 py-14">
        <Newsletter />
      </div>

      <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1.2fr_1fr_1fr]">
        <div>
          <a href="/" className={`inline-block ${linkClass}`}>
            <Logo className="w-44" />
            <span className="sr-only">Home</span>
          </a>
          <p className="mt-6 max-w-sm leading-relaxed">
            Get our products and services with the click of a button. Let&apos;s
            chat about managing your finances securely, efficiently and on time.
          </p>
          <ul className="mt-8 flex gap-3">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-11 items-center justify-center rounded-full bg-white text-black focus-ring transition hover:bg-pink-ish hover:text-white"
                >
                  <social.icon className="size-4" />
                  <span className="sr-only">HimaPay on {social.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {footerLinks.map((section) => (
          <nav key={section.title} aria-label={section.title}>
            <h2 className="text-lg font-semibold text-white">
              {section.title}
            </h2>
            <ul className="mt-5 space-y-3">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="text-lg font-semibold text-white">Get in touch</h2>
          <ul className="mt-5 space-y-3">
            <li>
              <a href={`mailto:${contact.email}`} className={linkClass}>
                {contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${contact.phone}`} className={linkClass}>
                {contact.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-white/10 py-8 text-sm sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} HimaPay Limited. All rights reserved.
        </p>
        <p>Simple · Convenient · Secure</p>
      </div>
    </div>
  </footer>
);

export default Footer;
