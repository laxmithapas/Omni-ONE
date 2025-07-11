// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
    // Load navigation
    loadNavigation();
    
    // Initialize modules
    initTasks();
    initCalendar();
    initFinance();
    initHealth();
    initNews();
    initWeather();
    initAIAssistant();
    
    // Set up event listeners
    setupCommandInput();
});

function loadNavigation() {
    const navItems = [
        { icon: 'home', text: 'Dashboard', section: 'dashboard' },
        { icon: 'tasks', text: 'Tasks', section: 'tasks' },
        { icon: 'calendar-alt', text: 'Calendar', section: 'calendar' },
        { icon: 'heartbeat', text: 'Health', section: 'health' },
        { icon: 'wallet', text: 'Finance', section: 'finance' },
        { icon: 'newspaper', text: 'News', section: 'news' },
        { icon: 'sticky-note', text: 'Notes', section: 'notes' },
        { icon: 'spa', text: 'Wellness', section: 'wellness' }
    ];
    
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = `
        <ul class="nav-menu">
            ${navItems.map(item => `
                <li class="nav-item">
                    <a href="#" class="nav-link" data-section="${item.section}">
                        <i class="fas fa-${item.icon}"></i>
                        <span>${item.text}</span>
                    </a>
                </li>
            `).join('')}
        </ul>
    `;
}

function setupCommandInput() {
    const commandInput = document.querySelector('.command-input');
    commandInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const command = e.target.value.trim();
            if (command) {
                processAICommand(command);
                e.target.value = '';
            }
        }
    });
}