$().ready(ev => {

  console.log('hi');
  // $('button:nth-of-type(2)').click(ev => {
  //   $('p:nth-of-type(1)').css('display', 'none');
  //   $('p:nth-of-type(2)').css('display', 'block');
  //   $('p:nth-of-type(3)').css('display', 'none');
  //   // $('p:nth-of-type(2)').toggle();
  //   // $('p:first-of-type').toggle();
  // })
  //
  // $('button:nth-of-type(3)').click(ev => {
  //   $('p:nth-of-type(3)').css('display', 'block');
  //   $('p:nth-of-type(2)').css('display', 'none');
  //   $('p:nth-of-type(1)').css('display', 'none');
  //   // $('p:nth-of-type(3)').toggle();
  //   // $('p:nth-of-type(2)').toggle();
  //   // $('p:nth-of-type(1)').toggle();
  // })


  $('button').click(ev => {
    $('p').hide();
    let identityAttribute = ev.target.getAttribute('identifier');
    $(`p[identifier=${identityAttribute}]`).show().slideUp(2000);
    // $(`p[identifier=${identityAttribute}]`).show().slideUp(1000);

    let myH3 = $('h3');
    myH3.css({'display': 'block', 'color': 'red', 'background': 'cyan', 'text-align': 'center', 'padding': '3vw', 'font-size': '3vw'})
    // $('')
  })

})
