"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import type { TestimonialDTO } from "@/lib/data/types";

gsap.registerPlugin(ScrollTrigger);

interface TestimonialsProps {
  data: TestimonialDTO[];
}

export default function Testimonials({ data }: TestimonialsProps) {
  const ref = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const [active, setActive] = useState(2);
  const [displayedText, setDisplayedText] = useState(data[2]?.text ?? "");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const navigate = useCallback((newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    // Fade out quote
    if (quoteRef.current) {
      gsap.to(quoteRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setDisplayedText(data[newIndex].text);
          setActive(newIndex);
          // Fade in new quote
          if (quoteRef.current) {
            gsap.fromTo(
              quoteRef.current,
              { opacity: 0, y: 10 },
              { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", onComplete: () => setIsTransitioning(false) }
            );
          }
        },
      });
    } else {
      setActive(newIndex);
      setDisplayedText(data[newIndex].text);
      setIsTransitioning(false);
    }
  }, [isTransitioning, data]);

  const goNext = useCallback(() => {
    navigate((active + 1) % data.length);
  }, [active, navigate, data.length]);

  const goPrev = useCallback(() => {
    navigate((active - 1 + data.length) % data.length);
  }, [active, navigate, data.length]);

  // Auto-scroll
  useEffect(() => {
    autoRef.current = setInterval(() => {
      navigate((active + 1) % data.length);
    }, 4500);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [active, navigate, data.length]);

  const manualNav = (fn: () => void) => {
    if (autoRef.current) clearInterval(autoRef.current);
    fn();
  };

  // 5 visible centered on active
  const getVisible = () => {
    const len = data.length;
    return [-2, -1, 0, 1, 2].map((o) => (active + o + len) % len);
  };
  const visible = getVisible();

  // Entrance animation
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".test-heading", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
      gsap.fromTo(".test-content", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.15, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
    }, ref.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[80px]">
        <div className="relative">
          {/* Heading */}
          <div className="test-heading mb-12 text-center">
            <div className="mx-auto" style={{ width: "69px", height: "5px", background: "linear-gradient(135deg, #f76680 0%, #57007b 100%)", borderRadius: "3px", marginBottom: "20px" }} />
            <h2 style={{ fontSize: "35px", lineHeight: "55px", fontWeight: 700, color: "#1a202c" }}>
              Why customers love<br />working with us
            </h2>
          </div>

          {/* Quote */}
          <div className="test-content mx-auto" style={{ maxWidth: "727px" }}>
            <div className="relative mb-14 min-h-[180px] flex items-center justify-center">
              <span className="absolute -left-8 top-0 text-gradient-primary select-none" style={{ fontSize: "48px", fontFamily: "Georgia, serif", lineHeight: 1 }}>&ldquo;</span>
              <p
                ref={quoteRef}
                className="text-center"
                style={{ fontSize: "18px", lineHeight: "36px", color: "#718096" }}
              >
                {displayedText}
              </p>
              <span className="absolute -bottom-2 -right-4 text-gradient-primary select-none" style={{ fontSize: "48px", fontFamily: "Georgia, serif", lineHeight: 1 }}>&rdquo;</span>
            </div>

            {/* Avatar carousel */}
            <div className="flex items-end justify-center" style={{ gap: "40px" }}>
              {visible.map((idx, pos) => {
                const t = data[idx];
                const isCenter = pos === 2;
                const isAdj = pos === 1 || pos === 3;
                const size = isCenter ? 100 : isAdj ? 85 : 72;
                const starSize = isCenter ? 20 : 16;

                return (
                  <button
                    key={`${idx}-${pos}`}
                    onClick={() => manualNav(() => navigate(idx))}
                    className="flex flex-col items-center group"
                    style={{
                      gap: isCenter ? "12px" : "8px",
                      opacity: isCenter ? 1 : isAdj ? 0.85 : 0.6,
                      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: isCenter ? "scale(1)" : isAdj ? "scale(0.95)" : "scale(0.9)",
                    }}
                  >
                    {/* Avatar */}
                    <div
                      className="relative overflow-hidden rounded-full"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        border: isCenter ? "3px solid #d6b4e0" : "2px solid #e7daec",
                        boxShadow: isCenter
                          ? "0 4px 49px rgba(87,0,123,0.25), 0 0 0 4px rgba(87,0,123,0.08)"
                          : "0 4px 30px rgba(0,0,0,0.05)",
                        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5" style={{ transition: "all 0.4s ease" }}>
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} width={starSize} height={starSize} viewBox="0 0 24 24" fill="#F6A609" style={{ transition: "all 0.4s ease" }}>
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    {/* Name & Role */}
                    <div className="text-center" style={{ transition: "all 0.5s ease" }}>
                      <p style={{
                        fontSize: isCenter ? "18px" : isAdj ? "16px" : "14px",
                        fontWeight: isCenter ? 700 : isAdj ? 500 : 600,
                        color: isCenter ? "#57007b" : "#a0aec0",
                        lineHeight: "22px",
                        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}>
                        {t.name}
                      </p>
                      <p style={{
                        fontSize: isCenter ? "14px" : isAdj ? "12px" : "11px",
                        fontWeight: 400,
                        color: isCenter ? "#000" : isAdj ? "#cbd5e0" : "#e2e8f0",
                        lineHeight: "18px",
                        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}>
                        {t.role}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Left arrow */}
          <button
            onClick={() => manualNav(goPrev)}
            className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center rounded-full border border-gray-200 bg-white"
            style={{
              width: "45px",
              height: "45px",
              transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#57007b";
              e.currentTarget.style.backgroundColor = "#57007b";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
              e.currentTarget.querySelector("svg")!.setAttribute("stroke", "white");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e5e7eb";
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              e.currentTarget.querySelector("svg")!.setAttribute("stroke", "#57007b");
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(0.95)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
            }}
            aria-label="Previous testimonial"
          >
            <svg width="15" height="13" viewBox="0 0 24 24" fill="none" stroke="#57007b" strokeWidth="2" style={{ transition: "stroke 0.25s ease" }}>
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={() => manualNav(goNext)}
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center rounded-full"
            style={{
              width: "45px",
              height: "45px",
              backgroundColor: "#fafafa",
              boxShadow: "0 14px 44px rgba(0,0,0,0.08)",
              transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#57007b";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
              e.currentTarget.style.boxShadow = "0 14px 44px rgba(87,0,123,0.2)";
              e.currentTarget.querySelector("svg")!.setAttribute("stroke", "white");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#fafafa";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              e.currentTarget.style.boxShadow = "0 14px 44px rgba(0,0,0,0.08)";
              e.currentTarget.querySelector("svg")!.setAttribute("stroke", "#57007b");
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(0.95)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
            }}
            aria-label="Next testimonial"
          >
            <svg width="15" height="13" viewBox="0 0 24 24" fill="none" stroke="#57007b" strokeWidth="2" style={{ transition: "stroke 0.25s ease" }}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
