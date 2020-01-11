/**just see global scope */
var a = 11;

function first(){
  /** see first scope and global scope */
  var b = 22;
  console.log(a, b);
  
  function second(){
    /** see second scope, first scope and global scope */
    var c = 33;
    console.log(a, b, c);

    third();
  }
  
  second();
}

first();

function third(){
  /** 
   * see only third scope and global scope
   * 
   * it happens because third function is out of scope chain functions
   * and in another execution stack
   */
  var d = 44;
  console.log(a, d)
}

