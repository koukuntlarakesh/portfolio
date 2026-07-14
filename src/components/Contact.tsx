"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-content",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: "140px 0",
        background: "#060606",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "400px",
          background:
            "radial-gradient(ellipse at center, rgba(249,115,22,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="contact-content"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 40px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#f97316",
            marginBottom: "20px",
          }}
        >
          04 — Contact
        </p>

        <h2
          style={{
            fontSize: "clamp(42px, 8vw, 96px)",
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: "-3px",
            textTransform: "uppercase",
            color: "white",
            marginBottom: "32px",
          }}
        >
          Let&apos;s Build
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #f97316, #fbbf24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Together
          </span>
        </h2>

        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.4)",
            maxWidth: "500px",
            margin: "0 auto 56px",
          }}
        >
          Open to AI engineering roles, consulting, and interesting projects.
          I respond within 24 hours.
        </p>

        {/* Main CTA */}
        <a
          href="mailto:koukuntlarakesh2@gmail.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "18px 40px",
            background: "#f97316",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            marginBottom: "64px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#ea6d10";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 16px 48px rgba(249,115,22,0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#f97316";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <Mail size={16} />
          koukuntlarakesh2@gmail.com
          <ArrowUpRight size={16} />
        </a>

        {/* Social links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "80px",
          }}
        >
          <a
            href="https://github.com/koukuntlarakesh"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "4px",
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              fontSize: "12px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(255,255,255,0.25)";
              el.style.color = "white";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(255,255,255,0.1)";
              el.style.color = "rgba(255,255,255,0.5)";
            }}
          >
            <FaGithub size={14} />
            GitHub
          </a>
        </div>

        {/* Footer */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "rgba(255,255,255,0.06)",
            marginBottom: "32px",
          }}
        />
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "2px",
            color: "rgba(255,255,255,0.2)",
            textTransform: "uppercase",
          }}
        >
          Rakesh Reddy Koukuntla · AI Engineer · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
