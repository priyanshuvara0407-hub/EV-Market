/**
 * ==============================================================================
 * ELECTRIC VEHICLE MARKET PERFORMANCE & INSIGHTS
 * Author: Priyanshu Vara
 * 
 * Main Frontend Interactivity Script
 * ==============================================================================
 */

// Fallback configuration if static/js/config.js is not loaded
if (typeof window.TABLEAU_CONFIG === "undefined") {
  window.TABLEAU_CONFIG = {
    dashboardEmbedUrl: "https://prod-in-a.online.tableau.com/t/en25cs3090168-16fdac36f1/views/EVMarket/EVMarketDashboard?:embed=yes&:showVizHome=no&:toolbar=yes",
    dashboardPublicUrl: "https://public.tableau.com/views/EVMarket/EVMarketDashboard",
    dashboardCloudUrl: "https://prod-in-a.online.tableau.com/#/site/en25cs3090168-16fdac36f1/views/EVMarket/EVMarketDashboard?:iid=1",
    storyEmbedUrl: "https://prod-in-a.online.tableau.com/t/en25cs3090168-16fdac36f1/views/EVMarketprojecttableau/Story1?:embed=yes&:showVizHome=no&:toolbar=yes",
    storyPublicUrl: "https://public.tableau.com/views/EVMarketprojecttableau/Story1",
    storyCloudUrl: "https://prod-in-a.online.tableau.com/#/site/en25cs3090168-16fdac36f1/views/EVMarketprojecttableau/Story1?:iid=1"
  };
}

/* ==============================================================================
   INITIALIZATION
   ============================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initTypewriter();
  initScrollSpy();
  initTableauEmbeds();
  initBackToTop();
  initSmoothScroll();
});

/**
 * Navigation Bar Logic & Mobile Menu Drawer
 */
function initNavbar() {
  const toggleBtn = document.getElementById("mobileNavToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const header = document.querySelector(".site-header");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", isOpen);
      toggleBtn.innerHTML = isOpen ? "✕" : "☰";
    });

    // Close mobile menu when any nav link is tapped
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (navMenu.classList.contains("open")) {
          navMenu.classList.remove("open");
          toggleBtn.setAttribute("aria-expanded", "false");
          toggleBtn.innerHTML = "☰";
        }
      });
    });
  }

  // Header background elevation on scroll
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        header.style.background = "rgba(8, 10, 14, 0.96)";
        header.style.boxShadow = "0 6px 24px rgba(0, 0, 0, 0.6)";
      } else {
        header.style.background = "var(--bg-nav)";
        header.style.boxShadow = "none";
      }
    });
  }
}

/**
 * Typewriter Effect for Hero Headline
 * Rotates through key analytical themes matching reference screenshot 2
 */
function initTypewriter() {
  const element = document.getElementById("dynamicWord");
  if (!element) return;

  const words = [
    "Seamless",
    "Intelligence",
    "Real-Time Data",
    "EV Narratives",
    "Market Foresight"
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 60;
  const pauseEnd = 2200;
  const pauseStart = 400;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      element.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      element.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = pauseStart;
    }

    setTimeout(type, delay);
  }

  type();
}

/**
 * Scroll Spy to highlight the active navigation link based on scroll position
 */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function updateActiveLink() {
    const scrollY = window.pageYOffset + 140;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();
}

/**
 * Tableau Embed Manager:
 * Connects live Tableau iframe visualizations, reload, fullscreen,
 * and direct links to Tableau Public / Tableau Cloud.
 */
function initTableauEmbeds() {
  const config = window.TABLEAU_CONFIG;

  // 1. Dashboard Controls
  const dashIframe = document.getElementById("tableauDashboardIframe");
  const dashWrapper = document.getElementById("dashFrameWrapper");
  const dashBtnReload = document.getElementById("btnReloadDash");
  const dashBtnFullscreen = document.getElementById("btnFullscreenDash");
  const dashBtnPublic = document.getElementById("btnOpenDashboardPublic");
  const dashBtnPublicBanner = document.getElementById("btnOpenDashboardPublicBanner");
  const dashBtnCloud = document.getElementById("btnOpenDashboardCloud");
  const dashBtnCloudBanner = document.getElementById("btnOpenDashboardCloudBanner");

  // 2. Story Controls
  const storyIframe = document.getElementById("tableauStoryIframe");
  const storyWrapper = document.getElementById("storyFrameWrapper");
  const storyBtnReload = document.getElementById("btnReloadStory");
  const storyBtnFullscreen = document.getElementById("btnFullscreenStory");
  const storyBtnPublic = document.getElementById("btnOpenStoryPublic");
  const storyBtnPublicBanner = document.getElementById("btnOpenStoryPublicBanner");
  const storyBtnCloud = document.getElementById("btnOpenStoryCloud");
  const storyBtnCloudBanner = document.getElementById("btnOpenStoryCloudBanner");

  // Initialize Dashboard iframe source if not already populated
  if (dashIframe && (!dashIframe.src || dashIframe.src === "about:blank")) {
    dashIframe.src = config.dashboardEmbedUrl;
  }

  // Initialize Story iframe source if not already populated
  if (storyIframe && (!storyIframe.src || storyIframe.src === "about:blank")) {
    storyIframe.src = config.storyEmbedUrl;
  }

  // Dashboard Direct Open Handlers
  if (dashBtnPublic) {
    dashBtnPublic.href = config.dashboardPublicUrl;
  }
  if (dashBtnPublicBanner) {
    dashBtnPublicBanner.href = config.dashboardPublicUrl;
  }
  if (dashBtnCloud) {
    dashBtnCloud.href = config.dashboardCloudUrl;
  }
  if (dashBtnCloudBanner) {
    dashBtnCloudBanner.href = config.dashboardCloudUrl;
  }

  // Story Direct Open Handlers
  if (storyBtnPublic) {
    storyBtnPublic.href = config.storyPublicUrl;
  }
  if (storyBtnPublicBanner) {
    storyBtnPublicBanner.href = config.storyPublicUrl;
  }
  if (storyBtnCloud) {
    storyBtnCloud.href = config.storyCloudUrl;
  }
  if (storyBtnCloudBanner) {
    storyBtnCloudBanner.href = config.storyCloudUrl;
  }

  // Reload Handlers
  if (dashBtnReload && dashIframe) {
    dashBtnReload.addEventListener("click", () => {
      dashIframe.src = config.dashboardEmbedUrl;
    });
  }
  if (storyBtnReload && storyIframe) {
    storyBtnReload.addEventListener("click", () => {
      storyIframe.src = config.storyEmbedUrl;
    });
  }

  // Fullscreen Handlers
  if (dashBtnFullscreen && dashWrapper) {
    dashBtnFullscreen.addEventListener("click", () => {
      toggleFullscreen(dashWrapper);
    });
  }
  if (storyBtnFullscreen && storyWrapper) {
    storyBtnFullscreen.addEventListener("click", () => {
      toggleFullscreen(storyWrapper);
    });
  }
}

/**
 * Fullscreen API Toggle Helper
 */
function toggleFullscreen(element) {
  if (!document.fullscreenElement) {
    if (element.requestFullscreen) {
      element.requestFullscreen().catch(err => {
        console.warn(`Error attempting fullscreen: ${err.message}`);
      });
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

/**
 * Floating Back-To-Top Button
 */
function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/**
 * Smooth Anchor Navigation
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}
