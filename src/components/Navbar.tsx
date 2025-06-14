
import React from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => (
  <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur border-b border-indigo shadow-sm">
    <nav className="flex items-center justify-between px-8 py-3 max-w-screen-2xl mx-auto">
      <span className="text-2xl font-head font-bold tracking-wide text-violet">
        Drehill
      </span>
      <ul className="hidden md:flex gap-8 font-medium text-indigo text-base">
        {links.map(link => (
          <li key={link.label}>
            <a
              href={link.href}
              className="hover:text-grape hover-underline transition-colors duration-200 px-2 py-1 rounded focus-visible:outline focus-visible:outline-violet"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <button className="md:hidden p-2 rounded hover:bg-lavender" aria-label="Open menu">
        <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
          <rect y="4" width="20" height="2" rx="1" fill="#837fd8"/>
          <rect y="9" width="20" height="2" rx="1" fill="#837fd8"/>
          <rect y="14" width="20" height="2" rx="1" fill="#837fd8"/>
        </svg>
      </button>
    </nav>
  </header>
);

export default Navbar;
