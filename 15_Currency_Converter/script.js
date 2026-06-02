const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const result = document.getElementById("result");

document
.getElementById("convertBtn")
.addEventListener("click", convertCurrency);

async function convertCurrency(){

    let money = amount.value;

    if(money === ""){
        alert("Enter amount");
        return;
    }

    let from = fromCurrency.value;
    let to = toCurrency.value;

    try{

        let response = await fetch(
            `https://open.er-api.com/v6/latest/${from}`
        );

        let data = await response.json();

        let rate = data.rates[to];

        let convertedAmount =
        (money * rate).toFixed(2);

        result.innerText =
        `${money} ${from} = ${convertedAmount} ${to}`;

    }

    catch(error){

        result.innerText =
        "Something went wrong";

    }
}