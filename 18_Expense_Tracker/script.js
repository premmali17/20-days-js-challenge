const form = document.getElementById("expenseForm");
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");

const expenseList =
document.getElementById("expenseList");

const balance =
document.getElementById("balance");

let expenses =
JSON.parse(localStorage.getItem("expenses")) || [];

showExpenses();

form.addEventListener("submit", function(e){

    e.preventDefault();

    const expense = {

        title: titleInput.value,
        amount: Number(amountInput.value)

    };

    expenses.push(expense);

    saveData();

    titleInput.value = "";
    amountInput.value = "";

    showExpenses();

});

function showExpenses(){

    expenseList.innerHTML = "";

    let total = 0;

    expenses.forEach((expense,index)=>{

        total += expense.amount;

        const div =
        document.createElement("div");

        div.classList.add("expense");

        div.innerHTML = `
            <span>
                ${expense.title}
            </span>

            <span>
                ₹${expense.amount}
            </span>

            <button
                class="delete-btn"
                onclick="deleteExpense(${index})"
            >
                Delete
            </button>
        `;

        expenseList.appendChild(div);

    });

    balance.innerText = `₹${total}`;
}

function deleteExpense(index){

    expenses.splice(index,1);

    saveData();

    showExpenses();
}

function saveData(){

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );
}