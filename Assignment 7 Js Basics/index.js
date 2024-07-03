
// im not using the number method because i noticed that we don't need it to the the
// arthimitic operations :))))

// 1
// var x=window.prompt("Please Enter The Number");
// console.log(x);

// 2
// var x=window.prompt("Please Enter The Number");
// Number(x);

// if(x%3==0&&x%4==0){
//     console.log("Yes");
// }
// else{
//     console.log("No")
// }


// 3
// var x = window.prompt("Please Enter The Number");
// var y = window.prompt("Please Enter The Number");
// if (x > y) {
//     console.log(x);
// }
// else if (x == y) { console.log("the Two Nums Equal Each Other"); }
// else {
//     console.log(y);
// }

// 4
// var x = window.prompt("Please Enter The Number");

// if (x < 0) {
//     console.log("Negative");
// }
// else if (x == 0) { console.log("the num is zerooooo");}
// else {
//     console.log("Positive")
// }


// 5
// var x = window.prompt("Please Enter The Number");
// var y = window.prompt("Please Enter The Number");
// var z = window.prompt("Please Enter The Number");

// var max = x;
// var min = x;


// if (y > max) {
//     max = y;
// }
// if (y < min) {
//     min = y;
// }


// if (z > max) {
//     max = z;
// }
// if (z < min) {
//     min = z;
// }

// // Print the results
// console.log("Maximum Element: " + max);
// console.log("Minimum Element: " + min);

// 6
// var x = window.prompt("Please Enter The Number");
// if(x%2==0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }

// 8
// var number = prompt("Enter a number:");
// switch (number % 2) {
//     case 0:
//         console.log(number + " is even.");
//         break;
//     case 1:
//         console.log(number + " is odd.");
//         break;
//     default:
//         console.log("Invalid input.");
// }








// 9
// var x = window.prompt("Please Enter The Number");
// for (let index = 1; index <= x; index++) {
//     console.log(index);
// }


// 10
// var x = window.prompt("Please Enter The Number");
// for (let index = 1; index <= 12; index++) {
//     console.log(index*x);
// }

// 11
// var x = window.prompt("Please Enter The Number");
// for (let index = 2; index <= x; index+=2) {
    
//     console.log(index);
// }

// 12
//  var x = window.prompt("Please Enter The Number");
//  var p = window.prompt("Please Enter The Number");
// var res=1;
// for (let index = 0; index<p; index++) {
//     res*=x;
// }
// console.log(res);

// 12

// var total=0;
// for (let index = 0; index<5; index++) {
//     var  x= window.prompt("Please Enter The Number");
//     total+=Number(x);
// }
// console.log(total);
// console.log(total/5);
// console.log(total/500*100);


// 13
// var monthNumber =prompt("Enter the month number (1-12):");


// if (monthNumber >= 1 && monthNumber <= 12) {
//     // 
//     var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//     var numberOfDays = daysInMonth[monthNumber - 1];

//     console.log( numberOfDays);
// } else {
//     console.log("Invalid month number");
// }

// 14
// var physics = Number(prompt("Enter marks in Physics:"));
// var chemistry =Number( prompt("Enter marks in Chemistry:"));
// var biology = Number(prompt("Enter marks in Biology:"));
// var mathematics = Number(prompt("Enter marks in Mathematics:"));
// var computer = Number(prompt("Enter marks in Computer:"));
// var totalMarks = physics + chemistry + biology + mathematics + computer;
// var percentage = (totalMarks / 500) * 100;

// var grade;
// switch (true) {
//     case percentage >= 90:
//         grade = "Grade A";
//         break;
//     case percentage >= 80:
//         grade = "Grade B";
//         break;
//     case percentage >= 70:
//         grade = "Grade C";
//         break;
//     case percentage >= 60:
//         grade = "Grade D";
//         break;
//     case percentage >= 40:
//         grade = "Grade E";
//         break;
//     default:
//         grade = "Grade F";
// }
// console.log("Total Marks: " + totalMarks);
// console.log("Percentage: " + percentage);
// console.log("Grade: " + grade);





//   use case problems
// 15
// var monthNumber = Number(prompt("Enter the month number (1-12):"));

//     switch (monthNumber) {
//         case 1: // January
//         case 3: // March
//         case 5: // May
//         case 7: // July
//         case 8: // August
//         case 10: // October
//         case 12: // December
//             console.log("Number of days in month " + monthNumber + ": 31 days");
//             break;
//         case 4: // April
//         case 6: // June
//         case 9: // September
//         case 11: // November
//             console.log("Number of days in month " + monthNumber + ": 30 days");
//             break;
//         case 2: // February
//             console.log("Number of days in month " + monthNumber + ": 28 or 29 days");
//             break;
//         default:
//             console.log("Invalid month number.");
//     }




// 16
// var alphabet = prompt("Enter a single alphabet:");
//     switch (alphabet) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             console.log(alphabet + " is a vowel.");
//             break;
//         default:
//             console.log(alphabet + " is a consonant.");
//     }

// 17

// var num1 = prompt("Enter the first number:");
// var num2 = prompt("Enter the second number:");
//     var result;
//     switch (true) {
//         case num1 > num2:
//             result = num1;
//             break;
//         case num1 < num2:
//             result = num2;
//             break;
//         default:
//             console.log("The two numbers are equal.");
            
//     }
//     console.log("The maximum between " + num1 + " and " + num2 + " is: " + result);




// 18
// var number = prompt("Enter a number:");
// switch (number % 2) {
//     case 0:
//         console.log(number + " is even.");
//         break;
//     case 1:
//         console.log(number + " is odd.");
//         break;
//     default:
//         console.log("Invalid input.");
// }



// 19
// var number = parseFloat(prompt("Enter a number:"));
//     switch (Math.sign(number)) {
//         case 1:
//             console.log(number + " is positive.");
//             break;
//         case -1:
//             console.log(number + " is negative.");
//             break;
//         case 0:
//             console.log(number + " is zero.");
//             break;
//         default:
//             console.log("Invalid input.");
//     }


    // 20
// var operation = prompt("Enter the operation (+, -, *, /):");
// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));


    
//     var result;

//     switch (operation) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             if (num2 !== 0) {
//                 result = num1 / num2;
//             } else {
//                 console.log("Error: Division by zero is not allowed.");
//             }
//             break;
//         default:
//             console.log("Invalid operation.");
           
//     }

//     console.log("Result: " + result);

