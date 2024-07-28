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
          <img src="../../icons/accordion-arrow-down-pc.svg" alt="arrow down">
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
    let src = img.attr('src') === '../../icons/accordion-arrow-up-pc.svg' ? '../../icons/accordion-arrow-down-pc.svg' : '../../icons/accordion-arrow-up-pc.svg';
    img.attr('src', src);
  });
});
