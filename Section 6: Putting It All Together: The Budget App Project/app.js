//module pattern using IIFE and closures

var budgetController = (function() {

  return {}
})();


var UIController = (function() {

  return {}
})();


var controller = (function(budgetCtrl, UICtrl) {
  
  var ctrlAddItem = function() {
    //get input data

    //add the item to the budget controller

    //add the item to the UI

    //calculate the budget

    //display the budget on the UI
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', (event) => {
    if(event === 13 || event.which === 13) {
      ctrlAddItem();      
    }
  });

  return {}
})(budgetController, UIController);
