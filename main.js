import { initialTasks, loadTasks } from "./data/taskData.js";
import { applyDarkMode } from "./ui/darkMode.js";
import {
  renderTasks,
  sortByPriority,
  clearExistingTasks,
} from "./ui/taskRenderer.js";
import { applySideBar } from "./ui/sidebar.js";
import { faviconModal } from "./ui/faviconModal.js";
import {
  setupModalCloseHandler,
  addTaskButtons,
} from "./modal/modalHandlers.js";

/**
 * Initializes the task board and modal handlers.
 * @param {Array} initialTasks - The array containing the tasks
 */
function initTaskBoard() {
  clearExistingTasks();
  renderTasks(initialTasks);
  addTaskButtons();
  sortByPriority();
  applyDarkMode();
  applySideBar();
  faviconModal();
  setupModalCloseHandler();
}

// Wait until DOM is fully loaded
//document.addEventListener("DOMContentLoaded", applyDarkMode);
document.addEventListener("DOMContentLoaded", async () => {
  await loadTasks(); // ensures initialTasks is populated
  //  applyDarkMode();
  initTaskBoard(initialTasks);
});
