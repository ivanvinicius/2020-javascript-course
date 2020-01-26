/**
 * WHEN WE WORK WITH OBJECTS WE ALWAYS PASS A REFERENCE OF THAT TO A FUNCTION OR ANOTHER OBJECT
 * THIS REFERENCE WILL MUTATE THE MAIN OBJECT VALUE
 * 
 * WHEN WE WORK WITH PRIMITIVES WE ALWAYS CREATE A NEW PRIMITIVE VALUE IN MEMORY THAT HAS NO REFERENCE
 * TO THE LAST VALUE
 */

/**
 * Primiteves
 *
 * Primitives holds different values which means they point to different local
 * memory all the time
 */
var a = 23;
var b = a;
a = 46;

console.log(a)
console.log(b)

/**
 * Objects
 * 
* object holds de same values so, they share the same local memory 
* which means the values will not be different if you copy two objects
* and mutate something after
*/
var obj1 = {
  name: 'jonh',
  age: 25
};
var obj2 = obj1;

obj1.age = 30;

console.log(obj1);
console.log(obj2);


/** 
 * Functions 
 * 
 * In functions the same happens, objects pass a reference and mutates the value instead
 * primitives create new value in memory
 */
var age = 26;
var obj = {
  name: 'Ivan',
  city: 'Dublin'
};

function change(a, b){
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);