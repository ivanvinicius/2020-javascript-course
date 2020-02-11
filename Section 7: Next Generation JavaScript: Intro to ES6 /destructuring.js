//& Destructuring

/**ES5 */
var ivan5 = ['Ivan', 21];
var name5 = ivan5[0];
var age5 = ivan5[1];

/**ES6 */
const [name, age] = ['Carlos', 21];
// console.log(name);
// console.log(age);

const obj = {
  firstName: 'Bruna',
  lastName: 'Lima'
}

const { firstName, lastName} = obj;
// console.log(firstName);
// console.log(lastName);

const { firstName: a, lastName: b } = obj;
// console.log(a);
// console.log(b);



function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;

  return [age, 65 - age];
}

const [ageOf, retirement] = calcAgeRetirement(1990);
console.log(ageOf);
console.log(retirement);
