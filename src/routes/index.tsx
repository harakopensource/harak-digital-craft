import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowUp, Calendar, Code2, Rocket, Search, Sparkles, Zap, Menu, X,
  Github, Linkedin, Instagram, Youtube, MessageCircle, Mail, Phone, MapPin,
  CheckCircle2, Star, ExternalLink, Download, Briefcase, Users, Award, Target,
  Palette, TrendingUp, Shield, Clock, Heart, ChevronDown,
} from "lucide-react";
import harakPhoto from "@/assets/harak.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harak — Full Stack Web Developer & Digital Marketing Expert" },
      { name: "description", content: "Harak: Full Stack Web Developer, WordPress Expert & Digital Marketing Expert. Building modern websites that drive business growth. 5+ years experience, 100+ projects." },
      { property: "og:title", content: "Harak — Full Stack Web Developer & Digital Marketing Expert" },
      { property: "og:description", content: "Building modern websites that drive business growth." },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Harak",
        jobTitle: "Full Stack Web Developer & Digital Marketing Expert",
        url: "https://calendly.com/marketingwithharak/30min",
        sameAs: [],
      }),
    }],
  }),
  component: Portfolio_,
});

const CALENDLY = "https://calendly.com/marketingwithharak/30min";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "100%", label: "Client Satisfaction" },
];

const SKILLS = [
  { title: "Frontend", items: ["React", "Next.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express.js", "MongoDB", "Firebase", "REST API"] },
  { title: "WordPress", items: ["WordPress", "Elementor Pro", "WooCommerce", "Custom Theme", "Custom Plugin"] },
  { title: "Digital Marketing", items: ["SEO", "Technical SEO", "Local SEO", "Meta Ads", "Google Ads", "Google Analytics", "Search Console"] },
  { title: "Tools", items: ["VS Code", "GitHub", "Figma", "Canva", "Photoshop", "Meta Business Suite"] },
];

const SERVICES = [
  { icon: Code2, title: "Full Stack MERN Development", desc: "Scalable MERN applications engineered for performance and growth." },
  { icon: Palette, title: "WordPress Development", desc: "Custom themes, plugins and Elementor builds tailored to your brand." },
  { icon: Briefcase, title: "Business Websites", desc: "Conversion-focused websites that turn visitors into paying customers." },
  { icon: Rocket, title: "Landing Page Design", desc: "High-converting landing pages built to maximize ad ROI." },
  { icon: TrendingUp, title: "E-Commerce Development", desc: "WooCommerce & Shopify stores designed to sell around the clock." },
  { icon: Zap, title: "Website Speed Optimization", desc: "Turn slow sites into blazing-fast, 90+ PageSpeed experiences." },
  { icon: Shield, title: "Website Maintenance", desc: "Ongoing updates, backups, and security so you can focus on business." },
  { icon: Search, title: "SEO & Technical SEO", desc: "Rank higher with technical, on-page, and local SEO that compounds." },
  { icon: Target, title: "Google & Meta Ads", desc: "Data-driven ad campaigns engineered for measurable lead generation." },
];

const WHY = [
  "5+ Years Experience", "Business Focused Development", "SEO Optimized Websites",
  "Responsive Design", "Modern UI/UX", "Fast Performance", "Clean Coding Standards",
  "Scalable Architecture", "Affordable Pricing", "Transparent Communication", "Long-Term Support",
];

const PROCESS = [
  { n: "01", title: "Requirement Discussion", desc: "We dive deep into your goals, audience and vision." },
  { n: "02", title: "Research & Planning", desc: "Competitor, market and technical research to inform strategy." },
  { n: "03", title: "Wireframe", desc: "Low-fidelity blueprints to align on structure and flow." },
  { n: "04", title: "UI Design", desc: "Pixel-perfect, on-brand visual design in Figma." },
  { n: "05", title: "Development", desc: "Clean, scalable code with modern stacks and best practices." },
  { n: "06", title: "Testing", desc: "Cross-browser, cross-device and performance QA." },
  { n: "07", title: "Launch", desc: "Smooth deployment with zero-downtime rollout." },
  { n: "08", title: "Support", desc: "Ongoing improvements, updates and growth strategy." },
];

