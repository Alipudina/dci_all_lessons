let lArrow = document.querySelector('.lArrow');
let rArrow = document.querySelector('.rArrow');
let images = document.querySelectorAll('img');
let count = 1;
//  rArrow.addEventListener('click', () => {
//     for (let i = 0; i < images.length; i++) {
//         images[i].style.transform=`translateX(-100%)`;
//     }
// })
 // lArrow.addEventListener('click', () => {

    for (let i = 0; i < images.length - 1; i++) {
      lArrow.addEventListener('click', () => {

        // images[i].style.transform='translateX(count + %)';
        // count = i * (100);

        if (i === 0) {
          count = 100;

        } else {
          count = (i + 1) * (100);
        }

          images[i].style.transform=`translateX(${count}%)`;
          console.log(count);


    })

}
