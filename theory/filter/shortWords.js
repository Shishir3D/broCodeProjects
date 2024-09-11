const words = ["apple", "banana", "grapes", "pomegranate", "coconut"];

let shortWords = words.filter(getShortWords);
let longWords = words.filter(getLongWords);

console.log(shortWords);
console.log(longWords);

function getShortWords(elements) {
  return elements.length < 7;
}

function getLongWords(elements) {
  return elements.length > 6;
}
