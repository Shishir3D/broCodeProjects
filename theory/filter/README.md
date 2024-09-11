# .filter()

## This method creats a new array by filtering out elements

> Example

```js
const ages = [16, 17, 18, 19, 20, 60];

let adults = ages.filter(isAdult);

console.log(adults);

function isAdult(element) {
  return element > 17;
}
```
