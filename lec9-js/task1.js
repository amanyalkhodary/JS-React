
const students = [
  {
    name: "Amany",
    marks: [80, 90, 75],
    major: "Management Information System",
    getAverage: function () {
      const sum = this.marks.reduce((acc, curr) => acc + curr, 0);
      return sum / this.marks.length;
    }
  },
  {
    name: "Aseel",
    marks: [50, 90, 85],
    major: "Computer Science",
    getAverage: function () {
      const sum = this.marks.reduce((acc, curr) => acc + curr, 0);
      return sum / this.marks.length;
    }
  },
  {
    name: "Amear",
    marks: [86, 30, 73],
    major: "Multimedia",
    getAverage: function () {
      const sum = this.marks.reduce((acc, curr) => acc + curr, 0);
      return sum / this.marks.length;
    }
  },
  {
    name: "Sami",
    marks: [40, 45, 50],
    major: "Computer Science",
    getAverage: function () {
      const sum = this.marks.reduce((acc, curr) => acc + curr, 0);
      return sum / this.marks.length;
    }
  }
];

 
function calculatePassFailRates(studentList) {
  let passedCount = 0;

  studentList.forEach(student => {
    if (student.getAverage() >= 50) {
      passedCount++;
    }
  });

  const total = studentList.length;
  const passRate = (passedCount / total) * 100;
  const failRate = 100 - passRate;

  return {
    passRate: `${passRate.toFixed(2)}%`,
    failRate: `${failRate.toFixed(2)}%`
  };
}

function getTopAndLowestStudent(studentList) {
  let highest = studentList[0];
  let lowest = studentList[0];

  studentList.forEach(student => {
    const avg = student.getAverage();
    if (avg > highest.getAverage()) {
      highest = student;
    }
    if (avg < lowest.getAverage()) {
      lowest = student;
    }
  });

  return {
    highest: { name: highest.name, average: highest.getAverage().toFixed(2) },
    lowest: { name: lowest.name, average: lowest.getAverage().toFixed(2) }
  };
}


function getAllMajors(studentList) {
  return [...new Set(studentList.map(student => student.major.trim()))];
}


function getMajorAverage(studentList, majorName) {
  const filteredStudents = studentList.filter(
    student => student.major.trim().toLowerCase() === majorName.trim().toLowerCase()
  );

  if (filteredStudents.length === 0) {
    return `لا يوجد طلاب مسجلون في تخصص: ${majorName}`;
  }

  const totalAvgSum = filteredStudents.reduce(
    (sum, student) => sum + student.getAverage(),
    0
  );

  return (totalAvgSum / filteredStudents.length).toFixed(2);
}



console.log("--- معدلات الطلاب الفردية ---");
students.forEach(s => {
  console.log(`${s.name} (${s.major}): ${s.getAverage().toFixed(2)}`);
});

console.log("\n--- نسب النجاح والرسوب ---");
console.log(calculatePassFailRates(students));

console.log("\n--- أعلى وأقل معدل ---");
console.log(getTopAndLowestStudent(students));

console.log("\n--- قائمة التخصصات ---");
console.log(getAllMajors(students));

console.log("\n--- المعدل العام لتخصص Computer Science ---");
console.log(getMajorAverage(students, "Computer Science"));