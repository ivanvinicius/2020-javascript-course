var ivan = {
  name: 'Ivan',
  birthYear: 1998,
  calcAge: function(year){
    console.log(year - this.birthYear);
  }
}

var bruna = {
  name: 'Bruna',
  birthYear: 2002,
}

ivan.calcAge(2020);

/** CALL set the THIS variable to bruna and set others arguments */
ivan.calcAge.call(bruna, 2020)

/** 
 * APPLY set the THIS variable to bruna and set others arguments in array 
 */
ivan.calcAge.apply(bruna, [2020])

/** 
 * BIND method set a default argument in a method
 * The argument YEAR could be set to 1900 as default
 * This way we do not need to repeat our code 
 */