// Get references to the input box and button
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Add event listener to the "Add Task" button
addTaskButton.addEventListener("click", () => {
    addTask(); // Call the addTask function when the button is clicked
});

// Function to add a new task
function addTask() {
    // Check if the task input is not empty
    const taskDescription = taskInput.value.trim();
    if (taskDescription === "") {
        alert("Task cannot be empty!"); // Show an alert if the input is empty
        taskInput.focus(); // Focus back on the text box
        return;
    }

    // Create a new list item for the task
    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    // Create a delete button for the task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    
    // Add event listener to the delete button
    deleteButton.addEventListener("click", () => {
        deleteTask(taskItem); // Call the deleteTask function with the list item as an argument
    });

    // Append the delete button to the task item
    taskItem.appendChild(deleteButton);

    // Append the task item to the task list
    taskList.appendChild(taskItem);

    // Clear the text box
    taskInput.value = "";

    // Focus back on the text box
    taskInput.focus();
}

// Function to delete a task
function deleteTask(taskItem) {
    // Confirm before deleting the task
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
        // Remove the task item from the list
        taskList.removeChild(taskItem);
        
        // Focus back on the text box
        taskInput.focus();
    }
}