const habitInput = document.getElementById("habitInput");
const addHabit = document.getElementById("addHabit");
const habitList = document.getElementById("habitList");

const checkboxes = document.querySelectorAll(".checkpoints input");

const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

// Add habit
addHabit.addEventListener("click", function () {

    if (habitInput.value.trim() === "") {
        alert("Please enter a habit!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML =
        habitInput.value +
        ' <button onclick="this.parentElement.remove()">Delete</button>';

    habitList.appendChild(li);

    habitInput.value = "";
});

// Calculate progress
function updateProgress() {

    let completed = 0;

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            completed++;
        }
    }

    let percentage = (completed / 4) * 100;

    progressText.textContent = percentage + "% Complete";
    progressBar.style.width = percentage + "%";
}

// Detect checkbox changes
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", updateProgress);
}
