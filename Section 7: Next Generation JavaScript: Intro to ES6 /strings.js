//& Strings

let firstName = 'Alex';
let lastName = 'Taco';
const yearOfBirht = 1990;

function calcAge(year){
  return 2020 - year;
}

/**template literals */
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirht}. Today he is ${calcAge(yearOfBirht)} years old`);

const name = `${firstName} ${lastName}`;
console.log(name.startsWith('A'));
console.log(name.endsWith('o'));
console.log(name.includes(' '));
console.log(name.repeat(5));