
let toggleClick = document.querySelector('li:nth-of-type(5)');
let toggle = document.querySelector('.toggle');
let leftArrow = document.querySelector('main .arrows .leftArrow');
let rightArrow = document.querySelector('main .arrows .rightArrow');
let images = document.querySelectorAll('main div.image');
let dotts = document.querySelectorAll('main div.dotContainer span');
let whiteColor = document.querySelector('.whiteColor');
let pToShow = document.querySelectorAll('section div p');
let clickImages = document.querySelectorAll('section div img');
let counter = 0;
let movement = 1;

dotts[0].classList.add('whiteColor');

toggleClick.addEventListener('click', function(ev) {
  ev.stopPropagation();

  if (toggle.style.display === 'none') {
    toggle.style.display = 'block';
  } else {
    toggle.style.display = 'none';
  }
})

document.body.addEventListener('click', function() {
  if (toggle.style.display === 'block') {
    toggle.style.display = 'none';
  }
})


rightArrow.addEventListener('click', function() {
  counter++;

  if (counter > images.length - 1) {
    counter = 0;
  }

  for (let k = 0; k < dotts.length; k++) {

    if (dotts[k].classList.contains('whiteColor')) {
      dotts[k].classList.remove('whiteColor');
      if (k == dotts.length - 1) {
        k = -1;
      }
      dotts[k + 1].classList.add('whiteColor');
      break;
    }

  }

  let movement = counter * (-100);

  for (let i = 0; i < images.length; i++) {
    images[i].style.transform = `translateX(${movement}%)`;
  }

})

leftArrow.addEventListener('click', function() {

  for (let k = 0; k < dotts.length; k++) {
    console.log(k);

    if (dotts[k].classList.contains('whiteColor')) {
      dotts[k].classList.remove('whiteColor');
      if (k == 0) {
        k = dotts.length;
      }
      dotts[k -1].classList.add('whiteColor');
      break;
    }

  }

  counter--;

  if (counter === -1) {
    counter = images.length - 1;
  }
  let movement = counter * (-100);

  for (let j = 0; j < images.length; j++) {
    images[j].style.transform = `translateX(${movement}%)`;
  }

})

/* starting setInterval function for main */
setInterval(function() {
  counter++;

  if (counter > images.length - 1) {
    counter = 0;
  }

  for (let k = 0; k < dotts.length; k++) {

    if (dotts[k].classList.contains('whiteColor')) {
      dotts[k].classList.remove('whiteColor');
      if (k == dotts.length - 1) {
        k = -1;
      }
      dotts[k + 1].classList.add('whiteColor');
      break;
    }

  }

  let movement = counter * (-100);

  for (let i = 0; i < images.length; i++) {
    images[i].style.transform = `translateX(${movement}%)`;
  }

}, 8000);
/* finishing setInterval function for main */

/* making paragraph to show */
for (let i = 0; i < clickImages.length; i++) {
  clickImages[i].addEventListener('click', function(ev) {
    ev.stopPropagation();

    for (let j = 0; j < pToShow.length; j++) {
      if (pToShow[j].classList.contains('show')) {
        pToShow[j].classList.remove('show');
        break;
      }
    }
    pToShow[i].classList.add('show');
  })

  document.body.addEventListener('click', function() {
    pToShow[i].classList.remove('show');
  })
}
/* finished making paragraph to show */
