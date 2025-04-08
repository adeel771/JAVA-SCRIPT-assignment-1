 // Assignment # 5
// JAVASCRIPT
// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
let num=40;
let num2=20;
sum=num+num2;
console.log(sum)
// 2. Repeat task1 for subtraction, multiplication, division & modulus.
let w=40;
let b=20;
subtract=w-b;
console.log(subtract)
// multiplicatiion
let i=40;
let j=20;
let multipli=i*j;
console.log(multipli)
// division
let z=40;
let k=20;
let division=z/k;
console.log(division);
// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store ticket price in a variable & calculate the cost of buying 5
// tickets to a movie.
const ticketprice=600;
const numberofticket=5;
const totalcost= ticketprice*numberofticket;
console.log("the cost of bayaing 5 movie ticket is:"+totalcost+"pkr");
// 5. Write a script to display multiplication table of any
// number in your browser.
// Function to generate the multiplication table
function generateTable() {
       const number = parseInt(document.getElementById("numberInput").value);
       const resultDiv = document.getElementById("result");
       resultDiv.innerHTML = '';
       if (isNaN(number)) {
           resultDiv.innerHTML = "Please enter a valid number!";
           return; 
       }
       let tableContent = `<h3>Multiplication Table of ${number}</h3>`; 
       for (let i = 1; i <= 10; i++) {
           tableContent += `<p>${number} × ${i} = ${number * i}</p>`; 
       }
       resultDiv.innerHTML = tableContent;
   }
   document.getElementById("generateButton").addEventListener("click", generateTable);
//    6. The Temperature Converter: It’s hot out! Let’s make a
//    converter based on the steps here.
//    a. Store a Celsius temperature into a variable.
//    b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//    c. Now store a Fahrenheit temperature into a variable.
//    d. Convert it to Celsius & output “NNoF is NNoC”.
   
//    Conversion Formulae:

let celsiusTemperature = 25;  
let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
console.log(`${celsiusTemperature}°C is ${fahrenheitTemperature}°F`);
let fahrenheitInput = 70;  
let celsiusConverted = (fahrenheitInput - 32) * 5/9;
console.log(`${fahrenheitInput}°F is ${celsiusConverted.toFixed(2)}°C`);
// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// MATH EXPRESSIONS | JAVASCRIPT

// Page 5 of 9

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

const priceItem1 = 20; 
const priceItem2 = 35; 
const quantityItem1 = 2; 
const quantityItem2 = 1; 
const shippingCharges = 10; 
const totalItem1 = priceItem1 * quantityItem1;
const totalItem2 = priceItem2 * quantityItem2;
const subtotal = totalItem1 + totalItem2;
const finalTotal = subtotal + shippingCharges;
console.log(`Price of Item 1: $${priceItem1}`);
console.log(`Quantity of Item 1: ${quantityItem1}`);
console.log(`Total Cost of Item 1: $${totalItem1}`);
console.log(`Price of Item 2: $${priceItem2}`);
console.log(`Quantity of Item 2: ${quantityItem2}`);
console.log(`Total Cost of Item 2: $${totalItem2}`);

console.log(`Subtotal: $${subtotal}`);
console.log(`Shipping Charges: $${shippingCharges}`);
console.log(`Final Total: $${finalTotal}`);
// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

function calculatePercentage() {
       const totalMarks = parseFloat(document.getElementById("totalMarks").value);
       const marksObtained = parseFloat(document.getElementById("marksObtained").value);
       if (isNaN(totalMarks) || isNaN(marksObtained) || totalMarks <= 0) {
           alert("Please enter valid numbers for total marks and marks obtained.");
           return; 
       }
       const percentage = (marksObtained / totalMarks) * 100;
       const resultDiv = document.getElementById("result");
       resultDiv.innerHTML = `Percentage: ${percentage.toFixed(2)}%`;
   }
   document.getElementById("calculateButton").addEventListener("click", calculatePercentage);
//    9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
const usd = 10, sar = 25;
const pkr = (usd * 104.80) + (sar * 28);
document.write(`<h2>Currency Conversion</h2>
    ${usd} USD + ${sar} SAR = ${pkr} PKR`);
    //Q10 Write a program to initialize a variable with some
