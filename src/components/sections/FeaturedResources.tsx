"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import type { BlogPostDTO } from "@/lib/data/types";

gsap.registerPlugin(ScrollTrigger);

interface FeaturedResourcesProps {
  data: BlogPostDTO[];
}

export default function FeaturedResources({ data }: FeaturedResourcesProps) {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const visibleCount = 4; // show 4 at a time on desktop
  const maxOffset = data.length - visibleCount;

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1));

  // Animate slide
  useEffect(() => {
    if (!trackRef.current) return;
    gsap.to(trackRef.current, {
      x: -offset * (254 + 60), // card width + gap
      duration: 0.5,
      ease: "power2.out",
    });
  }, [offset]);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".fr-heading", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
      gsap.fromTo(".fr-card", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: ".fr-track", start: "top 90%" } });
    }, ref.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-bg-light py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        {/* Header row: Heading left + View All button & arrows right */}
        <div className="fr-heading flex items-end justify-between" style={{ marginBottom: "66px" }}>
          {/* Heading */}
          <div>
            <div style={{ width: "69px", height: "5px", background: "linear-gradient(135deg, #f76680 0%, #57007b 100%)", borderRadius: "3px", marginBottom: "20px" }} />
            <h2 style={{ fontSize: "35px", lineHeight: "55px", color: "#1a202c" }}>
              <span style={{ fontWeight: 400 }}>Featured</span>
              <br />
              <span style={{ fontWeight: 700 }}>Resources</span>
            </h2>
          </div>

          {/* Right side: View All + Arrows */}
          <div className="flex items-center" style={{ gap: "24px" }}>
            <Link
              href="/blog"
              className="hidden lg:inline-block text-white btn-transition"
              style={{
                background: "linear-gradient(135deg, #6674f7 0%, #57007b 100%)",
                borderRadius: "5px",
                padding: "12px 24px",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              View All
            </Link>

            <div className="flex" style={{ gap: "16px" }}>
              <button
                onClick={prev}
                disabled={offset === 0}
                className="flex items-center justify-center rounded-full border border-gray-200 bg-white disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  width: "45px",
                  height: "45px",
                  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  if (offset > 0) {
                    e.currentTarget.style.borderColor = "#57007b";
                    e.currentTarget.style.backgroundColor = "#57007b";
                    e.currentTarget.querySelector("svg")!.setAttribute("stroke", "white");
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.querySelector("svg")!.setAttribute("stroke", "#57007b");
                }}
                onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.95)"; }}
                onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                aria-label="Previous"
              >
                <svg width="15" height="13" viewBox="0 0 24 24" fill="none" stroke="#57007b" strokeWidth="2" style={{ transition: "stroke 0.25s ease" }}>
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                disabled={offset >= maxOffset}
                className="flex items-center justify-center rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  width: "45px",
                  height: "45px",
                  backgroundColor: "#fafafa",
                  boxShadow: "0 14px 44px rgba(0,0,0,0.08)",
                  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  if (offset < maxOffset) {
                    e.currentTarget.style.backgroundColor = "#57007b";
                    e.currentTarget.style.boxShadow = "0 14px 44px rgba(87,0,123,0.2)";
                    e.currentTarget.querySelector("svg")!.setAttribute("stroke", "white");
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#fafafa";
                  e.currentTarget.style.boxShadow = "0 14px 44px rgba(0,0,0,0.08)";
                  e.currentTarget.querySelector("svg")!.setAttribute("stroke", "#57007b");
                }}
                onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.95)"; }}
                onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                aria-label="Next"
              >
                <svg width="15" height="13" viewBox="0 0 24 24" fill="none" stroke="#57007b" strokeWidth="2" style={{ transition: "stroke 0.25s ease" }}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Blog cards slider */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="fr-track flex"
            style={{ gap: "60px", width: "max-content" }}
          >
            {data.map((post, i) => (
              <Link
                key={i}
                href={post.href}
                className="fr-card group flex flex-col"
                style={{ width: "254px", gap: "20px" }}
              >
                {/* Image + Title */}
                <div className="flex flex-col" style={{ gap: "20px" }}>
                  <div className="overflow-hidden" style={{ borderRadius: "10px", width: "254px", height: "175px" }}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={254}
                      height={175}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3
                    className="transition-colors duration-300 group-hover:text-brand-purple"
                    style={{ fontSize: "16px", fontWeight: 500, lineHeight: "25px", color: "#2d3748" }}
                  >
                    {post.title}
                  </h3>
                </div>

                {/* Read More link */}
                <div className="flex items-center" style={{ gap: "15px" }}>
                  <span
                    className="transition-colors duration-300 group-hover:text-brand-pink"
                    style={{ fontSize: "16px", fontWeight: 500, color: "#57007b", lineHeight: "25px" }}
                  >
                    Read More
                  </span>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#57007b" strokeWidth="2"
                    className="link-arrow"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
