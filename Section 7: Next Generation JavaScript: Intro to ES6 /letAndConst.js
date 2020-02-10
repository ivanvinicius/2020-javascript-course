//& Let and const

/** constant values can't be mutated*/
const name = 'Ivan Vinicius Boneti'; 

/**
 * The difference between VAR and LET is:
 * var -> function-scoped
 * let -> blocked-scoped 
 * const -> blocked-scoped
 * 
 * What is it means? Look at the examples below:
 * 
 * in the first one the console.log() gonna work fine because the firstName 
 * was declared in the same block of code, but, in the second one the 
 * the console.log() doesn't gonna work fine because the firstName was 
 * declared in another block of code.
 */
let age = 21; 

/**ES5 */
function driversLicense5(passedTest) {
  if(passedTest){
    // If we do this, we gonna get (variable undefined) without an error
    // console.log(firstName);

    var firstName = 'Alex';
    var yearOfBirth = 1990;
  }

  // console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car');
}
driversLicense5(true);

/**ES6 */
function driversLicense6(passedTest) {
  // let firstName; in this case gonna work fine

  if(passedTest){
    // If we do this, we gonna get an error (variable is not defined)
    // console.log(firstName);

    let firstName = 'Alex';
    const yearOfBirth = 1990;
  }

  // console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car');
}
driversLicense6(true);



/**
 * In the case below the I varible are completely different 
 */
let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i);  
}

console.log(i);

