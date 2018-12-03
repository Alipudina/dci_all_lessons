
let main = document.querySelector('main');
let div = document.querySelectorAll('div');
let lists = document.querySelectorAll('li');

let array = [176, 352, 528, 704, 881];

lists[0].classList.add('show');

main.addEventListener('scroll', function(ev) {

    for (let i = 0; i <= lists.length; i++) {

      for (let k = 0; k <= array.length; k++) {

        if (main.scrollTop >= array[k] && main.scrollTop < array[k+1]) {
            lists[k].classList.remove('show');
            lists[k+1].classList.add('show');

       }
      }

    }
    // ev.currentTarget.removeEventListener('scroll', );
})
