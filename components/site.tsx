"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

const links = [
  { label: "Studio", href: "#studio" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav(): ReactNode {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("studio");

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <Link className="wordmark" href="#top" aria-label="Orion Studio home">
        <span className="wordmark-symbol">Ω</span>
        <span>ORION<span className="wordmark-period">.</span></span>
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => {
          const id = link.href.slice(1);
          return (
            <a
              className={active === id ? "nav-link is-active" : "nav-link"}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          );
        })}
      </nav>

      <a className="nav-availability" href="#contact">
        <span className="availability-dot" />
        <span>Have a project?</span>
        <ArrowUpRight size={14} strokeWidth={1.7} />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>

      {open && (
        <motion.nav
          className="mobile-nav"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {links.map((link, index) => (
            <a
              href={link.href}
              key={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${index * 35}ms` }}
            >
              <span>0{index + 1}</span>
              {link.label}
              <ArrowUpRight size={18} />
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}): ReactNode {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reducedMotion ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ number, children }: { number: string; children: ReactNode }): ReactNode {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span className="section-label-line" />
      <span>{children}</span>
    </div>
  );
}

export function Footer(): ReactNode {
  return (
    <footer className="site-footer">
      <Link className="footer-mark" href="#top">ORION<span>.</span></Link>
      <span>Independent by nature. Intentional by design.</span>
      <a href="#top">Back to top <ArrowDownRight size={14} /></a>
      <span className="footer-year">© {new Date().getFullYear()} Orion Studio</span>
    </footer>
  );
}
