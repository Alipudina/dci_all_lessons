const authToken = 'bd3be3a2a884168866b96b0f81237152';
const city = 'hamburg';
let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${authToken}`;

$(document).ready(ev => {

  $('button').click(async ev => {
    // $.ajax(weatherUrl)
    // .done(data => {
    //   console.log(data);
    // })
    //   .fail(err => {
    //     console.log(err);
    //   })

    let myDiv = document.createElement('DIV');

    let dataWeather = await $.ajax(weatherUrl);
    console.log(dataWeather);
    $('div').append(dataWeather.main.name);
    $('body').append($('div'));
    console.log(dataWeather.main.name);
  })

})
