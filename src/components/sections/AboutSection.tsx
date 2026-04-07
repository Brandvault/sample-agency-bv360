"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import type { AboutDTO } from "@/lib/data/types";

gsap.registerPlugin(ScrollTrigger);

interface AboutSectionProps {
  data: AboutDTO;
}

export default function AboutSection({ data }: AboutSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-deco", { width: 0 }, { width: 69, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
      gsap.fromTo(".about-title", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
      gsap.fromTo(".about-body", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.15, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
      gsap.fromTo(".about-link", { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.3, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
      gsap.fromTo(".about-video", { scale: 0.92, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".about-video", start: "top 85%" } });
    }, ref.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-[148px] lg:py-24">
        <div className="relative flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
          {/* Decorative gradient background shape */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
            style={{
              width: "778px",
              height: "765px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #f76680 0%, #57007b 100%)",
              opacity: 0.03,
              zIndex: 0,
            }}
          />

          {/* Text content — 535px */}
          <div className="relative z-10 flex flex-col lg:max-w-[535px]" style={{ gap: "51px" }}>
            <div className="flex flex-col" style={{ gap: "20px" }}>
              {/* Deco line */}
              <div
                className="about-deco"
                style={{
                  width: "69px",
                  height: "5px",
                  background: "linear-gradient(135deg, #f76680 0%, #57007b 100%)",
                  borderRadius: "3px",
                }}
              />

              <div className="flex flex-col" style={{ gap: "30px" }}>
                {/* Heading */}
                <h2
                  className="about-title font-bold"
                  style={{ fontSize: "35px", lineHeight: "55px", color: "#1a202c" }}
                >
                  {data.heading}
                  <br />
                  <span className="text-gradient-primary">{data.headingHighlight}</span>
                </h2>

                {/* Body */}
                <p
                  className="about-body"
                  style={{ fontSize: "18px", lineHeight: "36px", color: "#718096" }}
                >
                  We add <span className="font-semibold text-gradient-primary">{data.bodyHighlight}</span> {data.body}
                </p>
              </div>
            </div>

            {/* Link */}
            <Link
              href={data.linkHref}
              className="about-link group inline-flex items-center transition-colors duration-200 hover:opacity-80"
              style={{ gap: "15px", fontSize: "16px", fontWeight: 500, color: "#57007b", lineHeight: "25px" }}
            >
              {data.linkText}
              <svg className="link-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#57007b" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Video thumbnail — 601x460, r=20 */}
          <div className="about-video relative z-10 flex-1">
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "20px",
                width: "100%",
                maxWidth: "601px",
                aspectRatio: "601/460",
              }}
            >
              <Image
                src={data.videoImage}
                alt="Team working together"
                fill
                className="object-cover"
              />

              {/* Play button overlay — concentric circles */}
              <button
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Play video"
              >
                {/* Outer ring */}
                <div
                  className="absolute flex items-center justify-center rounded-full"
                  style={{
                    width: "78px",
                    height: "78px",
                    backgroundColor: "rgba(255,255,255,0.2)",
                  }}
                >
                  {/* Middle ring */}
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: "58px",
                      height: "58px",
                      backgroundColor: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {/* Inner circle with icon */}
                    <div
                      className="flex items-center justify-center rounded-full btn-transition hover:scale-110"
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "white",
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#57007b">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </div>

            {/* Decorative gradient dots */}
            <div
              className="absolute -right-6 -top-6 rounded-full hidden lg:block"
              style={{
                width: "72px",
                height: "72px",
                background: "linear-gradient(135deg, #f76680 0%, #57007b 100%)",
                opacity: 0.15,
              }}
            />
            <div
              className="absolute -bottom-4 -left-4 rounded-full hidden lg:block"
              style={{
                width: "72px",
                height: "72px",
                background: "linear-gradient(135deg, #f76680 0%, #57007b 100%)",
                opacity: 0.15,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
