"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ServiceDTO } from "@/lib/data/types";

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ReactNode> = {
  mobile: <svg viewBox="0 0 24 24" className="h-[34px] w-[34px]" fill="none" stroke="#57007b" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" strokeLinecap="round" /></svg>,
  testing: <svg viewBox="0 0 24 24" className="h-[34px] w-[34px]" fill="none" stroke="#57007b" strokeWidth="1.5"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg>,
  web: <svg viewBox="0 0 24 24" className="h-[34px] w-[34px]" fill="none" stroke="#57007b" strokeWidth="1.5"><path d="M9.4 16.6L4.8 12l4.6-4.6M14.6 16.6l4.6-4.6-4.6-4.6" /></svg>,
  design: <svg viewBox="0 0 24 24" className="h-[34px] w-[34px]" fill="none" stroke="#57007b" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" /></svg>,
  cloud: <svg viewBox="0 0 24 24" className="h-[34px] w-[34px]" fill="none" stroke="#57007b" strokeWidth="1.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>,
};

interface ServicesCarouselProps {
  data: ServiceDTO[];
}

export default function ServicesCarousel({ data }: ServicesCarouselProps) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(2);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".svc-title", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
      gsap.fromTo(".svc-card", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: ".svc-track", start: "top 90%" } });
    }, ref.current);
    return () => ctx.revert();
  }, []);

  const prev = () => {
    const newOffset = Math.max(0, offset - 1);
    setOffset(newOffset);
    setActive(newOffset + 1);
  };
  const next = () => {
    const newOffset = Math.min(data.length - 3, offset + 1);
    setOffset(newOffset);
    setActive(newOffset + 1);
  };

  return (
    <section ref={ref} style={{ backgroundColor: "#f8f8ff" }}>
      <div className="mx-auto max-w-[1440px] py-16 lg:py-24">
        {/* Title */}
        <h2
          className="svc-title mb-10 text-center font-bold text-heading"
          style={{ fontSize: "35px", lineHeight: "55px" }}
        >
          Services we offer
        </h2>

        {/* Cards track */}
        <div className="svc-track relative px-6 lg:px-[85px]">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                gap: "40px",
                transform: `translateX(-${offset * (333 + 40)}px)`,
              }}
            >
              {data.map((service, i) => {
                const isActive = i === active;
                return (
                  <div
                    key={service.title}
                    onClick={() => setActive(i)}
                    className="svc-card flex-shrink-0 cursor-pointer"
                    style={{ width: "333px" }}
                  >
                    {/* Card inner */}
                    <div
                      className={`relative flex flex-col rounded-[7px] bg-white p-4 transition-all duration-300 ${
                        isActive
                          ? "shadow-xl border-2 border-brand-purple/30"
                          : "border border-transparent"
                      }`}
                      style={{
                        height: "287px",
                        boxShadow: isActive
                          ? "0 4px 30px rgba(87,0,123,0.12)"
                          : "0 4px 30px rgba(0,0,0,0.05)",
                        backgroundColor: "#fafafa",
                      }}
                    >
                      <div className="flex flex-col p-3" style={{ gap: "20px" }}>
                        {/* Icon + Title */}
                        <div className="flex flex-col" style={{ gap: "20px" }}>
                          <div
                            className="flex items-center justify-center rounded-full"
                            style={{
                              width: "58px",
                              height: "58px",
                              backgroundColor: isActive ? "#57007b10" : "#fafafa",
                              border: "1px solid #e2e8f0",
                            }}
                          >
                            {iconMap[service.icon] ?? iconMap.web}
                          </div>
                          <h3
                            className="font-semibold"
                            style={{
                              fontSize: "20px",
                              lineHeight: "27px",
                              color: isActive ? "#57007b" : "#2d3748",
                            }}
                          >
                            {service.title}
                          </h3>
                        </div>
                        {/* Description */}
                        <p
                          style={{
                            fontSize: "14px",
                            lineHeight: "23px",
                            color: isActive ? "#4a5568" : "#718096",
                          }}
                        >
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            disabled={offset === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-gray-200 bg-white transition-all duration-200 hover:border-brand-purple disabled:opacity-30 disabled:cursor-not-allowed lg:left-6"
            style={{ width: "45px", height: "45px" }}
            aria-label="Previous"
          >
            <svg width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="#57007b" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={next}
            disabled={offset >= data.length - 3}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed lg:right-6"
            style={{
              width: "45px",
              height: "45px",
              backgroundColor: "#fafafa",
              boxShadow: "0 14px 44px rgba(0,0,0,0.08)",
            }}
            aria-label="Next"
          >
            <svg width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="#57007b" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActive(i);
                setOffset(Math.max(0, Math.min(i - 1, data.length - 3)));
              }}
              aria-label={`Slide ${i + 1}`}
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "18px" : "13px",
                  height: i === active ? "18px" : "13px",
                  background:
                    i === active
                      ? "linear-gradient(135deg, #f76680 0%, #57007b 100%)"
                      : "#cbd5e0",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
