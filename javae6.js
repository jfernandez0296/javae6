const courses = [
  { _id: 1, title: "JavaScript I" },
  { _id: 2, title: "HTML y CSS I" },
]

const students = [
  { _id: 1, name: "Pedro Perez" },
  { _id: 2, name: "Maria Gomez" },
]

const enrollments = [
  { course_id: 1, student_id: 1 },
  { course_id: 2, student_id: 1 },
  { course_id: 2, student_id: 2 }
]

//Primer ejercicio
console.log("-"+courses[0].title)
console.log("*"+students[0].name)
console.log("-"+courses[1].title)
console.log("*"+students[0].name)
console.log("*"+students[1].name)
console.log("--------------------------")


//Segundo ejercicio
console.log("-"+students[0].name)
console.log("*"+courses[0].title)
console.log("*"+courses[1].title)
console.log("-"+students[1].name)
console.log("*"+courses[1].title)
