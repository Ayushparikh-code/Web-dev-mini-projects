// DOM Elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const todoList = document.getElementById('todoList');
const clearAllBtn = document.getElementById('clearAllBtn');
const pendingNumber = document.querySelector('.pendingNumber');
const totalTasks = document.querySelector('.totalTasks');
const completedTasks = document.querySelector('.completedTasks');
const filters = document.querySelectorAll('.filter');
const searchInput = document.getElementById('searchInput');
const prioritySelect = document.getElementById('prioritySelect');
const dueDateInput = document.getElementById('dueDateInput');
const exportBtn = document.getElementById('exportBtn');
const importInput = document.getElementById('importInput');
const importBtn = document.getElementById('importBtn');

// Modal Elements
const taskModal = document.getElementById('taskModal');
const editTaskForm = document.getElementById('editTaskForm');
const editTaskInput = document.getElementById('editTaskInput');
const editPrioritySelect = document.getElementById('editPrioritySelect');
const editDueDateInput = document.getElementById('editDueDateInput');
const closeBtn = document.querySelector('.close');

// Global variables
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';
let editMode = false;
let editTaskId = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    showTasks();
    updateStats();
    
    // Set focus on input field
    taskInput.focus();
    
    // Set min date for due date input to today
    const today = new Date().toISOString().split('T')[0];
    dueDateInput.min = today;
    editDueDateInput.min = today;
});

// Event Listeners
taskInput.addEventListener('keyup', () => {
    const userTask = taskInput.value.trim();
    if(userTask) {
        addTaskBtn.classList.add('active');
    } else {
        addTaskBtn.classList.remove('active');
    }
});

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter' && addTaskBtn.classList.contains('active')) {
        addTask();
    }
});

clearAllBtn.addEventListener('click', clearAllTasks);
exportBtn.addEventListener('click', exportTasks);
importBtn.addEventListener('click', () => importInput.click());
importInput.addEventListener('change', importTasks);

filters.forEach(filter => {
    filter.addEventListener('click', () => {
        document.querySelector('.filter.active').classList.remove('active');
        filter.classList.add('active');
        currentFilter = filter.dataset.filter;
        showTasks();
    });
});

searchInput.addEventListener('input', showTasks);

// Modal event listeners
closeBtn.addEventListener('click', () => {
    taskModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === taskModal) {
        taskModal.style.display = 'none';
    }
});

editTaskForm.addEventListener('submit', updateTask);

// Functions
function addTask() {
    const userTask = taskInput.value.trim();
    const priority = prioritySelect.value;
    const dueDate = dueDateInput.value;
    
    if(!userTask) return;
    
    if(editMode) {
        // Update existing task
        tasks = tasks.map(task => 
            task.id === editTaskId ? {...task, text: userTask} : task
        );
        editMode = false;
        editTaskId = null;
        addTaskBtn.innerHTML = '<i class="fas fa-plus"></i> Add';
    } else {
        // Add new task
        const task = {
            id: Date.now(),
            text: userTask,
            completed: false,
            timestamp: new Date().toISOString(),
            priority: priority,
            dueDate: dueDate || null,
            category: 'general'
        };
        tasks.push(task);
    }
    
    saveTasks();
    showTasks();
    updateStats();
    
    // Reset input fields
    taskInput.value = '';
    prioritySelect.value = 'medium';
    dueDateInput.value = '';
    addTaskBtn.classList.remove('active');
    taskInput.focus();
}

