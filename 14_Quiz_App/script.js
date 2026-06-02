const questions = [

    {
        question:"What does HTML stand for?",
        answers:[
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Home Tool Markup Language",
            "Hyper Tool Multi Language"
        ],
        correct:0
    },

    {
        question:"Which keyword is used to declare a variable?",
        answers:[
            "int",
            "var",
            "define",
            "string"
        ],
        correct:1
    },

    {
        question:"Which company developed JavaScript?",
        answers:[
            "Google",
            "Microsoft",
            "Netscape",
            "Apple"
        ],
        correct:2
    },

    {
        question:"Which method prints data to console?",
        answers:[
            "print()",
            "echo()",
            "console.log()",
            "show()"
        ],
        correct:2
    }

];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

showQuestion();

function showQuestion(){

    nextBtn.style.display = "none";

    answers.innerHTML = "";

    let q = questions[currentQuestion];

    question.innerText = q.question;

    q.answers.forEach((answer,index)=>{

        let button = document.createElement("button");

        button.innerText = answer;

        button.classList.add("answer-btn");

        button.addEventListener("click",()=>{

            checkAnswer(index,q.correct);

        });

        answers.appendChild(button);

    });

}

function checkAnswer(selected,correct){

    let allButtons =
    document.querySelectorAll(".answer-btn");

    allButtons.forEach((btn,index)=>{

        btn.disabled = true;

        if(index === correct){
            btn.classList.add("correct");
        }

        if(index === selected && selected !== correct){
            btn.classList.add("wrong");
        }

    });

    if(selected === correct){
        score++;
    }

    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click",()=>{

    currentQuestion++;

    if(currentQuestion < questions.length){

        showQuestion();

    }else{

        showResult();

    }

});

function showResult(){

    document.getElementById("quiz").innerHTML = `
        <h2>Your Score: ${score}/${questions.length}</h2>
        <button onclick="location.reload()">
            Play Again
        </button>
    `;
}