
$(document).ready(function(ev) {

  $('button').on({
    mouseenter: function(ev) {
      $(this).text('Mouseenter');
      $(this).addClass('button');
      $(this).css('color', 'red');
    },

    mouseleave: function(ev) {
      $(this).text('Mouseleave function');
      $(this).css('color', 'blue');
    }
  })

  $('main > aside > li').click(function(ev) {

    $('main > aside > li').removeClass('selected');
    $(this).addClass('selected');

    $('section').removeClass('active');
    let targetsIdentity = $(this).attr('unique');
    $(`section[unique=${targetsIdentity}]`).addClass('active');
  })

})


// $().ready(ev => {
//
//   $('section').hide();
//   $('li').click(ev => {
//     let identityAtribute = ev.target.getAttribute('identifier');
//     $(`section[identifier=${identityAtribute}]`).show(500);
//   })
//
// })


/* $('button').on({}) */