const PROJECTS = [
  { url: "https://bocalaw.com/", name: "Boca Law", tech: "WordPress · SEO · Elementor", desc: "Premium legal firm website with lead-focused UX and local SEO." },
  { url: "https://watchesandcrystals.com/", name: "Watches & Crystals", tech: "Shopify · CRO", desc: "Luxury eCommerce store optimized for conversion and brand storytelling." },
  { url: "https://pacinosproducts.com/", name: "Pacinos Products", tech: "Shopify · Meta Ads", desc: "DTC grooming brand with ad-driven landing pages and analytics." },
  { url: "http://swics.org/", name: "SWICS", tech: "WordPress · Custom Theme", desc: "Institutional website with structured content and accessibility." },
  { url: "https://eurasiaschool.com/", name: "Eurasia School", tech: "WordPress · Local SEO", desc: "Modern school website driving admissions inquiries year-round." },
  { url: "https://www.billsby.com/", name: "Billsby", tech: "Next.js · SaaS", desc: "Enterprise SaaS marketing site with rich interactive components." },
];

const TESTIMONIALS = [
  { name: "Sarah Mitchell", role: "Founder, Nova Studio", text: "Harak transformed our outdated site into a lead-generation machine. Traffic tripled in 60 days.", rating: 5 },
  { name: "David Chen", role: "CEO, PulseCommerce", text: "Reliable, communicative, and deeply skilled across the stack. Our conversion rate jumped 42%.", rating: 5 },
  { name: "Amina Yusuf", role: "Marketing Director, LumenLegal", text: "Both a developer and a marketer — a rare combo. Highest ROI agency partner we've hired.", rating: 5 },
];

const FAQS = [
  { q: "What services do you offer?", a: "Full stack web development, WordPress design, eCommerce, landing pages, SEO, Google & Meta Ads, and business growth consulting." },
  { q: "Can you develop MERN Stack applications?", a: "Yes. I build production-grade MERN apps with authentication, dashboards, APIs and third-party integrations." },
  { q: "Do you build WordPress websites?", a: "Absolutely. Custom themes, Elementor Pro builds, WooCommerce stores, and custom plugin development." },
  { q: "Can you redesign my current website?", a: "Yes. I audit your current site and rebuild it with modern design, performance and SEO best practices." },
  { q: "Do you provide SEO services?", a: "Yes — technical SEO, on-page optimization, local SEO, and long-term organic growth strategy." },
  { q: "Can you run Google Ads & Meta Ads?", a: "Yes. I plan, launch and optimize campaigns focused on qualified leads and measurable ROI." },
  { q: "How much does a website cost?", a: "Projects start from a few hundred dollars for landing pages and scale by scope. Book a free call for a custom quote." },
  { q: "How long does development take?", a: "Landing pages: 1 week. Business sites: 2–3 weeks. eCommerce and MERN apps: 4–8 weeks." },
  { q: "Do you provide maintenance after launch?", a: "Yes. Flexible monthly maintenance plans covering updates, backups, security and improvements." },
  { q: "How do we start working together?", a: "Book a free 30-minute consultation via Calendly and we'll map out the perfect approach for your project." },
];

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/marketingwithharak/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/marketingwithharak/" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@Marketing-with-harak" },
  { icon: Github, label: "GitHub", href: "https://github.com/harakopensource" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/918360998950" },
];

// ---------------- Components ----------------

function Loader({ done }: { done: boolean }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative"
          >
            <div className="text-5xl sm:text-7xl font-bold gradient-text tracking-tight">HARAK</div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-0.5 mt-3 gradient-primary rounded-full"
            />
          </motion.div>
          <div className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">Loading Experience</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] gradient-primary origin-left z-[90]"
    />
  );
}

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed top-0 left-0 z-[80] h-6 w-6 rounded-full border-2 border-primary mix-blend-difference hidden md:block"
    />
  );
}

