const students = [
  {
    name: "Teemu Teekkari",
    studentId: "tuni12345",
    email: "teemu.teekkari@tuni.fi",
    major: "pervasive computing"
  },
  {
    name: "Teppo Testaaja",
    studentId: "tuni23456",
    email: "teppo.testaaja@tuni.fi",
    major: "pervasive computing"
  },
  {
    name: "Jaakko Javascript",
    studentId: "tuni34567",
    email: "jaakko.javascript@tuni.fi",
    major: "mathematics"
  }
];

let pervasiveMajors = [];

for (let i = 0; i < students.length; i++) {
  if (students[i].major === "pervasive computing") {
    pervasiveMajors.push(students[i]);
  }
}

for (let i = 0; i < pervasiveMajors.length; i++) {
  console.log(pervasiveMajors[i].name);
}
