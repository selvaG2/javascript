var num = "2";
var num1 ="22.09a7";
var num2 = 23;

console.log("Number concepts");
console.log("-----------------------");

console.log(" To convert a number string to a number:"); 
console.log(num);
console.log(Number(num)+10);  //Number()
console.log("-----------------------");

console.log(" To parse a number string to a float:"); 
console.log(num1);
console.log(Number.parseFloat(num1));
console.log("-----------------------");

console.log(" To convert a number  as a string:"); 
console.log(num2);
console.log(num2.toString());
console.log("-----------------------");

console.log(" To find a number is not a number:"); 
console.log(num1);
console.log(isNaN(num1));
console.log("-----------------------");