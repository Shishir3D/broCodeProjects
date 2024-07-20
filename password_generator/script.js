function generatePassword(passLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    const maxLength = 23;
    let randomPassword = ""

    for (let i = 0; i < passLength; i++){
        let randomOption = Math.floor((Math.random() * 4));
        let randomLetter = Math.floor((Math.random() * 26));
        let randomNumber = Math.floor((Math.random() * 10));

        if (randomOption == 0){
            randomPassword = randomPassword + generateLowercase(randomLetter);
        } else if (randomOption == 1 && includeUpperCase != false) {
            randomPassword = randomPassword + generateUpperCase(randomLetter);
        } else if (randomOption == 2 && includeNumbers != false) {
            randomPassword = randomPassword + generateNumber(randomNumber);
        }   else if (randomOption == 3  && includeSymbols != false) {
                randomPassword = randomPassword + generateSymbol(randomNumber);
        } else {
            i = i - 1;
        }        
    }

    document.getElementById("password-slider-length").innerHTML = passLength;
    document.getElementById("randomPassword").innerHTML = randomPassword;
    return randomPassword;
}

function generateLowercase(randomLetter){
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    return alphabets[randomLetter]
}
function generateUpperCase(randomLetter){
    let alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return alphabets[randomLetter]
}
function generateNumber(randomNumber){
    return randomNumber;
}
function generateSymbol(randomNumber){
    let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '.']
    return symbols[randomNumber]
}

let passLength = document.getElementById("myRange").value;
let includeLowerCase = document.getElementById("lower").checked;
let includeUpperCase = document.getElementById("upper").checked;
let includeNumbers = document.getElementById("nums").checked;
let includeSymbols = document.getElementById("symbols").checked;

let  randomPassword = generatePassword(passLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols)
console.log(randomPassword);

