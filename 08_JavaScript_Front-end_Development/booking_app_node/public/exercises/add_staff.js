/* eslint-disable max-lines-per-function */
// const DOMAIN = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('#add-staff-form');
  form.addEventListener('submit', event => {
    event.preventDefault();

    let data = new FormData(form);

    let request = new XMLHttpRequest();
    request.open('POST', form.action);

    request.addEventListener('load', () => {
      if (request.status === 201) {
        let id = JSON.parse(request.response).id;
        alert(`Successfully created staff with id: ${id}`);
        form.reset();
      } else {
        alert(request.response);
      }
    });

    request.send(data);
  });
});
