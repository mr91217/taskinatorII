//var buttonEl = document.querySelector("#save-task");
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


/*
buttonEl.addEventListener("click", function(){
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "NEW TASK";
    tasksToDoEl.appendChild(listItemEl);
});
*/

var creatTaskHandler = function(event){

    event.preventDefault();


    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "NEW TASKS";
    tasksToDoEl.appendChild(listItemEl);
}

//buttonEl.addEventListener("click", creatTaskHandler);
formEl.addEventListener("submit", creatTaskHandler);