var jonh = {
  fullName: 'Jonh Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function (){
    this.bmi = this.mass / (this.height * this.height);
    
    return this.bmi;
  }
}

var mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function (){
    this.bmi = this.mass / (this.height * this.height);
    
    return this.bmi;
  }
}

jonh.calcBMI()
mark.calcBMI()

if(jonh.bmi === mark.bmi){
  console.log(jonh.fullName + ' and ' + mark.fullName + ' has the same of: ' + jonh.bmi)
}
if(jonh.bmi > mark.bmi){
  console.log(jonh.fullName + ' has a higher BMI of: ' + jonh.bmi)
}
if(mark.bmi > jonh.bmi){
  console.log(mark.fullName + ' has a higher BMI of: ' + mark.bmi)
}