const LemniscateLogo = (className = "w-10 h-5 text-red-600") => `
            <svg viewBox="0 0 200 100" class="${className} lemniscate-svg" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round">
                <path d="M 100 50 C 120 15 167 15 167 50 C 167 85 120 85 100 50 C 80 85 33 85 33 50 C 33 15 80 15 100 50 Z" />
            </svg>
        `;

const getIconSvg = (name, classes = "w-6 h-6") => {
  const icons = {
    BookOpen: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><path d="M2 12s2-3 5-3 5 3 5 3V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7.5c0 1.3.8 2.5 2 3h14c1.2 0 2-.7 2-2V9s-2-3-5-3-5 3-5 3"/></svg>`,
    Database: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
    Code: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    Eye: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
    Target: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
    Users: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    TrendingUp: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><polyline points="22 7 18 11 13 6 9 10 2 3"/><path d="M18 7h4v4"/></svg>`,
    Shield: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6C4 8 10 5 12 2c2 3 8 6 8 10z"/></svg>`,
    History: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><path d="M12 2v4"/><path d="M12 22v-4"/><path d="M4 12H2"/><path d="M22 12h-2"/><path d="M7.76 7.76l-2.12-2.12"/><path d="M18.36 18.36l2.12 2.12"/><path d="M20.48 3.52l-2.12 2.12"/><path d="M3.52 20.48l2.12-2.12"/></svg>`,
    Globe: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    Cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><rect x="5" y="5" width="14" height="14" rx="2"/><path d="M15 9h1M15 15h1M9 9h1M9 15h1M12 18v2M12 2v2M2 12h2M20 12h2"/></svg>`,
    Zap: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    Sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><path d="M10 4L12 6L14 4"/><path d="M12 2L14 4L12 6L10 4L12 2Z"/><path d="M5 14L7 16L9 14"/><path d="M7 12L9 14L7 16L5 14L7 12Z"/><path d="M15 18L17 20L19 18"/><path d="M17 16L19 18L17 20L15 18L17 16Z"/><path d="M2 22L4 24L6 22"/><path d="M4 20L6 22L4 24L2 22L4 20Z"/></svg>`,
    Brain: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><path d="M12 5c-3 0-5.5 1.5-6.5 4-1 2.5 0 5 1.5 7.5s4 4 6 4 4.5-1.5 6-4 2.5-5 1.5-7.5-3.5-4-6.5-4Z"/><path d="M12 5c-3 0-5.5 1.5-6.5 4-1 2.5 0 5 1.5 7.5s4 4 6 4 4.5-1.5 6-4 2.5-5 1.5-7.5-3.5-4-6.5-4Z" opacity="0.3"/></svg>`,
    ChevronRight: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><path d="m9 18 6-6-6-6"/></svg>`,
    Menu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>`,
    X: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    Calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  };
  return icons[name] || "";
};

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = mobileMenu.querySelectorAll("a");

  // --- 1. Populate Icons ---
  const iconMappings = {
    "logo-container": {
      icon: LemniscateLogo(),
      class: "w-10 h-5 text-red-600",
    },
    "logo-footer-container": {
      icon: LemniscateLogo("w-32 h-16 mx-auto text-white opacity-90"),
      class: "",
    },
    "logo-footer-small": {
      icon: LemniscateLogo("w-8 h-4 text-red-500"),
      class: "",
    },

    // Nav Icons
    "chevron-right-1": {
      icon: getIconSvg("ChevronRight", "w-5 h-5"),
      class: "",
    },
    "menu-toggle": { icon: getIconSvg("Menu"), class: "w-6 h-6" },

    // Core Philosophy Icons
    "book-open-icon": {
      icon: getIconSvg("BookOpen", "w-7 h-7"),
      class: "text-red-600 group-hover:text-white",
    },
    "target-icon": {
      icon: getIconSvg("Target", "w-7 h-7"),
      class: "text-red-600 group-hover:text-white",
    },
    "eye-icon-1": {
      icon: getIconSvg("Eye", "w-7 h-7"),
      class: "text-red-600 group-hover:text-white",
    },

    // Departments Icons
    "book-open-icon-2": {
      icon: getIconSvg("BookOpen", "w-10 h-10"),
      class: "text-red-500",
    },
    "database-icon": {
      icon: getIconSvg("Database", "w-10 h-10"),
      class: "text-red-600",
    },
    "code-icon": {
      icon: getIconSvg("Code", "w-10 h-10"),
      class: "text-red-600",
    },

    // Products Icons
    "database-icon-2": {
      icon: getIconSvg("Database", "w-6 h-6"),
      class: "text-red-600 group-hover:text-white",
    },
    "eye-icon-2": {
      icon: getIconSvg("Eye", "w-6 h-6"),
      class: "text-red-600 group-hover:text-white",
    },
    "code-icon-2": {
      icon: getIconSvg("Code", "w-6 h-6"),
      class: "text-red-600 group-hover:text-white",
    },

    // Governance Icons
    "users-icon": { icon: getIconSvg("Users", "h-6 w-6"), class: "" },
    "shield-icon": { icon: getIconSvg("Shield", "h-6 w-6"), class: "" },
    "trending-up-icon": {
      icon: getIconSvg("TrendingUp", "w-5 h-5"),
      class: "text-red-600",
    },

    // About AI Icons
    "history-icon": {
      icon: getIconSvg("History", "w-7 h-7"),
      class: "text-red-600 group-hover:text-white",
    },
    "globe-icon": {
      icon: getIconSvg("Globe", "w-7 h-7"),
      class: "text-red-600 group-hover:text-white",
    },
    "cpu-icon": {
      icon: getIconSvg("Cpu", "w-7 h-7"),
      class: "text-red-600 group-hover:text-white",
    },
    "zap-icon": { icon: getIconSvg("Zap", "w-4 h-4"), class: "text-red-400" },
    "sparkles-icon": {
      icon: getIconSvg("Sparkles", "w-5 h-5"),
      class: "text-red-500",
    },
    "brain-icon": {
      icon: getIconSvg("Brain", "w-5 h-5"),
      class: "text-red-500",
    },

    // Article Icons
    "calendar-icon-1": { icon: getIconSvg("Calendar", "w-3 h-3"), class: "" },
    "calendar-icon-2": { icon: getIconSvg("Calendar", "w-3 h-3"), class: "" },
    "calendar-icon-3": { icon: getIconSvg("Calendar", "w-3 h-3"), class: "" },
  };

  // Use generic chevron right for lists and links, as there are many
  const chevrons = document.querySelectorAll('[id^="chevron-right"]');
  chevrons.forEach((el) => {
    let classes = "w-4 h-4";
    if (
      el.id === "chevron-right-1" ||
      el.id === "chevron-right-11" ||
      el.id === "chevron-right-12" ||
      el.id === "chevron-right-13"
    ) {
      classes = "w-5 h-5"; // Larger for CTA and product cards
    }
    el.innerHTML = getIconSvg("ChevronRight", classes);
  });

  Object.keys(iconMappings).forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = iconMappings[id].icon;
      element.className += ` ${iconMappings[id].class}`;
    }
  });

  // --- 2. Mobile Menu Toggle Logic ---
  menuToggle.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.toggle("hidden");
    menuToggle.innerHTML = isHidden ? getIconSvg("Menu") : getIconSvg("X");
  });

  // Close menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuToggle.innerHTML = getIconSvg("Menu");
    });
  });

  // --- 3. Sticky Nav Scroll Logic ---
  const handleScroll = () => {
    // Keep nav mostly consistent
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check
});
