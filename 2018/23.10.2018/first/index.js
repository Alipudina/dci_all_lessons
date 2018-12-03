
let section = document.querySelectorAll('section');
let heading = document.querySelectorAll('section h3');
let paragraph = document.querySelectorAll('section p');
/* now all these variables are array ↓ */

section[0].style.marginTop = '10vw';
section[0].style.color = 'red';


for (let i = 0; i < heading.length; i++) {
  heading[i].addEventListener('click', function(ev) {
    ev.stopPropagation();

    for (let j = 0; j < paragraph.length; j++) {
      if (paragraph[j].classList.contains('active')) {
        paragraph[j].classList.remove('active');
        break;
      }
    }
    paragraph[i].classList.add('active');

  })

  }

  document.body.addEventListener('click', function() {
    for (let j = 0; j < paragraph.length; j++) {
      if (paragraph[j].classList.contains('active')) {
        paragraph[j].classList.remove('active');
        break;
      }
    }
  })
