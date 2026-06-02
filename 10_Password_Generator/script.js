const password = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

lengthSlider.addEventListener("input", () => {
    lengthValue.innerText = lengthSlider.value;
});

generateBtn.addEventListener("click", generatePassword);

function generatePassword(){

    let chars = "abcdefghijklmnopqrstuvwxyz";

    if(uppercase.checked){
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if(numbers.checked){
        chars += "0123456789";
    }

    if(symbols.checked){
        chars += "!@#$%^&*()_+{}[]<>?";
    }

    let pass = "";

    for(let i=0; i<lengthSlider.value; i++){

        let randomIndex =
        Math.floor(Math.random() * chars.length);

        pass += chars[randomIndex];
    }

    password.value = pass;
}

copyBtn.addEventListener("click", () => {

    if(password.value === ""){
        alert("Generate password first");
        return;
    }

    navigator.clipboard.writeText(password.value);

    copyBtn.innerText = "Copied ✓";

    setTimeout(() => {
        copyBtn.innerText = "Copy";
    }, 2000);

});