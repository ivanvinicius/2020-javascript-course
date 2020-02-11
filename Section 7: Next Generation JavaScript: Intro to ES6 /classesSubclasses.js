//& Classes and Subclasses

/**ES5 */
/**Creating a function contructor */
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

/**Creating a new method to the function constructor Person5 */
Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}

/**Creating an inheritance of Person to Athlete */
var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  /**
   * Calling the Person5 constructor and
   * setting the THIS variable to this constructor 
   */
  Person5.call(this, name, yearOfBirth, job);

  this.olympicGames = olympicGames;
  this.medals = medals;
}

/**
 * Creating the correct prototype chain 
 * sharing the prototype chain from Person5 
 */
Athlete5.prototype = Object.create(Person5.prototype);

/**Creating a new method to the function constructor Athlete5 */
Athlete5.prototype.wonMedal = function(){
  this.medals++;
  console.log(this.medals);
}

/**Creating a new Athlete */
var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

/**Calling the methods inherited from Person5 */
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();










/**ES6 */
class Person6 {
  /** Creating the constructor of class */
  constructor(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  /** Class methods */
  calculateAge() {
    const age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}

/** Creating a new class and extends properties from Person6  */
class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals){
    /** Declaring inheritance of properties from Person6 */
    super(name, yearOfBirth, job);

    /** Creting new properties */
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  /** Creating new methods */
  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

/** Creating a new instace of object Athlete6 */
var mike = new Athlete6('Mike', 1998, 'runner', 4, 18);

/** Calling the methods from the class */
mike.calculateAge();
mike.wonMedal();