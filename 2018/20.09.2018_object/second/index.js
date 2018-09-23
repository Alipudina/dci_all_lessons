
 /* it is good that the first letter of the function name in function structure be in upper case */
 let Movie = function(title, director, yearReleased, mainActor, seen) {
   this.title = title;
   this.director = director;
   this.yearReleased = yearReleased;
   this.mainActor = mainActor;
   this.seen = seen;
 }

 let prestige = new Movie('The Prestige', 'Chris Nolan', 2006, 'Christian Bale', true);
 let sunshine = new Movie('The Sunshine', 'Chris Nolan', 2006, 'Christian Bale', true);
 let memento = new Movie('The Memento', 'Chris Nolan', 2006, 'Christian Bale', false);
 let darkKnight = new Movie('The DarkKnight', 'Chris Nolan', 2006, 'Christian Bale', true);
 let psycho = new Movie('The Psycho', 'Chris Nolan', 2006, 'Christian Bale', false);

 let allMovies = {
   prestige: prestige,
   sunshine: sunshine,
   memento: memento,
   darkKnight: darkKnight,
   psycho: psycho,
   printSeenMovies: function() {

     for (let movie in this) {
       if (this[movie].seen) {
         console.log(this[movie].title);
       }
     }
   }

 };

 /* now we call it */
 allMovies.printSeenMovies();


 /* we move it inside the object */
 // for (let movie in allMovies) {
 //   if (allMovies[movie].seen) {
 //     console.log(allMovies[movie].title);
 //   }
 // }


 /* we can use loop in side another loop */
 // for (let movie in this) {
 //   for (let info in this[movie]) {
 //     console.log(this[movie][info]);
 //   }
 // }

 console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH');

 let ShareFeatures = function(firstName, lastName, age, nationality, programmingExperience, favourProgramming) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.age = age;
   this.nationallity = nationality;
   this.programmingExperience = programmingExperience;
   this.favourProgramming = favourProgramming
 }

 let sam = new ShareFeatures('sam', 'samin', 32, 'afghan', 'basic', 'javscript');
 let katty = new ShareFeatures('');

















// vnnnmnmm
