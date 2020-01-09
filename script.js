/**FUNCTION STATEMENTS AND EXPRESSIONS */

//function declaration
function escrevaNome(nome = 'ivan'){
  //code
}

//function expression
var whatDoYouDo = function(nome = 'ivan'){
  switch(name){
    case 'ivan' :
      return true;
    default : 
      return false;
  }
}

/**
 * the diference between these two function is
 * the first one dont need to return a reponse immediately as the second one.
 * And expression always produce a return value
 */


 /**ARRAYS */
 var names = ['ivan', 'boneti'];
 var years = new Array(1990, 1991, 1995);

 /**How to insert a new element at first position */
 names.unshift('lucas');

 /**How to insert a new element at last position  */
 names[names.length] = 'last value';
 names.push('vinicius');
 
/**How to delete the first element */
names.shift();

/**How to delete the last element */
names.pop();

/**How to get the position of an element */
years.indexOf(1991);

/**Identifying if element is not in array */
years.indexOf(1998) === -1 ? 'Ivan borned in another date ' :  'Ivan borned in 1998';


