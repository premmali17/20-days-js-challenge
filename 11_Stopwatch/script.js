let seconds = 0;
let minutes = 0;
let hours = 0;

let timer;

const display = document.getElementById("display");

document.getElementById("start").addEventListener("click", startWatch);
document.getElementById("stop").addEventListener("click", stopWatch);
document.getElementById("reset").addEventListener("click", resetWatch);

function startWatch(){

    if(timer){
        return;
    }

    timer = setInterval(() => {

        seconds++;

        if(seconds === 60){
            seconds = 0;
            minutes++;
        }

        if(minutes === 60){
            minutes = 0;
            hours++;
        }

        updateDisplay();

    },1000);
}

function stopWatch(){

    clearInterval(timer);
    timer = null;
}

function resetWatch(){

    clearInterval(timer);

    timer = null;

    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();
}

function updateDisplay(){

    let h = String(hours).padStart(2,"0");
    let m = String(minutes).padStart(2,"0");
    let s = String(seconds).padStart(2,"0");

    display.innerText = `${h}:${m}:${s}`;
}