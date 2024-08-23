import students  from "../data/students.js";

export const alphabeticName = (students) => {

  return students.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } 
    if (a.name < b.name){
      return -1
    }
    return 0
  });
  
};

alphabeticName(students);

console.log(alphabeticName(students));


