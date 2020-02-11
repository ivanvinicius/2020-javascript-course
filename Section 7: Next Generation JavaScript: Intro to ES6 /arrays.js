//& Arrays

const boxes = document.querySelectorAll('.box');

/**ES5 this method return a nodeList */
var boxesArray5 = Array.prototype.slice.call(boxes);
boxesArray5.forEach(function(el) {
  // el.style.backgroundColor = 'dodgerblue';
});

/**ES6 Array.from transforma a nodeList in array automatically*/
const boxesArray6 = Array.from(boxes);
boxesArray6.forEach( el => el.style.backgroundColor = 'red');









/** HOW TO USE 'BREAK' or 'CONTINUE' statement */

/**ES5 */
for (let i = 0; i < boxesArray5.length; i++) {
  if(boxesArray5[i].className === 'box blue') {
    continue;
    // break
  }
  
  boxesArray5[i].textContent = 'I changed to blue1';
}

/**ES6 using FOR OF loop*/
for (const el of boxesArray6){
  if(el.className.includes('blue')) {
    continue;
  }

  el.textContent = 'I changed to blue2';
}







/**ES5 find an element in array */
var ages1 = [12, 17, 8, 21, 14, 31];

var full = ages1.map(function(el) {  
  return el >= 18;
})

console.log(full.indexOf(true));
console.log(ages1[full.indexOf(true)]);


/**ES6 find an element in array */
var ages2 = [12, 17, 8, 21, 14, 11];

console.log(ages2.findIndex(el => el >= 18));
console.log(ages2.find(el => el >= 18));
