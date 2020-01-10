/**
 * Hoisting is named for the creation and execution phase of code.
 * where function declarations are stored in memory at the creation phase.
 * In execution phase, function expression and variables are set line by line.
 */

 calculateAge(1998)

 /**
  * function declaration, in this case does not matter where the function is called in the execution of code
  * because the function is store in memory at the CREATION PHASE of Hoisting
  */
 function calculateAge(birthYear){
   console.log(2020 - birthYear);
 }









retirement(1998);

/**
 * In this case the function expression retirement does not work because it is not stored in memory
 * It going to be stored in execution of code line by line. The same happen to variables declarations, 
 * they are not stored in memory before execution of code
 */
 var retirement =  function(birthYear){
   console.log(65 - (2020 - birthYear));
 }

 retirement(1998);