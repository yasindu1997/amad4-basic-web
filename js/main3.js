console.log("Hello");

//variable types ---> var, let, const

//can re declare
var student = "Yasindu";
var Student = "Yasindu";

//cannot re declare
let student2 = "Kamal";
let student2 = "Saman";

//cannot re declare
const student3 = "Pasan";
const student3 = "Malsha";

////////////////////////////////////////////

//re initialize
var car = "Corolla";
car = "Prado";

//can re initialize
let car2 = "BMW";
car2 = "Benze";

//cannot re initialize
const car3 = "Jeep";
//car3 = "KIA";

//////////////////////////////////////////

var age = 34;

//if, else, elseif, for loop, while, loop, function ....
{
    console.log(age);
    var age2 = 24;
}

console.log(age2);

//var is globle scope
//let and const is block scope