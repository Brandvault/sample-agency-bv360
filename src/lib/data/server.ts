import "server-only";

import type {
  HeroDTO,
  ServiceDTO,
  AboutDTO,
  LogoDTO,
  TestimonialDTO,
  CaseStudyDTO,
  ProcessDTO,
  ApproachDTO,
  TechTabDTO,
  StepDTO,
  BlogPostDTO,
  CtaBannerDTO,
  FooterLinkDTO,
  SocialLinkDTO,
  NavItemDTO,
  HomepageDTO,
} from "./types";

// ─── Navigation ───

export function getNavItems(): NavItemDTO[] {
  return [
    { label: "Home", href: "/", active: true },
    { label: "About us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "How it Works", href: "/how-it-works" },
    { label: "Hire", href: "/hire" },
  ];
}

// ─── Hero ───

export function getHero(): HeroDTO {
  return {
    heading: {
      line1: [
        { text: "Great " },
        { text: "Product ", gradient: "linear-gradient(180deg, #DD4296 0%, #0D1B9F 100%)" },
        { text: "is" },
      ],
      line2: [
        { text: "built by great ", gradient: "linear-gradient(180deg, #F7666E 0%, #3F69FF 100%)" },
        { text: "teams", gradient: "linear-gradient(180deg, #F7666E 0%, #3F69FF 100%)" },
      ],
    },
    subtitle: "We help build and manage a team of world-class developers to bring your vision to life",
    ctaText: "Let's get started!",
    ctaHref: "/contact",
    image: "/assets/hero-illustration.png",
  };
}

// ─── Services ───

export function getServices(): ServiceDTO[] {
  return [
    { title: "Mobile App Development", description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.", icon: "mobile" },
    { title: "Software Testing Service", description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.", icon: "testing" },
    { title: "Web Design & Development", description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.", icon: "web" },
    { title: "UI/UX Design", description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.", icon: "design" },
    { title: "Cloud Solutions", description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.", icon: "cloud" },
  ];
}

// ─── About ───

export function getAbout(): AboutDTO {
  return {
    heading: "Leading companies trust us",
    headingHighlight: "to develop software",
    body: "We add development capacity to tech teams. Our value isn't limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.",
    bodyHighlight: "development capacity",
    linkText: "See more Informations",
    linkHref: "/about",
    videoImage: "/assets/about-video-thumb.png",
  };
}

// ─── Logos ───

export function getLogos(): LogoDTO[] {
  return [
    { name: "Home Deals" }, { name: "Sampath" }, { name: "AdClipse" }, { name: "PJC Bridge" },
    { name: "ClickOrder" }, { name: "TechMate" }, { name: "Breakthrough" }, { name: "InnoSoft" },
  ];
}

// ─── Testimonials ───

export function getTestimonials(): TestimonialDTO[] {
  return [
    { name: "Romeena De Silva", role: "Janet Cosmetics", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80", text: "Without any doubt I recommend BV360 Solutions as one of the best web design and digital marketing agencies. Wouldn't be hesitated to introduce their work to someone else." },
    { name: "Sarah Johnson", role: "TechCorp", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80", text: "The team at BV360 delivered exceptional results. Their attention to detail and commitment to quality made our project a huge success." },
    { name: "Imran Khan", role: "Software Engineer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80", text: "Without any doubt I recommend BV360 Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far." },
    { name: "David Chen", role: "StartupHub", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80", text: "Working with BV360 has been a game-changer for our company. They understood our vision and delivered a product that exceeded our expectations." },
    { name: "Emily Watson", role: "Design Studio", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80", text: "BV360's expertise in software development is unmatched. They transformed our idea into a beautiful, functional product in record time." },
    { name: "Alex Rivera", role: "CloudNine Inc", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80", text: "Exceptional service from start to finish. The BV360 team is responsive, creative, and truly invested in delivering the best possible outcome." },
    { name: "Maria Santos", role: "E-Commerce Pro", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80", text: "We saw a 3x increase in conversions after BV360 redesigned our platform. Their understanding of UX is remarkable." },
    { name: "James Park", role: "FinTech Solutions", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80", text: "Security and quality were our top priorities, and BV360 delivered on both fronts. Highly recommend for any enterprise project." },
    { name: "Lisa Chang", role: "MediaWorks", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80", text: "From concept to launch, BV360 was with us every step of the way. Their agile approach kept the project on track and on budget." },
    { name: "Tom Bradley", role: "HealthTech Co", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80", text: "The best development team we've ever worked with. Professional, skilled, and always going the extra mile to ensure quality." },
  ];
}

// ─── Case Studies ───

export function getCaseStudies(): CaseStudyDTO[] {
  return [
    { title: "Website Design for SCFC Canada", description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", bgColor: "#f1f1ff" },
    { title: "Website Design for SCFC Canada", description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80", bgColor: "#f0fff7" },
    { title: "Website Design for SCFC Canada", description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80", bgColor: "#fff4f4" },
  ];
}

// ─── Processes ───

export function getProcesses(): ProcessDTO[] {
  return [
    { title: "Build the right team to scale", body: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers).", highlightBold: "delivery model", quote: "\"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules\"", person: { name: "Jeewa markram", role: "CEO", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80" }, image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" },
    { title: "Build the right team to scale", body: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers).", highlightBold: "delivery model", quote: "\"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules\"", person: { name: "Jeewa markram", role: "CEO", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80" }, image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" },
    { title: "Build the right team to scale", body: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers).", highlightBold: "delivery model", quote: "\"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules\"", person: { name: "Jeewa markram", role: "CEO", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80" }, image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80" },
  ];
}

// ─── Approaches ───

export function getApproaches(): ApproachDTO[] {
  return [
    { title: "UX Driven Engineering", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", iconId: "layers" },
    { title: "Developing Shared Understanding", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", iconId: "code" },
    { title: "Proven Experience and Expertise", gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)", iconId: "star" },
    { title: "Security & Intellectual Property (IP)", gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", iconId: "shield" },
    { title: "Code Reviews", gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", iconId: "check" },
    { title: "Quality Assurance & Testing", gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", iconId: "lock" },
  ];
}

// ─── Tech Stack ───

export function getTechTabs(): TechTabDTO[] {
  return [
    { name: "Backend", logos: [
      { name: "Node.js", src: "/assets/tech/nodejs.png", w: 166, h: 94 },
      { name: "PHP", src: "/assets/tech/php.png", w: 166, h: 94 },
      { name: "MySQL", src: "/assets/tech/mysql.png", w: 160, h: 80 },
      { name: "Java", src: "/assets/tech/java.png", w: 166, h: 94 },
      { name: ".NET Core", src: "/assets/tech/dotnet.png", w: 166, h: 94 },
      { name: "Python", src: "/assets/tech/python.png", w: 166, h: 94 },
      { name: "Ruby on Rails", src: "/assets/tech/rails.png", w: 166, h: 94 },
      { name: "Go", src: "/assets/tech/go.png", w: 166, h: 94 },
      { name: "MongoDB", src: "/assets/tech/mongodb.png", w: 201, h: 54 },
    ]},
    { name: "Frontend", logos: [
      { name: "React", src: "/assets/tech/nodejs.png", w: 166, h: 94 },
      { name: "Next.js", src: "/assets/tech/php.png", w: 166, h: 94 },
      { name: "Vue", src: "/assets/tech/java.png", w: 166, h: 94 },
      { name: "Angular", src: "/assets/tech/dotnet.png", w: 166, h: 94 },
      { name: "TypeScript", src: "/assets/tech/python.png", w: 166, h: 94 },
      { name: "Tailwind", src: "/assets/tech/rails.png", w: 166, h: 94 },
    ]},
    { name: "Databases", logos: [
      { name: "MySQL", src: "/assets/tech/mysql.png", w: 160, h: 80 },
      { name: "MongoDB", src: "/assets/tech/mongodb.png", w: 201, h: 54 },
      { name: "PostgreSQL", src: "/assets/tech/nodejs.png", w: 166, h: 94 },
      { name: "Redis", src: "/assets/tech/java.png", w: 166, h: 94 },
    ]},
    { name: "CMS", logos: [
      { name: "WordPress", src: "/assets/tech/php.png", w: 166, h: 94 },
      { name: "Prismic", src: "/assets/tech/nodejs.png", w: 166, h: 94 },
      { name: "Contentful", src: "/assets/tech/dotnet.png", w: 166, h: 94 },
    ]},
    { name: "CloudTesting", logos: [
      { name: "AWS", src: "/assets/tech/java.png", w: 166, h: 94 },
      { name: "GCP", src: "/assets/tech/go.png", w: 166, h: 94 },
      { name: "Azure", src: "/assets/tech/dotnet.png", w: 166, h: 94 },
      { name: "Vercel", src: "/assets/tech/nodejs.png", w: 166, h: 94 },
    ]},
    { name: "DevOps", logos: [
      { name: "Docker", src: "/assets/tech/go.png", w: 166, h: 94 },
      { name: "Kubernetes", src: "/assets/tech/java.png", w: 166, h: 94 },
      { name: "GitHub Actions", src: "/assets/tech/python.png", w: 166, h: 94 },
      { name: "Terraform", src: "/assets/tech/rails.png", w: 166, h: 94 },
    ]},
  ];
}

// ─── How It Works ───

export function getStepsTop(): StepDTO[] {
  return [
    { num: "#1", title: "Assemble the right team", description: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do." },
    { num: "#3", title: "Tech architecture", description: "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently" },
    { num: "#5", title: "Code reviews", description: "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells" },
  ];
}

export function getStepsBottom(): StepDTO[] {
  return [
    { num: "#2", title: "Sprint planning", description: "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding." },
    { num: "#4", title: "Standups & weekly demos", description: "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns." },
    { num: "#6", title: "Iterative delivery", description: "We divide the implementation process into several checkpoints rather than a single deadline." },
  ];
}

// ─── Blog Posts ───

export function getBlogPosts(): BlogPostDTO[] {
  return [
    { title: "How to Build a Scalable Application up to 1 Million Users on AWS", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80", href: "/blog" },
    { title: "Demystifying Software Engineering: A Beginner's Guide to Success", image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80", href: "/blog" },
    { title: "The Future of Cloud Computing: Trends to Watch in Modern Tech", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80", href: "/blog" },
    { title: "Why Every Business Needs a Mobile-First Strategy in 2026", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80", href: "/blog" },
    { title: "Best Practices for Secure Software Development Lifecycle", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80", href: "/blog" },
    { title: "Understanding Microservices Architecture for Enterprise Apps", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80", href: "/blog" },
    { title: "How AI is Transforming the Software Development Process", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80", href: "/blog" },
    { title: "DevOps Best Practices for Continuous Delivery Pipelines", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80", href: "/blog" },
  ];
}

// ─── CTA Banner ───

export function getCtaBanner(): CtaBannerDTO {
  return {
    heading: "Hire the best developers and designers around!",
    ctaText: "Hire Top Developers",
    ctaHref: "/contact",
  };
}

// ─── Footer ───

export function getFooterLinks(): FooterLinkDTO[] {
  return [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Areas We Serve", href: "/areas" },
  ];
}

export function getSocialLinks(): SocialLinkDTO[] {
  return [
    { label: "Facebook", href: "#", iconPath: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
    { label: "Instagram", href: "#", iconPath: "M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zm-4 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm3.5-5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" },
    { label: "Twitter", href: "#", iconPath: "M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2-4.52 4.5 0 .35.04.7.11 1.03C7.73 5.3 4.1 3.5 1.67.83A4.5 4.5 0 0 0 3.07 6.8 4.49 4.49 0 0 1 1 6.13v.06A4.52 4.52 0 0 0 4.63 10.6a4.51 4.51 0 0 1-2.04.08A4.53 4.53 0 0 0 6.8 13.7a9.07 9.07 0 0 1-5.6 1.94c-.37 0-.73-.02-1.09-.07A12.77 12.77 0 0 0 7.03 18c8.35 0 12.9-6.92 12.9-12.9 0-.2 0-.39-.02-.58A9.22 9.22 0 0 0 23 3z" },
    { label: "YouTube", href: "#", iconPath: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
  ];
}

// ─── Aggregate homepage data ───

export function getHomepageData(): HomepageDTO {
  return {
    hero: getHero(),
    services: getServices(),
    about: getAbout(),
    logos: getLogos(),
    testimonials: getTestimonials(),
    caseStudies: getCaseStudies(),
    processes: getProcesses(),
    approaches: getApproaches(),
    techTabs: getTechTabs(),
    stepsTop: getStepsTop(),
    stepsBottom: getStepsBottom(),
    blogPosts: getBlogPosts(),
    ctaBanner: getCtaBanner(),
  };
}
