let titles = document.querySelectorAll('nav > li');
let lists = document.querySelectorAll('ul');

let checkAndRemoveClass =  function(listsOfElements, classToCheck) {
  for (let j = 0; j < listsOfElements.length; j++) {
    if (lisstOfElements[j].classList.contains(classToCheck)) {
      listsOfElements[j].classList.remove(classToCheck);
      return;
    }
  }
}

for (let i = 0; i < titles.length; i++) {
  titles[i].addEventListener('click', function(ev) {
    ev.stopPropagation();
    checkAndRemoveClass(lists, 'active');
    lists[i].classList.add('active');
  })
}

document.body.addEventListener('click', function() {
  checkAndRemoveClass(lists, 'active');
})
