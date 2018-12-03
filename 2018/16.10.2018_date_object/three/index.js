
let timeTillChristmas = setInterval(function() {
  let today = new Date();
  let christmas = new Date(2018, 11, 25);
  if (christmas <= today) {
    console.log('Christmas has arrived');
    clearInterval(timeTillChristmas);
  }
  let countDown = [];


  let difference = christmas - today;
  console.log(difference);

  let yearsRemaining = difference / 1000/ 60 / 60 / 24 / 365;
  let yearsRounded = Math.floor(yearsRemaining);
  countDown.push(yearsRounded);

  let calculateDays = (yearsRemaining - yearsRounded) * 365;
  let daysRounded = Math.floor(calculateDays);
  countDown.push(daysRounded);

  let calculateHours = (calculateDays - daysRounded) * 24;
  let hourRounded = Math.floor(calculateHours);
  countDown.push(hourRounded);

  let calculateMinutes = (calculateHours - hourRounded) * 60;
  let minutesRounded = Math.floor(calculateMinutes);
  countDown.push(minutesRounded);

  let calculateSeconds = (calculateMinutes - minutesRounded) * 60;
  let secondsRounded = Math.floor(calculateSeconds);
  countDown.push(secondsRounded);

  document.body.innerHTML = `Time till Christmas ${countDown.join(':')}`;
}, 1000)
