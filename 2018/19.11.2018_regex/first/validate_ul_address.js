
// let myAddress = 'http://www.google.com';
// let myAddress2 = 'https://www.google.de';
// let myAddress3 = 'ftp://www.google.html';
//
// let validateRegex = /^https?:\/{2}w{3}\.[\w\-]{2,50}\.[a-z]{2,4}$/i;

// console.log(validateRegex.test(myAddress));
// console.log(validateRegex.test(myAddress2));
// console.log(validateRegex.test(myAddress3));

// let bearSentence = 'i love Bearable';
// let bearSentence2 = 'i love Bears';
//
// let bearRegex = /\bbears?\b/i;
//
// console.log(bearRegex.test(bearSentence));
// console.log(bearRegex.test(bearSentence2));


let text = document.querySelector('textarea');
let button = document.querySelector('button');
let fb = document.querySelector('.fb');
let tw = document.querySelector('.tw');

button.style.margin = '2vw';
text.style.margin = '2vw';

let checkMatches = function(socialRegex, elem, textFromTextarea) {
  if (socialRegex.test(textFromTextarea)) {
    let fbArray = textFromTextarea.match(socialRegex);
    let fbCounter = fbArray.length;
    elem.innerHTML = `shares: ${fbCounter} !`
  } else {
    fb.style.display = 'none';
  }
}
hh
text.addEventListener('keyup', function(ev) {
  // let textValue = text.value;
  let textValue = text.value;

  let fbRegex = /\bf(ace)?b(ook)?\b/ig;
  let twRegex = /\btw(itter)?\b/ig;

  fb.style.background = 'lime';
  tw.style.background = 'lime';
  fb.style.padding = '1vw';
  tw.style.padding = '1vw';
  tw.style.display = 'inline-block';
  fb.style.display = 'inline-block';

  if (fbRegex.test(textValue)) {
    let fbArray = textValue.match(fbRegex);
    let fbCounter = fbArray.length;
    fb.innerHTML = `FB shares: ${fbCounter} !`
  } else {
    fb.style.display = 'none';
  }

  if (twRegex.test(textValue)) {
    let twArray = textValue.match(twRegex);
    let twCounter = twArray.length;
    tw.innerHTML = `TW shares: ${twCounter} !`
  } else {
    tw.style.display = 'none';
  }

})
