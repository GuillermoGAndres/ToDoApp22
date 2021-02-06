var header = document.getElementById("header-content");
header.style.background = "#117DC6";

var titleApp = document.getElementsByTagName("h1")[0];
titleApp.style.color = "white";
titleApp.style.textAlign = "center";
var task = {
    completed: false,
    description: '',
}

var Task = function(description, completed) {
    this.description = description;
    this.completed = completed;
}

Task.prototype.addDescription = function(description) {
    this.description = description;
}

Task.prototype.isCompleted = function(completed) {
    return completed==true;
}

Task.prototype.setComplete = function(completed) {
    this.completed = completed;
}

Task.prototype.getDescription = function(){
    return this.description;
}

Task.prototype.getCompleted = function(){
    return this.completed;
}

var descriptionTask = document.getElementById("taskName");
var buttonAdd = document.getElementById("addTask");

buttonAdd.addEventListener('click', function() {
    var description = descriptionTask.value;
    console.log(description);
    var newTask = new Task(description,false);
    addTask(newTask);
    descriptionTask.value = '';
})


function addTask(newTask) {
    var table = document.getElementById("tasksList");
    var row = document.createElement("tr");
    var checkButton = document.createElement("input");
    checkButton.type = "checkbox";
    var deleteTask = document.createElement("button");
    deleteTask.innerHTML = "&#10799";
    var textDescription = document.createTextNode(newTask.getDescription());
    var today = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dateAdded = document.createTextNode("Added on " + months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear() + ' at ' + today.getHours() + ':' + today.getMinutes());
    var columns = [];
    for(var i = 0; i < 4; i++) {
        columns[i] = document.createElement("td");
    }
    columns[0].appendChild(checkButton);
    checkButton.addEventListener('change', function(){
        newTask.setComplete(!newTask.getCompleted());
        // Aqui va el estilo
        console.log(newTask.getCompleted());
        console.log(textDescription);
        columns[1].style = newTask.getCompleted() ? "text-decoration: line-through;" : "text-decoration: none;";
    })
    columns[1].appendChild(textDescription);
    columns[2].style.color = "gray";
    columns[2].style.fontSize = 12 + 'px';
    columns[2].style.fontStyle = "italic";
    columns[2].appendChild(dateAdded);
    columns[3].appendChild(deleteTask);

    deleteTask.addEventListener('click', function() {
        row.remove();
    })
    for(var i = 0; i < 4; i++) {
        row.appendChild(columns[i]);
    }
    table.appendChild(row);

    
}






var task1 = new Task("Comprar manzanas", false);

console.log(task1);
