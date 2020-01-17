/**
 * NOTES
 *
 * In this case we need to define the Prototype property before that object creation
 */

 //OBJECT CREATION
 /** Defining the prototype properties first */
 var personProto = {
   calculateAge: function(){
     console.log(2020 - this.yearOfBirth);
   }
 };

 /** Creating a new object using that prototype properties defined above*/
 var ivan = Object.create(personProto);

 /** Defining own object information */
 ivan.name = 'Ivan';
 ivan.middleName = 'Vinicius';
 ivan.lastName = 'Boneti'
 ivan.yearOfBirth = 1998;

 ivan.calculateAge();

 
 /** Another way to create an object with Object.create */
 var jane = Object.create(personProto, {
   name : {value: 'Jane'},
   middleName : {value: 'Karen'},
   lastName : {value: 'Nolan'},
   yearOfBirth : {value: 1990},
 })

 jane.calculateAge();