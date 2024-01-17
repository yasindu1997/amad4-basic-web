var x = 9;

console.log(x); //9

x = x + 3;

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

for (var i = 0; i < 6; i++) {
    console.log(datas[i]);
}