function getStudentName() {
    let name = prompt("Enter student name")
    return name;
}

function calcalateTotal(mark1, mark2, mark3) {
    let total = mark1 + mark2 + mark3;
    return total;
}
function calcalateAverageage(total, numberOfSubjects) {
    let average = total / numberOfSubjects;
}

function getGrade(average) {
    if (average >= 90) {
        return "A";
    }
    else if (average >= 80) {
        return "B";
    }
    else if (average >= 70) {
        return "C";

    }
    else if (average >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}

function checkResult(average) {
    if (average >= 60) {
        return "Passed";
    } else {
        return "Failed";
    }
}

function displayResult(name, total, average, grade, result) {
    console.log("Student Name:" + name);
    console.log("Totai:" + total);
    console.log("Average:" + average);
    console.log("Grade:" + grade);
    console.log("Result:" + result);

}

let studentName = getStudentName();
let mark1 = Number(prompt("Enter first mark:"));
let mark2 = Number(prompt("Enter secound mark:"));
let mark3 = Number(prompt("Enter third mark:"));

let total = calcalateAverageage(mark1, mark2, mark3);
let average = calcalateAverageage(total, 3);
let grade = getGrade(average);
let result = checkResult(average);

displayResult
    (
        studentName,
        total,
        average,
        grade,
        result

    );





