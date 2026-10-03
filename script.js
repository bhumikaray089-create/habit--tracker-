// Get HTML elements
const habitInput = document.getElementById("habitInput");
const addHabit = document.getElementById("addHabit");
const habitList = document.getElementById("habitList");

const checkboxes = document.querySelectorAll(
    '.checkpoints input[type="checkbox"]'
);

const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

// Add a new habit
addHabit.addEventListener("click", function () {

    const habit = habitInput.value.trim();

    if (habit === "") {
        alert("Please enter a habit!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        ${habit}
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    habitList.appendChild(li);

    habitInput.value = "";
});

// Update progress
function updateProgress() {

    let completed = 0;

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            completed++;
        }
    });

    const total = checkboxes.length;

    const percentage = (completed / total) * 100;

    progressText.textContent = percentage + "% Complete";

    progressBar.style.width = percentage + "%";
}

// Check progress whenever a checkbox is clicked
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", updateProgress);
});
