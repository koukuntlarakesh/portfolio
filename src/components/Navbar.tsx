"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.4s ease",
          background: scrolled || menuOpen ? "rgba(3,3,3,0.95)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          style={{
            fontSize: "15px", fontWeight: 700, letterSpacing: "2px",
            textTransform: "uppercase", color: "white", textDecoration: "none", flexShrink: 0,
          }}
        >
          RK<span style={{ color: "#f97316" }}>.</span>
        </a>

        {/* Desktop links — only rendered on desktop */}
        {!isMobile && (
          <ul style={{ display: "flex", gap: "32px", listStyle: "none", margin: 0, padding: 0 }}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  style={{
                    fontSize: "11px", letterSpacing: "2.5px", textTransform: "uppercase",
                    color: active === link.href.replace("#", "") ? "#f97316" : "rgba(255,255,255,0.45)",
                    textDecoration: "none", transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "white")}
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      active === link.href.replace("#", "") ? "#f97316" : "rgba(255,255,255,0.45)")
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <a
            href="mailto:koukuntlarakesh2@gmail.com"
            style={{
              fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase",
              padding: "9px 20px", borderRadius: "24px",
              border: "1px solid rgba(249,115,22,0.5)", color: "#f97316",
              textDecoration: "none", transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(249,115,22,0.15)";
              e.currentTarget.style.borderColor = "#f97316";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(249,115,22,0.5)";
            }}
          >
            Hire Me
          </a>
        )}

        {/* Mobile hamburger — only rendered on mobile */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              background: "none", border: "none", color: "white",
              cursor: "pointer", padding: "4px", display: "flex", alignItems: "center",
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        )}
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "fixed", top: "64px", left: 0, right: 0,
            zIndex: 49, background: "rgba(3,3,3,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "24px", display: "flex", flexDirection: "column",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              style={{
                fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase",
                color: active === link.href.replace("#", "") ? "#f97316" : "rgba(255,255,255,0.6)",
                textDecoration: "none", padding: "16px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                transition: "color 0.2s ease",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:koukuntlarakesh2@gmail.com"
            style={{
              marginTop: "20px", fontSize: "11px", letterSpacing: "2px",
              textTransform: "uppercase", padding: "12px 24px",
              borderRadius: "24px", border: "1px solid rgba(249,115,22,0.5)",
              color: "#f97316", textDecoration: "none", textAlign: "center",
            }}
          >
            Hire Me
          </a>
        </div>
      )}
    </>
  );
}
