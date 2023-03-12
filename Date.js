const now = new Date();

//to get the date
console.log(now.getDate());

//to get the day
console.log(now.getDay());

//to get the month
console.log(now.getMonth());

//to get the year
console.log(now.getFullYear());

//to get the hours
console.log(now.getHours());

//to get custom output

const date1 = new Date('may 21 2003');

console.log(date1.getFullYear());

//age calculator

var dobDate = new Date('may 21 2003');
var todayDate = new Date();

var age = todayDate.getFullYear()-dobDate.getFullYear();

var month = todayDate.getMonth()-dobDate.getMonth();

if(month<0 || (month === 0 && todayDate.getDate()< todayDate.getDate()));
age--;

console.log(age);

