import students  from "../data/students.js";

export const filterGrade = (students) => {
    let filterGrade=[];

    students.forEach(student => {
        if (student.grade > 80){
            filterGrade.push(student);
        }
    
    });

    filterGrade.sort((a,b) => a.grade - b.grade)
        return filterGrade;
}

console.log(filterGrade(students));
