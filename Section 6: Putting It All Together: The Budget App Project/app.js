//module pattern using IIFE and closures

var budgetController = (() => {

  return {}
})();




var UIController = (() => {
  
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    btnAdd: '.add__btn',
  }

  return {
    getInput: () => {
      return {
        type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      }
    },

    getDOMstrings: () => {
      return DOMstrings;
    },
  };
})();




var controller = ((budgetCtrl, UICtrl) => {
  var DOMstrings = UICtrl.getDOMstrings();

  var ctrlAddItem = () => {
    //get input data
    var input = UICtrl.getInput();

    //add the item to the budget controller

    //add the item to the UI

    //calculate the budget

    //display the budget on the UI
  }

  document.querySelector(DOMstrings.btnAdd).addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', (event) => {
    if(event === 13 || event.which === 13) {
      ctrlAddItem();      
    }
  });

  return {}
})(budgetController, UIController);
