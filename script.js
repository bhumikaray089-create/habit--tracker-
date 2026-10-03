const habitInput = document.getElementById("habitInput");
const addHabit = document.getElementById("addHabit");
const habitList = document.getElementById("habitList");

const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

const morning = document.getElementById("morning");
const afternoon = document.getElementById("afternoon");
const evening = document.getElementById("evening");
const night = document.getElementById("night");


// ADD HABIT
addHabit.onclick = function () {

    let habit = habitInput.value.trim();

    if (habit === "") {
        alert("Please enter a habit!");
        return;
    }

    let li = document.createElement("li");

    li.textContent = habit + " ";

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteButton);
    habitList.appendChild(li);

    habitInput.value = "";
};


// UPDATE PROGRESS
function updateProgress() {

    let completed = 0;

    if (morning.checked) {
        completed++;
    }

    if (afternoon.checked) {
        completed++;
    }

    if (evening.checked) {
        completed++;
    }

    if (night.checked) {
        completed++;
    }

    let percentage = completed * 25;

    progressText.textContent = percentage + "% Complete";
    progressBar.style.width = percentage + "%";
}


morning.onchange = updateProgress;
afternoon.onchange = updateProgress;
evening.onchange = updateProgress;
night.onchange = updateProgress;
