//Before Arrow Function
const add = function (a, b) {
    return a + b;
}
console.log('Before Arrow Function: ' + add(10, 5));

//Arrow Function
const addArrowFunction = (a, b) => {
    return a + b;
}
console.log('Arrow Function: ' + addArrowFunction(20, 20));


//Array
//Type 1
let num = [1, 2, 3, 4, 5];
console.log(num[0]); // output: 1

//Type 2
let num_1 = new Array(10, 2, 30, 4, 50);
console.log(num_1[2]); // output: 1


//Destructuring
console.log('Destructuring');
//let [a,b,c] = num_1;
//let [a,b,,d] = num_1;
let [a, b, ...d] = num_1;
console.log('A: ', a);
console.log('B: ', b);
//console.log('C: ', c);
console.log('D: ', d);


//Block Scope and Function Scope in JavaScript
console.log('Block Scope and Function Scope in JavaScript');
if (true) {
    let blockScopeVariable = 'I am a variable with block scope';
    console.log(blockScopeVariable); // Output: "I am a variable with block scope"
}
//console.log(blockScopeVariable); // ReferenceError: blockScopeVariable is not defined

//SetTimeut
// console.log('setTimeout');
// setTimeout(function(){
//     console.log('setTimeout: Hi...');
// },5000);

//SetInterval
//console.log('Intervel');
// setInterval(function(){
//     console.log('Intervel: Hi....');
// }, 5000);

let startBtn = document.querySelectorAll('.start-btn');

let date = new Date('08-02-2023');

console.log(date);

console.log(date.toTimeString());
console.log('toLocaleDateString ', date.toLocaleDateString());




function formatDate(date) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = weekdays[date.getDay()];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dateString = `${day}, ${month} ${date.getDate()}, ${year}`;
    return dateString;
}

// Example usage:
const testDate = new Date();
const formattedDate = formatDate(testDate);
console.log('formattedDate', formattedDate);
// Output: "Saturday, April 4, 2020"