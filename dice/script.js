const button = document.getElementById("btn");
const dice = document.getElementById("number");

button.onclick = function () {
    let randomNum = Math.trunc((Math.random() * 6)+1);
    dice.textContent = randomNum
};