//number and do arithmetic in following sequence:
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//Perform all calculations in a single expression

//ans

let num1 = 8;
const result = ((num + 5) * 10) / 2;
document.write(`Starting number: ${num}<br>Result: ${result}`);


// Q11 The Age Calculator: Forgot how old someone is?
//Calculate it!
//a. Store the current year in a variable.
//b. Store their birth year in a variable.
//c. Calculate their 2 possible ages based on the stored
//values.

// ans

const currentYear = 2023;
const birthYear = 1995;
const age1 = currentYear - birthYear;
const age2 = age1 - 1;

document.write(`They are either ${age1} or ${age2} years old`);

//Q12 The Geometrizer: Calculate properties of a circle.
//a. Store a radius into a variable.
//b. Calculate the circumference based on the radius, and
//output “The circumference is NN”.
//(Hint : Circumference of a circle = 2 π r , π = 3.142)
//Calculate the area based on the radius, and output “The
//area is NN”. (Hint : Area of a circle = π r2, π = 3.142

//ans

const radius = 7;
const circumference = 2 * Math.PI * radius;
const area = Math.PI * radius * radius;

document.write(`<h2>Circle Properties</h2>
    Radius: ${radius}<br>
    Circumference: ${circumference.toFixed(2)}<br>
    Area: ${area.toFixed(2)}`);
 //Q13 The Lifetime Supply Calculator: Ever wonder how
//much a “lifetime supply” of your favorite snack is?
//Wonder no more.
//a. Store your favorite snack into a variable
//b. Store your current age into a variable.
//c. Store a maximum age into a variable.
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of
//your life.


//ans
let favoriteSnack = "chocolate bars"; 
let currentAge = 25;
let maxAge = 80;
let snacksPerDay = 2; 
let yearsRemaining = maxAge - currentAge;
let totalSnacks = snacksPerDay * 365 * yearsRemaining;
console.log("=== LIFETIME SUPPLY CALCULATOR ===");
console.log(`Favorite Snack: ${favoriteSnack}`);
console.log(`Current Age: ${currentAge}`);
console.log(`Maximum Age: ${maxAge}`);
console.log(`Snacks per Day: ${snacksPerDay}`);
console.log(`\nYou will need ${totalSnacks} ${favoriteSnack} to last until age ${maxAge}.`);      
    

// CHAP # 6-9

    /* 1. Write a program to take a number in a variable, do the
required arithmetic to display the following result in your
browser: */
var a = 10;
console.log("Result:\nThe value of a is: " + a + "\n ....................................");
console.log("The value of ++a is: " + (++a) + "\nNow the value of a is: " + a);
console.log("The value of a++ is: " + (a++) + "\nNow the value of a is: " + a);
console.log("The value of --a is: " + (--a) + "\nNow the value of a is: " + a);
console.log("The value of a-- is: " + (a--) + "\nNow the value of a is: " + a);

                /* 2. What will be the output in variables a, b & result after
execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage: */
// // var a = 2, b = 1;
// // console.log("a = " + a + ", b = " + b);
// // var result = --a - --b + ++b + b--;
// // console.log("Result: " + result);
 

// /* Explanation:
// // --a  => a = 1
// // --b  => b = 0
// // --a - --b => 1 - 0 = 1
// // ++b => b = 1  as previous b was 0
// // b--; => b = 1  as previous b was 1 
// // ++b + b-- => 1 + 1 = 2
// // so final result = 1 + 2 = 3

// // */

/* 3. Write a program that takes input a name from user &
greet the user. */
var userName = prompt("Enter your name:");
console.log("Hello, " + userName + "Welcome! How are you?");

