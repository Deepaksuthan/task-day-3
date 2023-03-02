// for loop
var student = {
    "name" : "Deepak",
    "age" : "25",
    "mail":"ask@gmail.com"
}
for (let i=0;i<student.length;i++){
console.log(student[i].name,student[i].age)}

// for in loop
var student1 = {
    "name" : "Deepak",
    "age" : "25",
    "mail":"ask@gmail.com"
}
for ( var i in student1){
console.log(i,student1[i])}



var person = {
    "name" : "Deepak suthan",
    "age" : "25",
    "gender" : "male",
    "education" : "M.E structural",
    "cgpa" : "7.8",
    "skill set" : "javascript",
    "mail":"deepaksuthan111@gmail.com"
}
for ( var i in person){
console.log(i,person[i])}
