document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.getElementById("card");
  const fourCards = [
    {
      img: {
        src: "../../images/card-4col-img1.png",
        srcsetSmall: "../../images/card-4col-img1@2x.png",
        srcsetLarge: "../../images/card-4col-img1.png",
        alt: "card col4 img1",
        title: "Colleagues sitting on a table"
      },
      title: "Card Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum."
    },
    {
      img: {
        src: "../../images/card-4col-img2.png",
        srcsetSmall: "../../images/card-4col-img2@2x.png",
        srcsetLarge: "../../images/card-4col-img2.png",
        alt: "card col4 img2",
        title: "Colleagues discussing something"
      },
      title: "Card Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum."
    },
    {
      img: {
        src: "../../images/card-4col-img3.png",
        srcsetSmall: "../../images/card-4col-img3@2x.png",
        srcsetLarge: "../../images/card-4col-img3.png",
        alt: "card col4 img3",
        title: "Announcing something"
      },
      title: "Card Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum."
    },
    {
      img: {
        src: "../../images/card-4col-img4.png",
        srcsetSmall: "../../images/card-4col-img4@2x.png",
        srcsetLarge: "../../images/card-4col-img4.png",
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
        src: "../../images/card-3col-img1.png",
        srcsetSmall: "../../images/card-3col-img1@2x.png",
        srcsetLarge: "../../images/card-3col-img1.png",
        alt: "card col3 img1",
        title: "View of City"
      },
      title: "Card Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum."
    },
    {
      img: {
        src: "../../images/card-3col-img2.png",
        srcsetSmall: "../../images/card-3col-img2@2x.png",
        srcsetLarge: "../../images/card-3col-img2.png",
        alt: "card col3 img2",
        title: "View of Building"
      },
      title: "Card Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum."
    },
    {
      img: {
        src: "../../images/card-3col-img3.png",
        srcsetSmall: "../../images/card-3col-img3@2x.png",
        srcsetLarge: "../../images/card-3col-img3.png",
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
          <img src${card.img.src} alt=${card.img.alt} title=${card.img.title}>
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