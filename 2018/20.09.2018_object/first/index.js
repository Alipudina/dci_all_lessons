
 let parent = {
   city: 'Hamburg',
   language: 'spanish'
 }

 let mauro = {
   firstName: 'mauro',
   lastName: 'mauricio'
 };

 let marcello = {
   firstName: 'marcello',
   lastName: 'hanson'
 };

 let daniel = {
   firstName: 'daniel',
   lastName: 'robert'
 };

 Object.setPrototypeOf(mauro, parent);
 Object.setPrototypeOf(marcello, parent);
 Object.setPrototypeOf(daniel, parent);

 mauro.city = 'Tehran';

 /* now back again the inheritance because we delete the city */
 delete mauro.city

 console.log(mauro.city);

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');


 /* here we dont need the let because we asign it already */
 parent = {
   city: 'Hamburg',
   language: 'spanish'
 }

 // let mauro = {
 //   firstName: 'mauro',
 //   lastName: 'mauricio',
 //   age: 35
 // };
 //
 // let marcello = {
 //   firstName: 'marcello',
 //   lastName: 'hanson',
 //   age: 33
 // };
 //
 // let daniel = {
 //   firstName: 'daniel',
 //   lastName: 'robert',
 //   age: 23
 // };

 /* to prevent so much coding like in top */
 let LatinoGuya = function(firstName, lastName, age) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.age = age;
 }

 let jake = new LatinoGuya('kostas', 'diakog', 30);
 let someone = new LatinoGuya('daniel', 'hanson', 34);

 Object.setPrototypeOf(jake, parent);
 Object.setPrototypeOf(someone, parent);

 console.log(jake.city);


 console.log('##################################################################');


 let males = {
   gender: 'male',
   hobby: 'Reading',
   convertToLocalCurrency: function() {
     this.bankAccountInLocalCurrency = this.bankAccountInAmericanDollars * this.convertToLocal;
   }
 }



 let CommonValues = function(firstName, lastName, bankAccountInAmericanDollars,countryOfResidence, convertToLocal) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.bankAccountInAmericanDollars = bankAccountInAmericanDollars;
   this.countryOfResidence = countryOfResidence;
   this.convertToLocal = convertToLocal;
 }

 let ali = new CommonValues('Konstantinos', 'Diakogiannis', 1000, 'Greece', 0.86);
 let giddy = new CommonValues('Meuron','Gday', 2000, 'Australia', 1.38);
 let steffan = new CommonValues('Steffan','Effenberg', 5000, 'Switzerland', 0.96);

 Object.setPrototypeOf(ali, males);
 Object.setPrototypeOf(giddy, males);
 Object.setPrototypeOf(steffan, males);

 /* do not forget to call the function */
 ali.convertToLocalCurrency();

 console.log(ali.bankAccountInLocalCurrency);
