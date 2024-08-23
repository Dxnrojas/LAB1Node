import students from "../data/students.js";

export const orderCourse = (students) => {
    let orderCourse = {}
    students.forEach(student => {
        if (!orderCourse[student.course]){
            orderCourse[student.course] = []
        }
        orderCourse[student.course].push(student);
    });
    return orderCourse
};

console.log(orderCourse(students));

