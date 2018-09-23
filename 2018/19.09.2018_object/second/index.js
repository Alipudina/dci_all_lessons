
  let latinInHamburg = {
    nativeTongue: 'spanish',
    city: 'Hamburg',
    gender: 'male',
    showCity: function() {
      console.log(`${this.firstName} ${this.lastName} lives in ${this.city}`);
    }
  }

  let Mauro = Object.create(latinInHamburg);
  let Daniel = Object.create(latinInHamburg);
  let Marcello = Object.create(latinInHamburg);

  Mauro.firstName = 'Mauro';
  Mauro.lastName = 'Navarro';
  Mauro.nationality = 'chilean';

  Daniel.firstName = 'Daniel';
  Daniel.lastName = 'cipolla';
  Daniel.nationality = 'english';

  Marcello.firstName = 'Marcello';
  Marcello.lastName = 'ramirez';
  Marcello.nationality = 'paraguay';

  console.log(Mauro);
  console.log(Daniel);
  console.log(Marcello);