function Navbar({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${scrolled ? "glass-strong" : ""}`}>
          <a href="#home" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center font-bold text-primary-foreground shadow-lg">H</div>
            <span className="font-display font-bold text-lg tracking-tight">Harak<span className="text-primary">.</span></span>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${active === n.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover-lift"
            >
              Hire Me <ArrowRight className="h-4 w-4" />
            </a>
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="lg:hidden p-2 rounded-lg glass">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass-strong rounded-2xl p-4"
            >
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  {n.label}
                </a>
              ))}
              <a href={CALENDLY} target="_blank" rel="noreferrer" className="mt-2 block text-center rounded-xl gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground">
                Hire Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

function AnimatedBg() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 h-72 w-72 rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.24 25 / 0.8), transparent)" }}
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 h-96 w-96 rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, oklch(0.5 0.2 350 / 0.8), transparent)" }}
      />
    </div>
  );
}

function TypingRoles() {
  const roles = ["Full Stack Developer.", "WordPress Expert.", "Digital Marketing Expert.", "MERN Specialist."];
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i];
    const timeout = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text === current) setTimeout(() => setDel(true), 1500);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text === "") { setDel(false); setI((i + 1) % roles.length); }
      }
    }, del ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, del, i]);

  return (
    <span className="text-primary">
      {text}<span className="animate-blink">|</span>
    </span>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 px-4 sm:px-6">
      <AnimatedBg />
      <div className="mx-auto max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for Freelance Projects
          </motion.div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight max-w-5xl mx-auto">
            Hi, I'm <span className="gradient-text">Harak</span>
            <br />
            <TypingRoles />
          </h1>
          <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Helping businesses build high-converting websites, powerful web applications, and digital marketing strategies that generate real results.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={CALENDLY} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-xl gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover-lift">
              Hire Me <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3.5 text-sm font-semibold hover-lift">
              View Portfolio
            </a>
            <a href={CALENDLY} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3.5 text-sm font-semibold hover:border-primary transition-colors">
              <Calendar className="h-4 w-4" /> Book Free Consultation
            </a>
          </div>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {STATS.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="glass rounded-2xl p-4 sm:p-6"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text">{s.value}</div>
                <div className="mt-2 text-xs sm:text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  return (
    <Reveal>
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
          <Sparkles className="h-3 w-3" /> {tag}
        </div>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-4 text-muted-foreground text-base sm:text-lg">{subtitle}</p>}
      </div>
    </Reveal>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading tag="About Me" title="Developer, Marketer, Growth Partner" />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute -inset-4 gradient-primary rounded-3xl blur-2xl opacity-30" />
              <div className="relative h-full w-full rounded-3xl glass-strong overflow-hidden flex items-center justify-center">
                <div className="text-[12rem] font-display font-bold gradient-text">H</div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-6 right-6 glass rounded-2xl px-4 py-3"
                >
                  <div className="text-xs text-muted-foreground">Experience</div>
                  <div className="text-2xl font-bold text-primary">5+ Yrs</div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-6 left-6 glass rounded-2xl px-4 py-3"
                >
                  <div className="text-xs text-muted-foreground">Projects</div>
                  <div className="text-2xl font-bold text-primary">100+</div>
                </motion.div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
              I build <span className="gradient-text">digital experiences</span> that help brands grow faster.
            </h3>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>I'm a passionate Full Stack Web Developer and Digital Marketing Expert with more than five years of experience helping startups, entrepreneurs, and businesses establish a powerful online presence.</p>
              <p>My expertise includes MERN Stack Development, WordPress Website Design, SEO, Social Media Marketing, Meta Ads, Google Ads, Landing Page Development, and Business Growth Strategies.</p>
              <p>I believe every business deserves a website that not only looks beautiful, but also generates leads, improves conversions, and increases revenue.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={CALENDLY} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover-lift">
                Let's Talk <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl glass-strong px-5 py-3 text-sm font-semibold hover-lift">
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading tag="Tech Stack" title="Tools I Master" subtitle="A curated stack refined over 5+ years of shipping real products." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.05}>
              <div className="group glass rounded-2xl p-6 h-full hover-lift">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="font-display text-xl font-bold">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="text-xs px-3 py-1.5 rounded-lg bg-surface-elevated border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading tag="Services" title="What I Do Best" subtitle="Design, development and marketing built to move your business forward." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div className="group relative glass rounded-2xl p-6 h-full overflow-hidden hover-lift">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full gradient-primary opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl glass-strong flex items-center justify-center mb-4 group-hover:gradient-primary transition-all">
                    <s.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 glass-strong rounded-3xl p-8 sm:p-10">
            <div className="flex items-center gap-2 text-primary text-xs uppercase tracking-[0.2em] font-semibold mb-3">
              <Award className="h-4 w-4" /> Why Choose Me
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-6">Reasons clients keep coming back.</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {WHY.map((w) => (
                <div key={w} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {w}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading tag="My Process" title="From Idea to Launch" subtitle="A proven 8-step workflow refined across 100+ projects." />
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          <div className="space-y-6">
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.05}>
                <div className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="flex-1 w-full">
                    <div className="glass rounded-2xl p-6 hover-lift">
                      <div className="text-xs text-primary font-bold tracking-[0.2em] mb-2">{p.n}</div>
                      <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                  <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center font-bold text-primary-foreground shadow-lg shrink-0 z-10">
                    {i + 1}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {

  const shot = (url: string) => `https://image.thum.io/get/width/1200/crop/800/${url}`;
  const favicon = (url: string) => `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=64`;

  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading tag="Portfolio" title="Featured Projects" subtitle="A selection of recent websites and applications built for real clients." />
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.url} delay={i * 0.05}>
              <a href={p.url} target="_blank" rel="noreferrer" className="group block glass rounded-3xl overflow-hidden hover-lift">
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-elevated">
                  <img
                    src={shot(p.url)}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 glass-strong rounded-full px-3 py-1.5">
                    <img src={favicon(p.url)} alt="" className="h-4 w-4 rounded" />
                    <span className="text-xs font-medium">{new URL(p.url).hostname}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-bold mb-1">{p.name}</h3>
                      <div className="text-xs text-primary font-medium">{p.tech}</div>
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Visit Website <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientLogos() {
  const favicon = (url: string) => `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=128`;
  const logos = [...PROJECTS, ...PROJECTS];
  return (
    <section className="relative py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center mb-10">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">Trusted by Clients Worldwide</div>
          </div>
        </Reveal>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-12 animate-marquee w-max">
            {logos.map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all shrink-0">
                <img src={favicon(p.url)} alt={p.name} className="h-10 w-10 rounded-lg" />
                <span className="font-display font-bold text-lg whitespace-nowrap">{p.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading tag="Testimonials" title="What Clients Say" subtitle="Real feedback from businesses I've had the privilege of building with." />
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <div className="glass rounded-2xl p-6 h-full hover-lift">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3 pt-6 border-t border-border">
                  <div className="h-11 w-11 rounded-full gradient-primary flex items-center justify-center font-bold text-primary-foreground">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading tag="FAQ" title="Frequently Asked" subtitle="Everything you need to know before we start working together." />
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full glass rounded-2xl p-5 text-left hover:border-primary/30 transition-all"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-base sm:text-lg">{f.q}</h3>
                  <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
                </div>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden glass-strong p-10 sm:p-16 text-center">
            <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
            <div className="relative">
              <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-tight max-w-3xl mx-auto">
                Let's Build Something <span className="gradient-text">Amazing</span> Together.
              </h2>
              <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
                Whether you need a business website, an eCommerce store, a MERN application, or complete digital marketing services, I'm here to help transform your ideas into successful digital products.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a href={CALENDLY} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover-lift">
                  Hire Me <ArrowRight className="h-4 w-4" />
                </a>
                <a href={CALENDLY} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3.5 text-sm font-semibold hover-lift">
                  <Calendar className="h-4 w-4" /> Book Free Consultation
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3.5 text-sm font-semibold hover:border-primary transition-colors">
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading tag="Contact" title="Let's Work Together" subtitle="Tell me about your project and I'll respond within 24 hours." />
        <div className="grid lg:grid-cols-5 gap-8">
          <Reveal>
            <div className="lg:col-span-2 space-y-4">
              <div className="glass rounded-2xl p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Contact Info</div>
                <div className="space-y-4">
                  <a href="mailto:hello@harak.dev" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                    <div className="h-10 w-10 rounded-xl glass-strong flex items-center justify-center"><Mail className="h-4 w-4 text-primary" /></div>
                    hello@harak.dev
                  </a>
                  <a href="tel:+000" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                    <div className="h-10 w-10 rounded-xl glass-strong flex items-center justify-center"><Phone className="h-4 w-4 text-primary" /></div>
                    Available on request
                  </a>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="h-10 w-10 rounded-xl glass-strong flex items-center justify-center"><MapPin className="h-4 w-4 text-primary" /></div>
                    Working with clients globally
                  </div>
                </div>
              </div>
              <div className="glass rounded-2xl p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Connect</div>
                <div className="flex flex-wrap gap-2">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="h-11 w-11 rounded-xl glass-strong flex items-center justify-center hover:gradient-primary hover:text-primary-foreground transition-all"
                    >
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
              <a href={CALENDLY} target="_blank" rel="noreferrer" className="block glass rounded-2xl p-6 hover-lift">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div className="font-display font-bold">Book a Free Call</div>
                </div>
                <p className="text-sm text-muted-foreground">30-minute strategy call — no strings attached.</p>
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="lg:col-span-3 glass-strong rounded-2xl p-6 sm:p-8 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="Full Name" name="name" />
                <Input label="Email Address" name="email" type="email" />
                <Input label="Phone Number" name="phone" />
                <Input label="Company Name" name="company" />
                <Input label="Project Type" name="type" />
                <Input label="Budget" name="budget" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">Message</label>
                <textarea
                  rows={5}
                  required
                  className="w-full rounded-xl bg-surface border border-border px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-ring outline-none transition-all"
                  placeholder="Tell me about your project…"
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover-lift disabled:opacity-70"
              >
                {sent ? (<><CheckCircle2 className="h-4 w-4" /> Message Sent</>) : (<>Send Message <Send className="h-4 w-4" /></>)}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Input({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        required
        className="w-full rounded-xl bg-surface border border-border px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-ring outline-none transition-all"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center font-bold text-primary-foreground">H</div>
              <span className="font-display font-bold text-xl">Harak<span className="text-primary">.</span></span>
            </a>
            <p className="text-sm text-muted-foreground max-w-sm">Full Stack Web Developer & Digital Marketing Expert building growth-driven digital experiences.</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Quick Links</div>
            <div className="space-y-2 text-sm">
              {["Services", "Portfolio", "Contact", "FAQ"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="block text-muted-foreground hover:text-primary transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Connect</div>
            <div className="flex gap-2">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="h-10 w-10 rounded-xl glass flex items-center justify-center hover:gradient-primary hover:text-primary-foreground transition-all">
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>Copyright © 2026 Harak. All rights reserved.</div>
          <div className="flex items-center gap-2">Crafted with <Heart className="h-3 w-3 fill-primary text-primary" /> for modern brands.</div>
        </div>
      </div>
    </footer>
  );
}

function BackToTop({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-24 right-6 z-40 h-12 w-12 rounded-full gradient-primary text-primary-foreground shadow-lg flex items-center justify-center hover-lift"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform animate-pulse-glow"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

function Portfolio_() {
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState("home");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const ids = NAV.map(n => n.href.slice(1));
    const onScroll = () => {
      setShowTop(window.scrollY > 600);
      const y = window.scrollY + 120;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="dark bg-background text-foreground relative">
      <Loader done={loaded} />
      <ScrollProgress />
      <CustomCursor />
      <Navbar active={active} />
      <main>
        <Hero />
        <ClientLogos />
        <About />
        <Skills />
        <Services />
        <Process />
        <PortfolioSection />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <BackToTop show={showTop} />
      <WhatsAppFloat />
    </div>
  );
}



