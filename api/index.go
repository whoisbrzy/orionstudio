package handler

import (
	"html/template"
	"net/http"
)

var page = template.Must(template.New("home").Parse(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#050505">
  <meta name="description" content="Orion Studio brings thoughtful identities and digital experiences to life.">
  <meta property="og:title" content="Orion Studio">
  <meta property="og:description" content="Thoughtful identities. Considered digital experiences.">
  <title>Orion Studio — Creative direction &amp; digital experiences</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">\n  <link rel="stylesheet" href="/site.css">
  <script src="/site.js" defer></script>
</head>
<body>
  <div class="page-frame" aria-hidden="true"></div>
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="Orion Studio home"><span class="wordmark-symbol">Ω</span><span>ORION<span class="period">.</span></span></a>
    <nav class="desktop-nav" aria-label="Main navigation">
      <a class="nav-link is-active" href="#studio">Studio</a><a class="nav-link" href="#capabilities">Capabilities</a><a class="nav-link" href="#approach">Approach</a><a class="nav-link" href="#contact">Contact</a>
    </nav>
    <a class="nav-cta" href="#contact"><i></i> Have a project? ↗</a>
    <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">☰</button>
    <nav class="mobile-nav" aria-label="Mobile navigation" hidden>
      <a href="#studio">01 <span>Studio</span> ↗</a><a href="#capabilities">02 <span>Capabilities</span> ↗</a><a href="#approach">03 <span>Approach</span> ↗</a><a href="#contact">04 <span>Contact</span> ↗</a>
    </nav>
  </header>
  <main id="top">
    <section class="hero section-shell" id="studio">
      <div class="hero-topline"><span>Independent creative studio</span><span>Thoughtful by design</span></div>
      <div class="hero-content reveal">
        <div><p class="eyebrow">A considered point of view</p><h1>Make room<br>for <em>wonder.</em></h1></div>
        <div class="hero-aside"><p>We shape identities and digital experiences for ideas with somewhere to go.</p><a class="text-link" href="#capabilities">Explore what we do ↘</a></div>
      </div>
      <div class="hero-art reveal">
        <div class="art-topline"><span>ORION / 001</span><span>A considered point of view</span><span>INDEPENDENT STUDIO</span></div>
        <div class="art-composition"><div class="art-type">O<span>R</span>ION</div><div class="art-caption left">Ideas take<br>their own shape.</div><div class="art-caption right">Curiosity<br>is a practice.</div><div class="art-index">FIG. 01 — THE BEGINNING</div></div>
      </div>
      <div class="hero-bottomline"><span>Strategy / Identity / Digital</span><a href="#approach">Scroll to explore ↓</a></div>
    </section>
    <section class="intro section-shell">
      <div class="section-label"><span>01</span><i></i><span>A little about us</span></div>
      <div class="intro-grid reveal"><h2>Good work starts with <em>good questions.</em></h2><div><p>Orion is an independent creative studio exploring the space between thoughtful strategy and expressive design. We bring ideas into focus, then give them a form that feels unmistakably their own.</p><a class="text-link" href="#contact">Start a conversation ↗</a></div></div>
    </section>
    <section class="capabilities section-shell" id="capabilities">
      <div class="section-label"><span>02</span><i></i><span>What we bring to the table</span></div>
      <div class="section-heading reveal"><h2>Small details.<br><em>Bigger picture.</em></h2><p>From the first sketch to the final interaction, every part of the process works toward one clear idea.</p></div>
      <div class="capability-list">
        <article class="capability reveal"><span class="number">01</span><div><h3>Art direction</h3><p>A clear point of view, translated into a visual world with purpose and personality.</p><div class="tags"><span>Creative direction</span><span>Visual research</span><span>Design systems</span></div></div><b>↗</b></article>
        <article class="capability reveal"><span class="number">02</span><div><h3>Brand identity</h3><p>Distinctive identities built to feel coherent, memorable, and ready to grow.</p><div class="tags"><span>Identity systems</span><span>Typography</span><span>Brand guidelines</span></div></div><b>↗</b></article>
        <article class="capability reveal"><span class="number">03</span><div><h3>Digital experiences</h3><p>Carefully considered websites and interfaces that make every interaction count.</p><div class="tags"><span>Web design</span><span>UI / UX</span><span>Development</span></div></div><b>↗</b></article>
      </div>
    </section>
    <section class="work section-shell" id="work">
      <div class="section-label"><span>03</span><i></i><span>Selected work</span></div>
      <div class="section-heading reveal"><h2>Made with <em>intention.</em></h2><p>Good work deserves to be shown properly. This space will grow with projects as they are completed and ready to share.</p></div>
      <div class="work-placeholder reveal"><div class="placeholder-symbol">Ω</div><div><small>A space for what comes next</small><h3>Work in progress.</h3><p>We’re shaping the first collection. Check back soon.</p></div><span class="count">001 — ∞</span></div>
    </section>
    <section class="approach section-shell" id="approach">
      <div class="section-label"><span>04</span><i></i><span>How we think</span></div>
      <div class="approach-layout"><h2 class="reveal">Less noise.<br><em>More meaning.</em></h2><div class="principles">
        <article class="principle reveal"><span>01</span><div><h3>Clarity before decoration</h3><p>Every decision has a reason. We make the essential feel unmistakable.</p></div></article>
        <article class="principle reveal"><span>02</span><div><h3>Character over convention</h3><p>A strong point of view makes the work recognisable, not interchangeable.</p></div></article>
        <article class="principle reveal"><span>03</span><div><h3>Details make the difference</h3><p>The small things are never small. Rhythm, type, movement, and restraint all matter.</p></div></article>
      </div></div>
    </section>
    <section class="contact section-shell" id="contact"><div class="contact-panel reveal"><div class="contact-top"><span>Have something in mind?</span><span>LET’S MAKE IT MATTER ↗</span></div><h2>Let’s make<br><em>something</em><br>meaningful.</h2><div class="contact-bottom"><p>Have a thought, a brief, or just a good question? We’d love to hear where it leads.</p><span class="pending">Contact details coming soon</span></div></div></section>
  </main>
  <footer class="site-footer"><a class="footer-mark" href="#top">ORION<span>.</span></a><span>Independent by nature. Intentional by design.</span><a href="#top">Back to top ↑</a><span>© 2026 Orion Studio</span></footer>
</body>
</html>`))

func Handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.Header().Set("X-Content-Type-Options", "nosniff")
	w.Header().Set("Referrer-Policy", "strict-origin-when-cross-origin")
	if err := page.Execute(w, nil); err != nil {
		http.Error(w, "Unable to render Orion Studio.", http.StatusInternalServerError)
	}
}
