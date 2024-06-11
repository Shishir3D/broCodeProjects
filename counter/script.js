let currentNum = document.getElementById("num").innerHTML;
let num = Number(currentNum);

document.querySelector(".increase").addEventListener("click", () => {
    num++;
    document.getElementById("num").innerHTML = num;
});
document.querySelector(".decrease").addEventListener("click", () => {
    num--;
    document.getElementById("num").innerHTML = num;
});