class App {
  constructor() {
    this.form = document.querySelector('form');
    this.inputs = [...document.querySelectorAll('input')];
    this.blockquote = document.querySelector('#form_data');
    this.bindFocusOut(this.handleFocusOut);
    this.bindFocusIn(this.handleFocusIn);
    this.bindSubmit(this.handleSubmit);
    this.bindNames(this.handleNonAlphabetic);
    this.bindCard(this.handleCardNumber);
    this.bindPhone(this.handlePhoneNumber);
  }

  bindFocusOut(handler) {
    this.form.addEventListener('focusout', event => {
      let target = event.target;
      if (target.tagName !== 'INPUT') return;

      handler(target);
    });
  }

  bindFocusIn(handler) {
    this.form.addEventListener('focusin', event => {
      let target = event.target;
      if (target.tagName !== 'INPUT') return;

      handler(target);
    });
  }

  bindSubmit(handler) {
    this.form.onsubmit = event => {
      event.preventDefault();
      let target = event.target;
      if (target.checkValidity()) {
        alert('Form submitted. Thanks!');
        this.serializeData();
        target.reset();
      } else {
        handler(target);
      }
    };
  }

  bindNames(handler) {
    let names = this.inputs.filter(input => input.id.includes('name'));
    names.forEach(name => {
      name.onkeydown = event => {
        if (!event.key) return;
        if (event.key.length === 1) handler(event);
      };
    });
  }

  bindCard(handler) {
    let cards = this.inputs.filter(input => input.name === 'card_number');
    cards.forEach(card => {
      card.onkeydown = event => {
        if (!event.key) return;
        if (event.key.length === 1) handler(event);
      };
    });
  }

  bindPhone(handler) {
    let phone = this.inputs.find(input => input.id === 'phone');
    phone.onkeydown = event => {
      if (!event.key) return;
      if (event.key.length === 1) handler(event);
    };
  }

  handleFocusOut  = (target) => {
    if (target.validity.valueMissing) {
      this.missingValue(target);
    } else if (target.validity.patternMismatch) {
      this.mistmatchedPattern(target);
    } else if (target.validity.tooShort) {
      this.textShort(target);
    } else if (this.form.checkValidity()) {
      this.form.firstElementChild.textContent = '';
    }
  }

  handleFocusIn = (target) => {
    if (!target.classList.contains('invalid_field')) return;
    this.getSpan(target).textContent = '';
    target.classList.remove('invalid_field');
  }

  handleSubmit = (target) => {
    let message = target.firstElementChild;
    message.textContent = 'Fix errors before submitting this form.';
  }

  handleNonAlphabetic = (event) => {
    let target = event.target;
    if (target.id === 'first_name' || target.id === 'last_name') {
      if (/[^a-zA-Z'\s]/.test(event.key)) {
        event.preventDefault();
      }
    }
  }

  handleCardNumber = (event) => {
    let target = event.target;
    if (/\d/.test(event.key) && target.value.length < 4) {
      target.value += event.key;
      if (target.value.length === 4 && !target.id.includes('4')) {
        target.nextElementSibling.nextElementSibling.focus();
      }
    }
    event.preventDefault();
  }

  handlePhoneNumber = (event) => {
    let target = event.target;
    if (target.id === 'phone') {
      if (/[^-0-9]/.test(event.key)) {
        event.preventDefault();
      }
    }
  }

  missingValue(target) {
    let text = `${this.getLabel(target).textContent} is a required field.`;
    this.invalidField(target, text);
  }

  mistmatchedPattern(target) {
    let text = `Please enter a valid ${this.getLabel(target).textContent}`;
    this.invalidField(target, text);
  }

  textShort(target) {
    let label = this.getLabel(target).textContent;
    let numChars = target.getAttribute('minlength');
    let text = `${label} must be at least ${numChars} characters.`;
    this.invalidField(target, text);
  }

  invalidField(target, text) {
    this.getSpan(target).textContent = text;
    target.classList.add('invalid_field');
  }

  serializeData() {
    let formData = new FormData(this.form);
    formData.set('card_number', formData.getAll('card_number').join(''));
    let data = new URLSearchParams(formData);
    this.blockquote.textContent = data;
    this.blockquote.hidden = false;
  }

  getSpan(target) {
    return target.parentElement.nextElementSibling;
  }

  getLabel(target) {
    return target.parentElement.previousElementSibling.firstElementChild;
  }
}

// eslint-disable-next-line no-unused-vars
let app = new App();