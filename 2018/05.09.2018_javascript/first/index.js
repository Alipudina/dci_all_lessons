// var x = 10;
// x++;
// console.log(x);

// var x = 5;
// x--;
// console.log(x);


/* ternary operator , to check just true  false*/
5 > 8 ? console.log('true') : console.log(false);

console.log(5 != 4);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var numBalls = 3;
var price;

switch(numBalls) {
  case 1:
   price = 1;
   break;
  case 2:
   price = 1.8;
   break;
  case 3:
   price = 2.5;
   break;
  case 4:
   price = 3;
   break;
  case 5:
   price = 3.30;
   break;
  default:
  price = 1.8;
}

console.log(`You have oredred ${numBalls} and it costet ${price}$`);


// var balls = 1;
// var two_balls = 1.8;
// var three_balls = 2.5;
// var four_balls = 3;
// var five_balls = 3.30;
// switch (balls) {
//   case 1 :
//   console.log(`here you are your ${1} ice balls`);
//   break;
//   case 1.8 :
//   console.log(`here you are your ${2} ice balls`);
//   break;
//   case 2.8 :
//   console.log(`here you are your ${3} ice balls`);
//   break;
//   case 3 :
//   console.log(`here you are your ${4} ice balls`);
//   break;
//   case 3.30 :
//   console.log(`here you are your ${5} ice balls`);
//   break;
//   default :
//   console.log(`here you are your ${2} ice balls`);
// }

var y = 5;
x = y++
console.log(x);
