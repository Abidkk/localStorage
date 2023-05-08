alert('Hello Abid Ali Khokhar');


function call(){
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
}


let add = () => {
    let preEmploys = localStorage.getItem("employs")
 let employs = preEmploys ? JSON.parse(preEmploys) : [] ;
 var data2 = {
    name:prompt('Enter your name'),
    role:prompt('Enter your role'),
    age:prompt('Enter your age')
 }

employs.push(data2)
let stringfy = JSON.stringify(employs);
localStorage.setItem("employs", stringfy);
console.log(employs)
}