
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


// CHECKPOINT PROGRESS
function updateProgress() {

    let completed = 0;

    checkpoints.forEach(function (checkpoint) {
        if (checkpoint.checked) {
            completed = completed + 1;
        }
    });

    let percentage = (completed / checkpoints.length) * 100;

    progressText.textContent = percentage + "% Complete";
    progressBar.style.width = percentage + "%";
}


// CHECK WHEN A CHECKBOX IS SELECTED
checkpoints.forEach(function (checkpoint) {
    checkpoint.addEventListener("change", updateProgress);
});
