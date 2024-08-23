import students from "./data/students.js";
import {renderStudents} from "./studentsRender.js"
import { orderCourse } from "./utils/orderCourse.js";
import { filterGrade } from "./utils/filterGrade.js"
import { averageGrade} from "./utils/averageGrades.js"
import { alphabeticName } from "./utils/alphabeticName.js"

const container = document.querySelector(".app");

const principalTitle = document.createElement('h1');
principalTitle.textContent = 'List students';
container.appendChild(principalTitle);


const studentsOrderCourse = orderCourse(students);
const studentsFilterGrade = filterGrade(students);
const studentsAverageGrade = averageGrade(students);
const studentsAlphabeticName = alphabeticName(students);


const orderStudentsContainer = document.createElement('ul');

studentsAlphabeticName.forEach((student)=>{
    const liElement = document.createElement('li');
    liElement.textContent = `Name: ${student.name}`;
    orderStudentsContainer.appendChild(liElement);
});

container.appendChild(orderStudentsContainer);

const averageTitle = document.createElement('h1');
averageTitle.textContent = 'Best grades';
container.appendChild(averageTitle);

const studentsFilterGradeContainer = document.createElement('ul');
studentsFilterGrade.forEach((student)=>{
    const liElement = document.createElement('li');
    liElement.textContent = `Name: ${student.name} Grade: ${student.grade}`;
    studentsFilterGradeContainer.appendChild(liElement);
});

container.appendChild(studentsFilterGradeContainer);




Object.keys(studentsOrderCourse).forEach((course) => {
    const courseTitle = document.createElement('h2');
    courseTitle.textContent = course;
    container.appendChild(courseTitle);

    const containerByCourse = document.createElement('div');

    studentsOrderCourse[course].forEach((student) => {
        const studentFigure = renderStudents(student);
        containerByCourse.appendChild(studentFigure);
    });

    container.appendChild(containerByCourse);
})

