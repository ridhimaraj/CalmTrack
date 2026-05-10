const entriesList = document.getElementById("entriesList");
const taskList = document.getElementById("taskList");


// DISPLAY ENTRIES + ANALYTICS

function displayEntries() {

    chrome.storage.local.get(["entries"], (result) => {

        const entries = result.entries || [];

        const uniqueDates = new Set();

entries.forEach((entry) => {
    uniqueDates.add(entry.date);
});

document.getElementById("streakCount").textContent =
    `${uniqueDates.size} Day Streak`;

        // ANALYTICS

        let totalStress = 0;
        let totalHours = 0;

        entries.forEach((entry) => {

            totalStress += Number(entry.stress);
            totalHours += Number(entry.hours);

        });

        const averageStress =
            entries.length > 0
                ? (totalStress / entries.length).toFixed(1)
                : 0;

        document.getElementById("avgStress").textContent =
            `Average Stress: ${averageStress}`;

        document.getElementById("totalHours").textContent =
            `Total Study Hours: ${totalHours}`;

        document.getElementById("totalEntries").textContent =
            `Total Entries: ${entries.length}`;

        // DISPLAY ENTRY CARDS

        entriesList.innerHTML = "";

        entries.slice().reverse().forEach((entry) => {

            const entryCard = document.createElement("div");

            entryCard.classList.add("entry-card");

            entryCard.innerHTML = `
                <p><strong>Stress:</strong> ${entry.stress}</p>
                <p><strong>Study Hours:</strong> ${entry.hours}</p>
                <p><strong>Mood:</strong> ${entry.mood}</p>
                <p><strong>Date:</strong> ${entry.date}</p>
            `;

            entriesList.appendChild(entryCard);

        });

    });

}


function displayTasks() {

    chrome.storage.local.get(["tasks"], (result) => {

        const tasks = result.tasks || [];

        taskList.innerHTML = "";

        tasks.forEach((task, index) => {

            const taskCard = document.createElement("div");

            taskCard.classList.add("task-card");

            taskCard.innerHTML = `
                <label class="task-label">
                    <input type="checkbox" ${task.completed ? "checked" : ""}>
                    <span class="${task.completed ? "completed-task" : ""}">
                        ${task.text}
                    </span>
                </label>
            `;

            const checkbox = taskCard.querySelector("input");

            checkbox.addEventListener("change", () => {

                tasks[index].completed = checkbox.checked;

                chrome.storage.local.set({ tasks: tasks }, () => {

                    displayTasks();

                });

            });

            taskList.appendChild(taskCard);

        });

    });

}

// SAVE STUDY ENTRY

document.getElementById("saveBtn").addEventListener("click", () => {

    const stress = document.getElementById("stress").value;
    const hours = document.getElementById("hours").value;
    const mood = document.getElementById("mood").value;

    const entry = {
        stress: stress,
        hours: hours,
        mood: mood,
        date: new Date().toLocaleDateString()
    };

    chrome.storage.local.get(["entries"], (result) => {

        let entries = result.entries || [];

        entries.push(entry);

        chrome.storage.local.set({ entries: entries }, () => {

            document.getElementById("message").textContent =
                "Entry saved successfully";

            displayEntries();

        });

    });

});


// ADD TASK

document.getElementById("addTaskBtn").addEventListener("click", () => {

    const taskInput = document.getElementById("taskInput");

    const task = taskInput.value.trim();

    if (task === "") {
        return;
    }

    chrome.storage.local.get(["tasks"], (result) => {

        let tasks = result.tasks || [];

        tasks.push({
    text: task,
    completed: false
});

        chrome.storage.local.set({ tasks: tasks }, () => {

            displayTasks();

            taskInput.value = "";

        });

    });

});


// INITIAL DISPLAY

displayEntries();
displayTasks();

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDarkMode =
        document.body.classList.contains("dark-mode");

    chrome.storage.local.set({
        darkMode: isDarkMode
    });

});

chrome.storage.local.get(["darkMode"], (result) => {

    if (result.darkMode) {

        document.body.classList.add("dark-mode");

    }

});