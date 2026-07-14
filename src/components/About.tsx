"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  { category: "LLMs & Agents", items: ["Claude API", "OpenAI", "AWS Bedrock", "LangChain", "LangGraph", "CrewAI", "MCP"] },
  { category: "RAG & Vector", items: ["Pinecone", "pgvector", "FAISS", "Chroma", "Embeddings", "Re-ranking"] },
  { category: "Cloud & Infra", items: ["AWS (EKS, Lambda, S3)", "Azure", "GCP", "Docker", "Kubernetes", "Helm"] },
  { category: "DevOps & IaC", items: ["Terraform", "GitHub Actions", "ArgoCD", "Jenkins", "Ansible", "CDK"] },
  { category: "Backend & APIs", items: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Redis", "MongoDB"] },
  { category: "Observability", items: ["OpenTelemetry", "Prometheus", "Grafana", "Splunk APM", "Datadog"] },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-heading",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );
      gsap.fromTo(".about-bio",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );
      gsap.fromTo(".skill-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.8, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: "120px 0",
        background: "#030303",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
        {/* Label */}
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#f97316",
            marginBottom: "20px",
          }}
        >
          01 — About
        </p>

        {/* Heading */}
        <h2
          className="about-heading"
          style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-2px",
            textTransform: "uppercase",
            color: "white",
            marginBottom: "60px",
          }}
        >
          Building AI That
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #f97316, #fbbf24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ships at Scale
          </span>
        </h2>

        {/* Bio */}
        <div
          className="about-bio"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            marginBottom: "80px",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.55)",
                fontWeight: 300,
              }}
            >
              AI Engineer with{" "}
              <span style={{ color: "white", fontWeight: 500 }}>6+ years</span>{" "}
              building production-grade LLM applications, agentic RAG systems,
              and autonomous agent workflows across AWS, Azure, and GCP.
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.55)",
                fontWeight: 300,
              }}
            >
              Currently at{" "}
              <span style={{ color: "#f97316", fontWeight: 500 }}>Wells Fargo</span>{" "}
              where I ship LLM integrations processing 50K+ daily records, RAG
              pipelines, and LLMOps infrastructure that cut token costs by 35%.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "rgba(255,255,255,0.06)",
            marginBottom: "60px",
          }}
        />

        {/* Skills grid */}
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            marginBottom: "32px",
          }}
        >
          Tech Stack
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="skill-card"
              style={{
                padding: "24px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "12px",
                transition: "border-color 0.3s ease, background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(249,115,22,0.3)";
                el.style.background = "rgba(249,115,22,0.04)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "#f97316",
                  marginBottom: "16px",
                  fontWeight: 600,
                }}
              >
                {group.category}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {group.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: "12px",
                      padding: "4px 10px",
                      borderRadius: "4px",
                      background: "rgba(255,255,255,0.06)",
                      color: "rgba(255,255,255,0.6)",
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
