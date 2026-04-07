"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { StepDTO } from "@/lib/data/types";

gsap.registerPlugin(ScrollTrigger);

function StepCard({ num, title, description }: { num: string; title: string; description: string }) {
  return (
    <div
      className="group flex-1 bg-white transition-all duration-300 hover:shadow-lg"
      style={{ borderRadius: "9px", padding: "27px", minWidth: "250px" }}
    >
      <div className="flex flex-col" style={{ gap: "15px" }}>
        <div className="flex items-center" style={{ gap: "10px" }}>
          <span className="text-gradient-primary" style={{ fontSize: "18px", fontWeight: 700, lineHeight: "22px" }}>
            {num}
          </span>
          <span
            className="transition-colors duration-300 group-hover:text-brand-purple"
            style={{ fontSize: "18px", fontWeight: 700, lineHeight: "22px", color: "#1a202c" }}
          >
            {title}
          </span>
        </div>
        <p style={{ fontSize: "14px", fontWeight: 400, lineHeight: "20px", color: "#718096" }}>
          {description}
        </p>
      </div>
    </div>
  );
}

interface HowItWorksProps {
  stepsTop: StepDTO[];
  stepsBottom: StepDTO[];
}

export default function HowItWorks({ stepsTop, stepsBottom }: HowItWorksProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".hiw-heading", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
      gsap.fromTo(".hiw-card", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: ".hiw-grid", start: "top 85%" } });
    }, ref.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-bg-light py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        {/* Heading — centered */}
        <div className="hiw-heading text-center" style={{ marginBottom: "60px" }}>
          <div className="mx-auto" style={{ width: "69px", height: "5px", background: "linear-gradient(135deg, #f76680 0%, #57007b 100%)", borderRadius: "3px", marginBottom: "20px" }} />
          <h2 style={{ fontSize: "35px", lineHeight: "55px", color: "#1a202c" }}>
            <span style={{ fontWeight: 400 }}>How development</span>
            <br />
            <span style={{ fontWeight: 700 }}>through BV360 works</span>
          </h2>
        </div>

        {/* Timeline grid */}
        <div className="hiw-grid relative">
          {/* Top row — #1, #3, #5 */}
          <div className="flex flex-col lg:flex-row" style={{ gap: "24px", marginBottom: "0" }}>
            {stepsTop.map((step) => (
              <div key={step.num} className="hiw-card flex-1">
                <StepCard {...step} />
              </div>
            ))}
          </div>

          {/* Connecting line with vertical connectors */}
          <div className="relative hidden lg:block" style={{ height: "60px" }}>
            {/* Horizontal line */}
            <div
              className="absolute left-0 right-0"
              style={{
                top: "50%",
                height: "2px",
                background: "#e2e8f0",
                transform: "translateY(-50%)",
              }}
            />
            {/* Vertical connectors — 6 stubs going up/down */}
            {[0, 1, 2].map((i) => (
              <div key={`top-${i}`}>
                {/* Top connector going up to card */}
                <div
                  className="absolute"
                  style={{
                    left: `${16.66 + i * 33.33}%`,
                    top: 0,
                    width: "2px",
                    height: "50%",
                    background: "#e2e8f0",
                  }}
                />
                {/* Bottom connector going down to card */}
                <div
                  className="absolute"
                  style={{
                    left: `${16.66 + i * 33.33}%`,
                    top: "50%",
                    width: "2px",
                    height: "50%",
                    background: "#e2e8f0",
                  }}
                />
              </div>
            ))}

            {/* Trophy icon at the end */}
            <div
              className="absolute"
              style={{
                right: "-10px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "28px",
              }}
            >
              🏆
            </div>
          </div>

          {/* Bottom row — #2, #4, #6 */}
          <div className="flex flex-col lg:flex-row" style={{ gap: "24px" }}>
            {stepsBottom.map((step) => (
              <div key={step.num} className="hiw-card flex-1">
                <StepCard {...step} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
