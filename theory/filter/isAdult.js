const ages = [14, 16, 17, 18, 19, 20, 60];

let adults = ages.filter(isAdult);
let children = ages.filter(isChild);

console.log(adults);
console.log(children);

function isAdult(element) {
  return element > 17;
}
function isChild(element) {
  return element < 17;
}
