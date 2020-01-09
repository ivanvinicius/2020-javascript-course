/**FUNCTION STATEMENTS AND EXPRESSIONS ------------------------------------------------------------*/

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


 /**ARRAYS ---------------------------------------------------------------------------------*/
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


 /**OBJECTS AND PROPERTIES ---------------------------------------------------------*/

/**Defining an object literal */
var ivan = {
  firstName: 'Ivan',
  lastName: 'Boneti',
  age: 21,
  birthYear: 1998,
  familyMembers: ['Claudete', 'Luiz'],
  job: 'IT',
  isMarried: false
};

/**Get values in objects */
ivan.firstName;

/**Another way to get values in objects */
(ivan['familyMembers'][0]);

/**New object syntax */
var claudete = new Object();
claudete.middleName = 'Fausto';
claudete['lastName'] = 'Boneti';

var birthYear = 1998

/**Objects and methods */
var luiz = {
  birthYear: 1968,
  calcAge: function(){
    /**Declare THIS to get the Object scope instead Global scope */
    this.age = new Date().getFullYear() - this.birthYear;
  }
}

/**Call object method and show */
luiz.calcAge();
//console.log(luiz);

/**LOOPS AND INTERATIONS --------------------------------------------------------------------*/

for (let i = 1; i <= 10; i += 2) {
  //console.log(i);
}

let j = 1;
while (j  <= 10) {
  //console.log(j);

  j++;
}

/**Continue and Break statement */
var words = new Array('my', 'name', 'is', 1998, 'ivan');

for (let k = 0; k < words.length; k++) {
  if(typeof words[k] !== 'string') continue;
  
  //console.log(words[k]);
}

for (let l = 0; l < words.length; l++) {
  if(typeof words[l] !== 'string') break;
  
  //console.log(words[l]);
}

//Looping backwards
for (let l = words.length - 1 ; l >=0; l--) {
  //console.log(words[l]);
}
