let taskList = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText) {
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false
        };
        taskList.push(task);
        taskInput.value = '';
        renderTasks();
    }
}

function editTask(id) {
    const newTaskText = prompt('Edit your task:');
    if (newTaskText !== null) {
        const task = taskList.find(t => t.id === id);
        if (task) {
            task.text = newTaskText;
            renderTasks();
        }
    }
}

function deleteTask(id) {
    taskList = taskList.filter(task => task.id !== id);
    renderTasks();
}

function toggleTaskCompletion(id) {
    const task = taskList.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}

function renderTasks() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';
    taskList.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.className = task.completed ? 'completed' : '';
        taskItem.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button class="complete" onclick="toggleTaskCompletion(${task.id})">✔️</button>
                <button class="edit" onclick="editTask(${task.id})">✏️</button>
                <button class="delete" onclick="deleteTask(${task.id})">❌</button>
            </div>
        `;
        taskListElement.appendChild(taskItem);
    });
}