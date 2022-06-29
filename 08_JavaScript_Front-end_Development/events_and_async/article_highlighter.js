/* eslint-disable max-lines-per-function */
document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  const articles = [...document.querySelectorAll('article')];

  function removeHighlight() {
    let highlighted = [...document.querySelectorAll('.highlight')];
    highlighted.forEach(element => element.classList.remove('highlight'));
  }

  function articleFromChild(element) {
    return articles.find(article => article.contains(element));
  }

  document.body.addEventListener('click', event => {
    let element = event.target;
    element = articleFromChild(element) || element;
    removeHighlight();

    if (element.tagName === 'A') {
      let aNum = element.href.match(/[0-9]$/)[0];
      document.getElementById(`article-${aNum}`).classList.add('highlight');
    } else if (element.tagName === 'ARTICLE') {
      element.classList.add('highlight');
    } else {
      main.classList.add('highlight');
    }
  });
});