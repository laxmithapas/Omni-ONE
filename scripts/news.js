function initNews() {
    // Initialize news module
    console.log("News module initialized");
}

function loadNews() {
    return [
        { 
            title: "Tech Giant Announces Breakthrough in AI", 
            source: "Tech Today", 
            time: "2 hours ago" 
        },
        { 
            title: "Market Rally Continues for Third Week", 
            source: "Financial Times", 
            time: "4 hours ago" 
        }
    ];
}

function renderNews() {
    const newsItems = loadNews();
    let html = `
        <div class="card">
            <div class="card-header">
                <div class="card-title">Top News</div>
                <div class="card-action">More</div>
            </div>
    `;
    
    newsItems.forEach(news => {
        html += `
            <div class="news-item">
                <div class="news-title">${news.title}</div>
                <div class="news-source">${news.source} • ${news.time}</div>
            </div>
        `;
    });
    
    html += </div>;
    return html;
}