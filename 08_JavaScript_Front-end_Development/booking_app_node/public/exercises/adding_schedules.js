/* eslint-disable max-lines-per-function */
const DOMAIN = 'http://localhost:3000';
let staff;

function listStaffMembers() {
  let req = new XMLHttpRequest();
  req.open('GET', DOMAIN + '/api/staff_members');
  req.responseType = 'json';

  req.addEventListener('load', () => {
    staff = req.response;
    let selectList = document.querySelector('select');

    staff.forEach(({name}) => {
      let option = document.createElement('option');
      option.textContent = name;
      option.value = name;
      selectList.appendChild(option);
    });
  });

  req.send();
}

function formatData(data) {
  let entries = { schedules: [] };
  let currentEntry;
  data.forEach((value, key) => {

    if (key === 'name-select') {
      if (currentEntry) entries.schedules.push(currentEntry);

      let id = staff.find(person => person.name === value).id;
      // eslint-disable-next-line camelcase
      currentEntry = { staff_id: id };
    } else {
      currentEntry[key] = value;
    }
  });
  entries.schedules.push(currentEntry);

  return JSON.stringify(entries);
}

let data;

document.addEventListener('DOMContentLoaded', () => {
  listStaffMembers();

  let form = document.querySelector('#add-staff-form');
  let addButton = document.querySelector('#add-schedule');
  let scheduleCount = 1;

  addButton.addEventListener('click', () => {
    scheduleCount += 1;
    let newField = document.querySelector('fieldset').cloneNode(true);
    let legend = newField.querySelector('legend');
    legend.textContent = 'Schedule ' + scheduleCount;

    let submitButton = document.querySelector('[type=submit]');
    submitButton.parentElement.insertBefore(newField, submitButton);
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    data = formatData(new FormData(form));

    let req = new XMLHttpRequest();
    req.open('POST', DOMAIN + '/api/schedules');
    req.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

    req.addEventListener('load', () => {
      alert(req.response);
      form.reset();
    });

    req.send(data);
  });
});