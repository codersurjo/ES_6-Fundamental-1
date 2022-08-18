/* 
    Condition : Array item gulo ke extract kore use kora, jate kore Array ar upadan gula sadaron number ar moto use kora jai
*/

const age = [10,12,13,14,20,45];
age.push(34);
// console.log(age,...age); // ... = 3 ta dot dile extract hoye jabe and Array ta valo vabe kaj korbe

const age2 = [...age]; // new array nawa

console.log(age2);