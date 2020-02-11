//& Classes

/**  
 * NOTE: Classes are the same thing that function constructor, but,
 * They are written in a different way to facilitate the understanding
 */

/**ES5 */
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher')






/**ES6 */
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getUTCFullYear() - this.yearOfBirth;
    console.log(age);
  }

  /**
   * Static methods in classes can't be inherited by the class instace,
   *  It's simply attached to the classes 
   */
  static greeting() {
    this.yearOfBirth = 1800;
  }
}

const john6 = new Person6('John', 1990, 'teacher');