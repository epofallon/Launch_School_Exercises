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

let school = function(){
  let students = [];
  let invalidYear = year => !['1st', '2nd', '3rd', '4th', '5th'].includes(year);

  return {
    addStudent(name, year) {
      if (invalidYear(year)) {
        console.log('Invalid year');
        return;
      }

      let student = createStudent(name, year);
      students.push(student);
      return student;
    },
    enrollStudent(student, course) {
      student.addCourse(Object.assign({}, course));
    },
    addGrade(student, code, grade) {
      let course = student.courses.find(course => course.code === code);
      if (course) {
        course.grade = grade;
      }
    },
    getReportCard(student) {
      student.courses.forEach(course => {
        let grade = course.grade || 'In progress';
        console.log(`${course.name}: ${grade}`);
      });
    },
    courseReport(name) {
      let studentsOfClass = students.filter(student => {
        return student.courses.some(course => {
          return course.name === name && course.grade !== undefined;
        });
      });

      if (studentsOfClass.length === 0) {
        console.log(undefined);
        return;
      }

      console.log(`=${name} Grades=`);
      
      let courseAverage = studentsOfClass.reduce((sum, student) => {
        let grade = student.courses.find(course => course.name === name).grade;
        console.log(`${student.name}: ${grade}`);
        return sum + grade;
      }, 0) / studentsOfClass.length;

      console.log('---');
      console.log(`Course Average: ${courseAverage}`);
    },

    hasGrades(students, name) {
      return students.every(student => {
        let course = student.courses.find(course => {
          return course.name === name;
        });
        return course.grade !== undefined;
      });
    },
  };
}();


let foo = school.addStudent('foo', '3rd');
let bar = school.addStudent('bar', '1st');
let qux = school.addStudent('qux', '2nd');

let math = { name: 'Math', code: 101 };
let advanced_math = { name: 'Advanced Math', code: 102 };
let physics = { name: 'Physics', code: 202 };

school.enrollStudent(foo, math);
school.enrollStudent(foo, advanced_math);
school.enrollStudent(foo, physics);

school.enrollStudent(bar, math);

school.enrollStudent(qux, math);
school.enrollStudent(qux, advanced_math);

school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);

school.addGrade(bar, 101, 91);

school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);

school.getReportCard(foo);
console.log('');
school.courseReport('Math');
console.log('');
school.courseReport('Advanced Math');
console.log('');
school.courseReport('Physics');
