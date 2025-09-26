# 📝 Task Manager App

![Dark Mode](https://img.shields.io/badge/Dark%20Mode-Enabled-brightgreen)
![Responsive](https://img.shields.io/badge/Responsive-Yes-blue)
![Local Storage](https://img.shields.io/badge/Storage-Local-orange)
![JavaScript](https://img.shields.io/badge/Built%20With-JavaScript-yellow)

A modern, responsive **Task Manager Web App** built with modular JavaScript. Create, edit, delete, and prioritize your tasks in a sleek Kanban layout — with support for **dark mode**, **a mobile sidebar**, and **local storage** persistence.
---

## 🧭 Contents


- [🚀 Features](#-features)
- [📦 Folder Structure](#-folder-structure)
- [🛠️ How to Use](#️-how-to-use)
- [🧠 Helpful Tips](#-helpful-tips)
- [💻 Tech Stack](#-tech-stack)
- [🌍 Deployment](#-deployment)
- [📸 Screenshots](#-screenshots)
- [🗣️ Presentation](#-presentation)
  
---

## 🚀 Features

### ✅ Task Management

- Add new tasks through a modal form
- Edit existing tasks with ease
- Delete tasks with confirmation
- Organize tasks by **status**: `To Do`, `Doing`, `Done`
- Auto-sort by **priority**: 🔴 High → 🟠 Medium → 🟢 Low

### 🌙 Dark Mode Support

- Toggle between light and dark themes
- Theme preference saved in browser

### 📱 Responsive Sidebar

- **Desktop:** Show/hide sidebar with toggle buttons
- **Mobile:** Open sidebar via the favicon button
- Sidebar visibility persists via localStorage

### 💾 Persistent Storage

- All task data is saved in **Local Storage**
- No backend required — works completely offline when repo is downloaded and ran via liveserver on VSC

---

## 📦 Folder Structure

chat-gpt-files/</br>
├── index.html</br>
├── main.js</br>
├── initialData.js</br>
├── /data</br>
│ └── taskData.js</br>
├── /ui</br>
│ ├── darkMode.js</br>
│ ├── sidebar.js</br>
│ ├── faviconModal.js</br>
│ └── taskRenderer.js</br>
├── /modal</br>
│ └── modalHandlers.js</br>
├── README.md</br>

## 🛠️ How to Use

### 1. **Open the App**

- Open the app [URL](https://ludwe-jslpp.netlify.app) in your browser.

### 2. **Add a Task**

- Click the **"Add Task"** button
- Fill in the:
  - **Title**
  - **Description**
  - **Status** (To Do, Doing, Done)
  - **Priority** (High, Medium, Low)
- Click **"Create Task"**

### 3. **Edit a Task**

- Click on any task box
- Modify fields as needed
- Click **"Save Changes"**

### 4. **Delete a Task**

- Click on a task
- Click **"Delete Task"**
- Confirm deletion in popup

### 5. **Sidebar Interaction**

- **Desktop:** Use “🚫 Hide Sidebar” or “👀” buttons
- **Mobile:** Click the small favicon to open a simplified sidebar inside the modal

### 6. **Toggle Dark Mode**

- Use the dark/light switch at the top of the page
- Your preference is saved automatically

[⬆️ Back to Contents](#-Contents)

---

## 🧠 Helpful Tips

- Tasks are sorted by **priority** within each column
- Sidebar state and theme are **remembered** using localStorage
- All data is saved locally — **no internet needed**
- Works smoothly on both desktop and mobile browsers

[⬆️ Back to Contents](#-Contents)

---

## 💻 Tech Stack

| Technology   | Purpose                     |
| ------------ | --------------------------- |
| HTML         | Page structure              |
| CSS          | Styling and layout          |
| JavaScript   | App logic and interactivity |
| LocalStorage | Data persistence            |

[⬆️ Back to Contents](#-Contents)

---

## 🌍 Deployment

The app will be live at [https://ludwe-jslpp.netlify.app](https://ludwe-jslpp.netlify.app)

[⬆️ Back to Contents](#-Contents)

---

## 📸 Screenshots

### 🖥️ Desktop View

![Desktop View](./screenshots/Laptop-light.jpg?raw=true "Desktop View")

### 📱 Mobile View

![Mobile View](/screenshots/Mobile-light.jpg?raw=true "Mobile View")

### 🌙 Dark Mode

Desktop Dark Mode:

![Desktop Dark Mode](/screenshots/Laptop-dark.jpg?raw=true "Desktop Dark Mode")

Mobile Dark Mode:

![Mobile Dark Mode](/screenshots/Mobile-dark.jpg?raw=true "Mobile Dark Mode")

[⬆️ Back to Contents](#-Contents)

---

## Presentation

(ALSO available in ./presentation/LUDSOK2529_FTO2506_GroupA_Ludwe-Sokani_JSLPP_presentation.mp4)

https://github.com/user-attachments/assets/2a832b62-fba8-4634-b56c-240a6be942d7



---

### 👋 Happy Task Managing!