function showTasks() {
    const searchTerm = searchInput.value.toLowerCase();
    
    // Filter tasks based on current filter and search term
    let filteredTasks = tasks.filter(task => {
        const matchesSearch = task.text.toLowerCase().includes(searchTerm);
        
        if(currentFilter === 'active') {
            return !task.completed && matchesSearch;
        } else if(currentFilter === 'completed') {
            return task.completed && matchesSearch;
        }
        return matchesSearch;
    });
    
    if(filteredTasks.length === 0) {
        todoList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-clipboard-list"></i>
                <p>${searchTerm ? 'No matching tasks found' : 'No tasks found. Add a new task!'}</p>
            </div>
        `;
        return;
    }
    
    let newLiTag = '';
    filteredTasks.forEach(task => {
        // Format due date if exists
        let dueDateDisplay = '';
        if (task.dueDate) {
            const dueDate = new Date(task.dueDate);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            // Check if due date is today or in the past
            if (dueDate < today) {
                dueDateDisplay = `<span class="due-date overdue"><i class="fas fa-exclamation-circle"></i> ${dueDate.toLocaleDateString()}</span>`;
            } else if (dueDate.toDateString() === today.toDateString()) {
                dueDateDisplay = `<span class="due-date today"><i class="fas fa-calendar-day"></i> Today</span>`;
            } else {
                dueDateDisplay = `<span class="due-date"><i class="fas fa-calendar"></i> ${dueDate.toLocaleDateString()}</span>`;
            }
        }
        
        // Priority indicator
        let priorityDisplay = '';
        if (task.priority) {
            const priorityText = task.priority.charAt(0).toUpperCase() + task.priority.slice(1);
            priorityDisplay = `<span class="priority priority-${task.priority}"><i class="fas fa-flag"></i> ${priorityText}</span>`;
        }
        
        newLiTag += `
            <li class="${task.completed ? 'completed' : ''} task-priority-${task.priority}" data-id="${task.id}">
                <div class="task-content">
                    <div class="task-text">${task.text}</div>
                    <div class="task-meta">
                        ${priorityDisplay}
                        ${dueDateDisplay}
                    </div>
                </div>
                <div class="task-actions">
                    <button class="complete-btn" title="${task.completed ? 'Mark as incomplete' : 'Mark as complete'}">
                        <i class="fas fa-${task.completed ? 'undo' : 'check'}"></i>
                    </button>
                    <button class="edit-btn" title="Edit task">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="delete-btn" title="Delete task">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </li>
        `;
    });
    
    todoList.innerHTML = newLiTag;
    
    // Add event listeners to the new buttons
    document.querySelectorAll('.complete-btn').forEach(btn => {
        btn.addEventListener('click', toggleComplete);
    });
    
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', openEditModal);
    });
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', deleteTask);
    });
}

function toggleComplete(e) {
    const taskId = parseInt(e.target.closest('li').dataset.id);
    tasks = tasks.map(task => 
        task.id === taskId ? {...task, completed: !task.completed} : task
    );
    saveTasks();
    showTasks();
    updateStats();
}

function openEditModal(e) {
    const taskItem = e.target.closest('li');
    const taskId = parseInt(taskItem.dataset.id);
    const task = tasks.find(t => t.id === taskId);
    
    if(task) {
        editTaskId = taskId;
        editTaskInput.value = task.text;
        editPrioritySelect.value = task.priority;
        editDueDateInput.value = task.dueDate || '';
        
        taskModal.style.display = 'block';
        editTaskInput.focus();
    }
}

function updateTask(e) {
    e.preventDefault();
    
    const updatedTask = {
        text: editTaskInput.value.trim(),
        priority: editPrioritySelect.value,
        dueDate: editDueDateInput.value || null
    };
    
    if(!updatedTask.text) return;
    
    tasks = tasks.map(task => 
        task.id === editTaskId ? {...task, ...updatedTask} : task
    );
    
    saveTasks();
    showTasks();
    updateStats();
    
    // Close modal
    taskModal.style.display = 'none';
}

function deleteTask(e) {
    const taskId = parseInt(e.target.closest('li').dataset.id);
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks();
    showTasks();
    updateStats();
}

function clearAllTasks() {
    if(tasks.length === 0) return;
    
    if(confirm('Are you sure you want to delete all tasks?')) {
        tasks = [];
        saveTasks();
        showTasks();
        updateStats();
    }
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;
    
    totalTasks.textContent = total;
    completedTasks.textContent = completed;
    pendingNumber.textContent = pending;
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Export tasks functionality
function exportTasks() {
    if (tasks.length === 0) {
        alert('No tasks to export!');
        return;
    }
    
    const dataStr = JSON.stringify(tasks, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'todo-tasks.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// Import tasks functionality
function importTasks(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedTasks = JSON.parse(e.target.result);
            if (Array.isArray(importedTasks)) {
                // Merge imported tasks with existing tasks
                const combinedTasks = [...tasks, ...importedTasks];
                tasks = combinedTasks;
                saveTasks();
                showTasks();
                updateStats();
                alert('Tasks imported successfully!');
            } else {
                alert('Invalid file format. Please import a valid JSON file.');
            }
        } catch (error) {
            alert('Error parsing JSON file. Please check the file format.');
        }
    };
    reader.readAsText(file);
    
    // Reset input to allow importing the same file again
    importInput.value = '';
}