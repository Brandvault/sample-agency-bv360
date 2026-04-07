import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/lib/prismic/client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BV360 - Great Product is Built by Great Teams",
  description:
    "BV360 helps build and manage teams of world-class developers to bring your vision to life. Software development, mobile apps, and digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
