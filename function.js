/* 
1. We can Deelar Normal Function In js 

*/
function add(num1,num2){
    if(num2 == undefined){
        num2 = 0;
    }
    const total = num1 + num2;
    return total;
}
const number = add(10);
console.log(number);
// -----------------------------------------------
/* 
    2. Function Declartion in ES-6 some way
*/

// -------------------------------------------------

// 1st way 
const add1 = (num1, num2) => num1 + num2;
const sum1 = add1(10,12);
console.log(sum1);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++
