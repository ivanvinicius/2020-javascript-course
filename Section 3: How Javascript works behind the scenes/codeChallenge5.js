function tranformNumbers(numbers){
  return Number((numbers).toFixed(2));
}

var jonh = {
  fullName: 'Jonh Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function(){
    this.tips = [];
    this.finalValues = [];

    for (let i = 0; i < this.bills.length; i++) {
      var percentage;
      
      if(this.bills[i] < 50){
        percentage = .2;
      }
      else if(this.bills[i] >= 50 && this.bills[i] < 200){
        percentage = .15
      }
      else{
        percentage = .1
      }

      this.tips[i] = tranformNumbers(this.bills[i] * percentage);
      this.finalValues[i] = this.bills[i] + this.tips[i];
    }
  }
}

var mark = {
  fullName: 'Mark Miller',
  bills: [77, 375, 110, 45],
  calcTips: function(){
    this.tips = [];
    this.finalValues = [];
    
    for (let i = 0; i < this.bills.length; i++) {
      var percentage;
      
      if(this.bills[i] < 100){
        percentage = .2;
      }
      else if(this.bills[i] >= 100 && this.bills[i] < 300){
        percentage = .1
      }
      else{
        percentage = .25
      }
      
      this.tips[i] = Number((this.bills[i] * percentage).toFixed(2));
      this.finalValues[i] = this.bills[i] + this.tips[i];
    }
  }
}

jonh.calcTips();
mark.calcTips();

function calcAverage(tips){
  var sum = 0;
  
  for (let i = 0; i < tips.length; i++) {
    sum += tips[i];
  }
  
  return tranformNumbers(sum / tips.length);
}

jonh.average = calcAverage(jonh.tips);
mark.average = calcAverage(mark.tips);

console.log(jonh, mark);

if(jonh.average === mark.average){
  console.log('They have the same average of: ' +  jonh.average);
}
if(jonh.average > mark.average){
  console.log('Jonh has a higher average of: ' + jonh.average);
}
if(jonh.average < mark.average){
  console.log('Mark has a higher average of: ' + mark.average);
}