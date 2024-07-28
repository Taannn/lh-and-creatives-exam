// header
const menu = document.getElementById('menu');
const close = document.querySelector('#menu i');
const nav = document.querySelector('.header-mobile');
let toggle = false;

menu.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle){
    close.classList.replace('fa-bars', 'fa-xmark');
    nav.classList.remove('hidden');
    nav.classList.add('show');
  } else {
    close.classList.replace('fa-xmark', 'fa-bars');
    nav.classList.remove('show');
    nav.classList.add('hidden');
  }
});

// carousel
$(document).ready(function() {
  const imageGroups = [
    [
      "assets/images/carousel-img05.png",
      "assets/images/carousel-img06.png",
      "assets/images/carousel-img01.png",
      "assets/images/carousel-img02.png",
      "assets/images/carousel-img03.png",
      "assets/images/carousel-img04.png"
    ],
    [
      "assets/images/carousel-img01.png",
      "assets/images/carousel-img02.png",
      "assets/images/carousel-img03.png",
      "assets/images/carousel-img04.png",
      "assets/images/carousel-img05.png",
      "assets/images/carousel-img06.png"
    ],
    [
      "assets/images/carousel-img03.png",
      "assets/images/carousel-img04.png",
      "assets/images/carousel-img05.png",
      "assets/images/carousel-img06.png",
      "assets/images/carousel-img01.png",
      "assets/images/carousel-img02.png"
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


// accordion
$(document).ready(function() {
  const accordionData = [
    {
      title: "Accordion Title 1",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde fugiat, minima vel explicabo repudiandae dolorum soluta sit adipisci magni ullam eum! Beatae assumenda nam nostrum explicabo voluptatibus et voluptate, provident earum nesciunt cupiditate sint possimus, quas quod ex repellendus aspernatur amet? Fugiat consequuntur facere, odio vel nisi aspernatur ex praesentium quaerat! Itaque iste voluptatibus expedita deserunt hic temporibus porro, repellat impedit praesentium. Nulla quasi temporibus delectus?"
    },
    {
      title: "Accordion Title 2",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde fugiat, minima vel explicabo repudiandae dolorum soluta sit adipisci magni ullam eum! Beatae assumenda nam nostrum explicabo voluptatibus et voluptate, provident earum nesciunt cupiditate sint possimus, quas quod ex repellendus aspernatur amet? Fugiat consequuntur facere, odio vel nisi aspernatur ex praesentium quaerat! Itaque iste voluptatibus expedita deserunt hic temporibus porro, repellat impedit praesentium. Nulla quasi temporibus delectus?"
    },
    {
      title: "Accordion Title 3",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde fugiat, minima vel explicabo repudiandae dolorum soluta sit adipisci magni ullam eum! Beatae assumenda nam nostrum explicabo voluptatibus et voluptate, provident earum nesciunt cupiditate sint possimus, quas quod ex repellendus aspernatur amet? Fugiat consequuntur facere, odio vel nisi aspernatur ex praesentium quaerat! Itaque iste voluptatibus expedita deserunt hic temporibus porro, repellat impedit praesentium. Nulla quasi temporibus delectus?"
    },
    {
      title: "Accordion Title 4",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde fugiat, minima vel explicabo repudiandae dolorum soluta sit adipisci magni ullam eum! Beatae assumenda nam nostrum explicabo voluptatibus et voluptate, provident earum nesciunt cupiditate sint possimus, quas quod ex repellendus aspernatur amet? Fugiat consequuntur facere, odio vel nisi aspernatur ex praesentium quaerat! Itaque iste voluptatibus expedita deserunt hic temporibus porro, repellat impedit praesentium. Nulla quasi temporibus delectus?"
    },
    {
      title: "Accordion Title 5",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde fugiat, minima vel explicabo repudiandae dolorum soluta sit adipisci magni ullam eum! Beatae assumenda nam nostrum explicabo voluptatibus et voluptate, provident earum nesciunt cupiditate sint possimus, quas quod ex repellendus aspernatur amet? Fugiat consequuntur facere, odio vel nisi aspernatur ex praesentium quaerat! Itaque iste voluptatibus expedita deserunt hic temporibus porro, repellat impedit praesentium. Nulla quasi temporibus delectus?"
    }
  ];

  const accordionContainer = $('.accordion');

  accordionData.forEach(item => {
    const accordionItem = `
      <div class="accordion-item">
        <div class="accordion-header flex-between">
          <h2>${item.title}</h2>
          <img src="assets/icons/accordion-arrow-down-pc.svg" alt="arrow down">
        </div>
        <div class="accordion-content">
          <div class="accordion-divider"><hr></div>
          ${item.content}
        </div>
      </div>
    `;
    accordionContainer.append(accordionItem);
  });

  $('.accordion-header').on('click', function() {
    $(this).next('.accordion-content').slideToggle();

    let img = $(this).find('img');
    let src = img.attr('src') === 'assets/icons/accordion-arrow-up-pc.svg' ? 'assets/icons/accordion-arrow-down-pc.svg' : 'assets/icons/accordion-arrow-up-pc.svg';
    img.attr('src', src);
  });
});

// cards
document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.getElementById("card");
  const fourCards = [
    {
      img: {
        src: "assets/images/card-4col-img1.png",
        srcsetSmall: "assets/images/card-4col-img1@2x.png",
        srcsetLarge: "assets/images/card-4col-img1.png",
        alt: "card col4 img1",
        title: "Colleagues sitting on a table"
      },
      title: "Card Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum."
    },
    {
      img: {
        src: "assets/images/card-4col-img2.png",
        srcsetSmall: "assets/images/card-4col-img2@2x.png",
        srcsetLarge: "assets/images/card-4col-img2.png",
        alt: "card col4 img2",
        title: "Colleagues discussing"
      },
      title: "Card Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum."
    },
    {
      img: {
        src: "assets/images/card-4col-img3.png",
        srcsetSmall: "assets/images/card-4col-img3@2x.png",
        srcsetLarge: "assets/images/card-4col-img3.png",
        alt: "card col4 img3",
        title: "Annoncing"
      },
      title: "Card Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum."
    },
    {
      img: {
        src: "assets/images/card-4col-img4.png",
        srcsetSmall: "assets/images/card-4col-img4@2x.png",
        srcsetLarge: "assets/images/card-4col-img4.png",
        alt: "card col4 img4",
        title: "Team Planning"
      },
      title: "Card Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum."
    }
  ];
  const threeCards = [
    {
      img: {
        src: "assets/images/card-3col-img1.png",
        srcsetSmall: "assets/images/card-3col-img1@2x.png",
        srcsetLarge: "assets/images/card-3col-img1.png",
        alt: "card col3 img1",
        title: "View of City"
      },
      title: "Card Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum."
    },
    {
      img: {
        src: "assets/images/card-3col-img2.png",
        srcsetSmall: "assets/images/card-3col-img2@2x.png",
        srcsetLarge: "assets/images/card-3col-img2.png",
        alt: "card col3 img2",
        title: "View of Building"
      },
      title: "Card Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum."
    },
    {
      img: {
        src: "assets/images/card-3col-img3.png",
        srcsetSmall: "assets/images/card-3col-img3@2x.png",
        srcsetLarge: "assets/images/card-3col-img3.png",
        alt: "card col3 img3",
        title: "View of Office"
      },
      title: "Card Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum."
    }
  ];


  const createCard = (card) => {
    return `
      <div class="card">
        <picture class="card-img">
          <source
            srcset=${card.img.srcsetSmall}
            media="(max-width: 540px)"
          >
          <source
            srcset=${card.img.srcsetLarge}
            media="(min-width: 541px)"
          >
          <img src${card.img.src} alt=${card.img.alt} title${card.img.tooltip}>
        </picture>
        <h3>${card.title}</h3>
        <p>${card.description}</p>
      </div>
    `;
  }

  const cardContent = `
    <div class="container">
      <h1>Card</h1>
      <h2>4 column card on PC</h2>
      <div class="four-block">
        ${fourCards.map(card => createCard(card)).join("")}
      </div>
      <h2>3 column card on PC</h2>
      <div class="three-block">
        ${threeCards.map(card => createCard(card)).join("")}
      </div>
    </div>
  `;

  cardContainer.innerHTML += cardContent;
});