/**
 * An IIFE (Immediately Invoked Function Expression) 
 * is a JavaScript function that runs as soon as it is defined
 * and immediately creates the output
 * 
 * You cannot acess a variable inside the expression from outside
 */

  (
    function () {
      var aName = 'Barry';
    }
  )();

  //console.log(aName); //aName is not defined

  var result = (
    function (name) {
      var personName = name;
      
      return personName;
    }
  )('Ivan');

  console.log(result);
 