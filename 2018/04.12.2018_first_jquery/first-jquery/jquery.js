
//  selectors

let paragraphProperties = {'display': 'block', 'color': 'red', 'padding': '2vw 0'}

let convertToCelsius = tempToKelvin => 273 - tempToKelvin;

$().ready(ev => {
  console.log(' it was laoded');

  // $('button').click(ev => {
  //   console.log(ev.target);
  // })

  // $('button:first-of-type').click(ev => {
  //   console.log(ev.target);
  // })


  $('button').click(ev => {
    let myP = $('p');
    // myP.show();
    // myP.toggle();
    // myP.fadeToggle(500);
    myP.slideToggle(500);
    myP.addClass('blue');
    // myP.css('display', 'block');
    // myP.css(paragraphProperties);
    myP.text('this is a new text!');
    myP.html(`this is a <b>new</b> text!`);
    myP.text(); // grab just the text
  })

  console.log('#######################################');

})
