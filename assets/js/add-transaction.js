const openButton = document.getElementById('add-transaction-btn');
const transactionWindow = document.getElementById('add-transaction');
let balance = 0;

let isOpen = false;

openButton.addEventListener('click', () => {
    isOpen = !isOpen; // Переключаем состояние
    transactionWindow.style.display = isOpen ? "block" : "none"; // Показываем или скрываем окно
});

document.getElementById('closeButton').addEventListener('click', () => {
    isOpen = false;
    transactionWindow.style.display = "none"; // Скрываем окно
});

document.querySelector('.add-transaction__form').addEventListener('submit', (event) => {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const transactionName = document.getElementById('transaction-name').value;
    if (isNaN(amount)) {
        alert("Пожалуйста, введите корректную сумму!");
        return;
    }
    

    console.log(`Сумма: ${amount}, Название Транзакции: ${transactionName}`);

    const dashBoardItem = document.createElement("div");
    dashBoardItem.className = 'financial-dashboard__transaction-item';
    document.getElementById('financial-dashboard__transactions').appendChild(dashBoardItem);

    const dashBoardItemName = document.createElement("div");
    dashBoardItemName.className = 'financial-dashboard__transaction-description';
    dashBoardItem.appendChild(dashBoardItemName);
    dashBoardItemName.appendChild(document.createTextNode(transactionName))

    const dashBoardItemSumm = document.createElement("div");
    dashBoardItemSumm.className = 'financial-dashboard__transaction-description';
    dashBoardItem.appendChild(dashBoardItemSumm);
    let plusOrMinus = (amount < 0) ? "-" : "+";

    if (amount < 0)
        dashBoardItemSumm.style.color = "#EF4444"
    else if (amount > 0)
        dashBoardItemSumm.style.color = "#22C55E"
    else
        dashBoardItemSumm.style.color = "#F3F4F6"
       
    let summText = plusOrMinus + " ₽ " + (Math.abs(amount)).toFixed(2);
    dashBoardItemSumm.appendChild(document.createTextNode(summText));

    balance += amount;

    document.querySelector('.balance').textContent = balance.toFixed(2);
    
    transactionWindow.style.display = "none";
    isOpen = false;
    document.getElementById('amount').value = '';
    document.getElementById('transaction-name').value = '';
});