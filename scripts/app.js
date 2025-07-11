// Initialize all modules and render dashboard
document.addEventListener('DOMContentLoaded', () => {
    loadNavigation();
    
    // Initialize modules
    initTasks();
    initCalendar();
    initFinance();
    initHealth();
    initNews();
    initWeather();
    initWellness();
    initAIAssistant();
    
    // Set up event listeners
    setupCommandInput();
    
    // Render initial dashboard
    renderDashboard();
});

function renderDashboard() {
    const dashboard = document.getElementById('dashboard');
    dashboard.innerHTML = `
        <div class="dashboard">
            ${renderTasks()}
            ${renderCalendar()}
            ${renderWeather()}
            ${renderHealth()}
            ${renderNews()}
            ${renderFinance()}
            ${renderWellness()}
        </div>
        <div class="ai-response">
            <p><strong>AI Assistant:</strong> Good morning! You have ${loadTasks().length} tasks today. The weather will be ${getWeatherData().condition}.</p>
        </div>
    `;
}

// Navigation between sections
function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            document.querySelectorAll('.nav-link').forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all sections
            document.querySelectorAll('.dashboard-section').forEach(section => {
                section.classList.add('hidden');
            });
            
            // Show selected section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.remove('hidden');
            
            // Special case for dashboard
            if (sectionId === 'dashboard') {
                renderDashboard();
            }
        });
    });
}