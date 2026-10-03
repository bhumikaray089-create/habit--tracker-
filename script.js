const habitInput = document.getElementById("habitInput");
const addHabit = document.getElementById("addHabit");
const habitList = document.getElementById("habitList");

addHabit.onclick = function () {

    let habit = habitInput.value.trim();

    if (habit === "") {
        return;
    }

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(" " + habit + " "));

    let button = document.createElement("button");
    button.textContent = "Delete";

    button.onclick = function () {
        li.remove();
    };

    li.appendChild(button);
    habitList.appendChild(li);

    habitInput.value = "";
};


// PROGRESS

let morning = document.getElementById("morning");
let afternoon = document.getElementById("afternoon");
let evening = document.getElementById("evening");
let night = document.getElementById("night");

function updateProgress() {

    let completed = 0;

    if (morning.checked) completed++;
    if (afternoon.checked) completed++;
    if (evening.checked) completed++;
    if (night.checked) completed++;

    let percentage = completed * 25;

    document.getElementById("progressText").textContent =
        percentage + "% Complete";

    document.getElementById("progressBar").style.width =
        percentage + "%";
}

morning.addEventListener("change", updateProgress);
afternoon.addEventListener("change", updateProgress);
evening.addEventListener("change", updateProgress);
night.addEventListener("change", updateProgress);
