$(document).ready(function() {
  $('.accordion-header').on('click', function() {
    $(this).next('.accordion-content').slideToggle();

    let img = $(this).find('img');
    let src = img.attr('src') === '../../icons/accordion-arrow-up-pc.svg' ? '../../icons/accordion-arrow-down-pc.svg' : '../../icons/accordion-arrow-up-pc.svg';
    img.attr('src', src);
  });
});
