
let btn = document.querySelector('div');
let section = document.querySelector('section');

let myFotos = ['bird1', 'bird2', 'bird3', 'bird4', 'bird5', 'bird6'];


let mainFunc = () => {
  let allPromises = [];
  for (foto of myFotos) {
    // console.log(foto);
    let url = `../practice_images/${foto}.jpeg`;
    let myPromise = new Promise((resolve, reject) => {
        resolve(fetch(url));
    })
    allPromises.push(myPromise);
  }
  // console.log(allPromises);
  return Promise.all(allPromises);
}
// mainFunc();


let asyncFunc = async () => {
    let response = await mainFunc();
    let counter = 0;

    let timeFunc = setInterval(() => {
      if (counter === response.length - 1) {
        clearInterval(timeFunc);
      }

      let img = document.createElement('IMG');
      img.src = (response[counter]).url;
      section.appendChild(img);
      counter++;
    },500)
    // console.log(response[0]);

}
// asyncFunc();



btn.addEventListener('click', function myFun(ev) {
  asyncFunc();
   ev.currentTarget.removeEventListener('click', myFun);
})
