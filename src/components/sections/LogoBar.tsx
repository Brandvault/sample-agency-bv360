"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { LogoDTO } from "@/lib/data/types";

gsap.registerPlugin(ScrollTrigger);

interface LogoBarProps {
  data: LogoDTO[];
}

export default function LogoBar({ data }: LogoBarProps) {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  // Slow auto-scroll
  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;

    tweenRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    return () => { tweenRef.current?.kill(); };
  }, []);

  // Manual arrow — jump forward/back
  const scrollLogos = (direction: number) => {
    if (!tweenRef.current) return;
    const newProgress = tweenRef.current.progress() + direction * 0.1;
    gsap.to(tweenRef.current, { progress: newProgress, duration: 0.6, ease: "power2.out" });
  };

  // Entrance animation
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".logo-title", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
    }, ref.current);
    return () => ctx.revert();
  }, []);

  const logoItems = [...data, ...data]; // duplicate for seamless loop

  return (
    <section ref={ref} style={{ backgroundColor: "#f6f6f9" }}>
      <div className="mx-auto max-w-[1440px] px-6 py-14 lg:px-[80px] lg:py-20">
        {/* Top row: Heading + Arrows */}
        <div className="logo-title flex items-end justify-between mb-10">
          <div>
            <div
              style={{
                width: "69px",
                height: "5px",
                background: "linear-gradient(135deg, #f76680 0%, #57007b 100%)",
                borderRadius: "3px",
                marginBottom: "20px",
              }}
            />
            <h2 style={{ fontSize: "35px", lineHeight: "55px", fontWeight: 400, color: "#1a202c" }}>
              Meet the People
              <br />
              <span style={{ fontWeight: 700 }}>We are Working With</span>
            </h2>
          </div>

          <div className="flex" style={{ gap: "22px" }}>
            <button
              onClick={() => scrollLogos(-1)}
              className="flex items-center justify-center rounded-full border border-gray-200 bg-white transition-all duration-200 hover:border-brand-purple"
              style={{ width: "45px", height: "45px" }}
              aria-label="Scroll logos left"
            >
              <svg width="15" height="13" viewBox="0 0 24 24" fill="none" stroke="#57007b" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => scrollLogos(1)}
              className="flex items-center justify-center rounded-full transition-all duration-200 hover:opacity-90"
              style={{ width: "45px", height: "45px", backgroundColor: "#57007b", boxShadow: "0 14px 44px rgba(0,0,0,0.08)" }}
              aria-label="Scroll logos right"
            >
              <svg width="15" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Decorative gradient half-circle */}
        <div className="relative flex justify-center mb-6">
          <div
            style={{
              width: "120px",
              height: "60px",
              background: "linear-gradient(180deg, #f76680 0%, #57007b 100%)",
              borderRadius: "60px 60px 0 0",
              opacity: 0.15,
            }}
          />
        </div>

        {/* Logo slider */}
        <div>
          <div style={{ height: "1px", backgroundColor: "#e2e8f0" }} />

          <div className="overflow-hidden py-8 lg:py-10">
            <div
              ref={trackRef}
              className="flex items-center"
              style={{ width: "max-content" }}
            >
              {logoItems.map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{
                    /* ~6 visible on desktop, fewer on smaller screens */
                    width: "calc(1280px / 6)",
                    height: "80px",
                    padding: "0 20px",
                  }}
                >
                  <span
                    className="text-center font-bold whitespace-nowrap select-none"
                    style={{
                      fontSize: "clamp(16px, 1.4vw, 22px)",
                      color: "#57007b",
                      opacity: 0.7,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ height: "1px", backgroundColor: "#e2e8f0" }} />
        </div>
      </div>
    </section>
  );
}
