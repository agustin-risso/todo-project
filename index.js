document.addEventListener("DOMContentLoaded", () => {
    // Main button, new to do
    const newTodoButton = document.querySelector(".new-todo-button");
    const todoWrapper = document.querySelector(".todo-wrapper");
    const todo = document.querySelector(".todo");

    newTodoButton.addEventListener("click", () => {
        const todoTitle = prompt("Add your todo title:");
        const todoDescription = prompt("Add a short description for your todo:");

        const newTodo = document.createElement("div");
        newTodo.classList.add("todo");

        // Header
        const newTodoHeader = document.createElement("div");
        newTodoHeader.classList.add("todo-header");

        const newTodoTitle = document.createElement("h3");
        newTodoTitle.textContent = todoTitle.trim();

        const todoDeleteButton = document.createElement("button");
        todoDeleteButton.classList.add("delete-todo-button");
        const deleteButtonIcon = document.createElement("i");
        deleteButtonIcon.classList.add("fa-solid", "fa-xmark");
        todoDeleteButton.appendChild(deleteButtonIcon);

        todoDeleteButton.addEventListener("click", () => {
            newTodo.remove();
        });

        newTodoHeader.appendChild(newTodoTitle);
        newTodoHeader.appendChild(todoDeleteButton);

        const newTodoDescription = document.createElement("p");
        newTodoDescription.textContent = todoDescription.trim();

        // New task section
        const newTaskSection = document.createElement("div");
        newTaskSection.classList.add("todo-new-task");

        const newTaskInput = document.createElement("input");
        newTaskInput.type = "text";
        newTaskInput.placeholder = "New task...";
        newTaskInput.classList.add("new-task-input");

        const newTaskButton = document.createElement("button");
        newTaskButton.classList.add("new-task-button");
        const taskButtonIcon = document.createElement("i");
        taskButtonIcon.classList.add("fa-solid", "fa-plus");
        newTaskButton.appendChild(taskButtonIcon);

        newTaskSection.appendChild(newTaskInput);
        newTaskSection.appendChild(newTaskButton);

        // Content
        const newTodoContent = document.createElement("div");
        newTodoContent.classList.add("todo-content");

        const tasksWrapper = document.createElement("div");
        tasksWrapper.classList.add("tasks-wrapper");

        newTaskButton.addEventListener("click", () => {
            const newTask = document.createElement("label");

            const newTaskCheckBox = document.createElement("input");
            newTaskCheckBox.type = "checkbox";
            
            const newTaskText = document.createElement("span");
            newTaskText.classList.add("task");
            newTaskText.textContent = newTaskInput.value.trim();

            newTaskCheckBox.addEventListener("change", () => {
                newTaskText.classList.toggle("checked", newTaskCheckBox.checked);
            });

            newTaskInput.value = "";

            newTask.appendChild(newTaskCheckBox);
            newTask.appendChild(newTaskText);
            
            tasksWrapper.appendChild(newTask);
        });

        newTaskInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                newTaskButton.click();
            }
        });

        newTodoContent.appendChild(tasksWrapper);

        newTodo.appendChild(newTodoHeader);
        newTodo.appendChild(newTodoDescription);
        newTodo.appendChild(newTaskSection);
        newTodo.appendChild(newTodoContent);

        todoWrapper.appendChild(newTodo)
    });

});