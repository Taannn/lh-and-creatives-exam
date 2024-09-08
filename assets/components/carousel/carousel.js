$(document).ready(function() {
  const imageGroups = [
    [
      "../../images/carousel-img05.png",
      "../../images/carousel-img06.png",
      "../../images/carousel-img01.png",
      "../../images/carousel-img02.png",
      "../../images/carousel-img03.png",
      "../../images/carousel-img04.png"
    ],
    [
      "../../images/carousel-img01.png",
      "../../images/carousel-img02.png",
      "../../images/carousel-img03.png",
      "../../images/carousel-img04.png",
      "../../images/carousel-img05.png",
      "../../images/carousel-img06.png"
    ],
    [
      "../../images/carousel-img03.png",
      "../../images/carousel-img04.png",
      "../../images/carousel-img05.png",
      "../../images/carousel-img06.png",
      "../../images/carousel-img01.png",
      "../../images/carousel-img02.png"
    ]
  ];

  const carouselContainer = $('#carousel-container');

  imageGroups.forEach(group => {
    const slide = $('<div class="six-block carousel-slide"></div>');
    group.forEach(src => {
      const imgDiv = $('<div></div>').append(`<img src="${src}" alt="carousel image" title="carousel image">`);
      slide.append(imgDiv);
    });
    carouselContainer.append(slide);
  });

  // carouel logic
  let currentSlide = 0;
  const slides = $('.carousel-slide');
  const totalSlides = slides.length;

  // how it works sliding into next index/image
  // if you have 4 slides, then you have 0, 1, 2, and 3 since it's index-format
  // eq() returns the element in an array corresponding to the index passed onto it as argument.
  // so 0 at slide 1, next then 0 + 1 = 1, 1 % 4 = 0, remainder = 1 - (4 * 0) = 1
  // cool tip: if the dividend on modulus operation is smaller the divisor, the remainder/asnwer is always the same as dividend. Ex. 5 % 7 = 5, 4 % 9 = 4 :)
  // if we reach 4 % 4 = 0, then we simply return to slide 1

  $('.carousel-next').on('click', function() {
    slides.eq(currentSlide).removeClass('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides.eq(currentSlide).addClass('active');
  });

  $('.carousel-prev').on('click', function() {
    slides.eq(currentSlide).removeClass('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides.eq(currentSlide).addClass('active');
  });

  // show first slide
  slides.eq(currentSlide).addClass('active');
});
