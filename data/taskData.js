let initialTasks = [];

/**
 * Load tasks from localStorage and if none found, fetch them from API.
 * @param {HTMLELEMENT} loadingModal - Modal containing message.
 * @param {HTMLELEMENT} loadingMessage - The message inside the modal.
 * @param {Array} initialTask - The locally saved tasks.
 * @param {Array} initialTasks - The final array all the tasks will be in.
 **/
async function loadTasks() {
  const initialTask = localStorage.getItem("initialTask");

  // 🔄 Get modal and message element
  const loadingModal = document.getElementById("loading-modal");
  const loadingMessage = document.getElementById("loading-message");

  // ✅ Show modal at the start
  if (loadingModal)
    loadingMessage.textContent = "Trying to use Localally stored tasks";
  loadingModal.showModal();

  if (initialTask) {
    try {
      initialTasks = JSON.parse(initialTask);
      console.log("using localStorage");

      if (loadingMessage) {
        loadingMessage.textContent = "Using Locally stored tasks";

        setTimeout(() => {
          loadingModal.close();
          loadingModal.style.display = "none";
        }, 500);
      }

      return;
    } catch (err) {
      console.warn(
        "⚠️ Failed to parse localStorage data. Falling back to API."
      );

      if (loadingMessage) {
        loadingMessage.textContent = "No tasks found, retrieving data from API";

        setTimeout(() => {
          loadingModal.close();
          loadingModal.style.display = "none";
        }, 500);
      }
    }
  }

  if (loadingMessage) loadingMessage.textContent = "Loading tasks...";

  // If no valid localStorage data, fetch from API
  try {
    const response = await fetch("https://jsl-kanban-api.vercel.app/");
    if (!response.ok) throw new Error("Network response not ok");

    const data = await response.json();
    initialTasks = data.map((task) => ({
      ...task,
      priority: "low",
    }));

    localStorage.setItem("initialTask", JSON.stringify(initialTasks));
    console.log("✅ Loaded tasks from API and cached in localStorage");

    if (loadingMessage) {
      loadingMessage.textContent = "✅ Loaded tasks and saved in localStorage";
    }
  } catch (error) {
    // Pause so user sees message
    await new Promise((resolve) => setTimeout(resolve, 2000));
  } finally {
    if (loadingModal) {
      setTimeout(() => {
        loadingModal.close();
        loadingModal.style.display = "none";
      }, 500);
    }
  }
}

export { loadTasks, initialTasks };
