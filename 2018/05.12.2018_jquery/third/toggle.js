
$(document).ready(function(ev) {

  $('nav > li').click(function(ev) {
    ev.stopPropagation();
    $('ul').hide();
    $(this).children('ul').show();
    $('li.active').children('ul').hide();
    $('li.active').removeClass('active');
    $(this).addClass('active');


  })

  $('body').click(function(ev) {
    $('ul').hide();
    $('li.active').removeClass('active');
  })

  // the jake solution
//   let removeAndFadeOut = (firstSelector, secondSelector, classToBeRemoved) => {
//   $(firstSelector).children(secondSelector).fadeOut();
//   $(firstSelector).removeClass(classToBeRemoved);
// }
//
// $(document).ready(ev => {
//   $('nav > li').click(function(ev) {
//     ev.stopPropagation();
//     if (ev.target.classList.contains('active')) {
//       removeAndFadeOut(this, 'ul', 'active');
//       return;
//     }
//     removeAndFadeOut('li.active', 'ul', 'active');
//     $(this).children('ul').fadeIn();
//     $(this).addClass('active');
//   })
//   $('body').click(ev => {
//     removeAndFadeOut('li.active', 'ul', 'active');
//   })
// })




  // $('nav>li').click(function(ev){
  //      ev.stopPropagation();
  //      $(this).children('ul').fadeIn();
  //
  //      // when I will click twic on the li in order to close
  //      $("li.mark").children('ul').fadeOut();
  //      $(this).toggleClass('mark');
  //
  //
  //  })
  //
  //  $(document).click(function (ev) {
  //      $("ul").fadeOut();
  //      $("li.mark").removeClass('mark');
  //  })

})