/* 5. Write a program to take input a number from user &
display its multiplication table on your browser. If user
does not enter a new number, multiplication table of 5
should be displayed by default. */
var num = Number(prompt("Enter a number for multiplication table:"));
for (var i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

/* 6. Take
   a) Take three subjects name from user and store them in 3
different variables.
   b) Total marks for each subject is 100, store it in another
variable.
   c) Take obtained marks for first subject from user and
stored it in different variable.
   d) Take obtained marks for remaining 2 subjects from user
and store them in variables.
   e) Now calculate total marks and percentage and Number
result in browser like this.(Hint: use table) */
var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject name:");
var sub3 = prompt("Enter third subject name:");
var totalMarks = 100;
var obtained1 = Number(prompt("Enter obtained marks for " + sub1 + ":"));
var obtained2 = Number(prompt("Enter obtained marks for " + sub2 + ":"));
var obtained3 = Number(prompt("Enter obtained marks for " + sub3 + ":"));
var totalObtained = obtained1 + obtained2 + obtained3;
var percentage = (totalObtained / 300) * 100;

console.log("Subject / Total Marks / Obtained Marks / Percentage");
console.log(sub1 + " / " + totalMarks + " / " + obtained1 + " / " + (obtained1/totalMarks*100) + "%");
console.log(sub2 + " / " + totalMarks + " / " + obtained2 + " / " + (obtained2/totalMarks*100) + "%");
console.log(sub3 + " / " + totalMarks + " / " + obtained3 + " / " + (obtained3/totalMarks*100) + "%");
console.log("Total / " + (totalMarks * 3) + " / " + totalObtained + " / " + percentage + "%");


       
       //    ARRAYS
        // (Assignment # 13-15)
// 1: Declare an empty array using JS literal notation to store student names in future.

let studentdata={
names: []

}
// 2. Declare an empty array using JS object notation to store student names in future.
let studentnames=[];
studentnames.push("adeel","zakir");
studentnames.push("wali","ali")
console.log(studentnames)
// 3. Declare and initialize a strings array.
let babynames;
babynames=["afan","yadish","zayan","usama"]
// 4. Declare and initialize a numbers array.
 let values=[20,12,32,45,65,78,90]
 console.log(values) 
//  5. Declare and initialize a boolean array.
let booleanArray=[true,false, false, true];
console.log(booleanArray);
// 6. Declare and initialize a mixed array.
 let array;
 array=["adeel",7,true,false,"webdevelopment"]
 console.log(array);
//  7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//     BS, BCOM, MS, M. Phil., PhD). Show the listed
let ARRAYS; 
ARRAYS=qulafications=[];
qulafications[0]="ssc"; 
qulafications[1]="hsc"; 
qulafications[2]="bscs"; 
qulafications[3]="bse"; 
qulafications[4]="becom"; 
qulafications[5]="msc"; 
qulafications[6]="m.phil"; 
qulafications[7]="phd"; 
console.log(ARRAYS)
// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students
let students=["adeel","zakir","ameen"];
const scores=[430,343,290];
for(let i=0;i<=students.length;i++){
 const percentage=(scores[i]/500)* 100;
 console.log(`Score of ${students[i]} is ${scores[i]}. Percentage: ${percentage.toFixed(0)}%`);
 
}
// 9.Write a program to store student scores in an array &sort the array in ascending order using Array’s sort
// method.
 function getStudentscores(){
        let score=[];
        let numberofstudents=presentint(prompt("enter the the number of students:"));

        for(let i=0; i<numberofstudents;i++){
        let score= float(prompt("enter the score of students:&{i+1}"));
        score.push(score)
        }
        return scores;
 }
 function displayscores(scores){
        console.log("student scores:"+score .join(''));
 } 
let studentscores = getStudentscores();
studentscores. sort((a.b) = a-b);

// 11. Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCities
// array.
let arraylist=["karachi","islamabad","lahore","quetta","peshwar"];
console.log (arraylist);
prompt(" your selected cityes:");
let arrayslectd=["islamabad","quetta"]
console.log(arrayslectd)
// 12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
var arr=["this","is","my","cat"];
varresult= arr.join('')
console.log(result)

// ARRAYS AND LOOP
// Assignment # 17-20
// JAVASCRIPT

// 1. Declare and initialize an empty multidimensional array.(Array of arrays)
let cars = [
       ['grandi', 'suzuki'],
       ['toyota', 'mehran', 'nissan'],
       ['laxus', 'audi', 'mercedes']
          ];
   console.log(cars);
//   2. Declare and initialize a multidimensional arrayrepresenting the following matrix:
let number=[
       [0,1,2,3],
       [1,0,1,2],
       [2,1,0,1]
       ];
       console.log(number);
       // 3. Write a program to print numeric counting from 1 to 10.
      let number1 =10;
       for(i=1;i<=number1;i++){
       console.log(i);
      }
//       5. Write a program to print items of the following array
//       using for loop:fruits = [“apple”, “banana”, “mango”, “orange”,
//        “strawberry”]

    let fruits=["apple","banna","mango","orange"];
      console.log(fruits[i])
    for(let i=0;i<=fruits.length;i++){
       console.log("element at index position"+i+"is"+fruits[i])
    };
//     6. Generate the following series in your browser. See
//     example output.
//     a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//     b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//     c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//     d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//     e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k,
console.log("counting")
for(let i=0;i<15;i++){
       process.stdout.write(i(i<15?",":"/n"))
}
console.log(" reverse counting") 
for(let i=0;i<15;i--){
       process.stdout.write(i(i>1?",":"/n"))
}    
console.log(" even") 
for(let i=0;i<20;i+=2){
       process.stdout.write(i(i>20?",":"/n"))
}    
console.log("Odd:");
for (let i = 1; i < 20; i += 2) {
    process.stdout.write(i + (i < 19 ? ", " : "\n"));
}
console.log("Series:");
for (let i = 2; i <= 20; i += 2) {
    process.stdout.write((i * 1000) + (i < 20 ? "k, " : "k\n"));
}
// 8. Write a program to identify the largest number in the
// given array.A = [24, 53, 78, 91, 12].
let A = [24, 53, 78, 91, 12];
let max = A[0];

for (let i = 1; i < A.length; i++) {
    if (A[i] > max) {
        max = A[i];
    }
}
console.log("array item is:"+A)
console.log("The largest number is " + max);
// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
let a=[24, 53, 78, 91, 12];
let samallest=a[0];
for(let num of a){
       if(num<samallest){
              samallest=num
       }
}
console.log("the smallest number in arry is:"+samallest);
// 10. Write a program to print multiples of 5 ranging 1 to 100.

for(let num=0;num<100;num++){
       if(num%5 ===0){
              console.log(num);
       }
}
// javascript practice questions

/*question # 1
1. Simulating an ATM Withdrawal System
Category: Banking & Finance
 Problem:
 Create a simple ATM withdrawal system where:
The user enters the amount they want to withdraw.
The system checks if the amount is available in the ATM.
The system dispenses the correct number of bills in denominations of 100, 500, and 1000.
If the amount is not a multiple of 100, show an error message.
*/


let date = new Date()
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()


const password = 12
const username1 = "noman"
let amount = 1000
new_amount = 0

let input_username = window.prompt("Enter username")
let input_password = Number(window.prompt("Enter user password"))


if(username1 == input_username  && password ==input_password){
    let withdraw = Number(window.prompt("Enter amount to withdraw"))
    if(withdraw%100 == 0 && withdraw<amount && withdraw%500 == 0 && withdraw%1000 == 0 ){
        new_amount = amount - withdraw
        window.alert(`Name : ${username1}\nAmount Withdrawn : ${withdraw}\nRemaining Balance : ${new_amount}\nDate : ${day}-${month}-${year}`)
    }
    else if(withdraw>amount){
        window.alert("Amount Unavilable")
    }
    else{
        window.alert("Invalid Amount!\nplease enter amount in multiple of 100,500,1000")
    }
}
else{
    window.alert("Wrong username or password")
}

/*question # 2
2. Parking Lot Fee Calculator
Category: Transportation & Management
 Problem:
 Create a parking fee calculator where:
The first 2 hours are free.
After 2 hours, the fee is $5 per hour.
If the vehicle stays for more than 10 hours, a fixed rate of $50 is charged.
*/

let hours = window.prompt("Enter hours ⏱")
let fee = 0
if(hours <=2){
    window.alert("NO FEE!")
}
else if(hours>2 && hours<=10){
    let newhrs = hours-2
    fee = newhrs * 5
    window.alert(`FEE : ${fee}$`)
}
else if(hours>10){
    window.alert("FEE : 50$")
}
else{
    window.alert("invalid output")
}


/*question # 3
3. Car Speed Fine System
Category: Traffic Control
 Problem:
 Create a speed checking system where:
If speed is <= 60 km/h, it's "Safe Speed".
If speed is between 61 and 80 km/h, a warning is issued.
If speed is above 80 km/h, a fine of $10 per km over 80 is calculated.
*/

let speed = window.prompt("Enter speed ")
let fine=0

if(speed<=60){
    window.alert("Safe speed")
}
else if(speed>=61 && speed<=80 ){
    window.alert("warning")
}
else if(speed>80){
      let newfine = speed-80
      fine = newfine * 10
      window.alert(`Fine is issued : ${fine}$`)
}


/*question # 4
4. Bank Loan Interest Calculator
Category: Finance & Banking
 Problem:
 Create a loan interest calculator where:
If the loan amount is ≤ $10,000, the interest rate is 5%.
If it's between $10,001 and $50,000, the interest rate is 7%.
If it's above $50,000, the interest rate is 10%.
Calculate the total amount to be paid back.
*/

let loanAmount = Number(window.prompt("Enter your Loan Amount"))
let totalAmount = 0
let interestRate = 0
if(loanAmount<=10000){
 interestRate = loanAmount * 0.05
 totalAmount = loanAmount  + interestRate
 window.alert(`Total Amount : ${totalAmount}$`)
}
else if(loanAmount>10001  && loanAmount < 50000){
    interestRate = loanAmount * 0.07
    totalAmount = loanAmount  + interestRate
    window.alert(`Total Amount : ${totalAmount}$`)
   }
 else if(loanAmount>50000){
    interestRate = loanAmount * 0.10
    totalAmount = loanAmount  + interestRate
    window.alert(`Total Amount : ${totalAmount}$`)
   }
/*question # 6
6. School Exam Result Processing 
 Problem:
 A class of 3 students takes 4 subjects. Generate random marks, find average & grade.
*/
let students = 3
let subjects = 4
let marks = []
let std1 = []
let std2 = []
let std3 = []
let marks1 = 0
let marks2 = 0
let marks3 = 0

for (let i = 0; i < 4; i++) {
   std1.push(Math.floor(Math.random()*50)+1)
   std2.push(Math.floor(Math.random()*50)+1)
   std3.push(Math.floor(Math.random()*50)+1)
}
for (let i = 0; i <3; i++) {
 marks1+=std1[i]
 marks2+=std2[i]
 marks3+=std3[i]
}
let avg1 = marks1/4
std1.push(`Average marks : ${avg1}`)
let per1 = (marks1*100)/300

 let avg2 = marks2/4
 std2.push(`Average marks : ${avg2}`)
 let per2 = (marks2*100)/300

 let avg3 = marks3/4
 std3.push(`Average marks : ${avg3}`)
 let per3 = (marks3*100)/300



 if(per1>=50 && per1<=60){
  std1.push(`Grade = C`)
 }
 else if(per1>=61 && per1<=70){
  std1.push(`Grade = B`)
 }
 else if(per1>71){
  std1.push(`Grade = A`)
 }

 if(per2>=50 && per2<=60){
  std2.push(`Grade = C`)
 }
 else if(per2>=61 && per2<=70){
  std2.push(`Grade = B`)
 }
 else if(per2>71){
  std2.push(`Grade = A`)
 }

 if(per3>=50 && per3<=60){
  std3.push(`Grade = C`)
 }
 else if(per3>=61 && per3<=70){
  std3.push(`Grade = B`)
 }
 else if(per3>71){
  std3.push(`Grade = A`)
 }
window.alert(`Student 1 : ${std1}\nStudent 2 : ${std2}\nStudent 3 : ${std3}\n`)


