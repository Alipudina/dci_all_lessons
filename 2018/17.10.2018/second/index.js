/* DOM manipulation create a dropdown toggle button */
let button = document.querySelector('button');
let myUl = document.querySelector('ul');
myUl.style.display = 'none';

let listVisible = false;
let invisible = function() {
  if (listVisible) {
    myUl.style.display = 'none';
  } else {
    myUl.style.display = 'block';
    button.innerHTML = 'again click ';
  }
  listVisible = !listVisible;

}

button.addEventListener('click', invisible);
