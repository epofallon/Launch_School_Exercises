document.addEventListener('DOMContentLoaded', () => {
  let request = new XMLHttpRequest();
  request.open('GET', 'https://js230-web-store-gene.herokuapp.com/v1/products');

  request.addEventListener('load', () => {
    let store = document.getElementById('store');
    console.log(request.response);
    store.innerHTML = request.response;
  });

  request.send();
});