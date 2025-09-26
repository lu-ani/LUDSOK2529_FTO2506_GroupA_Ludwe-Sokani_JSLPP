// ///// dark mode toggle //////////////////

/**
 * Handles the darkmode
 * @param {HTMLElement} toggleButton - The button to switch dark mode on/off
 */
export function applyDarkMode() {
  const toggleButton = document.getElementById("switch");

  // Checks local storage to see if dark mode was on or off in last session
  if (localStorage.getItem("darkMode") === "enabled") {
    document.documentElement.classList.add("dark");
    toggleButton.checked = true;
  } else {
    toggleButton.checked = false;
  }

  // Toggle the 'dark-mode' class on the root element
  toggleButton.addEventListener("change", (a) => {
    if (toggleButton.checked) {
      document.documentElement.classList.toggle("dark");
      localStorage.removeItem("darkMode");
      localStorage.setItem("darkMode", "enabled");
      console.log("dark mode enabled");
      a.stopImmediatePropagation;
    } else {
      document.documentElement.classList.toggle("dark");
      localStorage.removeItem("darkMode");
      localStorage.setItem("darkMode", "disabled");
      console.log("dark mode disabled");
      a.stopImmediatePropagation;
    }
  });
}
