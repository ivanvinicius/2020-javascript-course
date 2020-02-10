//& Blocks and IIFEs

/**ES5 */
var scope = (function() {
  var d = 4;

  return {
    getReturn: function() {
      console.log(d);
    },
  }
})()

//console.log(d); ERROR
scope.getReturn();





/**ES6 */
{
  const a = 1;
  let b = 2;
  var c = 3;
}

// console.log(a); ERROR 
// console.log(b); ERROR
console.log(c);