"use strict";

// Ensure dark mode is the default on first load
(function initializeDefaultDarkMode() {
  try {
    const storageKey = "darkSwitch";
    const existingPreference = localStorage.getItem(storageKey);

    // If no preference is stored, default to dark
    if (existingPreference === null) {
      localStorage.setItem(storageKey, "dark");
    }

    // Apply current preference immediately and sync the toggle UI
    const isDark = localStorage.getItem(storageKey) === "dark";
    if (isDark) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }

    const toggleInput = document.getElementById("darkSwitch");
    if (toggleInput) toggleInput.checked = isDark;
  } catch (_) {
    // Fail silently if localStorage is unavailable
  }
})();

//Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

/* RSS Feed removed due to CORS issues */
// If you want to add RSS feeds later, consider using a CORS-enabled proxy or your own backend

/* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
GitHubActivity.feed({ username: "zubairmoosani", selector: "#ghfeed" });

/* NIGHT MODE CONTENT HEIGHT CONTROL FUNCTIONALITY */
const element = document.getElementById("dark_mode_item");
const dark_mode_container = document.getElementById("dark_mode");

function addClass() {
  const mode = localStorage.getItem("darkSwitch");
  if (mode === "dark") {
    element.classList.add("item_height");
    dark_mode_container.classList.remove("dark_mode_unActive");
  } else {
    element.classList.remove("item_height");
    dark_mode_container.classList.add("dark_mode_unActive");
  }
}
addClass();

element.addEventListener("change", function () {
  addClass();
});
