// ADD HABIT
addHabit.onclick = function () {

    let habit = habitInput.value.trim();

    if (habit === "") {
        alert("Please enter a habit!");
        return;
    }

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let habitText = document.createTextNode(" " + habit + " ");

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(habitText);
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
