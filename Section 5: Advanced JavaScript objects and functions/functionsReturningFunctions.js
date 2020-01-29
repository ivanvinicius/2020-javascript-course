function interviewQuestion(job){
  if (job === 'designer') {
    //anonymous function 
    return function (name){
      console.log(name + 'Please, can you explain what is UX Design?');
    } 
  } 
  else if(job === 'teacher') {
    //anonymous function 
    return function(name){
      console.log(name + 'What subject do you teach?');
    }
  }
  else{
    //anonymous function 
    return function(name){
      console.log(name + 'What do you do bro?');
    }
  }
}

/**
 * We call the interviewQuestion Function and select a job
 * in this moment the anonymous function select by de IF ELSE statement
 * gonna be stored in memory. So, we can rename the anonymous function
 * informing a person name and calling it in our code.
 */

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Fernando ');

/**Another way to call theses function below */
interviewQuestion('designer')('Samuel ')
