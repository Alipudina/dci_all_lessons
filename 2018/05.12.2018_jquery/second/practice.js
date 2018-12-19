
$(document).ready(function(ev) {
  $('img').hide();

  // $('h3').click(function(ev) {
  //   let mySign = ev.target.getAttribute('sign');
  //   console.log(mySign);
  //   $('img').slideUp(500);
  //   $(`img[sign=${mySign}]`).slideDown(500);
  // })

  $('h3').on({
    click: function(ev) {
      let mySign = ev.target.getAttribute('sign');
      console.log(mySign);
      $('img').slideUp(500);
      $(`img[sign=${mySign}]`).slideDown(500);
    },

    // mouseleave: function(ev) {
    //   $('img').slideUp(500);
    // }
  })

  $('div').mouseleave(function(ev) {
    $('img').slideUp(500);
  })








  // $('article').hide();

  $('h4').click(function(ev) {
    let myId = ev.target.getAttribute('toKnow');
    console.log(myId);

    let myArticle = document.querySelector(`article[toKnow=${myId}]`);
    let allArticle = document.querySelectorAll('article');
    // $('article').slideUp(500);
    console.log(myArticle);

    for (let i = 0; i < allArticle.length; i++) {
      if (allArticle[i].classList.contains('show')) {
        allArticle[i].classList.remove('show');
      } else if (myArticle.classList.contains('show')) {
        // myArticle.classList.remove('show');
        myArticle.classList.toggle('show');
        // allArticle.classList.toggle('show');
      }
    }
    // allArticle.classList.toggle('show');
    // $(this).next().toggle(500);
  })

  // $('body').click(function(ev) {
  //   $('article').slideUp(500);
  // })

})
