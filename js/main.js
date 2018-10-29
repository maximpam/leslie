$(document).ready(function(){
  $('.header__slider').slick({
    dots: true,
    arrows: false,
  });

  $('.fourth__galery').slick({
    dots: false,
    arrows: true,
    infinite: true,
    appendArrows: $('.gallery__navigation'),
    prevArrow: '<div class="left__button"><img class="nav__arrows" src="maket-assets/left.png"><span class="navigation__text">Previous page</span></div>',
    nextArrow: '<div class="right__button"><span class="navigation__text">Next Page</span><img class="nav__arrows" src="maket-assets/right.png"></div>'
  });

});

