const hint = document.getElementById("hint");
let randomNum = Math.trunc(Math.random() * 100 + 1);

document.getElementById("btn").onclick = function () {
    let userNum = Number(document.getElementById("input").value);
    console.log(`The random number is : ${randomNum}`);
    if (userNum == randomNum){
        hint.textContent = "Congrats 🎉🎉 You correctly guessed the Number";        
    } else if (userNum < randomNum){
        hint.textContent = "Think of something bigger";
    } else if (userNum > randomNum){
        hint.textContent = "Think of something smaller";
    } else {
        hint.textContent = "Enter a  valid number"
    }
}