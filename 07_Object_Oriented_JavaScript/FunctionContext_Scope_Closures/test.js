function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} student`);
    },

    listCourses() {
      return this.courses;
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(courseCode, note) {
      const course = this.courses.filter(({code}) => code === courseCode)[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }

    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    updateNote(courseCode, note) {
      const course = this.courses.filter(({code}) => code === courseCode)[0];

      if (course) {
        course.note = note;
      }
    },
  };
}

const school = {
  students: [],
  addStudent(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      const student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid Year');
    }
  },

  enrollStudent(student, courseName, courseCode) {
    student.addCourse({name: courseName, code: courseCode})
  },

  addGrade(student, courseName, grade) {
    const course = student.listCourses().filter(({name}) => name === courseName)[0];

    if (course) {
      course.grade = grade;
    }
  },

  getReportCard(student) {
    student.listCourses().forEach(({grade, name}) => {
      if (grade) {
        console.log(`${name}: ${String(grade)}`);
      } else {
        console.log(`${name}: In progress`);
      }
    });
  },

  courseReport(courseName) {
    function getCourse(student, courseName) {
      return student.listCourses().filter(({name}) => name === courseName)[0];
    }

    const courseStudents = this.students.map(student => {
      const course = getCourse(student, courseName) || { grade: undefined };
      return { name: student.name, grade: course.grade };
    }).filter(({grade}) => grade);

    if (courseStudents.length > 0) {
      console.log(`=${courseName} Grades=`);

      const average = courseStudents.reduce((total, {name, grade}) => {
        console.log(`${name}: ${String(grade)}`);
        return total + grade;
      }, 0) / courseStudents.length;

      console.log('---');
      console.log(`Course Average: ${String(average)}`);
    }
  },
};

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