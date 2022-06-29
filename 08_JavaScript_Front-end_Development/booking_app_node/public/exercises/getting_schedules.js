/* eslint-disable max-lines-per-function */
const DOMAIN = 'http://localhost:3000';

function makeGETRequest(path) {
  let request = new XMLHttpRequest();
  request.open('GET', DOMAIN + path);
  request.responseType = 'json';
  request.timeout = 5000;

  request.addEventListener('load', () => {
    let schedules = request.response.filter(item => !item.student_email);

    if (schedules.length === 0) {
      alert('No schedules currently available.');
      return;
    }

    let scheduleCounts = {};
    schedules.forEach(({staff_id}) => {
      let staffId = `staff ${String(staff_id)}`;
      scheduleCounts[staffId] = (scheduleCounts[staffId] || 0) + 1;
    });

    let list = document.createElement('ul');
    Object.keys(scheduleCounts).forEach(staffId => {
      let listItem = document.createElement('li');
      listItem.textContent = `${staffId}: ${scheduleCounts[staffId]}`;
      list.appendChild(listItem);
    });

    document.querySelector('#content').appendChild(list);
  });

  request.addEventListener('timeout', () => alert('Request took too long.'));
  request.addEventListener('loadend', () => alert('Request completed.'));

  request.send();
}

makeGETRequest('/api/schedules');