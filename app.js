alert('Hello Abid Ali Khokhar');



 let prevStudents = localStorage.getItem("students");
 let students = prevStudents ? JSON.parse(prevStudents) : [] ;
    let std = {
        name: prompt('Please Enter your name'),
        age: prompt('Please enter your age'),
        city:prompt('Please enter your city'),
        course:prompt('Please enter course name')
    };
students.push(std);
let stringfy = JSON.stringify(students);
localStorage.setItem("students",stringfy);
console.log(students);


