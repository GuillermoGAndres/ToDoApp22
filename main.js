var task = {
    completed: false,
    description: '',
}

var Task = function (description, completed) {
    this.description = description;
    this.completed = completed;
}
Task.prototype.setComplete = function (completed) {
    this.completed = completed;
}

Task.prototype.getDescription = function () {
    return this.description;
}

Task.prototype.getCompleted = function () {
    return this.completed;
}

var descriptionTask = document.getElementById("taskName");
//Focus the input when initializing
descriptionTask.focus();

descriptionTask.addEventListener('keyup', function (event) {
    if (event.code === "Enter") {
        handleNewTask();
    };
});

function handleNewTask() {
    var description = descriptionTask.value;
    //avoid creating the task if the string is empty
    if (description.value.trim() === "") return;
    var newTask = new Task(description, false);
    addTask(newTask);
    descriptionTask.value = '';
}

var buttonAdd = document.getElementById("addTask");

buttonAdd.addEventListener('click', function () {
    handleNewTask();
});


function addTask(newTask) {
    var table = document.getElementById("tasksList");
    var row = document.createElement("tr");
    var checkButton = document.createElement("input");
    checkButton.type = "checkbox";
    var deleteTask = document.createElement("button");
    deleteTask.innerHTML = "&#10799";
    deleteTask.className = "deleteTaskBtn"
    var textDescription = document.createTextNode(newTask.getDescription());
    var columns = [];
    for (var i = 0; i < 3; i++) {
        columns[i] = document.createElement("td");
    }
    columns[0].appendChild(checkButton);
    checkButton.addEventListener('change', function () {
        newTask.setComplete(!newTask.getCompleted());
        // Aqui va el estilo
        console.log(newTask.getCompleted());
        console.log(textDescription);
        columns[1].style = newTask.getCompleted() ? "text-decoration: line-through;" : "text-decoration: none;";
    })
    columns[1].appendChild(textDescription);
    columns[2].appendChild(deleteTask);

    deleteTask.addEventListener('click', function () {
        row.remove();
    })
    for (var i = 0; i < 3; i++) {
        row.appendChild(columns[i]);
    }
    table.appendChild(row);
};

var task1 = new Task("Comprar manzanas", false);

console.log(task1);
