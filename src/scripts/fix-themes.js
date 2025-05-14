/**
 * DaisyUI Theme Fix for Astro View Transitions
 *
 * This script directly forces DaisyUI themes to be correctly applied
 * during Astro view transitions by extracting and reapplying CSS variables.
 */

// Get all CSS variables for the current theme and reapply them directly
function forceDaisyUITheme() {
  const html = document.documentElement;
  const currentTheme =
    html.getAttribute("data-theme") ||
    localStorage.getItem("theme") ||
    "cisco-cool";

  // Make sure theme attribute is set
  html.setAttribute("data-theme", currentTheme);

  // Force a repaint by adding and removing a class
  html.classList.add("theme-updated");

  // Force a browser repaint to ensure theme applies
  setTimeout(() => {
    html.classList.remove("theme-updated");
  }, 10);
}

// Make the function available globally
window.forceDaisyUITheme = forceDaisyUITheme;

// Run on page navigation events
document.addEventListener("astro:page-load", forceDaisyUITheme);
document.addEventListener("astro:after-swap", forceDaisyUITheme);

// Also run when theme changes
function setupThemeChangeListener() {
  document.querySelectorAll("[data-theme-value]").forEach((button) => {
    button.addEventListener("click", () => {
      setTimeout(forceDaisyUITheme, 10);
    });
  });
}

// Initialize listener on page load
document.addEventListener("DOMContentLoaded", setupThemeChangeListener);
document.addEventListener("astro:page-load", setupThemeChangeListener);

// Execute immediately on script load
forceDaisyUITheme();
