//& Rest Parameters

/**
 * NOTE: Rest parameter is used to get more clear and easy function parameters.
 * Imagine that you have a call to function with twenty parameters and in the function
 * you need to declare that twenty parameters manually. It's boring and confuses, right?!
 */

 /**ES5 */
 function isFullAge5(fullAge) {
  //  console.log(arguments);
   var argumentsArray = Array.prototype.slice.call(arguments, 1);

   argumentsArray.forEach(function(el) {
    console.log((2020 - el) >= fullAge);
  });
}

isFullAge5(/*fullAge*/18, /*years*/1998, 1990, 2018, 2020, 1987);




console.log('-----------------------------------------------------------------');





 /**ES6 */
 var isFullAge6 = (fullAge,...years) => {
  // console.log(arguments);
  years.forEach(el => console.log((2020 - el) >= fullAge));
 }

 isFullAge6(/*fullAge*/18, /*years*/1998, 1990, 2018, 2020, 1987);