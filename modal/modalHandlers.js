import { initialTasks } from "../data/taskData.js";
import { applySideBar } from "../ui/sidebar.js";
import {
  sortByPriority,
  renderTasks,
  clearExistingTasks,
} from "../ui/taskRenderer.js";

// State flags
let isNew = false;
let isOld = false;

// Global placeholder
var placeHolder = "";

/**
 * Opens the modal dialog with pre-filled task details.
 * @param {Object} task - The task object to display in the modal.
 * @param {Object} currentTask - The current task to display
 * @param {HTMLElement} modal - The modal that will pop up
 */
export function openTaskModal(task) {
  const modalHeader = document.getElementById("header-text");
  const modal = document.getElementById("task-modal");
  const titleInput = document.getElementById("task-title");
  const descInput = document.getElementById("task-desc");
  const statusSelect = document.getElementById("task-status");
  const prioritySelect = document.getElementById("task-priority");
  const modalSave = document.getElementById("save");
  modalSave.style.display = "initial";
  const modalDelete = document.getElementById("delete");
  modalDelete.disabled = false;
  const modalCreate = document.getElementById("create");

  modalHeader.innerText = "Task";
  titleInput.value = task.title;
  descInput.value = task.description;
  statusSelect.value = task.status;
  prioritySelect.value = task.priority;
  modalSave.innerHTML = "Save Changes";
  modalDelete.innerHTML = "Delete Task";
  modalCreate.style.display = "none";

  modalDelete.type = "button";

  modal.showModal();

  placeHolder = task;

  let form = document.querySelector("form");
  form.id = "existing-form";
  modalSave.type = "submit";
  isOld = true;

  form.addEventListener("submit", (d) => {
    if (!isOld) return;
    console.log("Existing div submit button pressed");

    let formData = new FormData(form);
    let currentTask = Object.fromEntries(formData);
    currentTask.id = placeHolder.id;

    let index = initialTasks.findIndex((obj) => obj.id === placeHolder.id);
    initialTasks.splice(index, 1);
    initialTasks.push(currentTask);

    localStorage.setItem("initialTask", JSON.stringify(initialTasks));

    d.stopImmediatePropagation();
    modal.close();
    form.id = "task-form";
    modalSave.type = "button";
    initTaskBoard();

    isOld = false;
  });

  modalDelete.addEventListener("click", (a) => {
    let confirmDelete = window.confirm(
      "Are you sure you want to delete this Task?"
    );
    if (confirmDelete) {
      if (!isOld) return;
      let index = initialTasks.findIndex((obj) => obj.id === placeHolder.id);
      initialTasks.splice(index, 1);
      localStorage.setItem("initialTask", JSON.stringify(initialTasks));
      modal.close();
      initTaskBoard();
      a.stopImmediatePropagation();
      isOld = false;
    } else {
      a.stopImmediatePropagation();
    }
  });
}

/**
 * Displays empty Modal for user to input data and returns the new task.
 * @param {object} newTask - New task data object
 * @param {HTMLElement} modal - The modal that will pop up
 */
export function openBlankModal() {
  const modal = document.getElementById("task-modal");
  const modalHeader = document.getElementById("header-text");
  const titleInput = document.getElementById("task-title");
  const descInput = document.getElementById("task-desc");
  const statusSelect = document.getElementById("task-status");
  const prioritySelect = document.getElementById("task-priority");
  const modalCreate = document.getElementById("create");
  modalCreate.style.display = "inherit";
  const modalSave = document.getElementById("save");
  const modalDelete = document.getElementById("delete");

  modalHeader.innerText = "Create New Task";
  titleInput.value = "";
  descInput.value = "";
  statusSelect.value = "";
  prioritySelect.value = "";
  modalCreate.innerText = "Create Task";
  modalSave.style.display = "none";
  modalDelete.style.display = "none";

  modal.showModal();

  let newForm = document.querySelector("form");
  newForm.id = "new-form";
  modalCreate.type = "submit";

  isNew = true;

  newForm.addEventListener("submit", (e) => {
    if (!isNew) return;
    const formData = new FormData(newForm);
    const newTask = Object.fromEntries(formData);
    newTask.id = 1;

    while (
      initialTasks.some((initialTasks) => initialTasks.id === newTask.id)
    ) {
      newTask.id += 1;
    }

    initialTasks.push(newTask);
    localStorage.setItem("initialTask", JSON.stringify(initialTasks));

    e.stopImmediatePropagation();
    modal.close();
    newForm.id = "task-form";
    modalSave.type = "button";
    initTaskBoard();
    modalDelete.style.display = "initial";
    modalDelete.innerHTML = "Delete Task";
    isNew = false;
  });
}

/**
 * Sets up modal close behavior.
 * @param {HTMLElement} modal - The modal that is currently displayed
 * @param {HTMLElement} closeBtn - the button to close the modal
 */
export function setupModalCloseHandler() {
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");

  closeBtn.addEventListener("click", () => {
    const modalSave = document.getElementById("save");
    const modalDelete = document.getElementById("delete");
    modalSave.innerHTML = "Save Changes";
    modalSave.type = "button";
    modalDelete.type = "button";
    modalDelete.style.display = "initial";
    modalDelete.innerHTML = "Delete Task";
    modal.close();
  });
}

/**
 * Add functionality to Add Task Buttons
 * @param {HTMLElement} bigAddTask - The button to open blank modal on large screens
 * @param {HTMLElement} smallAddTask - the button to open blank modal on small screens
 */
export function addTaskButtons() {
  const bigAddTask = document.getElementById("big-add-task");
  const smallAddTask = document.getElementById("small-add-task");

  bigAddTask.addEventListener("click", (a) => {
    openBlankModal();
    a.stopImmediatePropagation();
  });

  smallAddTask.addEventListener("click", (a) => {
    openBlankModal();
    a.stopImmediatePropagation();
  });
}

/**
 * Initializes the task board and modal handlers.
 * @param {Array} initialTasks - The array containing the tasks
 */
export function initTaskBoard() {
  clearExistingTasks();
  renderTasks(initialTasks);
  addTaskButtons();
  sortByPriority();
  applySideBar();
  setupModalCloseHandler();
}
