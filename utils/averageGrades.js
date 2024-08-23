import students from "../data/students.js";

export const averageGrade = (students) => {
    let averageTotal = 0;

    students.forEach(student => {
        averageTotal = student.grade + averageTotal;
    });

    return averageTotal / students.length;

}

