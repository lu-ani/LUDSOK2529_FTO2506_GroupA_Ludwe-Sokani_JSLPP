// ///////////////////////// SIDEBAR WORK /////////////////////////////////////

/**
 * Shows and hides the side bar.
 * @param {HTMLElement} hideSideBar - Button to hide the sidebar.
 * @param {HTMLElement} showSideBar - Button to show the sidebar.
 * @param {HTMLElement} sideBar - The sidebar div.
 * @param {HTMLelement} container - Container holding all the task columns.
 */
export function applySideBar() {
  const hideSideBar = document.getElementById("hide-sidebar-btn");
  const showSideBar = document.getElementById("show-sidebar-btn");
  let sideBar = document.getElementById("side-bar-div");
  let container = document.getElementById("container");

  // Hides sidebar
  hideSideBar.addEventListener("click", (a) => {
    sideBar.style.display = "none";
    container.style.marginLeft = "3%";
    showSideBar.style.display = "initial";
    localStorage.removeItem("sideBarStatus");
    localStorage.setItem("sideBarStatus", "disabled");
    console.log("hidden");
    a.stopImmediatePropagation();
  });

  // Shows sidebar
  showSideBar.addEventListener("click", (a) => {
    showSideBar.style.display = "none";
    container.style.marginLeft = "0%";
    //sideBar.style.display = "flex";
    sideBar.removeAttribute("style");
    localStorage.removeItem("sideBarStatus");
    localStorage.setItem("sideBarStatus", "enabled");
    console.log("visible");
    a.stopImmediatePropagation();
  });

  // On page reload, fetches the key "sideBarStatus" and hides
  // or shows element depending on whether it was shows or hidden before refresh.
  if (localStorage.getItem("sideBarStatus") === "disabled") {
    sideBar.style.display = "none";
    showSideBar.style.display = "initial";
    container.removeAttribute("style");
  }
}
