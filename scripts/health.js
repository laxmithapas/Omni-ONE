function initHealth() {
    // Initialize health module
    console.log("Health module initialized");
}

function getHealthData() {
    return {
        steps: { current: 8542, goal: 10000 },
        sleep: "6h 42m",
        water: { current: 5, goal: 8 }
    };
}

function renderHealth() {
    const health = getHealthData();
    return `
        <div class="card">
            <div class="card-header">
                <div class="card-title">Health Summary</div>
                <div class="card-action">Details</div>
            </div>
            <div class="health-metric">
                <span>Steps</span>
                <span class="metric-value">${health.steps.current}/${health.steps.goal}</span>
            </div>
            <div class="health-metric">
                <span>Sleep</span>
                <span class="metric-value">${health.sleep}</span>
            </div>
            <div class="health-metric">
                <span>Water</span>
                <span class="metric-value">${health.water.current}/${health.water.goal} glasses</span>
            </div>
        </div>
    `;
}