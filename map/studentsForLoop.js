const students = [
  {
    name: "Teemu Teekkari",
    studentId: "tuni12345",
    email: "teemu.teekkari@tuni.fi"
  },
  {
    name: "Teppo Testaaja",
    studentId: "tuni23456",
    email: "teppo.testaaja@tuni.fi"
  },
  {
    name: "Jaakko Javascript",
    studentId: "tuni34567",
    email: "jaakko.javascript@tuni.fi"
  }
];

let studentNames = [];

for (let i = 0; i < students.length; i++) {
  studentNames.push(students[i].name);
}

console.log(studentNames);
