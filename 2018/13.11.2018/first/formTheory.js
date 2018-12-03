
let checkDate = document.querySelector('input[type="date"]');
let username = document.querySelector('input[type="text"]');
let paragraph = document.querySelector('p');

checkDate.addEventListener('invalid', function(ev) {
  ev.preventDefault();

  if (checkDate.validity.rangeOverflow) {
    console.log('you are up');
  } else {
    console.log('you are down');
  }
})

username.addEventListener('invalid', function(ev) {
  ev.preventDefault();

  if (username.value.length === 0) {
    console.log('put something');
  } else if (username.value.length < 6) {
    console.log('please insert at least 6 character!');
  }

})
