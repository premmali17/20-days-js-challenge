// const api_url="https://zenquotes.io/api/random"

//  async function getquote(url) {

//     const response=await fetch(url);
//     var data= await response.json();
//     console.log(data);
    
//  }

//  getquote(api_url);

// const api_url = "https://api.allorigins.win/get?url=https://zenquotes.io/api/random";


// const quoteone= document.querySelector('#Quote')
// const author= document.querySelector('#author')
// async function getQuote(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     const quote = JSON.parse(data.contents);
//     console.log(quote);
//   quoteone.innerHTML=quote;
    

//   } catch (error) {
//     console.error("Error fetching quote:", error);
//   }
// }

// getQuote(api_url);

const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
  try {
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "Updating...";
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContent;
    authorEl.innerText = "~ " + quoteAuthor;
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
    console.log(data);
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "An error happened, try again later";
    authorEl.innerText = "An error happened";
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
  }
}

getQuote()

btnEl.addEventListener("click", getQuote);