/**
 * Advanced Theme Handler for Astro and DaisyUI
 * This script handles theme persistence and application during page navigation
 * with special handling for Astro view transitions.
 */

// Default theme if none is set
const DEFAULT_THEME = "cisco-cool";

// Get theme from localStorage or use default dark theme
// Always returns a dark theme regardless of system preference
function getPreferredTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme;

  // Always use a dark theme (cisco-cool) regardless of system preference
  return DEFAULT_THEME;
}

// Apply theme to document and handle DaisyUI specifics
function applyTheme(theme) {
  if (!theme) theme = getPreferredTheme();

  // Apply theme attribute to html element
  document.documentElement.setAttribute("data-theme", theme);

  // Store theme for later use
  localStorage.setItem("theme", theme);
  window.currentTheme = theme;

  // Force DaisyUI to recognize the theme change
  document.documentElement.classList.add("theme-updated");

  // Remove class after a short delay to allow future changes
  setTimeout(() => {
    document.documentElement.classList.remove("theme-updated");
  }, 100);
}

// Initialize the theme system
function initTheme() {
  // Apply theme immediately
  applyTheme(getPreferredTheme());
}

// Set up theme change handling
function setupThemeChangeListeners() {
  // Find all theme buttons
  document.querySelectorAll("[data-theme-value]").forEach((button) => {
    // Remove old listeners by cloning
    const newButton = button.cloneNode(true);
    if (button.parentNode) {
      button.parentNode.replaceChild(newButton, button);
    }

    // Add click handler to apply theme
    newButton.addEventListener("click", (e) => {
      const newTheme = newButton.getAttribute("data-theme-value");
      if (!newTheme) return;

      // Save and apply theme
      applyTheme(newTheme);

      // Update UI indicators
      updateThemeIndicators();
    });
  });

  // Update indicators initially
  updateThemeIndicators();
}

// Update the theme indicators in the UI
function updateThemeIndicators() {
  const currentTheme = getPreferredTheme();

  // Find all theme buttons and update indicators
  document.querySelectorAll("[data-theme-value]").forEach((button) => {
    // Remove existing indicators
    button.classList.remove("active");
    const indicator = button.querySelector(".theme-indicator");
    if (indicator) indicator.remove();

    // Add indicator to current theme
    const buttonTheme = button.getAttribute("data-theme-value");
    if (buttonTheme === currentTheme) {
      button.classList.add("active");
      const newIndicator = document.createElement("span");
      newIndicator.className = "theme-indicator ml-2";
      newIndicator.innerHTML = "✓";
      button.appendChild(newIndicator);
    }
  });
}

// Export functions for use in Astro components
export {
  getPreferredTheme,
  applyTheme,
  initTheme,
  setupThemeChangeListeners,
  updateThemeIndicators,
};

// Auto-initialize if script is loaded directly
if (typeof window !== "undefined") {
  // Initialize on direct page load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTheme);
  } else {
    initTheme();
  }

  // Set up Astro view transition handlers
  document.addEventListener("astro:before-preparation", () => {
    // Save current theme before navigation
    window.savedTheme =
      document.documentElement.getAttribute("data-theme") ||
      localStorage.getItem("theme") ||
      DEFAULT_THEME;
  });

  document.addEventListener("astro:after-preparation", () => {
    // Apply theme to new DOM before swap
    if (window.savedTheme) {
      document.documentElement.setAttribute("data-theme", window.savedTheme);
    }
  });

  document.addEventListener("astro:after-swap", () => {
    // Re-apply theme after DOM swap and force refresh
    setTimeout(() => {
      const theme =
        window.savedTheme || localStorage.getItem("theme") || DEFAULT_THEME;
      applyTheme(theme);
    }, 0);
  });

  document.addEventListener("astro:page-load", () => {
    // Set up theme listeners and indicators after page is fully loaded
    setTimeout(setupThemeChangeListeners, 50);
  });
}
