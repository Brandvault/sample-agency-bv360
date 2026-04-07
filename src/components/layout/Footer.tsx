import Link from "next/link";

const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Areas We Serve", href: "/areas" },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { label: "Instagram", href: "#", icon: "M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zm-4 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm3.5-5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" },
  { label: "Twitter", href: "#", icon: "M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2-4.52 4.5 0 .35.04.7.11 1.03C7.73 5.3 4.1 3.5 1.67.83A4.5 4.5 0 0 0 3.07 6.8 4.49 4.49 0 0 1 1 6.13v.06A4.52 4.52 0 0 0 4.63 10.6a4.51 4.51 0 0 1-2.04.08A4.53 4.53 0 0 0 6.8 13.7a9.07 9.07 0 0 1-5.6 1.94c-.37 0-.73-.02-1.09-.07A12.77 12.77 0 0 0 7.03 18c8.35 0 12.9-6.92 12.9-12.9 0-.2 0-.39-.02-.58A9.22 9.22 0 0 0 23 3z" },
  { label: "LinkedIn", href: "#", icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]" style={{ paddingTop: "60px", paddingBottom: "40px" }}>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            {/* Logo icon */}
            <div className="mb-4 flex items-center gap-2">
              <svg width="20" height="15" viewBox="0 0 29 22" fill="none">
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="29" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#161390" />
                    <stop offset="0.5" stopColor="#7476ed" />
                    <stop offset="1" stopColor="#e56f8c" />
                  </linearGradient>
                </defs>
                <path d="M14.5 0C6.5 0 0 4.9 0 11s6.5 11 14.5 11S29 17.1 29 11 22.5 0 14.5 0zm-3 16c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" fill="url(#footer-logo-grad)" />
              </svg>
              <span style={{ fontSize: "16px", fontWeight: 700, color: "#3a3b7b" }}>BV360</span>
            </div>
            <p style={{ fontSize: "18px", lineHeight: "30px", fontWeight: 400, color: "#718096" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            {/* Google badge placeholder */}
            <div className="mt-6 flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2" style={{ width: "fit-content" }}>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "#4285F4" }}>G</span>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "#EA4335" }}>o</span>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "#FBBC05" }}>o</span>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "#4285F4" }}>g</span>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "#34A853" }}>l</span>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "#EA4335" }}>e</span>
              <span className="mx-1 text-gray-300">|</span>
              <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a202c" }}>100</span>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#4a5568", marginBottom: "16px" }}>Links</h4>
            <nav className="flex flex-col" style={{ gap: "10px" }}>
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{ fontSize: "16px", fontWeight: 400, color: "#718096", lineHeight: "25px", transition: "color 0.2s" }}
                  className="hover:text-brand-purple"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#4a5568", marginBottom: "16px" }}>Contact us</h4>
            <p style={{ fontSize: "18px", lineHeight: "30px", fontWeight: 400, color: "#718096", marginBottom: "16px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <a
              href="tel:+923183561921"
              style={{ fontSize: "18px", fontWeight: 400, color: "#718096", transition: "color 0.2s" }}
              className="hover:text-brand-purple"
            >
              +923183561921
            </a>
          </div>

          {/* Social Column — bottom right */}
          <div className="flex flex-col justify-end items-start lg:items-end">
            <div className="flex" style={{ gap: "12px" }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center justify-center rounded-full border border-gray-300 transition-all duration-200 hover:border-brand-purple hover:text-brand-purple"
                  style={{ width: "34px", height: "34px", color: "#4a5568" }}
                  aria-label={social.label}
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright line */}
      <div style={{ borderTop: "1px solid #e2e8f0" }}>
        <p className="py-5 text-center" style={{ fontSize: "14px", fontWeight: 400, color: "#4a5568" }}>
          &copy; {new Date().getFullYear()} Copyright by BV360. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
