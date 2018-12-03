// document.addEventListener('DOMContentLoaded', function(ev) {

  /* all the js code muss be inside this event */
  let input = document.querySelector('section input');
  let button = document.querySelector('section button');


  button.addEventListener('click', function() {
    let div = document.createElement('DIV');
    let paragraph = document.createElement('P');
    let span = document.createElement('SPAN');
    let inputValue = input.value;
    // if (input.value === '') {
    //   alert('Please insert your task!');
    //   return;
    // }

    if (!input.value) {
      alert('Please insert your task!');
      return;
    }

    document.body.appendChild(div);
    div.appendChild(paragraph);
    div.appendChild(span);
    span.innerText = 'click to close';
    paragraph.innerText = inputValue;
    paragraph.innerHTML = `${inputValue}`;
    input.value = '';

        span.addEventListener('click', function(ev) {
          let spanClicked = ev.currentTarget;
          let parentOfTheSpan = spanClicked.parentElement;
          parentOfTheSpan.parentElement.removeChild(parentOfTheSpan);
        })


  })







// })
