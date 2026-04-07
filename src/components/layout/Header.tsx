"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/", active: true },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Hire", href: "/hire" },
];

function LogoIcon() {
  return (
    <svg width="29" height="22" viewBox="0 0 29 22" fill="none">
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="29" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#161390" />
          <stop offset="0.5" stopColor="#7476ed" />
          <stop offset="1" stopColor="#e56f8c" />
        </linearGradient>
      </defs>
      <path d="M14.5 0C6.5 0 0 4.9 0 11s6.5 11 14.5 11S29 17.1 29 11 22.5 0 14.5 0zm-3 16c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" fill="url(#logo-grad)" />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-white"
      style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.10)" }}
    >
      <div
        className="mx-auto flex max-w-[1440px] items-center justify-between"
        style={{ padding: "10px 25px" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <LogoIcon />
          <span className="text-lg font-bold tracking-tight" style={{ color: "#3a3b7b" }}>
            BV360
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center lg:flex" style={{ gap: "61px" }}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative transition-colors duration-200 ${
                item.active
                  ? "text-[18px] font-bold text-brand-purple"
                  : "text-[16px] font-medium text-body hover:text-brand-purple"
              }`}
              style={{ letterSpacing: item.active ? "-0.09px" : "0" }}
            >
              {item.label}
              {item.active && (
                <span
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-brand-purple"
                  style={{ width: "17px", height: "3px" }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden text-[14px] font-semibold text-white btn-transition lg:block"
          style={{
            background: "linear-gradient(135deg, #6674f7 0%, #57007b 100%)",
            borderRadius: "5px",
            padding: "14px 25px",
          }}
        >
          Contact us
        </Link>

        {/* Mobile Toggle */}
        <button
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-heading transition-transform duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-heading transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-heading transition-transform duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-base ${item.active ? "font-bold text-brand-purple" : "font-medium text-body"}`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-[5px] px-6 py-3 text-center text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #6674f7 0%, #57007b 100%)" }}
              onClick={() => setMobileOpen(false)}
            >
              Contact us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
