/**
 * module pattern using IIFE and closures
 * 
 * NOTE: Constructors can't be arrow functions, it doesn't work 
 * because de THIS variable doesn't create a new scope in the memory
 */

var budgetController = (() => {
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  }

  Expense.prototype.calcPercentage = function(totalIncome) {
    if(totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100);
    }
    else{
      this.percentage = -1;
    }
  }

  Expense.prototype.getPercentage = function() {
    return this.percentage;
  }

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }

  var calculateTotal = (type) => {
    var sum = 0;

    data.allItems[type].forEach((element, index, array) => {
      sum += element.value;
    });

    data.totals[type] = sum;
  }

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1,
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

    deleteItem: (type, id) => {
      var ids, index;

      /**
       * The diference between forEach and Map is:
       * Map method will always return an new array 
       * from the current array
       */
      ids = data.allItems[type].map((element, ind, arr) => {
        return element.id;
      });

      index = ids.indexOf(id);

      if(index !== -1){
        data.allItems[type].splice(index, 1);
      }
    },

    calculateBudget: () => {
      //calculate total income and expenses
      calculateTotal('inc');
      calculateTotal('exp');

      //caculate the budget: income - expenses
      data.budget = data.totals.inc - data.totals.exp;

      //caculate the percentage of income that we spent
      if(data.totals.inc > 0){
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      }
      else{
        data.percentage = -1;
      }
    },

    calculatePercentages: () => {
      data.allItems.exp.forEach((element) => {
        element.calcPercentage(data.totals.inc);
      })
    },

    getPercentages: () => {
      var allPercentages = data.allItems.exp.map((element) => {
        return element.getPercentage();
      });

      return allPercentages;
    }, 

    getBudget: () => {
      return {
        budget: data.budget,
        totalIncome: data.totals.inc,
        totalExpenses: data.totals.exp,
        percentage: data.percentage,
      };
    },

    testing: () => {
      console.log(data);
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
    expensesContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container'
  }

  return {
    getInput: () => {
      return {
        type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
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

    deleteListItem: (item) => {
      var element;

      element = document.getElementById(item);
      element.parentNode.removeChild(element);
    },

    clearFields: () => {
      var fields, fieldsArray;
      
      fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

      /**
       * Transform a list in array using the prototype chain of ARRAYS method
       * after that, we set the THIS variable to fields in CALL method
       */
      fieldsArray = Array.prototype.slice.call(fields);

      fieldsArray.forEach((element, index, array) => {
        element.value = "";
      });

      fieldsArray[0].focus();
    },

    displayBudget: (obj) => {
      document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalIncome;
      document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExpenses;
      
      if(obj.percentage > 0){
        document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
      }
      else {
        document.querySelector(DOMstrings.percentageLabel).textContent = '-';
      }
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

    document.querySelector(DOMstrings.container).addEventListener('click', ctrlDeleteItem);
  }

  var updateBudget = () => {
    //calculate the budget
    budgetCtrl.calculateBudget();

    //return the budget
    var budget = budgetController.getBudget();
    
    //display the budget on the UI
    UICtrl.displayBudget(budget);
  }

  var updatePercentages = () => {
    //calculate the percentages
    budgetCtrl.calculatePercentages();

    //read percentages from the budget controller
    var percentages = budgetCtrl.getPercentages(); 

    //update the UI
    console.log(percentages);
  }

  var ctrlAddItem = () => {
    //get input data
    var input = UICtrl.getInput();

    if(input.description !== "" && !isNaN(input.value) && input.value > 0) {
      //add the item to the budget controller
      var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
          
      //add the item to the UI
      UICtrl.addListItem(newItem, input.type);
  
      //clear the fields
      UICtrl.clearFields();
  
      //calculate and update budget
      updateBudget();

      //update the percentages
      updatePercentages();
    }
  }
  
  var ctrlDeleteItem = (event) => {
    var item, type, id;
    
    item = event.target.parentNode.parentNode.parentNode.parentNode.id;
    
    if(item){
      [type, id] = item.split('-');
      
      //delete the item from the data structure
      budgetCtrl.deleteItem(type, Number(id));
      
      //delete the item from the UI
      UICtrl.deleteListItem(item);
      
      //calculate and update budget
      updateBudget();

      //update the percentages
      updatePercentages()
    }
  }

  return {
    init: () => {
      UICtrl.displayBudget({
        budget: 0,
        totalIncome: 0, 
        totalExpenses: 0,
        percentage: -1,
      });

      setupEventListeners();
    } 
  };

})(budgetController, UIController);

controller.init();