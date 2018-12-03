
let inputName = document.querySelector('input:first-of-type');
let inputDate = document.querySelector('input:nth-of-type(2)');
let inputFile = document.querySelector('input:nth-of-type(3)');
let inputFirstColor = document.querySelector('input:nth-of-type(4)');
let inputSecondColor = document.querySelector('input:nth-of-type(5)');
let textarea = document.querySelector('textarea');
let checkboxes = document.querySelectorAll('li input');
let lists = document.querySelectorAll('li');
let button = document.querySelector('button');




button.addEventListener('click', function(event) {
  event.preventDefault();

  let section = document.createElement('SECTION');
  let h3 = document.createElement('H3');
  let paragraph = document.createElement('P');
  let article = document.createElement('ARTICLE');
  let image = document.createElement('IMG');
  let span = document.createElement('SPAN');
  let footer = document.createElement('FOOTER');

  let name = inputName.value;
  inputName.value = '';
  let date = inputDate.value;
  inputDate.value = '';
  let text = textarea.value;
  textarea.value = '';
  let background = inputFirstColor.value;
  inputFirstColor.value = '#000000';
  let color = inputSecondColor.value;
  inputSecondColor.value = '#000000';

  // let skills = '';
  document.body.appendChild(section);
  section.appendChild(h3);
  section.appendChild(paragraph);
  section.appendChild(image);
  section.appendChild(footer);
  section.appendChild(span);
  section.appendChild(article);

  section.style.background = `${background}`;
  section.style.color = `${color}`;

  h3.innerText = `${name}`;
  paragraph.innerText = `Born at: ${date}`;
  footer.innerText = `${text}`;
  span.innerText = 'X';


  let skills = [];
  console.log(skills);
  let theSkills = skills.join(',');
  console.log(theSkills);

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
        // skills += lists[i].innerText + ',' + ' ';
        skills.push(lists[i].innerText);
        article.innerText = `Programming Skills: ${theSkills}`;
    }
  }


  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
        checkboxes[i].checked = false;
    }
  }

  span.addEventListener('click', function(ev) {
    document.body.removeChild(ev.currentTarget.parentElement);
  })

})

let section1 = document.querySelector('section');
