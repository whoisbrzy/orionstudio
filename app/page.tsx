import { ArrowDownRight, ArrowUpRight, Asterisk, MoveUpRight } from "lucide-react";
import { Footer, Reveal, SectionLabel } from "@/components/site";

const capabilities = [
  {
    number: "01",
    title: "Art direction",
    description: "A clear point of view, translated into a visual world with purpose and personality.",
    tags: ["Creative direction", "Visual research", "Design systems"],
  },
  {
    number: "02",
    title: "Brand identity",
    description: "Distinctive identities built to feel coherent, memorable, and ready to grow.",
    tags: ["Identity systems", "Typography", "Brand guidelines"],
  },
  {
    number: "03",
    title: "Digital experiences",
    description: "Carefully considered websites and interfaces that make every interaction count.",
    tags: ["Web design", "UI / UX", "Development"],
  },
];

const principles = [
  ["Clarity before decoration", "Every decision has a reason. We make the essential feel unmistakable."],
  ["Character over convention", "A strong point of view makes the work recognisable, not interchangeable."],
  ["Details make the difference", "The small things are never small. Rhythm, type, movement, and restraint all matter."],
];

export default function Home() {
  return (
    <main id="top">
      <section className="hero section-shell" id="studio">
        <div className="hero-topline">
          <span>Independent creative studio</span>
          <span className="hero-location">Available for select projects <i /></span>
        </div>

        <div className="hero-content">
          <Reveal>
            <p className="eyebrow"><span className="eyebrow-mark">✳</span> Thoughtful by design</p>
            <h1>Make room<br />for <span className="serif-word">wonder.</span></h1>
          </Reveal>
          <Reveal delay={0.12} className="hero-aside">
            <p>We shape identities and digital experiences for ideas with somewhere to go.</p>
            <a className="text-link" href="#capabilities">Explore what we do <ArrowDownRight size={16} /></a>
          </Reveal>
        </div>

        <Reveal className="hero-art" delay={0.18}>
          <div className="art-topline">
            <span>ORION / 001</span>
            <span>A considered point of view</span>
            <span>EST. WITH INTENT</span>
          </div>
          <div className="art-composition" aria-label="Abstract typographic Orion Studio artwork">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-star">✳</div>
            <div className="art-type">O<span>R</span>ION</div>
            <div className="art-caption art-caption-left">Ideas take<br />their own shape.</div>
            <div className="art-caption art-caption-right">Curiosity<br />is a practice.</div>
            <div className="art-index">FIG. 01 — THE BEGINNING</div>
          </div>
        </Reveal>

        <div className="hero-bottomline">
          <span>Strategy / Identity / Digital</span>
          <a href="#approach">Scroll to explore <ArrowDownRight size={15} /></a>
        </div>
      </section>

      <section className="intro section-shell">
        <SectionLabel number="01">A little about us</SectionLabel>
        <div className="intro-grid">
          <Reveal>
            <h2>Good work starts with <span className="serif-word">good questions.</span></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="intro-copy">Orion is an independent creative studio exploring the space between thoughtful strategy and expressive design. We bring ideas into focus, then give them a form that feels unmistakably their own.</p>
            <a className="text-link" href="#contact">Start a conversation <ArrowUpRight size={16} /></a>
          </Reveal>
        </div>
      </section>

      <section className="capabilities section-shell" id="capabilities">
        <SectionLabel number="02">What we bring to the table</SectionLabel>
        <div className="section-heading-row">
          <Reveal><h2>Small details.<br /><span className="serif-word">Bigger picture.</span></h2></Reveal>
          <Reveal delay={0.1}><p>From the first sketch to the final interaction, every part of the process works toward one clear idea.</p></Reveal>
        </div>
        <div className="capability-list">
          {capabilities.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.07}>
              <article className="capability">
                <span className="capability-number">{item.number}</span>
                <div className="capability-main">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <span className="capability-arrow"><MoveUpRight size={20} strokeWidth={1.4} /></span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="work section-shell" id="work">
        <SectionLabel number="03">Selected work</SectionLabel>
        <div className="work-heading">
          <Reveal><h2>Made with <span className="serif-word">intention.</span></h2></Reveal>
          <Reveal delay={0.1}><p>Good work deserves to be shown properly. This space will grow with projects as they are completed and ready to share.</p></Reveal>
        </div>
        <Reveal className="work-placeholder">
          <div className="placeholder-symbol"><Asterisk size={48} strokeWidth={1} /></div>
          <div>
            <span className="placeholder-kicker">A space for what comes next</span>
            <h3>Work in progress.</h3>
            <p>We’re shaping the first collection. Check back soon.</p>
          </div>
          <span className="placeholder-count">001 — ∞</span>
        </Reveal>
      </section>

      <section className="approach section-shell" id="approach">
        <SectionLabel number="04">How we think</SectionLabel>
        <div className="approach-layout">
          <Reveal><h2>Less noise.<br /><span className="serif-word">More meaning.</span></h2></Reveal>
          <div className="principle-list">
            {principles.map(([title, description], index) => (
              <Reveal key={title} delay={index * 0.06}>
                <article className="principle">
                  <span>0{index + 1}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-panel">
          <div className="contact-top"><span>Have something in mind?</span><span>LET’S MAKE IT MATTER ↗</span></div>
          <Reveal><h2>Let’s make<br /><span className="serif-word">something</span><br />meaningful.</h2></Reveal>
          <div className="contact-bottom">
            <p>Have a thought, a brief, or just a good question? We’d love to hear where it leads.</p>
            <a className="contact-link" href="mailto:hello@orionstudio.design">Get in touch <ArrowUpRight size={18} /></a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
