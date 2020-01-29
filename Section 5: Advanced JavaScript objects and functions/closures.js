/**
 *  A closure is the combination of a function bundled together (enclosed)
 *  with references to its surrounding state (the lexical environment).
 *  In other words, a closure gives you access to an outer function’s scope
 *  from an inner function. In JavaScript, closures are created every
 *  time a function is created, at function creation time.
 */

 function interviewQuestion(job){
   return function(name){
     if (job === 'teacher') {
       console.log(name + 'What subject do you teach?');
      }
      else if(job === 'designer'){
        console.log(name + 'Can you explain what UX Desing is?');
      }
      else{
        console.log(name + 'What do you do?');
     }
   }
 }

 interviewQuestion('designer')('Ivan ');