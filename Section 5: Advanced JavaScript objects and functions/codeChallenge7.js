(function() {
  function Question(question, answer, correct){
    this.question = question;
    this.answer = answer;
    this.correct = correct;
  }
  
  var questionOne = new Question('How old is Ivan?', [30, 21, 18], 1);
  var questionTwo = new Question('How many dogs has Ivan?', [3, 5, 2], 2);
  var questionThree = new Question('Do Ivan likes cake?', ['yes', 'no'], 0);
  
  Question.prototype.showQuestion = function() {
    console.log(this.question);
    
    for (var i = 0; i < this.answer.length; i++) {
      console.log(i + ': ' + this.answer[i]);
    }
  }
  
  Question.prototype.checkCorrectAnswer = function(ans, callback) {
    var score;
    
    if(ans === this.correct) {
      console.log('Correct');

      score = callback(true);
    }
    else{
      console.log('Wrong');
      
      score = callback(false);
    }

    this.showScore(score);
  }

  Question.prototype.showScore = function(score){
    console.log('Your total score is: ' + score);
    console.log('-----------------------------');
  }

  var arrQuestions = [questionOne, questionTwo, questionThree];
  
  function score(){
    var count = 0;

    return function(correct){
      if (correct) count++;

      return count;
    }
  }

  var keepScore = score();

  function nextQuestion(){
    var n = Math.floor(Math.random() * arrQuestions.length);
  
    arrQuestions[n].showQuestion();
    
    var answer = prompt('Answer the question using number: ');
    
    if(answer !== 'exit'){
      arrQuestions[n].checkCorrectAnswer(Number(answer), keepScore);

      nextQuestion();
    }
  }
  
  nextQuestion();

})();






