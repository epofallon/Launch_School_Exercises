/* eslint-disable max-lines-per-function */
const questions = [
  {
    id: 1,
    description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
    options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
  },
  {
    id: 2,
    description: 'Which of the following numbers is the answer to Life, the \
                  Universe and Everything?',
    options: ['66', '13', '111', '42'],
  },
  {
    id: 3,
    description: 'What is Pan Galactic Gargle Blaster?',
    options: ['A drink', 'A machine', 'A creature', 'None of the above'],
  },
  {
    id: 4,
    description: 'Which star system does Ford Prefect belong to?',
    options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
  },
];

const answerKey = {
  1: 'Douglas Adams',
  2: '42',
  3: 'A drink',
  4: 'Betelgeuse',
};

class Model {
  constructor(questions, answerKey) {
    this.questions = questions;
    this.answerKey = answerKey;
  }

  formatAnswers(data) {
    let answers = {};
    Object.keys(this.answerKey).forEach(id => {
      answers[id] = data.get(`${id}`);
    });
    return answers;
  }
}

class View {
  constructor() {
    this.compileTemplates();
    this.registerPartials();
    this.form = this.getElement('form');
    this.submit = this.getElement('a.submit');
    this.resetForm = this.getElement('a.reset_form');
  }

  getElement(selector) {
    return document.querySelector(selector);
  }

  getAllElements(selector) {
    return [...document.querySelectorAll(selector)];
  }

  compileTemplates() {
    this.templates = {};
    let selector = '[type="text/x-handelbars-template"]';
    let scripts = document.querySelectorAll(selector);
    scripts.forEach(script => {
      this.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
  }

  registerPartials() {
    document.querySelectorAll('[data-type="partial"]').forEach(partial => {
      Handlebars.registerPartial(partial.id, partial.innerHTML);
    });
  }

  buildQuestions(data) {
    let questions = this.templates.questions(data);
    this.submit.insertAdjacentHTML('beforebegin', questions);
    this.questions = this.getAllElements('.question');
  }

  onSubmit(handler) {
    this.submit.onclick = event => {
      event.preventDefault();
      if (this.submit.classList.contains('disabled')) return;
      this.submit.classList.add('disabled');
      handler();
    };
  }

  onReset(handler) {
    this.resetForm.onclick = event => {
      event.preventDefault();
      if (this.resetForm.classList.contains('disabled')) return;
      this.resetForm.classList.add('disabled');
      handler();
    };
  }

  getQuestion(id) {
    return this.questions.find(question => question.dataset.id === String(id));
  }

  clearResults() {
    this.questions.forEach(question => {
      question.lastElementChild.textContent = '';
      question.lastElementChild.className = 'result';
    });
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.buildQuestions(this.model.questions);
    this.bindEvents();
  }

  bindEvents() {
    this.view.onSubmit(this.handleSubmit);
    this.view.onReset(this.handleReset);
  }

  handleSubmit = () => {
    let data = new FormData(this.view.form);
    this.model.answers = this.model.formatAnswers(data);
    this.processAnswers();
  }

  handleReset = () => {
    this.view.clearResults();
    this.view.submit.classList.remove('disabled');
    this.view.form.reset();
  }

  processAnswers() {
    let key = this.model.answerKey;
    let ids = Object.keys(key);
    let answers = this.model.answers;
    let message;

    ids.forEach(id => {
      let question = this.view.getQuestion(id);
      let result = question.lastElementChild;
      if (!answers[id]) {
        message = `Question left blank. Correct answer is: "${key[id]}".`;
        result.classList.add('wrong');
      } else if (answers[id] === key[id]) {
        message = 'Correct answer!';
        result.classList.add('correct');
      } else {
        message = `Wrong answer. Correct answer is: "${key[id]}".`;
        result.classList.add('wrong');
      }

      result.textContent = message;
      this.view.resetForm.classList.remove('disabled');
    });
  }
}


let app;

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-unused-vars
  app = new Controller(new Model(questions, answerKey), new View());
});

// console.log(app.view.templates.questions(app.model.questions));

/*
Process answers
- get data from form when submitted
- process answer data -> assign it to the model
- for each question display a result
  - iterate through the answer key
    - check the answers object and compare it's value to the answer key
    - if the answers match
      - message = 'Correct Answer'
    - if the answer is `null`
      - message = 
        - 'You didn't not answer this question. Correct answer is: "A drink".'
    - if the answers don't match
      - Wrong Answer. The correct answer is: "42".
- disable the `submit` link

    - for answer
      - assign correct message
      - update the p.result for the correct question
*/