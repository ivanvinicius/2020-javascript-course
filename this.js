/**
 * Regular function call: The THIS keyword poitns at the global
 * object
 */
console.log(this);

//function declaration
function calculateAge(){
 console.log(this);
}

//function expression
var test = function(){
  console.log(this);
}

calculateAge();
test();


/**
 * Method call: The THIS variable points to the object that is calling
 * the method
 */
var ivan = {
  firstName: 'Ivan',
  insertLastName: function(){
    this.lastName = 'Vinicius Boneti';
    
    console.log(this);

    //A regular function that get gloabal scope like the others
    function calcAge(){
      console.log(this);
    }
    
    calcAge();
  }
}

ivan.insertLastName();


console.log('BORROWING METHODS');
/** 
 * BORROWING METHODS 
 * The THIS keyword is not assigned a value until a function where it is
 * defined is called
 */

jonh = {
  name: 'jonh',
  birthYear: 1999,
  calcAge: function(){
    console.log(2020 - this.birthYear);
    console.log(this);
  }
}

mark = {
  name: 'mark',
  birthYear: 1998
}

mark.calcAge = jonh.calcAge;
jonh.calcAge();
mark.calcAge();