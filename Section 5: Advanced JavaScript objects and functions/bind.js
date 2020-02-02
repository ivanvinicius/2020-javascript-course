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
 * BIND method set a default argument in method
 * The argument YEAR could be set to 1900 as default
 * This way we do not need to repeat our code 
 */

 var years = [1990, 1965, 1937, 2005, 1998];

 function arrayCalc(arr, fn){
    var arrRes = [];

   for (let i = 0; i < arr.length; i++) {
     arrRes.push(fn(arr[i]));
   }

   return arrRes;
 }

 function calculateAge(el){
  return 2016 - el;
 }

 function isFullAge(limit, el){
   return el >= limit;
 }

 var ages = arrayCalc(years, calculateAge);
 
 var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20)); //this.ages //preset the limit to 20
 
 console.log(ages);
 console.log(fullJapan);
 
