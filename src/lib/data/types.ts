/** DTO interfaces — the contract between server and client.
 *  Raw API/CMS shapes never leak to the UI. */

export interface NavItemDTO {
  label: string;
  href: string;
  active?: boolean;
}

export interface HeroDTO {
  heading: {
    line1: { text: string; gradient?: string }[];
    line2: { text: string; gradient?: string }[];
  };
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  image: string;
}

export interface ServiceDTO {
  title: string;
  description: string;
  icon: string; // icon identifier
}

export interface AboutDTO {
  heading: string;
  headingHighlight: string;
  body: string;
  bodyHighlight: string;
  linkText: string;
  linkHref: string;
  videoImage: string;
}

export interface LogoDTO {
  name: string;
}

export interface TestimonialDTO {
  name: string;
  role: string;
  company?: string;
  avatar: string;
  text: string;
}

export interface CaseStudyDTO {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  tag?: string;
}

export interface ProcessDTO {
  title: string;
  body: string;
  highlightBold: string;
  quote: string;
  person: { name: string; role: string; avatar: string };
  image: string;
}

export interface ApproachDTO {
  title: string;
  gradient: string;
  iconId: string;
}

export interface TechTabDTO {
  name: string;
  logos: { name: string; src: string; w: number; h: number }[];
}

export interface StepDTO {
  num: string;
  title: string;
  description: string;
}

export interface BlogPostDTO {
  title: string;
  image: string;
  href: string;
}

export interface CtaBannerDTO {
  heading: string;
  ctaText: string;
  ctaHref: string;
}

export interface FooterLinkDTO {
  label: string;
  href: string;
}

export interface SocialLinkDTO {
  label: string;
  href: string;
  iconPath: string;
}

export interface HomepageDTO {
  hero: HeroDTO;
  services: ServiceDTO[];
  about: AboutDTO;
  logos: LogoDTO[];
  testimonials: TestimonialDTO[];
  caseStudies: CaseStudyDTO[];
  processes: ProcessDTO[];
  approaches: ApproachDTO[];
  techTabs: TechTabDTO[];
  stepsTop: StepDTO[];
  stepsBottom: StepDTO[];
  blogPosts: BlogPostDTO[];
  ctaBanner: CtaBannerDTO;
}
