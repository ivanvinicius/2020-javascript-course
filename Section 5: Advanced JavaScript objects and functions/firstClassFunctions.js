/**
 * Function are also objects in javascript 
 * A function is an instance of object type
 * A function behaves like any other object 
 * We can store functions in a variable
 * We can pass a funtion as an argument to another function
 * We can return a function from a function
 * 
 * All this defenitions are called FIRST-CLASS FUNCTIONS
 * 
 */

 /**USING CALLBACK FUNCTIONS */

var years = [1998, 2018, 2003, 1939, 1945];

function arrCalc(arr, fn){
  var arrResult = [];

  for (let i = 0; i < years.length; i++) {
    arrResult.push(fn(arr[i]));
  }

  return arrResult;
}


function calculateAge(elem){
 return 2020 - elem;
} 
var yearOld = arrCalc(years, calculateAge);
console.log(yearOld);
 

function isFullAge(elem){
  return elem >= 18;
}
var peopleFullAge = arrCalc(yearOld, isFullAge); 
console.log(peopleFullAge);


function maxHeartRate(elem){
  if(elem >= 18 && elem <= 81 ){
    return Math.floor(206.9 - (0.67 * elem));
  }

  return 0;
}
var peopleMaxHeartRate = arrCalc(yearOld, maxHeartRate);
console.log(peopleMaxHeartRate);