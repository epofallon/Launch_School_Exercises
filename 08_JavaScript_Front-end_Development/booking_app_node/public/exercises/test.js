const DOMAIN = 'http://localhost:3000';

function typicalGETRequest(path) {
  return new Promise(resolve => {
    let request = new XMLHttpRequest();
    request.open('GET', DOMAIN + path);
    request.responseType = 'json';

    request.addEventListener('load', () => resolve(request.response));
    request.send();
  });
}

document.addEventListener('DOMContentLoaded', async event => {

  let [staffMembers, students, schedules, bookings] = (await Promise.allSettled([
    typicalGETRequest('/api/staff_members/'), 
    typicalGETRequest('/api/students'),
    typicalGETRequest('/api/schedules'),
    typicalGETRequest('/api/bookings')
  ])).map(resolvedPromise => resolvedPromise.value);

  console.log('How many staff are there?');
  console.log(staffMembers.length);
  console.log('How many students are there?');
  console.log(students.length);
  console.log('How many schedules exist?')
  console.log(schedules.length);
  console.log('How many schedules have bookings?');
  console.log(bookings.length);
});