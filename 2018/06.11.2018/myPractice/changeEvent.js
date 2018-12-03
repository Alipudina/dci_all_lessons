
let input = document.querySelector('form input:first-of-type');
let checkBox = document.querySelector('form input:last-of-type');
let select = document.querySelector('form select');
let image = document.querySelector('img');
let option = document.querySelectorAll('option');
let checkBoxValue = checkBox.value;
let selectValue = select.value;

checkBox.addEventListener('click', function() {
  checkBox.checked ? input.type = 'password' : input.type = 'text';
})

select.addEventListener('change', function() {
  for (let i = 0; i < option.length; i++) {
    image.src = `practice-images/${option[i].Value}.jpg`;
  }

})
