$(document).ready(function() {
  let currentSlide = 0;
  const slides = $('.carousel-slide');

  function showSlide(index) {
    slides.removeClass('active');
    slides.eq(index).addClass('active');
  }

  $('.carousel-next').on('click', function() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  $('.carousel-prev').on('click', function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  // Show the first slide initially
  showSlide(currentSlide);
});