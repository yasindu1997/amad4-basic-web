var x = 9;

console.log(x); //9

//x = x + 3;
x += 3;

console.log(x); //12

////////////////////////////////

var y = 4;

//y = y + 1;
y++; //increment operator //y-- decrement operator

console.log(y); //5

///////////////////////////////

//for-loop

for (var i = 0; i < 6; i++) {
    console.log("Hello ACPT");
}

//////////////////////////////

//1st step

// function login() {
//     var dbEmail = "admin@gmail.com";
//     var dbPassword = "admin123";

//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;

//     if (dbEmail == email && dbPassword == password) {
//         alert("Login Success !");
//     } else {
//         alert("Login Failed !");
//     }
// }

//2nd step

function clear() {
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
}

var count = 0;

function login() {
    var dbEmail = "admin@gmail.com";
    var dbPassword = "admin123";

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (dbEmail == email && dbPassword == password) {
        alert("Login Success !");
    } else {
        count++;

        if (count != 5) {
            alert("Login Failed ! Try again....");
            clear();
        }
        else {
            alert("Account Locked !")
        }
    }
}

//3rd step

//on 5th wrong round alert account locked !

var data1 = 45; //1 data

var ages = [12, 45, 34, 23, 56, 25]; //6 data ----> array

console.log(ages[1]);

var datas = [90, "Yasindu", 45.6, "Nipun", true, 34, 89];

console.log(datas[3]);

for (var i = 0; i < datas.length; i++) {
    console.log(datas[i]);
}

var studentMarks = [67, 90, 56, 43, 21];
//get total and find average then print total and average

console.log(studentMarks);

studentMarks.push(76);

console.log(studentMarks);

var salariesOfCompany = [35000.00, 56000.00, 25000.00, 42000.00, 89000.00];

//company decided to increment employees salary from 20%. increment salaries and display new salary array

var newSalary = [];

//code here

console.log(newSalary);

///////////////////////////////////////////////

//true,false, a statment that genarates true or false

var data3 = 45;

while (data3 < 50) {
    console.log("Helloooo");
    data3++;
}

var number = 567;

console.log(Math.floor(number / 10));
console.log(number % 10)

var sum = 0;

while (number != 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
}

console.log(sum);

//code here

//output ----> 18

var data7 = 3;

//do while loop

do {
    console.log("Hiiii....");
    data7--;
} while (data7 > 0);

//////////////////////////////////////////////

//for each

var vehicles = ["Toyota", "Bmw", "Jeep", "Mazda"]

for (var v of vehicles) {
    console.log(v);
}

//js normal function
function saveStudent() {
    console.log("Inside the function....");
}

saveStudent();

var updateStudent = function () {

}

updateStudent();

//arrow function
var deleteStudent = () => {

}

deleteStudent();

////////////////////////////////////

//method parameters
var saveCar = (name, model) => {
    console.log(name);
}

//method arguments
saveCar("Toyota Corolla", "AE121");

///////////////////////////////////////

//create a arrow function to removeDuplicates() that create a new array without duplicates

var arr = [12, 54, 32, 65, 12, 34, 32];

//create function here
var removeDuplicates = (arr) => {
    var uniqueArray = [];

    for (var i = 0; i < arr.length; i++) {

        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }

    console.log(uniqueArray);
}

removeDuplicates(arr);

////////////////////////////////

var loadAllData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            console.log(json[0]);
        });
}

loadAllData();

////////////////////////////////

var savepost = () => {
    //get typed values from user


    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
