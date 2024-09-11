const prices = [5, 10, 15, 20, 25, 30];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(previous, next) {
  return previous + next;
}
