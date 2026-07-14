"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    number: "01",
    title: "Personal AI Assistant",
    subtitle: "WhatsApp Personal AI Agent",
    description:
      "Autonomous personal AI via WhatsApp using Twilio, FastAPI, LangChain, LangGraph, Claude, and OpenAI. Multi-model orchestration with MCP connectors, CrewAI multi-agent planning, and RAG over personal knowledge with vector embeddings.",
    tags: ["Claude API", "OpenAI", "LangChain", "CrewAI", "FastAPI", "Twilio", "RAG", "Railway"],
    github: "https://github.com/koukuntlarakesh/PersonalAI.git",
    color: "#f97316",
  },
  {
    number: "02",
    title: "DesiVest",
    subtitle: "Cross-Border Investment & Tax Intelligence ",
    description:
      "Full-stack fintech SaaS for 4.5M+ US-based NRIs — the only tool unifying US and Indian brokerage portfolios into a single dual-currency dashboard. Deterministic Sell Simulator answers \"if I sell today, what do I keep after both countries' taxes?\" — computing US STCG/LTCG/NIIT, Indian §111A/§112A, and DTAA treaty relief with hold-longer suggestions, backed by 70+ regression tests at 100% branch coverage. Direct broker integrations via MCP + OAuth 2.1 (Robinhood, Zerodha Kite) with Fernet-encrypted token storage and a code-enforced read-only whitelist.",
    tags: ["Python", "FastAPI", "Next.js", "PostgreSQL", "MCP", "OAuth 2.1", "DTAA", "FIFO"],
    github: "https://github.com/koukuntlarakesh",
    color: "#34d399",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        padding: "120px 0",
        background: "#030303",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#f97316",
            marginBottom: "20px",
          }}
        >
          03 — Projects
        </p>

        <h2
          style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-2px",
            textTransform: "uppercase",
            color: "white",
            marginBottom: "80px",
          }}
        >
          Things I&apos;ve
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #f97316, #fbbf24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Built
          </span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {PROJECTS.map((project) => (
            <div
              key={project.number}
              className="project-card"
              style={{
                padding: "40px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px",
                display: "grid",
                gridTemplateColumns: "80px 1fr auto",
                gap: "32px",
                alignItems: "start",
                transition: "all 0.4s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = `rgba(${
                  project.color === "#f97316"
                    ? "249,115,22"
                    : project.color === "#60a5fa"
                    ? "96,165,250"
                    : "167,139,250"
                },0.04)`;
                el.style.borderColor = `${project.color}40`;
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(255,255,255,0.02)";
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Number */}
              <div>
                <span
                  style={{
                    fontSize: "48px",
                    fontWeight: 900,
                    lineHeight: 1,
                    color: "rgba(255,255,255,0.06)",
                    fontFamily: "var(--font-geist-mono)",
                    letterSpacing: "-2px",
                  }}
                >
                  {project.number}
                </span>
              </div>

              {/* Content */}
              <div>
                <p
                  style={{
                    fontSize: "10px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: project.color,
                    marginBottom: "8px",
                    fontWeight: 600,
                  }}
                >
                  {project.subtitle}
                </p>
                <h3
                  style={{
                    fontSize: "clamp(22px, 3vw, 32px)",
                    fontWeight: 800,
                    color: "white",
                    letterSpacing: "-0.5px",
                    marginBottom: "16px",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: "24px",
                    maxWidth: "600px",
                  }}
                >
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "11px",
                        padding: "4px 10px",
                        borderRadius: "4px",
                        background: "rgba(255,255,255,0.05)",
                        color: "rgba(255,255,255,0.5)",
                        fontFamily: "var(--font-geist-mono)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = `${project.color}20`;
                    el.style.borderColor = project.color;
                    el.style.color = project.color;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(255,255,255,0.05)";
                    el.style.borderColor = "rgba(255,255,255,0.1)";
                    el.style.color = "rgba(255,255,255,0.5)";
                  }}
                  aria-label="GitHub"
                >
                  <FaGithub size={15} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = `${project.color}20`;
                    el.style.borderColor = project.color;
                    el.style.color = project.color;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(255,255,255,0.05)";
                    el.style.borderColor = "rgba(255,255,255,0.1)";
                    el.style.color = "rgba(255,255,255,0.5)";
                  }}
                  aria-label="Live demo"
                >
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
