
// ======================================
// 1. Student Class
// ======================================

class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // 2. Calculate Average using reduce
    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => {
            return sum + grade;
        }, 0);

        return total / this.grades.length;
    }

    // 3. Calculate Grade
    getGrade(average) {
        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // 4. Final Result
    getResult(average) {
        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

// ======================================
// 5. Students Array (Objects)
// ======================================

let studentsList = [
    new Student(101, "Ali", [40, 45, 50], 80),
    new Student(102, "Mohamed", [60, 65, 70], 90),
    new Student(103, "noor", [42, 46, 47], 85),
    new Student(104, "Sara", [90, 85, 95], 95)
];

// ======================================
// 6. Filter Students (40 - 49)
// ======================================

let strugglingStudents = studentsList.filter(student => {
    let average = student.calculateAverage();

    return average >= 40 && average <= 49;
});

// ======================================
// 7. Map - Add 5 Bonus Marks
// ======================================

let mercyStudents = strugglingStudents.map(student => {
    let oldAverage = student.calculateAverage();

    return {
        id: student.id,
        name: student.name,
        oldAverage: oldAverage,
        newAverage: Math.min(oldAverage + 5, 100)
    };
});

// ======================================
// 8. Reduce - Sum New Averages
// ======================================

let totalNewAverages = mercyStudents.reduce((sum, student) => {
    return sum + student.newAverage;
}, 0);

// ======================================
// 9. Calculate Mercy Average
// ======================================

let mercyAverage = mercyStudents.length > 0
    ? totalNewAverages / mercyStudents.length
    : 0;

// ======================================
// 10. Console Reports
// ======================================

console.log("===== UNIVERSITY STUDENTS REPORT =====");

studentsList.forEach(student => {
    let average = student.calculateAverage();
    let grade = student.getGrade(average);
    let result = student.getResult(average);

    console.log({
        Name: student.name,
        Average: average.toFixed(2),
        Grade: grade,
        Result: result
    });
});

console.log("===== STUDENTS WHO GOT MERCY MARKS =====");

console.table(mercyStudents);

console.log("===== MERCY STUDENTS AVERAGE =====");

console.log(mercyAverage.toFixed(2));
