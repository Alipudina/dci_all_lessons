
let toggleClick = document.querySelector('li:nth-of-type(5)');
let toggle = document.querySelector('.toggle');
let leftArrow = document.querySelector('main .leftArrow');
let image2 = document.querySelector('main div:nth-of-type(2)');

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

leftArrow.addEventListener('click', function() {
    image2.style.transform = 'translateX(100%)'
})
