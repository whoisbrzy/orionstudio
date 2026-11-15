(() => {
  const glassHeader = document.querySelector(".site-header");
  if (glassHeader && window.matchMedia("(pointer: fine)").matches) {
    glassHeader.addEventListener("pointermove", (event) => {
      const rect = glassHeader.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      glassHeader.style.setProperty("--glass-x", x + "%");
      glassHeader.style.setProperty("--glass-y", y + "%");
    }, { passive: true });
  }

  const menuButton = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  menuButton?.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    menuButton.setAttribute("aria-label", expanded ? "Open menu" : "Close menu");
    menuButton.textContent = expanded ? "☰" : "×";
    mobileNav.hidden = expanded;
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.hidden = true;
      menuButton?.setAttribute("aria-expanded", "false");
      menuButton?.setAttribute("aria-label", "Open menu");
      if (menuButton) menuButton.textContent = "☰";
    });
  });

  const revealItems = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => revealObserver.observe(item));
  }

  const navLinks = [...document.querySelectorAll(".desktop-nav a")];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const activeObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === "#" + visible.target.id));
  }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, .2, .5] });
  sections.forEach((section) => activeObserver.observe(section));
})();
