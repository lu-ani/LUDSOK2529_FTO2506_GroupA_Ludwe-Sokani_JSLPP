// All task rendering functions
//import { initialTasks } from "../data/taskData.js";
import { openTaskModal } from "../modal/modalHandlers.js";

import { countStatus } from "./countStatus.js";

/**
 * Creates a single task DOM element.
 * @param {Object} task - Task data object.
 * @param {HTMLElement} priorityDiv - Created div to store priority dot
 * @returns {HTMLElement} taskdiv - the card countaing the name and priority of the task
 */
export function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.style.display = "flex";
  taskDiv.style.justifyContent = "space-between";
  const priorityDiv = document.createElement("div");
  priorityDiv.style.marginRight = "5%";

  var priorityColor = "";

  if (task.priority === "low") {
    priorityColor = "🟢";
  } else if (task.priority === "medium") {
    priorityColor = "🟠";
  } else if (task.priority === "high") {
    priorityColor = "🔴";
  }

  taskDiv.className = "task-div";
  priorityDiv.textContent = priorityColor;
  taskDiv.textContent = task.title;
  taskDiv.dataset.taskId = task.id;
  taskDiv.dataset.priority = task.priority;
  taskDiv.appendChild(priorityDiv);

  taskDiv.addEventListener("click", () => {
    openTaskModal(task);
  });

  countStatus(task);

  return taskDiv;
}

/**
 * Finds the task container element based on task status.
 * @param {HTMLElement} column - the column containing the task cards
 */
function getTaskContainerByStatus(status) {
  const column = document.querySelector(`.column-div[data-status="${status}"]`);
  return column ? column.querySelector(".tasks-container") : null;
}

/**
 * Clears all existing task-divs from all task containers.
 */
function clearExistingTasks() {
  document.querySelectorAll(".tasks-container").forEach((container) => {
    container.innerHTML = "";
  });
}

/**
 * Renders all tasks from initial data to the UI.
 * @param {Object} task - The current task
 * @param {HTMLElement} column - the column containing the task cards
 */
export function renderTasks(tasks) {
  tasks.forEach((task) => {
    const container = getTaskContainerByStatus(task.status);
    if (container) {
      const taskElement = createTaskElement(task);
      container.appendChild(taskElement);
    }
  });
}

/**
 * Sort all task cards by priority
 * @param {Object} tasks - the current task
 * @param {HTMLElement} column - the column containing the task cards
 */
export function sortByPriority() {
  const priorityOrder = {
    low: 1,
    medium: 2,
    high: 3,
  };

  const containers = document.querySelectorAll(".tasks-container");

  containers.forEach((container) => {
    const tasks = Array.from(container.querySelectorAll("div[data-priority]"));

    tasks.sort(
      (a, b) =>
        priorityOrder[b.dataset.priority] - priorityOrder[a.dataset.priority]
    );

    tasks.forEach((task) => container.appendChild(task));
  });
}

export { clearExistingTasks };
