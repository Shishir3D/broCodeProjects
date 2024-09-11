let numbers = [1, 2, 3, 4, 5];

let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(`Even Nums : ${evenNums}`);
console.log(`Odd Nums : ${oddNums}`);

// displays even numbers by using .filter()
function isEven(element) {
  return element % 2 === 0;
}

// displays odd numbers by using .filter()
function isOdd(element) {
  return element % 2 !== 0;
}
