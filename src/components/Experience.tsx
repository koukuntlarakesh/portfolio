"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const JOBS = [
  {
    company: "Wells Fargo",
    role: "AI Engineer",
    period: "Feb 2024 — Present",
    location: "Charlotte, NC",
    color: "#f97316",
    highlights: [
      "LLM integrations (Claude + OpenAI) classifying 50K+ daily records with 85%+ accuracy, cutting manual review by 60%",
      "RAG pipelines over internal knowledge sources — 40% reduction in hallucination rates",
      "Secure AI microservices (FastAPI, OAuth2, EKS) for 3+ autonomous agent workflows, saving 40 hrs/week",
      "LLM observability with OpenTelemetry + Splunk APM across 12+ services — 50% lower MTTR, identified $80K+ avoidable token spend",
      "35% LLM API cost reduction via prompt compression, caching, model selection, and fallback routing",
      "AIOps self-healing pipelines: incident response from 30 min → 8 min, prevented 15+ outages/year",
    ],
  },
  {
    company: "Fluidra",
    role: "AI Infrastructure Engineer",
    period: "Jan 2023 — Dec 2023",
    location: "Carlsbad, CA",
    color: "#60a5fa",
    highlights: [
      "AWS infrastructure for AI/ML workloads (EC2, ASG, S3, Lambda, EKS, CloudFront)",
      "IaC with Terraform, Ansible, Boto3, CDK, and Serverless Framework",
      "Intelligent monitoring and alerting — ~60% reduction in false alerts",
      "CI/CD pipelines with Jenkins, ArgoCD, GitHub Actions across all environments",
      "AWS cost optimization via right-sizing, unused resource cleanup, and IAM governance",
    ],
  },
  {
    company: "Ericsson",
    role: "DevOps Engineer",
    period: "Jan 2019 — May 2022",
    location: "India",
    color: "#a78bfa",
    highlights: [
      "CI/CD with Jenkins, Spinnaker, Kubernetes, Ansible, Puppet on GCP",
      "Reusable Terraform modules for GCP and Azure infrastructure",
      "Observability automation with Python, Ansible, New Relic, Sumo Logic, and PagerDuty",
    ],
  },
  {
    company: "Auburn University at Montgomery",
    role: "Graduate Teaching Assistant",
    period: "Aug 2022 — Dec 2022",
    location: "Montgomery, AL",
    color: "#34d399",
    highlights: [
      "Lab sessions, office hours, and grading for CS coursework",
      "Mentored students on algorithms and software development fundamentals",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".exp-item",
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, stagger: 0.15, duration: 0.9, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} style={{ padding: "80px 0", background: "#060606", position: "relative" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>

        <p style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#f97316", marginBottom: "20px" }}>
          02 — Experience
        </p>

        <h2 style={{
          fontSize: "clamp(32px, 6vw, 72px)",
          fontWeight: 900, lineHeight: 0.95, letterSpacing: "-2px",
          textTransform: "uppercase", color: "white", marginBottom: "64px",
        }}>
          Where I&apos;ve<br />
          <span style={{ background: "linear-gradient(135deg, #f97316, #fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Made Impact
          </span>
        </h2>

        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute", left: 0, top: "12px", bottom: 0, width: "1px",
            background: "linear-gradient(to bottom, rgba(249,115,22,0.4), rgba(255,255,255,0.06))",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
            {JOBS.map((job, i) => (
              <div key={i} className="exp-item" style={{ paddingLeft: "32px", position: "relative" }}>
                <div style={{
                  position: "absolute", left: "-5px", top: "8px",
                  width: "11px", height: "11px", borderRadius: "50%",
                  background: job.color, boxShadow: `0 0 12px ${job.color}80`,
                }} />

                {/* Header — wraps on mobile */}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "6px",
                }}>
                  <div>
                    <h3 style={{ fontSize: "clamp(16px, 2.5vw, 20px)", fontWeight: 700, color: "white", letterSpacing: "-0.5px" }}>
                      {job.company}
                    </h3>
                    <p style={{ fontSize: "13px", color: job.color, letterSpacing: "1px", marginTop: "4px", fontWeight: 500 }}>
                      {job.role}
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", letterSpacing: "1px", fontFamily: "var(--font-geist-mono)" }}>
                      {job.period}
                    </p>
                    <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", marginTop: "4px" }}>
                      {job.location}
                    </p>
                  </div>
                </div>

                <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.06)", margin: "14px 0" }} />

                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {job.highlights.map((h, j) => (
                    <li key={j} style={{ display: "flex", gap: "10px", marginBottom: "10px", fontSize: "13px", lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }}>
                      <span style={{ color: job.color, flexShrink: 0, marginTop: "2px", fontSize: "11px" }}>▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
