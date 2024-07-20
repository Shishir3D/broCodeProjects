const button = document.getElementById("btn");
const dice = document.getElementById("number");
const image = document.getElementById("diceimage");

button.onclick = function () {
    let randomNum = Math.trunc((Math.random() * 6)+1);
    dice.textContent = randomNum

    image.src= `../images/dice${randomNum}.png`
};

