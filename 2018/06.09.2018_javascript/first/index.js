
// var stuff = smartphone;
var smartphone = 300;
var cashier = 0;
var headphone = 50;
var cover = 20;
var interested = true;
// var headphone = true;
var cover_color = 'orange';
var interested_headphone;
var interested_headphone_cover;
var interested_cover = true;


if (interested) {
  cashier = smartphone;

  if (interested_headphone_cover) {
    cashier = (smartphone + headphone + cover) * ();
  } else if (interested_headphone) {
    cashier = (smartphone + headphone) * ();
  } else if (interested_cover) {
    switch (cover_color) {
      case 'green':
        cashier =
        break;
      default:

    }
  }
} else {
  cashier = 0;
}

console.log(`my cashier after`);


if (interested) {
    cashier += smartphone;
  if (interested_headphone) {
    cashier += headphone * (10 /100);
  } else if (interested_headphone_cover) {
    cashier += (headphone + cover) * (15 /100);
  } else if (interested_cover) {
      switch (cover_color) {
        case 'green':
         cashier += cover * (7 /100);
         break;
        case 'pink':
          cashier += cover * (12 /100);
          break;
        case 'orange':
          cashier += cover * (15 /100);
          break;
        default:
         cashier += cover * (5 /100);
      }
  }
} else {
    cashier = 0;
  }

  console.log(cashier);




// if (interested) {
//   switch (stuff) {
//     case smartphone:
//      cashier += smartphone;
//      break;
//     case headphone:
//       cashier += (smartphone + headphone) * (10 /100);
//       break;
//     case headphone && cover:
//      cashier = (smartphone + headphone + cover) * (15 /100);
//    case cover:
//     cashier = (smartphone + cover) * (5 /100);
//     break;
//
//     if (cover) {
//       switch (cover_color) {
//         case 'green':
//          cashier = (smartphone + cover) * (7 /100);
//          break;
//         case 'pink':
//           cashier = (smartphone + cover) * (12 /100);
//           break;
//         case 'orange':
//           cashier = (smartphone + cover) * (15 /100);
//           break;
//       }
//     }
//
//
//   }
// } else {
//   cashier = 0;
// }
//
// console.log(cashier);
