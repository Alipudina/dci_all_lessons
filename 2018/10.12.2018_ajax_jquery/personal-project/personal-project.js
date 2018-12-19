
$(document).ready(ev => {

  const authToken = 'bd3be3a2a884168866b96b0f81237152';
  let cities = ['gorgan', 'saveh'];
  const colorTemperature = [
    {limitTemp: 25, color: 'red'},
    {limitTemp: 15, color: 'yellow'},
    {limitTemp: 10, color: 'grey'},
    {limitTemp: 1, color: 'purple'},
    {limitTemp: -50, color: 'white'}
  ];

  let allCities = () => {
    let cityArray = [];
    for (city of cities) {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${authToken}`;

      let getCity = new Promise((resolve,reject) => {
            resolve($.ajax(url));
      });
      cityArray.push(getCity);

    }
    return Promise.all(cityArray);
  }


  let showCity = async function() {

    let myCity = await allCities();
    console.log(myCity);
    let counter = 0;
    let duration = setInterval(() => {
      if (counter === myCity.length-1) {
        clearInterval(duration);
      }
      // console.log(myCity);
      let temperText1 = document.querySelector('span.temperatur1');
      let temperText2 = document.querySelector('span.temperatur2');
      let myText1 = myCity[0].name;
      // console.log(myText1);
      let myText2 = myCity[1].name;
      let temper1 = Math.round(myCity[0].main.temp-273);
      let temper2 = Math.round(myCity[1].main.temp-273);
      let color1 = colorTemperature.find(entry => temper1 > entry.limitTemp).color;
      let color2 = colorTemperature.find(entry => temper2 > entry.limitTemp).color;
      $('div.first').css('color', 'blue');
      $('div.first').css('background', color1);
      $('div.second').css('background', color2);
      // console.log(myCity[0].weather[0].description);
      counter++;
      $('div.first div.city-name1').text(myText1);
      temperText1.innerHTML=`<b>${temper1}</b> <sup>o</sup>C`;
      $('span.icon1').text(myCity[0].weather[0].description);
      $('img.image1').attr('src', `http://openweathermap.org/img/w/${myCity[0].weather[0].icon}.png`);

      $('div.second div.city-name2').text(myText2);
      temperText2.innerHTML=`<b>${temper2}</b> <sup>o</sup>C`;
      $('span.icon2').text(myCity[1].weather[0].description);
      $('img.image2').attr('src', `http://openweathermap.org/img/w/${myCity[1].weather[0].icon}.png`);
    }, 1000);

  }
  showCity();

  let opacityfunc = setInterval(() => {
     $('div.first').animate({opacity: '0'}, 8000);
     $('div.first').animate({opacity: '1'}, 8000);
  }, 500);

  let opacityfunc2 = setInterval(() => {
     $('div.second').animate({opacity: '1'}, 8000);
     $('div.second').animate({opacity: '0'}, 8000);
  }, 500);

// starting error section
  $('div.fixed').hide();

  let showCities = setInterval(() => {
    clearInterval(showCities);
    $('div.animation').hide(400);
    $('div.fixed').show();
  }, 6000);
  // finishig error section

// starting social-icons section
  let iconsInterval = setInterval(() => {
    clearInterval(iconsInterval);
    $('div.social-icons').css('left', '-3vw');
    $('div.social-icons').animate({left: '5vw'}, 2000);
    $('div.social-icons').animate({left: '4vw'}, 800);
  }, 2000)
  // finishig social-icons section

  // starting skills section
  var emptyWidth = $('div.empty')[0].offsetWidth;
  $('div.empty').css('width', 0);
  let skillInterval = setInterval(() => {
    clearInterval(skillInterval);
    let skillsArray = [$('div.html_skill'), $('div.css_skill'), $('div.javascript_skill'),
    $('div.english_skill'), $('div.deutsch_skill'), $('div.farsi_skill')];

    for (item of skillsArray) {
      let itemWidth = item[0].offsetWidth;
      item.css('width', 0);
      item.animate({width: itemWidth}, 2000);
    }
  }, 100);

  let emptyInterval = setInterval(() => {
    clearInterval(emptyInterval);
    $('div.empty').animate({width: emptyWidth}, 3000);

  }, 2000);
  // finishing skills section

  // starting two-city section
  $('div.first-show img').on({
    mouseenter: function(ev) {
      $(this).css('filter', 'brightness(30%)');
      $(this).next().animate({opacity: 1}, 1500);
    },

    mouseleave: function(ev) {
      $(this).css('filter', 'brightness(100%)');
      $(this).next().animate({opacity: 0}, 500)
    }
  })

  $('div.first-show p').on({
    mouseenter: function(ev) {
      $(this).prev().css('filter', 'brightness(30%)');
    },

    mouseleave: function(ev) {
      $(this).prev().css('filter', 'brightness(100%)');
    }
  })

  $('div.first-show img, div.first-show p').click(function(ev) {
    $(this).css('display', 'none');
    $(this).parent().prev().css('display', 'block');
  })

  $('div.gs-images img').click(function(ev) {
    console.log($(this)[0].src);
    let imageSrc = $(this)[0].src;
    $('div.image-viewer img').attr('src', imageSrc);
  })
  // finishing two-city section

  // starting form section
  $('div.button button').click(function() {
    // let inputArray = $('div.input-container input');
    let inputArray = document.querySelectorAll('div.input-container input');
    // console.log(inputArray);
    var checkArray =[];
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].value === '') {
        // var checkArray =[];
        // console.log(inputArray[1].value);
        var checkedString = 'true';
        inputArray[i].value = 'Please fill here!';
        inputArray[i].style.color = 'red';

        inputArray[i].addEventListener('click', function() {
          inputArray[i].value = '';
          inputArray[i].style.color = 'black';
        })
        checkArray.push(checkedString);
      }

    }
    let falseText = 'Please fill here!';
    if (checkArray.length === 0 && $('div.input-container input').val() !== falseText) {
      $('div.form-flex').css('filter', 'brightness(30%)');
        $('div.full-form').css('display', 'block');

        $('div.full-form button').click(function() {
          $('div.form-flex').css('filter', 'brightness(100%)');
          $('div.full-form').css('display', 'none');
          $('div.input-container input').val('');
        })
    }

  })
  // finishig form section


// strating scroll event
  window.onscroll = function() {
    // console.log(window.pageYOffset);
    if(window.pageYOffset > 198 && window.pageYOffset < 1175) {
      $('div.fixed').css('display', 'none');
    } else {
      $('div.fixed').css('display', 'block');
    }
  }


})
