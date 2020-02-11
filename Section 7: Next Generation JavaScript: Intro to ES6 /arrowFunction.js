//& Arrow function

const years = [1990, 1998, 2001, 1937];

/**ES5 */
var ages5 =  years.map(function(element) {
  return 2020 - element;
})
// console.log(ages5);

/**ES6 */
let ages6 =  years.map(element => 2020 - element);
// console.log(ages6); 

ages6 = years.map((element, index) => `Age element ${index + 1}: ${2020 - element}`);
// console.log(ages6);

ages6 = years.map((element, index) => {
  const now = new Date().getFullYear();
  const age = now - element;
  
  return `The age of ${index + 1} is ${age}`;
});
// console.log(ages6);








/**
 * -----------------------------------------------------------------------------
 * NOTE: Methods and Arrow functions point THIS keyword to inherited scope
 * Function declaration will always point THIS keyword to global object
 */

/**ES5 */
/** This points to html element from eventListener */
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function(){
    var self = this;

    document.querySelector('.green').addEventListener('click', function(){
      // var str = 'This is box number ' + this.position + ' and it is ' + this.color;

      var str = 'This is box number ' + self.position + ' and it is ' + self.color;

      alert(str);
    })
  }
}
// box5.clickMe();


/**ES6 */
/**Arrow functions points the This variable to the object scope*/
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      
      alert(str);
    });
  }
}
// box6.clickMe();


/**clickMe() method points the This variable to the global scope*/
const box66 = {
  color: 'green',
  position: 1,
  clickMe: () => {
    document.querySelector('.green').addEventListener('click', () => {
      // var str = 'This is box number ' + this.position + ' and it is ' + this.color;

      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      
      alert(str);
    });
  }
}
// box66.clickMe();







/**ES5 */
var friends = ['Ivan', 'Lucas', 'William'];

/** function constructor */
function Person(name) {
  this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
  //borrowing THIS keyword via bind method
  var arr = friends.map(function(element) {
    return this.name + 'is friends with' + element;
  }.bind(this))
  console.log(arr);
}
new Person('Roberto').myFriends5(friends);


/**ES6 */
Person.prototype.myFriends6 = function(friends)  {
  var arr = friends.map(element => `${this.name} is friends with ${element}`);
  console.log(arr)
}
new Person('Claudio').myFriends6(friends);
