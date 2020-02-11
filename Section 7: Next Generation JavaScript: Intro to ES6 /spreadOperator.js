//& Spread Operator

function addFourAges(a, b, c, d) {
  return a + b + c + d; 
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);







var ages = [18, 30, 12, 21];

/**ES5 */
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

/**ES6 */
const sum3  = addFourAges(...ages);
console.log(sum3);


const familySmith = ['John', 'Jane'];
const familyMiller = ['Mike', 'Ann'];
const bigFamily = [...familySmith, 'Bob',...familyMiller];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
console.log(all);

Array.from(all).forEach(el => el.style.color = 'purple');