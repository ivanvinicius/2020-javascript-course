/**
 * module pattern using IIFE and closures
 * 
 * NOTE: Function constructors can't be arrow functions, it doesn't work 
 */

var budgetController = (() => {
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  }

  return {
    addItem: (type, desc, val) => {
      var newItem, id;
      
      if(data.allItems[type].length > 0){
        id = data.allItems[type][data.allItems[type].length - 1].id + 1; //getting the last element created
      }
      else {
        id = 0;
      }

      if(type === 'exp') {
        newItem = new Expense(id, desc, val);
      }
      else {
        newItem = new Income(id, desc, val);
      }

      data.allItems[type].push(newItem);

      return newItem;
    },


  };

})();




var UIController = (() => {
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list'
  }

  return {
    getInput: () => {
      return {
        type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      }
    },

    addListItem: (obj, type) => {
      var html, newHtml, element;
      
      if (type === 'inc') {
          element = DOMstrings.incomeContainer;
          
          html =  '<div class="item clearfix" id="inc-%id%">'+
                    '<div class="item__description">%description%</div>'+
                    '<div class="right clearfix">'+
                      '<div class="item__value">%value%</div>'+
                      '<div class="item__delete">'+
                        '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'+
                      '</div>'+
                    '</div>'+
                  '</div>';
      } 
      else {
          element = DOMstrings.expensesContainer;

          html =  '<div class="item clearfix" id="exp-%id%">'+
                    '<div class="item__description">%description%</div>'+
                    '<div class="right clearfix">'+
                      '<div class="item__value">%value%</div>'+
                      '<div class="item__percentage">21%</div>'+
                      '<div class="item__delete">'+
                        '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'+
                      '</div>'+
                    '</div>'+
                  '</div>';
      }
      
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', obj.value);
      
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },

    getDOMstrings: () => {
      return DOMstrings;
    },
  };

})();




var controller = ((budgetCtrl, UICtrl) => {
  var setupEventListeners = () =>{
    var DOMstrings = UICtrl.getDOMstrings();

    document.querySelector(DOMstrings.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', (event) => {
      if(event === 13 || event.which === 13) {
        ctrlAddItem();      
      }
    });
  }

  var ctrlAddItem = () => {
    //get input data
    var input = UICtrl.getInput();

    //add the item to the budget controller
    var newItem = budgetController.addItem(input.type, input.description, input.value);
        
    //add the item to the UI
    UIController.addListItem(newItem, input.type);

    //calculate the budget

    //display the budget on the UI
  }

  return {
    init: () => {
      setupEventListeners();
    } 
  };

})(budgetController, UIController);

controller.init();