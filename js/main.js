//there are 3 variable types ---> var, const, let

var age = 26;

var raintData = 56.7;

var isHaveCar = true; //false

//js object
var student1 = { "Brand": "Toyota", "Model": "Corolla", "engCap": 1500, "isHavePowerMirros": false }

var myName = "Yasindu";

//js array [array is a bag of data]
var myMarks = [56, 78, 34, 89, 90];

var myArr = [45, "Nipun", 78.9, 'R'];

var mathsGrade = 'A';

console.log(myName);

// this is a single line comment

/*this is 
a multi line 
comment from 
Yasindu Sathsara*/

//arithmatic operators ----> +, -, /, *, %

var val1 = 11;

var val2 = 4;

console.log(val1 + val2);
console.log(val1 - val2);
console.log(val1 * val2);
console.log(val1 / val2);
console.log(val1 % val2); //modular operator

//concat
var gfName = "Shakila";
var val3 = 89;
var val4 = 5;

console.log(val3 + val4); //arithmatic adition
console.log(gfName + val4) //concat

//functions
function myFunc() {
    console.log("Hello My Function");
}

//function calling statement
myFunc();


function multiplyNumbers() {
    var data1 = document.getElementById("num1").value;
    var data2 = document.getElementById("num2").value;

    var answer = data1 * data2;

    console.log("Answer is " + answer)
}

multiplyNumbers();

//conding standerds

var address = "Panadura";

var customerAddress = "Panadura"; //camel case

var customer_address = "Panadura" //snake case

//create a standered function to greet someone name greetUs.
//take the data to a variable like 8
//Then greet "Hello Good Morning..Today is 8"

//parameter
function modifyName(name, age) {
    console.log("Your name is moda " + name);
}


//argument
modifyName("Yasindu", 67);

///////////////////////////////////////////////

//flow controllers ----> if/else/else if

//task1

//when genarate button clicked,
//get user's age from user input
//and calculate user's age after 5 years and console log

//true, false, a statment that genarates true or false

//>, <, >=, <=, ==, != 

var test = 4;

if (test == 4) {
    alert("Hello If")
} else {
    console.log("Hi else....");
}

//get user's age from user input
//when click verify button age greater than 18 alert, you can continue
//if not alert, stop


//////////////////////////


//Get user's name from input
//Get user's age from input
//get User's GF's age from input
//when Check Match button clicked
//if user's age greater than GF's age alert, User's name..you both match..
//if not alert User's name..you both mismatched...

var test2 = 5;

if (test2 > 8) {
    console.log("A");
} else if (test2 > 6) {
    console.log("B");
} else if (test2 > 4) {
    console.log("C");
} else {
    console.log("Nothing");
}

function bfGfAge() {
    var bfName = document.getElementById("input5").value;
    var bfAge = document.getElementById("input3").value;
    bfAge = parseInt(bfAge);
    var gfName = document.getElementById("input6").value;
    var gfAge = document.getElementById("input4").value;
    gfAge = parseInt(gfAge);

    console.log(bfAge + " " + gfAge);

    if (bfAge > gfAge) {
        alert(bfAge + ", You both match");
    } else {
        alert("You both mismatched");
    }
}

//Get student's name from input
//Get student's HTML mark from input
//Get student's CSS mark from input
//Get student's JS mark from input
//Find average of the marks when calculate button pressed
//if average marks>75 alert A
//if average mark>65 alert B
//if average mark>55 alert C
//if average mark>35 alert S
//if not alert F

//////////////////////////////////////

//if, else, else if
//get user's gf's name from user input
//get user's name from user input
//check gf name's first letter is equals with gb name's first letter
//if it matches alert you both match if not alert oka badinna wenne na...

////////////////////////////////////

//true, false, a statement that genarates true or false

//&&, || ----> logical operators

var x = 12;
var y = 6;
var data1 = "Yasindu";
var data2 = "Yasindu";

if (x > y || data1 == data2) {
    console.log("Inside condition.....");
}

///////////////////////////////////

var email = "admin@gmail.com";
var password = "admin123";

//get email from user input
//get password from user input
//when username and password matchs alert login success !
//if not alert login failed !

////////////////////////////////////

//get science, maths, english marks from user inputs
//get the average of three subjects
//if avg is greater than or equals 50 and maths mark is greater than 50 alert you are eligible
//if not check science or maths marks greater than or equals 40. then alert you can try again
//if not alert You failed !

/////////////////////////////////

//switch case

var manAge = "yasindu";

switch (manAge) {
    case "Yasindu":
        console.log("Your age is 30");
        break;
    case 35:
        console.log("Your age is 30");
        break;
    case 40:
        console.log("Your age is 30");
        break;
    case 50:
        console.log("Your age is 30");
        break;
    default:
        console.log("No age found !");
}
