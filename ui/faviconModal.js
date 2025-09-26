// /////////////// Favicon Modal //////////////////////////////
import { applySideBar } from "./sidebar.js";

/**
 * Displays the ammount of tasks for each status at the top of the container
 * @param {HTMLElement} logos - The favicon logos
 * @param {HTMLElement} modal - The modal which will pop up
 * @param {HTMLElement} headerText - The default heading on the modal
 * @param {HTMLElement} titleLabel - The default title label for each task
 * @param {HTMLElement} titleInput - The default input for the task title
 * @param {HTMLElement} descriptionLabel - The default description label for each task
 * @param {HTMLElement} descInput - The default input for the task description
 * @param {HTMLElement} statusLabel - The default status label for each task
 * @param {HTMLElement} statusInput - The default input for the task status
 * @param {HTMLElement} priorityLabel - The default priority label for each task
 * @param {HTMLElement} priorityInput - The default input for the task priority
 * @param {HTMLElement} statusLabel - The default status label for each task
 * @param {HTMLElement} formButtons - The default div containing the buttons at the bottom of the modal
 * @param {HTMLElement} sideBar - The div for the sidebar
 * @param {HTMLElement} hideSideBar - The button to show the sidebar
 * @param {HTMLElement} closeBtn - The button to close the sidebar in the modal
 */
export function faviconModal() {
  const logos = document.getElementsByClassName("logo");

  logos[1].addEventListener("click", (a) => {
    console.log("small favicon");

    const modal = document.getElementById("task-modal");

    modal.style.width = "350px";
    modal.style.height = "200px";
    modal.style.display = "flex";
    modal.style.padding = "0px";
    modal.style.margin = "0px";
    modal.style.top = "145px";

    modal.showModal();

    const headerText = document.getElementById("header-text");
    headerText.style.display = "none";

    const titleLabel = document.getElementById("title-label");
    titleLabel.style.display = "none";

    const descriptionLabel = document.getElementById("description-label");
    descriptionLabel.style.display = "none";

    const statusLabel = document.getElementById("status-label");
    statusLabel.style.display = "none";

    const priorityLabel = document.getElementById("priority-label");
    priorityLabel.style.display = "none";

    const formButtons = document.getElementById("modal-buttons");
    formButtons.style.display = "none";

    const titleInput = document.getElementById("task-title");
    titleInput.style.display = "none";

    const descriptionInput = document.getElementById("task-desc");
    descriptionInput.style.display = "none";

    const statusInput = document.getElementById("task-status");
    statusInput.style.display = "none";

    const priorityInput = document.getElementById("task-priority");
    priorityInput.style.display = "none";

    const hideSideBar = document.getElementById("hide-sidebar-btn");
    hideSideBar.style.display = "none";

    const sideBar = document.getElementById("side-bar-div");
    const showSideBar = document.getElementById("show-sidebar-btn");

    sideBar.classList.add("active");
    sideBar.style.display = "flex";
    sideBar.style.height = "200px";
    sideBar.style.border = "none";
    modal.insertBefore(sideBar, modal.firstChild);
    a.stopImmediatePropagation();

    const closeBtn = document.getElementById("close-modal-btn");
    closeBtn.style.cssFloat = "right";

    closeBtn.addEventListener("click", () => {
      modal.removeAttribute("style");

      showSideBar.style.display = "";

      sideBar.style.display = "";
      hideSideBar.style.display = "none";
      headerText.style.display = "flex";
      titleLabel.style.display = "flex";
      descriptionLabel.style.display = "flex";
      statusLabel.style.display = "flex";
      priorityLabel.style.display = "flex";
      formButtons.style.display = "flex";
      titleInput.style.display = "flex";
      descriptionInput.style.display = "flex";
      statusInput.style.display = "flex";
      priorityInput.style.display = "flex";

      sideBar.classList.remove("active");
      sideBar.style.display = "initial";
      sideBar.style.height = "100vh";
      sideBar.style.border = "";

      showSideBar.removeAttribute("style");
      hideSideBar.removeAttribute("style");
      sideBar.removeAttribute("style");
      applySideBar();

      document.body.insertBefore(sideBar, document.body.firstChild);
      document.body.append(modal);

      modal.close();
    });
  });
}
