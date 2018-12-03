
let main = document.querySelector('main');
let article = document.querySelector('article');
let span = document.querySelector('span');
let inputs = document.querySelectorAll('main form input');
let paragraphs = document.querySelectorAll('main p');
let valName = inputs[0].value;
let pName = paragraphs[0];
let btn = document.querySelector('button');

let axisY = function(ev) {
  if (ev.clientY < 8) {
    main.classList.add('active');
    document.body.style.background = 'grey';
    article.style.display = 'none';
    ev.currentTarget.removeEventListener('mousemove', axisY);
  }
}

document.body.addEventListener('mousemove', axisY);
span.addEventListener('click', function() {
  article.style.display = 'block';
  main.style.display = 'none';
  document.body.style.background = 'white';
});

btn.addEventListener('click', function() {

    for (let i = 0; i < inputs.length; i++) {
        let myText = paragraphs[i].innerHTML += ` ${inputs[i].value}`;
    }
})


// pName.innerHTML += ' Ali';
