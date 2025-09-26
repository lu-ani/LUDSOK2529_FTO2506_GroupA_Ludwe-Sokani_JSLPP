import { initialTasks } from "../data/taskData.js";

/**
 * Displays the ammount of tasks for each status at the top of the container
 * @param {HTMLElement} todoContainer - The container holding todo tasks.
 * @param {HTMLElement} todoCount - The number of todo elements
 * @param {HTMLElement} doingContainer - The container holding doing tasks.
 * @param {HTMLElement} doingCount - The number of doing elements
 * @param {HTMLElement} doneContainer - The container holding done tasks.
 * @param {HTMLElement} doneCount - The number of done elements
 */
export function countStatus() {
  const todoContainer = document.getElementById("toDoText");
  const todoCount = initialTasks.filter(
    (task) => task.status === "todo"
  ).length;
  todoContainer.innerHTML = "TODO (" + todoCount + ")";

  const doingContainer = document.getElementById("doingText");
  const doingCount = initialTasks.filter(
    (task) => task.status === "doing"
  ).length;
  doingContainer.innerHTML = "DOING (" + doingCount + ")";

  const doneContainer = document.getElementById("doneText");
  const doneCount = initialTasks.filter(
    (task) => task.status === "done"
  ).length;
  doneContainer.innerHTML = "DONE (" + doneCount + ")";
}
