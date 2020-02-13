class Town {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

/**
 * Parks
 * 1.1 Name and year of building
 * 1.2 Tree density for each park (quantity / area)
 * 1.3 Average age of parks (ages / quantity)
 * 1.4 The name of parks that has more than 1000 trees
 */
class Park extends Town {
  constructor(name, age, treesQuantity, area) {
    super(name, age);

    this.treesQuantity = treesQuantity;
    this.area = area;
  }
  
  calculateTreeDensity() {
    var result = this.treesQuantity / this.area;

    console.log(`${this.name} has a tree density of ${result.toFixed(3)} square kilometer`)
  }

  calculateAverageAge(){
    console.log(`The average ages of parks is ${this.totalAge / this.arrayLength} years old`);
  }

  showNameOfBigParks(){
    this.treesQuantity >= 1000 ? console.log(`${this.name} has more than 1000 trees, with total of ${this.treesQuantity} trees`) : false;
  }
}

const allParks = [
  new Park('Green Park', 1783, 10354, 37156),
  new Park('National Park', 1892, 999, 30489),
  new Park('Oak Park', 1524, 12432, 40789),
]

function reportParks(parks) {
  console.log('------- Parks Report  --------')
  var sumAge = 0;
  
  parks.map(element => {
    sumAge += element.age;
    
    element.calculateTreeDensity();  
  });
  
  Park.prototype.totalAge = sumAge;
  Park.prototype.arrayLength = parks.length;
  
  const [ instace ] = parks;
  
  console.log(' ')
  instace.calculateAverageAge();
  
  console.log(' ')
  parks.map(element => element.showNameOfBigParks());
  
}


/**
 * Streets
 * 1.1 Name and year of building
 * 1.2 Avarage length of streets (length / quantity)
 * 1.3 Size classification (tiny, small, normal, big, huge), as default NORMAL
 */
class Street extends Town {
  constructor(name, age, length, size) {
    super(name, age);
    
    this.length = length;
    this.size = size;
  }

  showInformationAbout(){
    console.log(`This is ${this.name}. It was builded on ${this.age}`)
  }

  calculateAverageLength() {
    console.log(`The average length of streets is ${this.sumStreetLength / this.arrayLength} kilometers`);
  }

  showSizeClassification(){
    console.log(`The ${this.name} is a ${this.sizeOfStreet[this.size]} street`);
  }
}


const allStreets = [
  new Street('Rivera Pallace Street', 1920, 38000, 3),
  new Street('Wall Street', 1920, 19300, 1),
  new Street('Downriver Street', 1920, 9500, 0),
  new Street('Uptown Street', 1920, 189200, 4),
];


function reportStreet(streets) {
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log('------- Streets Report  --------')
  var sumLength = 0;

  streets.map(element => {
    element.showInformationAbout();
    
    sumLength += element.length;
  });
  
  Street.prototype.arrayLength = streets.length;
  Street.prototype.sumStreetLength = sumLength;
  Street.prototype.sizeOfStreet = ['tiny', 'small', 'normal', 'big', 'huge'];

  const [ instace ] = streets;

  console.log(' ')
  instace.calculateAverageLength();

  console.log(' ')
  streets.map(element => element.showSizeClassification());
}

/**
 * Init function
 */
function init(){
  reportParks(allParks);
  reportStreet(allStreets);
}


init();