const habitInput = document.getElementById("habitInput");
const addHabit = document.getElementById("addHabit");
const habitList = document.getElementById("habitList");

addHabit.addEventListener("click", function () {
    const habitName = habitInput.value.trim();

    if (habitName === "") {
        alert("Please enter a habit.");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <input type="checkbox">
        <span>${habitName}</span>
        <button>Delete</button>
    `;

    li.querySelector("button").addEventListener("click", function () {
        li.remove();
    });

    habitList.appendChild(li);
    habitInput.value = "";
});
