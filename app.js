document.addEventListener("DOMContentLoaded", function () {
    // riscar tarefas ao clicar nelas
    document.getElementById("task-list").addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("completed");
        }
    });

    // excluir tarefas
    document.getElementById("delete-btn").addEventListener("click", function () {
        var completedTasks = document.querySelectorAll(".completed");
        completedTasks.forEach(function (task) {
            task.remove();
        });
    });

    // adicionar tarefas
    document.getElementById("add-task-btn").addEventListener("click", addTask);

    // função para adicionar tarefas
    function addTask() {
        var taskInput = document.getElementById("task-input");
        var taskList = document.getElementById("task-list");

        if (taskInput.value.trim() !== "") {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(taskInput.value));
            taskList.appendChild(li);
            taskInput.value = "";
        }
    }
});
