const display = document.getElementById("display");
const minutesInput = document.getElementById("minutesInput");

let timer;

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

function startTimer(){

    clearInterval(timer);

    let totalSeconds = minutesInput.value * 60;

    if(totalSeconds <= 0){
        alert("Enter valid minutes");
        return;
    }

    timer = setInterval(() => {

        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        display.innerText =
            String(minutes).padStart(2,"0")
            + ":" +
            String(seconds).padStart(2,"0");

        totalSeconds--;

        if(totalSeconds < 0){

            clearInterval(timer);

            display.innerText = "Time Up!";

            alert("⏰ Countdown Finished");
        }

    },1000);
}

function resetTimer(){

    clearInterval(timer);

    display.innerText = "00:00";

    minutesInput.value = "";
}