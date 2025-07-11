function initTasks() {
    // Initialize task management
    console.log("Tasks module initialized");
}

function loadTasks() {
    return [
        { id: 1, title: "Finish project report", priority: "high", completed: false },
        { id: 2, title: "Client call at 4PM", priority: "medium", completed: false },
        { id: 3, title: "Grocery shopping", priority: "low", completed: false }
    ];
}

function renderTasks() {
    const tasks = loadTasks();
    let html = `
        <div class="card">
            <div class="card-header">
                <div class="card-title">Today's Tasks</div>
                <div class="card-action">View All</div>
            </div>
    `;
    
    tasks.forEach(task => {
        html += `
            <div class="task-item">
                <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
                <div class="task-title">${task.title}</div>
                <div class="task-due priority-${task.priority}">${task.priority}</div>
            </div>
        `;
    });
    
    html += </div>;
    return html;
}