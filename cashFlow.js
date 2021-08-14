
let cashFlow = {
    incomes: [1000, 100],
    expenses: [300, 50, 30, 1250],

    sum: (array) => {
        let total = 0;
        for(let value of array) {
            total += value;
        }
        return total;
    },

    calculateCashFlow: () => {
        let totalIncomes = cashFlow.sum(cashFlow.incomes);
        console.log(totalIncomes);
        let totalExpenses = cashFlow.sum(cashFlow.expenses);
        console.log(totalExpenses);
        let balance = totalIncomes - totalExpenses;
        if(balance >= 0) {
            console.log(`Saldo Positivo: R$${balance.toFixed(2)}`);
        } else {
            console.log(`Saldo Negativo: R$${balance.toFixed(2)}`);
        }
        return balance;
    }
}


cashFlow.calculateCashFlow();



