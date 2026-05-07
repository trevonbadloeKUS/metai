function initHeaderScroll() {
  const header = document.querySelector("header");
  if (!header) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  const updateHeader = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      header.classList.add("header-hidden");
    } else {
      header.classList.remove("header-hidden");
    }
    lastScrollY = currentScrollY;
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  });
}

function initSectionNav() {
  const nav = document.querySelector('.hero-section-nav');
  if (!nav) return;

  const links = Array.from(nav.querySelectorAll('a'));
  const sections = links
    .map(link => document.querySelector(link.hash))
    .filter(Boolean);
  if (!sections.length) return;

  const updateActiveLink = () => {
    const scrollPosition = window.scrollY + window.innerHeight * 0.18;
    let activeId = sections[0].id;

    if (sections.length > 1 && window.scrollY < sections[1].offsetTop - 120) {
      activeId = sections[0].id;
    } else {
      sections.forEach(section => {
        if (section.offsetTop <= scrollPosition) {
          activeId = section.id;
        }
      });
    }

    links.forEach(link => {
      const isActive = link.hash === `#${activeId}`;
      link.classList.toggle('active', isActive);
    });
  };

  let ticking = false;
  updateActiveLink();
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateActiveLink);
      ticking = true;
    }
  });
}

window.addEventListener("load", () => {
  initHeaderScroll();
  initSectionNav();
});
