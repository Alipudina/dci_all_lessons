const imageNames = ['first', 'second', 'third', 'forth'];
const button = document.querySelector('button');
const container = document.querySelector('#container');

let bringImages = array => {
  let promiseImages = [];

  for (imageName of array) {
    let url = `../images/${imageName}.jpeg`;
    let imagePromise = new Promise((resolve, reject) => {
      resolve(fetch(url));
    })
    promiseImages.push(imagePromise);
  }
  console.log(promiseImages);

  return Promise.all(promiseImages);
}

let showImages = async ev => {
  let responses = await bringImages(imageNames);
  let counter = 0;

  let myInterval = setInterval(() => {
    if (counter === responses.length - 1) {
      clearInterval(myInterval);
    }
    let newImage = document.createElement('IMG');
    newImage.src = responses[counter].url;
    container.appendChild(newImage);
    counter++;
  }, 200)

}

button.addEventListener('click', showImages);
