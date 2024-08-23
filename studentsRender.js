export const renderStudents = ({id, name, age, grade, course}) => {

    const container = document.createElement("figure");
    container.classList.add("student-card");

    const h3id = document.createElement('h3');
    const h1name = document.createElement('h1');
    const pAge = document.createElement('p');
    const pGrade = document.createElement('p');
    const pCourse = document.createElement('p');

    h3id.textContent = id;
    h1name.textContent = name;
    pAge.textContent = age;
    pGrade.textContent = grade;
    pCourse.textContent = course;

    container.appendChild(h3id);
    container.appendChild(h1name);
    container.appendChild(pAge);
    container.appendChild(pGrade);
    container.appendChild(pCourse);

    return container
}

