"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudyDTO } from "@/lib/data/types";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudiesProps {
  data: CaseStudyDTO[];
}

export default function CaseStudies({ data }: CaseStudiesProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".cs-heading", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
      gsap.fromTo(".cs-card", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: ".cs-list", start: "top 85%" } });
    }, ref.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        {/* Heading — centered with deco line */}
        <div className="cs-heading text-center" style={{ marginBottom: "55px" }}>
          <div className="mx-auto" style={{ width: "69px", height: "5px", background: "linear-gradient(135deg, #f76680 0%, #57007b 100%)", borderRadius: "3px", marginBottom: "20px" }} />
          <h2 style={{ fontSize: "35px", lineHeight: "55px", color: "#1a202c" }}>
            <span style={{ fontWeight: 400 }}>Our recent</span>
            <br />
            <span style={{ fontWeight: 700 }}>Case studies</span>
          </h2>
        </div>

        {/* Stacked horizontal cards */}
        <div className="cs-list flex flex-col" style={{ gap: "31px" }}>
          {data.map((cs, i) => (
            <div
              key={i}
              className="cs-card flex flex-col lg:flex-row overflow-hidden"
              style={{
                backgroundColor: cs.bgColor,
                borderRadius: "10px",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.10)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Image — left side */}
              <div className="lg:w-1/2 overflow-hidden" style={{ borderRadius: "10px" }}>
                <div className="relative" style={{ height: "100%", minHeight: "350px" }}>
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Text — right side */}
              <div className="lg:w-1/2 flex flex-col justify-center" style={{ padding: "40px 42px" }}>
                <h3 style={{ fontSize: "28px", lineHeight: "40px", fontWeight: 600, color: "#2d3748", marginBottom: "16px" }}>
                  {cs.title}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: "23px", color: "#4a5568", marginBottom: "24px" }}>
                  {cs.description}
                </p>
                <div>
                  <Link
                    href="/case-studies"
                    className="group inline-flex items-center"
                    style={{ gap: "5px", fontSize: "14px", fontWeight: 600 }}
                  >
                    <span className="text-gradient-primary">Read more</span>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2"
                      className="link-arrow" style={{ stroke: "#57007b" }}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-10 flex items-center justify-start" style={{ gap: "12px" }}>
          <Link href="/case-studies" className="group inline-flex items-center" style={{ gap: "12px" }}>
            <span className="text-gradient-primary" style={{ fontSize: "20px", fontWeight: 600, lineHeight: "27px" }}>
              Read more case studies
            </span>
            <svg width="13" height="8" viewBox="0 0 24 24" fill="none" strokeWidth="2" className="link-arrow" style={{ stroke: "#57007b" }}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
