//Importar las funciones y la data
import students from "./data/students.js";
import {renderStudents} from "./studentsRender.js"
import { orderCourse } from "./utils/orderCourse.js";
import { filterGrade } from "./utils/filterGrade.js"
import { averageGrade} from "./utils/averageGrades.js"
import { alphabeticName } from "./utils/alphabeticName.js"

//Traer el contenedor donde se va a renderizar el contenido
const container = document.querySelector(".app");

//Crear el titulo principal
const principalTitle = document.createElement('h1');
principalTitle.textContent = 'List students';
container.appendChild(principalTitle);

//Asignar una constante a cada funcion para manejarlas por medio de la constante
const studentsOrderCourse = orderCourse(students);
const studentsFilterGrade = filterGrade(students);
const studentsAverageGrade = averageGrade(students);
const studentsAlphabeticName = alphabeticName(students);

//Recorrer el array para renderizar la funcion de ordenarlos alfabeticamente
const orderStudentsContainer = document.createElement('ul');
studentsAlphabeticName.forEach((student)=>{
    const liElement = document.createElement('li');
    liElement.textContent = `Name: ${student.name}`;
    orderStudentsContainer.appendChild(liElement);
});
//La funcion de ordenarlos alfabeticamente meterla dentro del contenedor principal
container.appendChild(orderStudentsContainer);

//Crear el titulo de la segunda seccion
const averageTitle = document.createElement('h1');
averageTitle.textContent = 'Best grades';
container.appendChild(averageTitle);

//Recorrer el array para renderizar la funcion de filtrar los estudiantes con mejor nota
const studentsFilterGradeContainer = document.createElement('ul');
studentsFilterGrade.forEach((student)=>{
    const liElement = document.createElement('li');
    liElement.textContent = `Name: ${student.name} Grade: ${student.grade}`;
    studentsFilterGradeContainer.appendChild(liElement);
});
//La funcion de filtrar los estudiantes con mejor nota meterla dentro del contenedor principal
container.appendChild(studentsFilterGradeContainer);

//Crear el titulo de la tercera seccion
const averageTitleContainer = document.createElement('h1');
averageTitleContainer.textContent = 'Average grades';
container.appendChild(averageTitleContainer);

//Recorrer el array para renderizar la funcion del promedio de las notas
const meanGrade = document.createElement('h4');
meanGrade.textContent = `The average grade is: ${studentsAverageGrade}`;
container.appendChild(meanGrade);

//El object Key recorre el objeto y devuelve las propiedades de el dentro de un array, despues se recorre el array y se crea un elemento h2 con el nombre del curso
Object.keys(studentsOrderCourse).forEach((course) => {
    const courseTitle = document.createElement('h2');
    courseTitle.textContent = course;
    container.appendChild(courseTitle);

    const containerByCourse = document.createElement('div');
//Se recorre el arreglo de estudiantes especifico de cada curso y por cada estudiante se crea una figura de el y se agrega al contenedor
    studentsOrderCourse[course].forEach((student) => {
        const studentFigure = renderStudents(student);
        containerByCourse.appendChild(studentFigure);
    });

    container.appendChild(containerByCourse);
})

