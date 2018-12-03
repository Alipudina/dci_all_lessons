
let button = document.querySelector('button');
let whatever = function(ev) {
  console.log(`${ev.clientX}, ${ev.clientY}`);
}

let detectMouse = function(ev) {
  if (ev.clientY < 5) {
    console.log(`Don't leave me like this`);
    ev.currentTarget.removeEventListner('mousemove', detectMouse);
  }
}

document.body.addEventListener('mousemove', detectMouse);
document.body.addEventListener('mousemove', whatever);

button.addEventListener('click', function(ev) {
  ev.currentTarget.style.background = 'green';
})
