/**
 * NOTES
 * 
 * Every Javascript object has a prototype property, which makes inheritance 
 * possible in Javascript
 * 
 * The prototype property of an object is where we put methods and propeties 
 * that we want other objects to inherit
 * 
 * The Constructor's prototype is NOT the prototype of the Constructor itself, 
 * it's the prototype of all instances that are created through it
 * 
 * When a certain method or property is called, the search starts in the object
 * itself, and if it cannot be found, the search moves on to the object's prototype.
 * This continues until the methods is found: prototype chain
 * 
 */

/**
 * FUNCTION CONSTRUCTOR 
 *  
 * In Javascript convention constructors are created with initial capital letter
 */
var Person = function(name, yearOfBirth, job){
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

/**
 * Adding new methods or properties inside the function constructor . 
 * It's called INHERITANCE
*/
Person.prototype.calculateAge = function(){
  console.log(2020 - this.yearOfBirth);
}

Person.prototype.lastName = function(lastName){
  this.lastName = lastName;
}

Person.prototype.middleName = 'Vinicius'

/**
 * Creating new person object
 *
 * The NEW operador specifies that a new context(IVAN) needs to be created, this way
 * the THIS variable will not point to GLOBAL context. To check it out, run the commads 
 * below.
 * 
 * console.log(Person); 
 * console.log(ivan); 
 */
var ivan = new Person('Ivan', 1998, 'programmer');

var mark = new Person('Mark', 1996, 'software engineer');

ivan.lastName('Boneti')
mark.lastName('Smith');

console.log(ivan);
console.log(mark);

/** To access the prototype of object you can use Person.prototype */
 console.log(Person.prototype);

 /** To compare prototype properties */
 console.log(ivan.__proto__ === Person.prototype);

 /** To access properties of function constructor */
 console.log(ivan.hasOwnProperty('job')); //returns true because it's part of function constructor
 console.log(ivan.hasOwnProperty('middleName')); // returns false because lastName is inheritance
 console.log(ivan.hasOwnProperty('lastName')); // returns true because THIS variable was declared

 /** To discover if and object is an instace of a function constructor */
 console.log(ivan instanceof Person);

 /** How to access hide object informations */
 var x = [1, 2, 3];
 console.info(x);