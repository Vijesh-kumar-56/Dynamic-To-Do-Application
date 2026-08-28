const STORAGE_KEY = "dynamicTodoTasks";
const THEME_KEY = "dynamicTodoTheme";

let tasks = loadTasks();
let currentFilter = "all";

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyState = document.getElementById("emptyState");
const message = document.getElementById("message");

const totalCount = document.getElementById("totalCount");
const pendingCount = document.getElementById("pendingCount");
const completedCount = document.getElementById("completedCount");
const taskSummary = document.getElementById("taskSummary");

const clearCompleted = document.getElementById("clearCompleted");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const filterButtons = document.querySelectorAll(".filter-button");

function loadTasks() {
    try {
        const savedTasks = localStorage.getItem(STORAGE_KEY);
        const parsedTasks = savedTasks ? JSON.parse(savedTasks) : [];
        return Array.isArray(parsedTasks) ? parsedTasks : [];
    } catch (error) {
        console.error("Could not load tasks:", error);
        return [];
    }
}

function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function showMessage(text = "") {
    message.textContent = text;

    if (text) {
        setTimeout(() => {
            if (message.textContent === text) {
                message.textContent = "";
            }
        }, 2500);
    }
}

function createTask(text) {
    return {
        id: Date.now(),
        text,
        completed: false
    };
}

function addTask(event) {
    event.preventDefault();

    const text = taskInput.value.trim();

    if (!text) {
        showMessage("Please enter a task first.");
        taskInput.focus();
        return;
    }

    tasks.unshift(createTask(text));
    saveTasks();

    taskInput.value = "";
    showMessage("Task added successfully.");
    renderTasks();
    taskInput.focus();
}

function toggleTask(id) {
    tasks = tasks.map((task) => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }

        return task;
    });

    saveTasks();
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    saveTasks();
    renderTasks();
}

function clearCompletedTasks() {
    const hasCompletedTasks = tasks.some((task) => task.completed);

    if (!hasCompletedTasks) {
        showMessage("There are no completed tasks to clear.");
        return;
    }

    tasks = tasks.filter((task) => !task.completed);
    saveTasks();
    showMessage("Completed tasks cleared.");
    renderTasks();
}

function getFilteredTasks() {
    if (currentFilter === "pending") {
        return tasks.filter((task) => !task.completed);
    }

    if (currentFilter === "completed") {
        return tasks.filter((task) => task.completed);
    }

    return tasks;
}

function renderTasks() {
    const filteredTasks = getFilteredTasks();
    taskList.innerHTML = "";

    filteredTasks.forEach((task) => {
        const listItem = document.createElement("li");
        listItem.className = `task-item${task.completed ? " completed" : ""}`;

        const checkButton = document.createElement("button");
        checkButton.className = "check-button";
        checkButton.type = "button";
        checkButton.setAttribute(
            "aria-label",
            task.completed ? "Mark task as pending" : "Mark task as completed"
        );
        checkButton.textContent = task.completed ? "✓" : "";
        checkButton.addEventListener("click", () => toggleTask(task.id));

        const taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.textContent = task.text;

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.type = "button";
        deleteButton.setAttribute("aria-label", `Delete task: ${task.text}`);
        deleteButton.textContent = "🗑";
        deleteButton.addEventListener("click", () => deleteTask(task.id));

        listItem.append(checkButton, taskText, deleteButton);
        taskList.appendChild(listItem);
    });

    updateStats();

    if (filteredTasks.length === 0) {
        emptyState.hidden = false;

        if (tasks.length > 0) {
            emptyState.querySelector("h2").textContent = "No matching tasks";
            emptyState.querySelector("p").textContent = "Try another filter.";
        } else {
            emptyState.querySelector("h2").textContent = "No tasks yet";
            emptyState.querySelector("p").textContent = "Add your first task to get started.";
        }
    } else {
        emptyState.hidden = true;
    }
}

function updateStats() {
    const completed = tasks.filter((task) => task.completed).length;
    const pending = tasks.length - completed;

    totalCount.textContent = tasks.length;
    pendingCount.textContent = pending;
    completedCount.textContent = completed;

    taskSummary.textContent = `${tasks.length} ${tasks.length === 1 ? "task" : "tasks"}`;
}

function changeFilter(event) {
    currentFilter = event.currentTarget.dataset.filter;

    filterButtons.forEach((button) => {
        button.classList.toggle(
            "active",
            button.dataset.filter === currentFilter
        );
    });

    renderTasks();
}

function loadTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const isDark = savedTheme === "dark";

    document.body.classList.toggle("dark", isDark);
    themeIcon.textContent = isDark ? "☀" : "☾";
}

function toggleTheme() {
    const isDark = document.body.classList.toggle("dark");

    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    themeIcon.textContent = isDark ? "☀" : "☾";
}

taskForm.addEventListener("submit", addTask);
clearCompleted.addEventListener("click", clearCompletedTasks);
themeToggle.addEventListener("click", toggleTheme);

filterButtons.forEach((button) => {
    button.addEventListener("click", changeFilter);
});

loadTheme();
renderTasks();
