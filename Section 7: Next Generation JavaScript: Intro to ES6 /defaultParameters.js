//& Default Parameters

/**ES5 overriding default parameters*/
function SmithPerson(firstName, yearOfBirth, lastName, nationality){
  lastName === undefined ? lastName = 'Smith' : lastName = lastName;
  nationality === undefined ? nationality = 'American' : nationality = nationality;

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson('John', 1990)
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish')






/**ES6 overriding default parameters*/
function MillerPerson(firstName, yearOfBirth, lastName = 'Miller', nationality = 'American') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var mike = new MillerPerson('Mike', 1990)
var jason = new MillerPerson('Jason', 2003, 'Mars', 'Irish');