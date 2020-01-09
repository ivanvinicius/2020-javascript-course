/**Jonh went to the restaurant and tipped the waiter*/

var valueTipsPaid = [];
var finalPrice = [];
var restaurantsPrice = [124, 48, 268];
var tipsPercentual = [20, 15, 10];

function calculateFinalPaid(valuePaid){
  if(valuePaid <= 50){
    var tip = Number((tipsPercentual[0] / 100 * valuePaid).toFixed(2));
    valueTipsPaid.push(tip);
    finalPrice.push(tip + valuePaid)
  }
  if(valuePaid > 50 && valuePaid <= 200){
    var tip = Number((tipsPercentual[1] / 100 * valuePaid).toFixed(2));
    valueTipsPaid.push(tip);
    finalPrice.push(tip + valuePaid)
  }
  if(valuePaid > 200){
    var tip = Number((tipsPercentual[2] / 100 * valuePaid).toFixed(2));
    valueTipsPaid.push(tip);
    finalPrice.push(tip + valuePaid)
  }
}

restaurantsPrice.forEach(calculateFinalPaid);

console.log('Tip Value: ' + valueTipsPaid);
console.log('Final price paid in restaurant: ' + finalPrice);