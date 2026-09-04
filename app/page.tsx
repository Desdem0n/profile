import Image from "next/image";
import ScrollReset from "./scroll-reset";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
  referrerPolicy: "strict-origin-when-cross-origin"
} as const;

const proofPoints = [
  { value: "60s", label: "AI review draft delivery" },
  { value: "17+", label: "years of visual production" },
  { value: "14d", label: "ReviewAI trial without a card" }
];

const timeline = [
  {
    period: "2026 - Present",
    role: "Founder & CEO",
    company: "ReviewAI",
    detail:
      "Building an AI assistant that helps hotels and restaurants respond to Google reviews in their own voice, with human approval before anything is published."
  },
  {
    period: "2009 - Present",
    role: "CG Artist",
    company: "Freelance",
    detail:
      "Delivered architectural visualization, advertising packshots, interiors, exteriors, and rapid-turnaround production work for international clients."
  },
  {
    period: "2022",
    role: "JavaScript SAP UI5 Developer",
    company: "NSP",
    detail:
      "Prepared interface views from client mockups and collaborated on complex UI5 application screens."
  },
  {
    period: "2015 - 2018",
    role: "Desktop Engineer",
    company: "Stow International / Stow Polska",
    detail:
      "Owned 2D, 3D, animation, and product-content materials for marketing, sales enablement, and internal product education."
  },
  {
    period: "2012 - 2014",
    role: "Analyst & Data Specialist",
    company: "RBS / Citi",
    detail:
      "Worked in English on risk reviews, account processes, HR data systems, banking mechanisms, and operational data workflows."
  }
];

const portfolioLinks = [
  {
    title: "ReviewAI",
    label: "Product company",
    href: "https://reviewai.pl",
    text:
      "AI-assisted reputation workflow for restaurants, hotels, chains, and agencies managing many locations."
  },
  {
    title: "GitHub",
    label: "Code profile",
    href: "https://github.com/Desdem0n",
    text:
      "A public code profile for experiments, product work, and technical projects around AI and web development."
  },
  {
    title: "Visual Portfolio",
    label: "3D and web archive",
    href: "https://desdem0n.github.io/milke-mike/",
    text:
      "A foundation in 3D, architecture, visual systems, and client-facing production under deadline pressure."
  },
  {
    title: "Future Case Studies",
    label: "Coming next",
    href: "#contact",
    text:
      "Reserved for product case studies, hospitality AI experiments, and polished before-and-after workflows."
  }
];

const skills = [
  "AI product building",
  "Next.js",
  "Responsive web design",
  "SASS",
  "SAP UI5",
  "3D visualization",
  "Architectural visualization",
  "Product storytelling"
];

export default function Home() {
  return (
    <main>
      <ScrollReset />
      <section className="hero" id="top">
        <Image
          className="heroImage"
          src={`${basePath}/reviewai-command-desk.png`}
          alt=""
          priority
          fill
          sizes="100vw"
        />
        <div className="heroShade" />
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Michal Milke home">
            MM
          </a>
          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#journey">Journey</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="heroContent">
          <p className="eyebrow">Founder @ ReviewAI / Warsaw</p>
          <h1>
            <span>Michal Milke</span>
            <span>builds AI</span>
            <span>products with</span>
            <span>a visual</span>
            <span>operator&apos;s</span>
            <span>edge.</span>
          </h1>
          <p className="heroCopy">
            I help hospitality teams answer customer reviews faster without losing
            control of the final word. ReviewAI drafts the response in your tone;
            you approve, edit, and publish only what you decide.
          </p>
          <div className="heroActions">
            <a className="primaryAction" href="https://reviewai.pl" {...externalLinkProps}>
              View ReviewAI
            </a>
            <a className="secondaryAction" href="#journey">
              Trace the journey
            </a>
          </div>
        </div>

        <aside className="signalPanel" aria-label="Profile highlights">
          {proofPoints.map((point) => (
            <div className="signal" key={point.label}>
              <span>{point.value}</span>
              <p>{point.label}</p>
            </div>
          ))}
        </aside>
      </section>

      <section className="ticker" aria-label="Core skills">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </section>

      <section className="section about" id="about">
        <div className="sectionHeading">
          <p className="eyebrow">About Me</p>
          <h2>Product instinct shaped by rendering, operations, and late-night founders.</h2>
        </div>
        <div className="aboutGrid">
          <p>
            I am a Warsaw-based founder building ReviewAI: a practical assistant for
            restaurants and hotels that need to respond to Google reviews, TripAdvisor,
            and Booking feedback without turning reputation management into another
            full-time shift.
          </p>
          <p>
            My background is unusual in a useful way. I spent years in CG, 3D,
            architectural visualization, and marketing production, then moved through
            enterprise interfaces, data work, and business-risk operations. That mix
            gives me a bias toward tools that look sharp, explain themselves quickly,
            and survive real pressure.
          </p>
        </div>
      </section>

      <section className="section philosophy">
        <div>
          <p className="eyebrow">Operating Belief</p>
          <h2>Automation should remove the repetitive work, not the human decision.</h2>
        </div>
        <p>
          ReviewAI is designed as an assistant, not an autopilot. The AI prepares
          the heavy lift; the owner keeps control of tone, approval, and publication.
        </p>
      </section>

      <section className="section journey" id="journey">
        <div className="sectionHeading">
          <p className="eyebrow">Career Journey</p>
          <h2>From cinematic pixels to production-grade product systems.</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article className="timelineItem" key={`${item.company}-${item.period}`}>
              <div className="timelinePeriod">{item.period}</div>
              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section portfolio" id="portfolio">
        <div className="sectionHeading">
          <p className="eyebrow">Portfolio Links</p>
          <h2>Current product, public proof, and space for the next case studies.</h2>
        </div>
        <div className="portfolioGrid">
          {portfolioLinks.map((item) => (
            <a
              className="portfolioCard"
              href={item.href}
              key={item.title}
              {...(item.href.startsWith("http") ? externalLinkProps : {})}
            >
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Building in public, replying in person.</h2>
        </div>
        <div className="contactLinks">
          <a href="mailto:desmilke@gmail.com">desmilke@gmail.com</a>
          <a href="https://www.linkedin.com/in/michalmilke" {...externalLinkProps}>
            LinkedIn
          </a>
          <a href="https://desdem0n.github.io/milke-mike/" {...externalLinkProps}>
            Portfolio
          </a>
        </div>
      </section>
    </main>
  );
}
