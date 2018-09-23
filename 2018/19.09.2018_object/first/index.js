
 // js Objects/ convert currency
  let personFromGreece = {
    firstName: 'Jake',
    lastName: 'kostas',
    bankAccountInAmericanDollars: 10000,
    countryOfResidence: 'Greece',
    convertToLocal: 0.86
  }

  let personFromSwitzerland = {
    firstName: 'Robert',
    lastName: 'Hanson',
    bankAccount: 20000,
    countryOfResidence: 'Switzerland',
    convertToLocal: 0.96
  }

  let personFromAustralia = {
    firstName: 'Danny',
    lastName: 'Herrman',
    bankAccount: 15000,
    countryOfResidence: 'Australia',
    convertToLocal: 1.38
  }

  /* global function and we have to use the . here */
  let convertToLocalCurrency = function(person) {
    person.bankAccountInLocalCurrency = person.bankAccountInAmericanDollars * person.convertToLocal;
  }

  /* before console.log we have to call the function */
  convertToLocalCurrency(personFromGreece);
  convertToLocalCurrency(personFromAustralia);
  convertToLocalCurrency(personFromSwitzerland);

  console.log(personFromGreece);
  console.log(personFromAustralia);
  console.log(personFromSwitzerland);

  console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');


  /* object inheritance */
