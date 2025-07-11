function initFinance() {
    // Initialize finance module
    console.log("Finance module initialized");
}

function loadTransactions() {
    return [
        { merchant: "Amazon", amount: -45.67, type: "expense" },
        { merchant: "Salary", amount: 3850.00, type: "income" },
        { merchant: "Starbucks", amount: -5.75, type: "expense" }
    ];
}

function renderFinance() {
    const transactions = loadTransactions();
    let html = `
        <div class="card">
            <div class="card-header">
                <div class="card-title">Recent Transactions</div>
                <div class="card-action">View All</div>
            </div>
    `;
    
    transactions.forEach(transaction => {
        html += `
            <div class="transaction">
                <span>${transaction.merchant}</span>
                <span class="transaction-amount ${transaction.type}">
                    ${transaction.type === 'income' ? '+' : '-'}$${Math.abs(transaction.amount).toFixed(2)}
                </span>
            </div>
        `;
    });
    
    html += </div>;
    return html;
}

function getWeeklySpending() {
    const transactions = loadTransactions();
    const expenses = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + Math.abs(t.amount), 0);
    
    return expenses.toFixed(2);
}