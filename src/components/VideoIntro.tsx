"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { Mail, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import styles from "@/styles/hero.module.css";

const CinematicLayer = dynamic(() => import("@/components/CinematicLayer"), { ssr: false });

const VIDEO_SRC = "/videos/hero.mp4";

export default function VideoIntro() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoBgRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [hasVideo, setHasVideo] = useState(false);
  const [showSound, setShowSound] = useState(true);

  // Check if video file exists
  useEffect(() => {
    fetch(VIDEO_SRC, { method: "HEAD" })
      .then((r) => { if (r.ok) setHasVideo(true); })
      .catch(() => {});
  }, []);

  // GSAP entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(`.${styles.badge}`, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })
        .to(
          `.${styles.firstName}`,
          { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" },
          "-=0.5"
        )
        .to(
          `.${styles.lastName}`,
          { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" },
          "-=0.9"
        )
        .to(
          `.${styles.subtitle}`,
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.6"
        )
        .to(
          `.${styles.socialRow}`,
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .to(
          scrollRef.current,
          { opacity: 0.5, duration: 0.8, ease: "power2.out" },
          "-=0.2"
        );
    }, contentRef);

    return () => ctx.revert();
  }, []);

  // Auto-hide sound badge
  useEffect(() => {
    const timer = setTimeout(() => setShowSound(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) {
      v.pause();
      videoBgRef.current?.pause();
    } else {
      v.play();
      videoBgRef.current?.play();
    }
    setPlaying((p) => !p);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
    }
    setMuted((m) => !m);
  };

  const scrollToNext = () => {
    const next = document.getElementById("about");
    next?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero}>
      {/* Background layers */}
      {hasVideo ? (
        <>
          <video
            ref={videoBgRef}
            src={VIDEO_SRC}
            autoPlay
            loop
            muted
            playsInline
            className={styles.videoBg}
          />
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            autoPlay
            loop
            muted
            playsInline
            className={styles.videoFg}
          />
        </>
      ) : (
        <div className={styles.placeholderBg} />
      )}

      {/* Gradient overlays */}
      <div className={styles.gradientTop} />
      <div className={styles.gradientBottom} />
      <div className={styles.gradientSides} />
      <div className={styles.ambientGlow} />

      {/* Three.js particle layer */}
      <CinematicLayer />

      {/* Main content */}
      <div ref={contentRef} className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          AI Engineer · Available for New Roles
        </div>

        <div className={styles.nameWrapper}>
          <span className={styles.firstName}>Rakesh Reddy</span>
          <span className={styles.lastName}>Koukuntla</span>
        </div>

        <p className={styles.subtitle}>
          LLM Applications · Agentic RAG · AI Infrastructure · LLMOps
        </p>

        <div className={styles.socialRow}>
          <a
            href="https://github.com/koukuntlarakesh"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="mailto:koukuntlarakesh2@gmail.com"
            className={styles.socialLink}
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>

      {/* Sound badge */}
      {hasVideo && (
        <div
          className={styles.soundBadge}
          style={{ opacity: showSound ? 1 : 0 }}
        >
          <span className={styles.soundPulse} />
          Tap for sound
        </div>
      )}

      {/* Controls */}
      {hasVideo && (
        <div className={styles.controls}>
          <button onClick={togglePlay} className={styles.controlBtn} aria-label="Toggle play">
            {playing ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button onClick={toggleMute} className={styles.controlBtn} aria-label="Toggle mute">
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
      )}

      {/* Scroll indicator */}
      <div ref={scrollRef} className={styles.scrollIndicator} onClick={scrollToNext}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
