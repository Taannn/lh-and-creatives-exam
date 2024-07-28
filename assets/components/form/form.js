document.addEventListener("DOMContentLoaded", () => {
  const formContainer = document.getElementById("form");

  const inputFields = [
    {
      label: "Name",
      id: "name",
      type: "text"
    },
    {
      label: "Company",
      id: "company",
      type: "text"
    },
    {
      label: "Email",
      id: "email",
      type: "text"
    }
  ];
  const selectField = {
    label: "Select Field",
    id: "select",
    options: [
      {
        value: "",
        text: ""
      },
      {
        value: "option1",
        text: "Option 1"
      },
      { value:
        "option2",
        text: "Option 2"
      },
      {
        value: "option3",
        text: "Option 3"
      }
    ]
  };
  const radioField = {
    type: "radio",
    legend: "Radio Field",
    name: "radio-selections",
    options: [
      { value: "radio-selection1", id: "radio1", text: "Selection 1", checked: true },
      { value: "radio-selection2", id: "radio2", text: "Selection 2", checked: false },
      { value: "radio-selection3", id: "radio3", text: "Selection 3", checked: false },
      { value: "radio-selection4", id: "radio4", text: "Selection 4", checked: false }
    ]
  };
  const checkboxField = {
    type: "checkbox",
    legend: "Checkbox Field",
    name: "checkbox-selections",
    options: [
      { value: "checkbox-selection1", id: "checkbox1", text: "Selection 1", checked: true },
      { value: "checkbox-selection2", id: "checkbox2", text: "Selection 2", checked: true },
      { value: "checkbox-selection3", id: "checkbox3", text: "Selection 3", checked: false },
      { value: "checkbox-selection4", id: "checkbox4", text: "Selection 4", checked: false }
    ]
  };

  const createRadioField = (radio) =>  {
    const createRadioOptions = (options) => {
      return options.map(option => `
        <input
          type=${radio.type}
          name="${radio.name}"
          value="${option.value}"
          id="${option.id}"
          class="form-radio"
          ${option.checked ? "checked" : ""}>
          ${option.text}
      `).join('');
    };

    return `
      <fieldset>
        <div class="four-block">
          <legend class="form-label">${radio.legend}</legend>
          <div class="flex-between">
            ${createRadioOptions(radio.options.slice(0, 2))}
          </div>
          <div class="flex-between">
            ${createRadioOptions(radio.options.slice(2))}
          </div>
        </div>
      </fieldset>
    `;
  }

  const createCheckboxField = (checkbox) =>  {
    const createCheckboxOptions = (options) => {
      return options.map(option => `
        <input
          type=${checkbox.type}
          name="${checkbox.name}"
          value="${option.value}"
          id="${option.id}"
          class="form-radio"
          ${option.checked ? "checked" : ""}>
          ${option.text}
      `).join('');
    };

    return `
      <fieldset>
        <div class="four-block">
          <legend class="form-label">${checkbox.legend}</legend>
          <div class="flex-between">
            ${createCheckboxOptions(checkbox.options.slice(0, 2))}
          </div>
          <div class="flex-between">
            ${createCheckboxOptions(checkbox.options.slice(2))}
          </div>
        </div>
      </fieldset>
    `;
  }

  const createInputField = (field) => {
    return `
      <div class="four-block">
        <label for=${field.id} class="form-label">${field.label}</label>
        <input type=${field.type} id=${field.id} class="form-input">
      </div>
    `;
  }

  const createSelectField = (field) => {
    return `
      <div class="four-block">
        <label for=${field.id} class="form-label">${field.label}</label>
        <select id=${field.id} class="form-select">
          ${field.options.map(option => `<option value=${option.value}>${option.text}</option>`)}
        </select>
      </div>
    `;
  }

  const formContent = `
    <div class="container">
      <h1>Form</h1>
      <form>
        ${inputFields.map(field => createInputField(field)).join("")}
        ${createSelectField(selectField)}
        ${createRadioField(radioField)}
        ${createCheckboxField(checkboxField)}
        <div class="full-width">
            <button type="submit" class="form-btn">Submit</button>
          </div>
        </form>
      </form>
    </div>
  `;

  formContainer.innerHTML += formContent;
});