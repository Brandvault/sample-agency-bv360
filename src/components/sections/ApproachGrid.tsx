"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ApproachDTO } from "@/lib/data/types";

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ReactNode> = {
  layers: <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="white" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
  code: <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="white" strokeWidth="1.8"><path d="M9.4 16.6L4.8 12l4.6-4.6M14.6 16.6l4.6-4.6-4.6-4.6" /></svg>,
  star: <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="white" strokeWidth="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
  shield: <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="white" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>,
  check: <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="white" strokeWidth="1.8"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>,
  lock: <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="white" strokeWidth="1.8"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
};

interface ApproachGridProps {
  data: ApproachDTO[];
}

export default function ApproachGrid({ data }: ApproachGridProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".appr-heading", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
      gsap.fromTo(".appr-card", { y: 40, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: "back.out(1.4)", scrollTrigger: { trigger: ".appr-grid", start: "top 85%" } });
    }, ref.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        {/* Heading */}
        <div className="appr-heading text-center" style={{ marginBottom: "60px" }}>
          <div className="mx-auto" style={{ width: "69px", height: "5px", background: "linear-gradient(135deg, #f76680 0%, #57007b 100%)", borderRadius: "3px", marginBottom: "20px" }} />
          <h2 style={{ fontSize: "35px", lineHeight: "55px", color: "#1a202c" }}>
            <span style={{ fontWeight: 400 }}>Our design and</span>
            <br />
            <span style={{ fontWeight: 700 }}>development approach</span>
          </h2>
        </div>

        {/* 2-column grid with gap */}
        <div className="appr-grid grid grid-cols-1 lg:grid-cols-2" style={{ gap: "24px" }}>
          {data.map((a) => (
            <div
              key={a.title}
              className="appr-card group rounded-xl bg-bg-card"
              style={{
                padding: "36px 32px",
                border: "1px solid #e2e8f0",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(87,0,123,0.15)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e2e8f0";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div className="flex items-start" style={{ gap: "25px" }}>
                {/* Icon — gradient rounded square */}
                <div
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: "59px",
                    height: "56px",
                    borderRadius: "10px",
                    background: a.gradient,
                  }}
                >
                  {iconMap[a.iconId] ?? iconMap.layers}
                </div>

                {/* Text */}
                <div className="flex flex-col" style={{ gap: "10px" }}>
                  <h3
                    className="transition-colors duration-300 group-hover:text-brand-purple"
                    style={{ fontSize: "20px", lineHeight: "27px", fontWeight: 600, color: "#1a202c" }}
                  >
                    {a.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: "23px", color: "#4a5568" }}>
                    Unlike other companies, we are a{" "}
                    <span className="text-gradient-primary font-semibold">UX first</span>{" "}
                    development company. Projects are driven by designers and they make sure design and experiences translate to code.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
