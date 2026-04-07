export const easings = {
  impact: "power4.out",
  bouncy: "back.out(1.7)",
  elastic: "elastic.out(1, 0.3)",
  smooth: "power3.out",
  anticipation: "power2.in",
} as const;

export const durations = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.9,
  verySlow: 1.2,
} as const;

export const stagger = {
  tight: 0.05,
  normal: 0.1,
  relaxed: 0.15,
  wide: 0.2,
} as const;
