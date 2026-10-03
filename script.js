const habitInput = document.getElementById("habitInput");
const addHabit = document.getElementById("addHabit");
const habitList = document.getElementById("habitList");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

let habits = [];

addHabit.addEventListener("click", function () {
    const habitName = habitInput.value.trim();

    if (habitName === "") {
        alert("Please enter a habit.");
        return;
    }

    habits.push({
        name: habitName,
        completed: false
    });

    habitInput.value = "";
    displayHabits();
});

function displayHabits() {
    habitList.innerHTML = "";

    habits.forEach(function (habit, index) {
        const li = document.createElement("li");

        li.innerHTML = `
            <label>
                <input type="checkbox" ${habit.completed ? "checked" : ""}>
                <span>${habit.name}</span>
            </label>
            <button class="delete-btn">Delete</button>
        `;

        const checkbox = li.querySelector("input");

        checkbox.addEventListener("change", function () {
            habit.completed = checkbox.checked;
            displayHabits();
        });

        li.querySelector(".delete-btn").addEventListener("click", function () {
            habits.splice(index, 1);
            displayHabits();
        });

        habitList.appendChild(li);
    });

    updateProgress();
}

function updateProgress() {
    if (habits.length === 0) {
        progressText.textContent = "0% Complete";
        progressBar.style.width = "0%";
        return;
    }

    const completed = habits.filter(function (habit) {
        return habit.completed;
    }).length;

    const percentage = Math.round((completed / habits.length) * 100);

    progressText.textContent = percentage + "% Complete";
    progressBar.style.width = percentage + "%";
}
