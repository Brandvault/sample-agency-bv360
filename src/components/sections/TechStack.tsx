"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import type { TechTabDTO } from "@/lib/data/types";

gsap.registerPlugin(ScrollTrigger);

interface TechStackProps {
  data: TechTabDTO[];
}

export default function TechStack({ data }: TechStackProps) {
  const ref = useRef<HTMLElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  const switchTab = (i: number) => {
    if (i === activeTab) return;
    // Fade out current logos
    if (logosRef.current) {
      gsap.to(logosRef.current.children, {
        opacity: 0,
        y: 10,
        duration: 0.2,
        stagger: 0.03,
        ease: "power2.in",
        onComplete: () => {
          setActiveTab(i);
          // Fade in new logos (after state update triggers re-render)
          requestAnimationFrame(() => {
            if (logosRef.current) {
              gsap.fromTo(
                logosRef.current.children,
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.35, stagger: 0.05, ease: "power2.out" }
              );
            }
          });
        },
      });
    } else {
      setActiveTab(i);
    }
  };

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".tech-heading", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
      gsap.fromTo(".tech-tabs", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, delay: 0.15, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
    }, ref.current);
    return () => ctx.revert();
  }, []);

  const currentLogos = data[activeTab]?.logos ?? [];

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        {/* Heading */}
        <div className="tech-heading text-center" style={{ marginBottom: "38px" }}>
          <div className="mx-auto" style={{ width: "69px", height: "5px", background: "linear-gradient(135deg, #f76680 0%, #57007b 100%)", borderRadius: "3px", marginBottom: "20px" }} />
          <h2 style={{ fontSize: "35px", lineHeight: "55px", color: "#1a202c" }}>
            <span style={{ fontWeight: 400 }}>Our</span>
            <br />
            <span style={{ fontWeight: 700 }}>Tech Stack</span>
          </h2>
        </div>

        {/* Tab links */}
        <div className="tech-tabs flex flex-wrap items-center justify-center" style={{ gap: "60px", marginBottom: "50px" }}>
          {data.map((tab, i) => (
            <button
              key={tab.name}
              onClick={() => switchTab(i)}
              className="relative"
              style={{
                fontSize: "18px",
                fontWeight: i === activeTab ? 600 : 400,
                color: "#1a202c",
                lineHeight: "30px",
                transition: "all 0.3s ease",
                opacity: i === activeTab ? 1 : 0.7,
              }}
            >
              {i === activeTab && (
                <span className="absolute -left-3 top-1/2 -translate-y-1/2 rounded-full" style={{ width: "8px", height: "8px", background: "linear-gradient(135deg, #f76680 0%, #57007b 100%)" }} />
              )}
              {tab.name}
              {i === activeTab && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full" style={{ width: "25px", height: "3px", background: "linear-gradient(135deg, #f76680 0%, #57007b 100%)" }} />
              )}
            </button>
          ))}
        </div>

        {/* Logo grid — individual logos per tab */}
        <div
          ref={logosRef}
          className="flex flex-wrap items-center justify-center"
          style={{ gap: "40px 60px", minHeight: "220px" }}
        >
          {currentLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
              style={{ width: "166px", height: "94px" }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.w}
                height={logo.h}
                className="object-contain"
                style={{ maxWidth: "100%", maxHeight: "80px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
