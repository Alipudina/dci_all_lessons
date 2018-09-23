  let jake = {
    firstName:'konstantinos',
    lastName: 'Diakogiannis',
    nickName: 'Jake',
    age: 30,
    profession: 'Machine Learning eingineer',
    livesAtHome: false,
    calculateAgeAfterTheseYears: function(afterYears) {
      console.log(this.age + afterYears);
    }
  };

  console.log(jake);



  let myName = {
    firstName: 'ali',
    lastName: 'pudina',
    age: 35,
    profession: 'web-developer',
    livesAtHome: false,
    calculateAgeAfterTheseYears: function(afterYears) {
      console.log(this.age + afterYears);
    },
    changeAge: function(newAge) {
      this.age = newAge;
    }
  };

 console.log(myName.changeAge(10));

  myName.calculateAgeAfterTheseYears(20);
  jake.calculateAgeAfterTheseYears(20);



  console.log(myName);

  console.log(myName.age);
  console.log(jake['age']);
  console.log(`In 10 years i am going  to be ${jake.age + 10} years old`);


console.log('########################################################');

  let person = {
    firstName: 'robert',
    lastName: 'Hanson',
    age: 30,
    YearsOfResidence: 5,
    nationality: 'english',
    profesion: 'sailor',
    salary: 2500,
    countryOfResidence: 'germany',
    changeResidence: function(number) {
      if (number >= this.YearsOfResidence) {
        this.nationality = this.countryOfResidence;
      }
    }
  };

  console.log(person);

  person.changeResidence(8);
  console.log(person);
