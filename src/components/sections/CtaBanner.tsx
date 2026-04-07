"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import type { CtaBannerDTO } from "@/lib/data/types";

gsap.registerPlugin(ScrollTrigger);

interface CtaBannerProps {
  data: CtaBannerDTO;
}

export default function CtaBanner({ data }: CtaBannerProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".cta-inner", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
    }, ref.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <div
          className="cta-inner relative flex flex-col items-center justify-between gap-8 overflow-hidden lg:flex-row lg:items-center"
          style={{
            background: "linear-gradient(135deg, #f1f1f5 0%, #e4ecf7 100%)",
            borderRadius: "20px",
            padding: "50px 60px",
          }}
        >
          {/* Heading — left */}
          <h2 style={{ fontSize: "35px", lineHeight: "55px", fontWeight: 700, color: "#1a202c", maxWidth: "531px" }}>
            {data.heading}
          </h2>

          {/* Button + decorative elements — right */}
          <div className="relative flex items-center">
            {/* Decorative sparkle shapes */}
            <div className="absolute -right-4 -top-8 hidden lg:block">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path d="M30 5L33 25L53 22L35 30L53 38L33 35L30 55L27 35L7 38L25 30L7 22L27 25L30 5Z" fill="url(#sparkle-grad)" opacity="0.6" />
                <defs><linearGradient id="sparkle-grad" x1="7" y1="5" x2="53" y2="55"><stop stopColor="#f7a966" /><stop offset="1" stopColor="#f76680" /></linearGradient></defs>
              </svg>
            </div>

            <Link
              href={data.ctaHref}
              className="relative z-10 inline-block text-white btn-transition hover:shadow-xl hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #f7a966 0%, #f76680 100%)",
                borderRadius: "5px",
                padding: "18px 40px",
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "22px",
              }}
            >
              {data.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
