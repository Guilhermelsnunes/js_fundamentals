//basic function

// function sayHello(name) {
//     return `Hello ${name}`;
// }

// var greeting = sayHello("Anna");

// console.log('Greeting:', greeting);








//variable without value - it does not give you a error, it just returns on the terminal    Greeting: Hello undefined
// function sayHello(name) {
//     return `Hello ${name}`;
// }

// var greeting = sayHello();

// console.log('Greeting:', greeting);






// hoisting? take the funciotns declaration and put after the parameters - 
//we dont get an error but we should not do it 

// var greeting = sayHello('Anna');

// function sayHello(name) {
//     return `Hello ${name}`;
// }

// console.log('Greeting:', greeting);






// default paramters    - we get hello world
// function sayHello(name = 'World') {
//     return `Hello ${name}`;
// }

// var greeting = sayHello();

// console.log('Greeting:', greeting);







//anonymous functions - 
//most comum way to do it as it gives access to a good feature - functions are treated as objects 
//we can store funciotns in variables - we can pass funciotns into other functions

// function sayHello(name = 'World') {
//     return `Hello ${name}`;
// }

// var greeting = sayHello();



// var add = function(num1, num2){
//     return num1 + num2;
// }

// console.log("Add Function", add());






//executing the function -  addiction for example  
// function sayHello(name = 'World') {
//     return `Hello ${name}`;
// }

// var greeting = sayHello();

// var add = function(num1, num2){
//     return num1 + num2;
// }

// console.log("Add Function", add(1, 4));








// ARROW FUNCTION - similar to anonymous 

// var multiply = (num1, num2) => {
//     return num1 * num2;
// }
// console.log("Multiply Function", multiply);






//executing the arrow function=>

// var multiply = (num1, num2) => {
//     return num1 * num2;
// }
// console.log("Multiply Function", multiply(2, 6));






//executing the => it has a implicid return (like a shortcut), same as above, but shorter 

var multiply = (num1, num2) => num1 * num2;

console.log("Multiply Function", multiply(2, 6));


