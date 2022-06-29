/*
- methods:
  - info -> logs the name and year of the student
  - addCourse -> enrolls student in a course.
    - a `course` is an object literal that has properties for its `name` and `code`
  - listCourses -> returns a list of the courses the student is enrolled in.
  - addNote -> adds a `note` property to a course. Takes a `code` and a `note` as an argument. If a note already exists, the `note` is appended to the existing one
  - updateNote -> Updates a `note` for a course. Updating the note replaces the exisiting note with the new note.
  - viewNotes -> Logs the notes for all the courses. Courses without notes are not displayed.

*/
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },
    listCourses() {
      return this.courses;
    },
    addCourse(course) {
      this.courses.push(course);
    },
    addNote(code, note) {
      let course = this.findCourse(code);
      if (!course) return;

      if (course.note === undefined) {
        course.note = note;
      } else {
        course.note = course.note + '; ' + note;
      }
    },
    viewNotes() {
      this.courses.forEach(course => {
        if (course.note !== undefined) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },
    updateNote(code, note) {
      let course = this.findCourse(code);
      if (!course) return;

      course.note = note;
    },
    findCourse(code) {
      return this.courses.filter(course => course.code === code).pop();
    },
  };
}


let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
console.log(foo.listCourses());
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
console.log(foo.listCourses());
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// // "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
foo.addNote(225, 'OO is neat');
foo.viewNotes();
// // "Math: Fun course"
// // "Advanced Math: Difficult subject"