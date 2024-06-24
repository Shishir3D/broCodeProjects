const textbox = document.getElementById("textbox");
const toCelcius = document.getElementById("toCelcius");
const toFarenheit = document.getElementById("toFarenheit");
const result = document.getElementById("result");
const resultbox = document.getElementById("resultbox");
const closee = document.getElementById("close");

closee.addEventListener("click", () => {
    resultbox.style.display = "none";
});

function convert(){
    if (toCelcius.checked){
        let farenheitValue = Number(textbox.value);
        let celciusValue = (farenheitValue - 32) * (5 / 9);

        resultbox.style.display = "flex";
        result.innerHTML = celciusValue.toFixed(1) + " °C";
    }
    else if (toFarenheit.checked){
        let celciusValue = Number(textbox.value);
        let farenheitValue = (celciusValue * (9/5)) + 32;

        resultbox.style.display = "flex";
        result.innerHTML = farenheitValue.toFixed(1) + " °F";
    }
    else{
        resultbox.style.display = "flex";
        result.innerHTML = "Select Something";
    }
}
