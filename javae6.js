const courses = [
  { _id: 1, title: "JavaScript I" },
  { _id: 2, title: "HTML y CSS I" },
];

const students = [
  { _id: 1, name: "Pedro Perez" },
  { _id: 2, name: "Maria Gomez" },
];

const enrollments = [
  { course_id: 1, student_id: 1 },
  { course_id: 2, student_id: 1 },
  { course_id: 2, student_id: 2 },
];

// Imprimir los cursos y los estudiantes de cursos
courses.forEach((course) => {
  console.log(`- ${course.title}`);
  const enrolledStudents = enrollments
    .filter((enrollment) => enrollment.course_id === course._id)
    .map((enrollment) => {
      const student = students.find((student) => student._id === enrollment.student_id);
      return `  * ${student.name}`;
    });
  console.log(enrolledStudents.join("\n"));
});

console.log("");

// Imprimir los estudiantes y los cursos a los que están matriculados
students.forEach((student) => {
  console.log(`- ${student.name}`);
  const enrolledCourses = enrollments
    .filter((enrollment) => enrollment.student_id === student._id)
    .map((enrollment) => {
      const course = courses.find((course) => course._id === enrollment.course_id);
      return `  * ${course.title}`;
    });
  console.log(enrolledCourses.join("\n"));
});
