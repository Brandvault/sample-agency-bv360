import { Suspense } from "react";
import {
  getHero,
  getServices,
  getAbout,
  getLogos,
  getTestimonials,
  getCaseStudies,
  getProcesses,
  getApproaches,
  getTechTabs,
  getStepsTop,
  getStepsBottom,
  getBlogPosts,
  getCtaBanner,
} from "@/lib/data/server";

import HeroSection from "@/components/sections/HeroSection";
import ServicesCarousel from "@/components/sections/ServicesCarousel";
import AboutSection from "@/components/sections/AboutSection";
import LogoBar from "@/components/sections/LogoBar";
import Testimonials from "@/components/sections/Testimonials";
import CaseStudies from "@/components/sections/CaseStudies";
import ProcessSection from "@/components/sections/ProcessSection";
import ApproachGrid from "@/components/sections/ApproachGrid";
import TechStack from "@/components/sections/TechStack";
import HowItWorks from "@/components/sections/HowItWorks";
import FeaturedResources from "@/components/sections/FeaturedResources";
import CtaBanner from "@/components/sections/CtaBanner";

function SectionSkeleton() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-purple border-t-transparent" />
    </div>
  );
}

export default function HomePage() {
  const hero = getHero();
  const services = getServices();
  const about = getAbout();
  const logos = getLogos();
  const testimonials = getTestimonials();
  const caseStudies = getCaseStudies();
  const processes = getProcesses();
  const approaches = getApproaches();
  const techTabs = getTechTabs();
  const stepsTop = getStepsTop();
  const stepsBottom = getStepsBottom();
  const blogPosts = getBlogPosts();
  const ctaBanner = getCtaBanner();

  return (
    <>
      <Suspense fallback={<SectionSkeleton />}>
        <HeroSection data={hero} />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ServicesCarousel data={services} />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection data={about} />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <LogoBar data={logos} />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Testimonials data={testimonials} />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CaseStudies data={caseStudies} />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ProcessSection data={processes} />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ApproachGrid data={approaches} />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TechStack data={techTabs} />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <HowItWorks stepsTop={stepsTop} stepsBottom={stepsBottom} />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <FeaturedResources data={blogPosts} />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CtaBanner data={ctaBanner} />
      </Suspense>
    </>
  );
}
