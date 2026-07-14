"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "0 40px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(3,3,3,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "none",
      }}
    >
      {/* Logo */}
      <a
        href="#home"
        onClick={(e) => scrollTo(e, "#home")}
        style={{
          fontSize: "15px",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "white",
          textDecoration: "none",
        }}
      >
        RK<span style={{ color: "#f97316" }}>.</span>
      </a>

      {/* Links */}
      <ul
        style={{
          display: "flex",
          gap: "36px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              style={{
                fontSize: "11px",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color:
                  active === link.href.replace("#", "")
                    ? "#f97316"
                    : "rgba(255,255,255,0.45)",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "white")
              }
              onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color =
                  active === link.href.replace("#", "")
                    ? "#f97316"
                    : "rgba(255,255,255,0.45)")
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="mailto:koukuntlarakesh2@gmail.com"
        style={{
          fontSize: "11px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          padding: "9px 20px",
          borderRadius: "24px",
          border: "1px solid rgba(249,115,22,0.5)",
          color: "#f97316",
          textDecoration: "none",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.background = "rgba(249,115,22,0.15)";
          el.style.borderColor = "#f97316";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.background = "transparent";
          el.style.borderColor = "rgba(249,115,22,0.5)";
        }}
      >
        Hire Me
      </a>
    </nav>
  );
}
