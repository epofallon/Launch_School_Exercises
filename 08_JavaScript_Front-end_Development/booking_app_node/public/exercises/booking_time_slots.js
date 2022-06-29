/* eslint-disable max-lines-per-function */
const DOMAIN = 'http://localhost:3000';
let staff;
let schedules;

function getStaff() {
  let req = new XMLHttpRequest();
  req.open('GET', DOMAIN + '/api/staff_members');
  req.responseType = 'json';
  req.addEventListener('load', () => {
    staff = req.response;
  });

  req.send();
}

function makeScheduleString(slot) {
  let name = staff.find(({id}) => id === slot.staff_id).name;
  return `${name} | ${slot.date} | ${slot.time}`;
}

function isFree({student_email}) {
  return !student_email;
}

function makeOption(slot) {
  let option = document.createElement('option');
  option.value = slot;
  option.textContent = slot;
  return option;
}

function findBookingID(scheduleString) {
  let staffId = staff.find(member => scheduleString.includes(member.name)).id;
  let timeStr = scheduleString.match(/[0-9]{2}:[0-9]{2}$/)[0];
  let dateStr = scheduleString.match(/[0-9]{2}(\-[0-9]{2}){2}/)[0];
  return schedules.find(({staff_id, time, date}) => {
    return staff_id === staffId && time === timeStr && date === dateStr;
  }).id;
}

let data;

function getSchedules(callback) {
  document.querySelector('#schedule').disabled = true;
  let scheduleReq = new XMLHttpRequest();
  scheduleReq.open('GET', DOMAIN + `/api/schedules`);
  scheduleReq.responseType = 'json';

  scheduleReq.addEventListener('load', () => {
    schedules = scheduleReq.response;
    if (callback) callback();
  });

  scheduleReq.send();
}

function listSchedules() {
  let list = document.querySelector('#schedule');
  list.options.length = 0;
  let free = schedules.filter(isFree).map(makeScheduleString);
  free.forEach(slot => list.appendChild(makeOption(slot)));
  list.disabled = false;
}

function getBookingCode(response) {
  return response.match(/[0-9]{6}$/)[0];
}

function addNewStudentForm(code, email) {
  let form = document.createElement('form');
  let formAttributes = [['id', 'new-student-form'],
                        ['method', 'post'],
                        ['action', '/api/students']];
  
  formAttributes.forEach(([attr, value]) => form.setAttribute(attr, value));

  form.innerHTML = `<h1>Please provide new student details</h1>
  <label for="email">Email:</label>
  <input type="email" id="new-student-email" name="email"><br>
  <label for="name">Name:</label>
  <input type="text" id="new-student-name" name="name"><br>
  <label for="code">Booking Sequence:</label>
  <input type="text" id="code" name="booking_sequence">
  <input type="submit"></input>`.trim();

  document.querySelector('#book-time-form')
          .insertAdjacentElement('afterend', form);
  document.querySelector('#new-student-email').value = email;
  document.querySelector('#code').value = code;
}

function readyNewStudent(bookingReq, bookingData) {
  let form = document.querySelector('#new-student-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    let req = new XMLHttpRequest();
    req.open('POST', form.action);
    req.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

    let studentData = JSON.stringify(Object.fromEntries(new FormData(form)));
    req.addEventListener('load', () => {
      alert(req.response);
      if (req.status === 201) {
        bookingReq.open('POST', '/api/bookings');
        bookingReq.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        bookingReq.send(bookingData);
      }
    });

    req.send(studentData);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  getStaff();
  let list = document.querySelector('#schedule');
  let form = document.querySelector('#book-time-form');

  list.addEventListener('click', () => {
    if (list.options.length === 0) getSchedules(listSchedules);
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    let req = new XMLHttpRequest();
    req.open('POST', form.action);
    req.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

    data = Object.fromEntries(new FormData(form));
    data.id = findBookingID(data.schedule);
    let reqData = JSON.stringify({ student_email: data.email, id: data.id });

    req.addEventListener('load', () => {
      if (req.status === 204) {
        alert('Booked');
        getSchedules(listSchedules);
        form.reset();
        if (document.querySelector('#new-student-form')) {
          document.querySelector('#new-student-form').remove();
        }
      } else {
        alert(req.response);
        let code = getBookingCode(req.response);
        addNewStudentForm(code, data.email);
        readyNewStudent(req, reqData);
      }
    });

    req.send(reqData);
  });
});