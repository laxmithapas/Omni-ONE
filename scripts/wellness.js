function initWellness() {
    // Initialize wellness module
    console.log("Wellness module initialized");
}

function getWellnessTip() {
    const tips = [
        "Take a 5-minute mindfulness break. Focus on your breathing.",
        "Stand up and stretch for 2 minutes every hour.",
        "Write down three things you're grateful for today.",
        "Drink a glass of water to stay hydrated."
    ];
    
    return tips[Math.floor(Math.random() * tips.length)];
}

function renderWellness() {
    return `
        <div class="card">
            <div class="card-header">
                <div class="card-title">Wellness Tip</div>
                <div class="card-action">More Tips</div>
            </div>
            <div class="wellness-tip">
                <p>${getWellnessTip()}</p>
            </div>
        </div>
    `;
}