"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import type { HeroDTO } from "@/lib/data/types";

interface HeroSectionProps {
  data: HeroDTO;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(".hero-heading", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
        .fromTo(".hero-sub", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")
        .fromTo(".hero-cta", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2")
        .fromTo(".hero-image", { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white">
      <div
        className="mx-auto flex max-w-[1440px] flex-col items-center lg:flex-row"
        style={{ padding: "69px 148px 69px 148px" }}
      >
        {/* Text — 531px in Figma */}
        <div className="flex flex-col lg:max-w-[531px]" style={{ gap: "75px" }}>
          <div className="flex flex-col" style={{ gap: "28px" }}>
            {/* H1 */}
            <h1
              className="hero-heading font-extrabold text-heading"
              style={{ fontSize: "53px", lineHeight: "71px", letterSpacing: "0px" }}
            >
              {data.heading.line1.map((segment, i) =>
                segment.gradient ? (
                  <span
                    key={i}
                    style={{
                      background: segment.gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {segment.text}
                  </span>
                ) : (
                  <span key={i}>{segment.text}</span>
                )
              )}
              <br />
              {data.heading.line2.map((segment, i) =>
                segment.gradient ? (
                  <span
                    key={i}
                    style={{
                      background: segment.gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {segment.text}
                  </span>
                ) : (
                  <span key={i}>{segment.text}</span>
                )
              )}
            </h1>

            {/* Subtitle */}
            <p
              className="hero-sub text-body"
              style={{ fontSize: "18px", lineHeight: "36px", maxWidth: "531px" }}
            >
              {data.subtitle}
            </p>
          </div>

          {/* CTA */}
          <div className="hero-cta">
            <Link
              href={data.ctaHref}
              className="inline-block text-[14px] font-semibold text-white btn-transition"
              style={{
                backgroundColor: "#3d63e9",
                borderRadius: "5px",
                padding: "19px 30px",
                boxShadow: "0 4px 49px rgba(0,0,0,0.15)",
              }}
            >
              {data.ctaText}
            </Link>
          </div>
        </div>

        {/* Hero Image — 614x546 in Figma */}
        <div className="hero-image flex-1 lg:ml-auto">
          <div className="relative" style={{ width: "100%", maxWidth: "614px", aspectRatio: "614/546" }}>
            <Image
              src={data.image}
              alt="Team building digital products"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
