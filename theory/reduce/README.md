# .reduce()

## It reduces the element of an array to a single value


> Example 1

```js
const prices = [5, 10, 15, 20, 25, 30];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(previous, next) {
  return previous + next;
}
```
