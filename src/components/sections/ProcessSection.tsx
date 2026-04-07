"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import type { ProcessDTO } from "@/lib/data/types";

gsap.registerPlugin(ScrollTrigger);

// Decorative circle positions for each row
const decoPositions = [
  // Row 0: text-left, image-right — circles at top-left and bottom-right of image
  { top: { right: "-12px", top: "-16px" }, bottom: { right: "40px", bottom: "-16px" } },
  // Row 1: image-left, text-right — circles at top-right and bottom-left of image
  { top: { right: "-12px", top: "-16px" }, bottom: { left: "40px", bottom: "-16px" } },
  // Row 2: same as row 0
  { top: { right: "-12px", top: "-16px" }, bottom: { right: "40px", bottom: "-16px" } },
];

interface ProcessSectionProps {
  data: ProcessDTO[];
}

export default function ProcessSection({ data }: ProcessSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".proc-heading", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
      document.querySelectorAll(".proc-row").forEach((row, i) => {
        const dir = i % 2 === 0 ? -40 : 40;
        gsap.fromTo(row.querySelector(".proc-text")!, { x: dir, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: row, start: "top 85%" } });
        gsap.fromTo(row.querySelector(".proc-img")!, { x: -dir, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: row, start: "top 85%" } });
      });
    }, ref.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-bg-light py-20 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        {/* Heading — CENTERED */}
        <div className="proc-heading text-center" style={{ marginBottom: "80px" }}>
          <div className="mx-auto" style={{ width: "69px", height: "5px", background: "linear-gradient(135deg, #f76680 0%, #57007b 100%)", borderRadius: "3px", marginBottom: "20px" }} />
          <h2 style={{ fontSize: "35px", lineHeight: "55px", color: "#1a202c" }}>
            <span style={{ fontWeight: 400 }}>Way of building</span>
            <br />
            <span style={{ fontWeight: 700 }}>Great Software</span>
          </h2>
        </div>

        {/* Rows */}
        <div className="flex flex-col" style={{ gap: "95px" }}>
          {data.map((p, i) => (
            <div
              key={i}
              className={`proc-row flex flex-col gap-10 lg:flex-row lg:items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              style={{ gap: i % 2 === 1 ? "98px" : "40px" }}
            >
              {/* Text side */}
              <div className="proc-text flex-1 flex flex-col" style={{ gap: "25px", maxWidth: "534px" }}>
                <div className="flex flex-col" style={{ gap: "30px" }}>
                  <h3 style={{ fontSize: "28px", lineHeight: "38px", fontWeight: 600, color: "#1a202c" }}>
                    {p.title}
                  </h3>

                  <div className="flex flex-col" style={{ gap: "10px" }}>
                    <p style={{ fontSize: "18px", lineHeight: "30px", color: "#2d3748" }}>
                      {p.body}
                    </p>

                    <div className="flex flex-col" style={{ gap: "20px" }}>
                      <p style={{ fontSize: "18px", lineHeight: "30px", color: "#2d3748" }}>
                        Our <span className="text-gradient-primary font-semibold">{p.highlightBold}</span> helps you cut costs and deliver within budget.
                      </p>

                      {/* Quote with gradient left border */}
                      <div className="flex" style={{ gap: "15px" }}>
                        <div className="flex-shrink-0" style={{ width: "3px", background: "linear-gradient(180deg, #f76680 0%, #57007b 100%)", borderRadius: "2px" }} />
                        <p className="text-gradient-primary" style={{ fontSize: "16px", lineHeight: "30px", fontWeight: 300, fontStyle: "italic" }}>
                          {p.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Person badge */}
                <div className="flex items-center" style={{ gap: "10px" }}>
                  <div className="overflow-hidden rounded-full" style={{ width: "41px", height: "41px" }}>
                    <Image src={p.person.avatar} alt={p.person.name} width={41} height={41} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-col" style={{ gap: "5px" }}>
                    <span style={{ fontSize: "16px", lineHeight: "19px", fontWeight: 400, color: "#1a202c" }}>{p.person.name}</span>
                    <span style={{ fontSize: "13px", lineHeight: "16px", fontWeight: 400, color: "#718096" }}>{p.person.role}</span>
                  </div>
                </div>
              </div>

              {/* Image side with decorative circles */}
              <div className="proc-img relative flex-1" style={{ maxWidth: "575px" }}>
                {/* Decorative gradient circle — top */}
                <div
                  className="absolute hidden lg:block"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #f7a96680, #f7666080)",
                    ...(decoPositions[i]?.top ?? decoPositions[0].top),
                    zIndex: 1,
                  }}
                />

                {/* Image */}
                <div className="relative overflow-hidden" style={{ borderRadius: "10px", aspectRatio: "575/473" }}>
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                </div>

                {/* Decorative gradient circle — bottom */}
                <div
                  className="absolute hidden lg:block"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #d946ef80, #57007b80)",
                    ...(decoPositions[i]?.bottom ?? decoPositions[0].bottom),
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
