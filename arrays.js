var students = new Array("Selva","Dhanaprakash","Venkat","Vijay");


// prototype is nothing just an option to add a new properties

Array.prototype.displayStd=function(){   //To declare a prototype function_name.prototype.method=so and so
    for(var i=0;i<this.length;i++){
        console.log(this[i])
    }
}

console.log("Arrary concepts ");
console.log("-----------------------");
console.log("Prototype display: ");
students.displayStd();
console.log("-----------------------");

console.log("Reverse an array: ");  //reverse the array
students.reverse();
students.displayStd();
console.log("-----------------------");

console.log(" Sorting an array:");  //sorting the array if its number ascending order if its alphabets A-Z a-z
students.sort();
students.displayStd();
console.log("-----------------------");

console.log(" Pusing an array:");  //adding element at last 
students.push("Vikram");
students.displayStd();
console.log("-----------------------");

console.log(" Unshifting an array:"); //adding elements at first
students.unshift("Karthi");
students.displayStd();
console.log("-----------------------");

console.log(" Shifting an array:");  //removing elements at first
students.shift();
students.displayStd();
console.log("-----------------------");

console.log(" Poping an array:"); //removing elements at last
students.pop();
students.displayStd();
console.log("-----------------------");

