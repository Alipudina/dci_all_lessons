
/* js Date Object/ The zodiac cycle */
/* according to zodiac Date */
let Zodiac = function(sign, beginDate, endDate) {
  this.sign = sign;
  this.beginDate = beginDate;
  this.endDate = endDate;
}

let aries = new Zodiac('Aries', new Date(2020, 2, 21), new Date(2020, 3, 19));
let taurus = new Zodiac('Taurus', new Date(2020, 3, 20), new Date(2020, 4, 20));
let gemini = new Zodiac('Gemini', new Date(2020, 4, 21), new Date(2020, 5, 20));
let cancer = new Zodiac('Cancer', new Date(2020, 5, 21), new Date(2020, 6, 22));
let leo = new Zodiac('Cancer', new Date(2020, 5, 21), new Date(2020, 6, 22));
let virgo = new Zodiac('Leo', new Date(2020, 6, 23), new Date(2020, 7, 22));
let libra = new Zodiac('Leo', new Date(2020, 6, 23), new Date(2020, 7, 22));
let scorpio = new Zodiac('Leo', new Date(2020, 6, 23), new Date(2020, 7, 22));
let sagittarus = new Zodiac('Leo', new Date(2020, 6, 23), new Date(2020, 7, 22));
let capricorn = new Zodiac('Leo', new Date(2020, 6, 23), new Date(2020, 7, 22));
let aquarius = new Zodiac('Leo', new Date(2020, 6, 23), new Date(2020, 7, 22));
let pisces = new Zodiac('Leo', new Date(2020, 6, 23), new Date(2020, 7, 22));

/* to be able using loop */
let allZodiacs = [aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarus, capricorn, aquarius, pisces];

// console.log(allZodiacs);

let myBirthday = new Date(1988, 2, 23);

let showZodiac = function(birthday) {
  birthday.setYear(2020);
  for (let zodiac of allZodiacs) {
    if(birthday >= zodiac.beginDate && birthday <= zodiac.endDate) {
      console.log(`You zodiac sign is ${zodiac.sign}`);
      return;
    }
  }
}

showZodiac(myBirthday);
