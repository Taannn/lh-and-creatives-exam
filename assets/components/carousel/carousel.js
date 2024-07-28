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
      const imgDiv = $('<div></div>').append(`<img src="${src}" alt="">`);
      slide.append(imgDiv);
    });
    carouselContainer.append(slide);
  });

  // carouel logic
  let currentSlide = 0;
  const slides = $('.carousel-slide');
  const totalSlides = slides.length;

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
