# .filter()

## This method creats a new array by filtering out elements
It takes in a call back function as a parameter

> Example 2

```js
const ages = [16, 17, 18, 19, 20, 60];

let adults = ages.filter(isAdult);

console.log(adults);

function isAdult(element) {
  return element > 17;
}
```

> Example 2

```js
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
```
