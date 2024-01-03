// Get references to HTML elements
const todoList = document.getElementById("todo-list");
const newTaskInput = document.getElementById("new-task");

// Function to add a new task
function addTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText !== "") {
        // Create a new list item
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="remove-btn" onclick="removeTask(this)">Remove</button>
        `;

        // Append the list item to the todoList
        todoList.appendChild(listItem);

        // Clear the input field
        newTaskInput.value = "";
    }
}

// Function to remove a task
function removeTask(button) {
    const listItem = button.parentElement;
    todoList.removeChild(listItem);
}
