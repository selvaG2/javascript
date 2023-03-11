var character= "Selva";

console.log("String concepts ");
console.log("-----------------------");
console.log("To find the string length:");
console.log(character.length); //returns string length
console.log("-----------------------");

console.log(" Character finding using index value [charAt()]:"); 
console.log(character.charAt(0))    //returns character
console.log("-----------------------");

console.log(" Index  finding using character value [indexof()]:"); 
console.log(character.indexOf("e")) // returns index number
console.log("-----------------------");

console.log(" To print the string from required indexing [slice()]:"); 
console.log(character.slice(2,4)) // returns the character from 2 to 3 (if 4 is removed it will print the whole string)
console.log("-----------------------");

console.log("To change the string case to upper:");
console.log(character.toUpperCase()); //returns UpperCase string 
console.log("-----------------------");

console.log("To change the string case to lower:");
console.log(character.toLowerCase()); //returns LowerCase string 
console.log("-----------------------");

console.log("To check whether the specified haracter is present or not?:");
console.log(character.includes("elv")); //returns true/false 
console.log("-----------------------");

console.log(" To split the string [split()]:"); 
console.log(character.split("v")) // returns the splited string by two with the base of the char
console.log("-----------------------");