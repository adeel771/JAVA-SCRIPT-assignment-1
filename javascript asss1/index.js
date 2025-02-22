        // Assignment # 1
        //   JAVASCRIPT
    // Q:1. Write a script to greet your website visitor using JS alert
    // box.
    function greetvisitor(){
        console.log( welcome )
    }

    // Q:2. Write a script to display following message on your web
    // page: 
    alert(" error! enter your valid password")











    
                     // Assignment # 2
              // JAVASCRIPT


            //  Q:1 Declare a variable called username.
// code

    var user = "muhammad adeel";

// Q2. Declare a variable called myName & assign to it a string
// that represents your Full Name.

var user = "muhammad adeel";
console.log(user)

// Q3: Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
var message;
var message = " hello world"
console.log(message)

// Q4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

var studentName = "muhammad adeel";
var studentdid =6062023;
var studentdage=20;
var studentduniversity="indus university"
var studentdcamp="saylani"

 function showstudentbiodata(){
  alert("studentName:"+studeNtname)
   alert("studentdid:"+studentdid)
   alert("studentdage:"+studentdage)
   alert("studentduniversity:" +studentduniversity)
   alert("studentdcamp:"+studentdcamp)
 }
 
 showstudentbiodata();

//  Q5. Write a script to display the following alert using one JS
//  variable:

 var items = [
    "item 1: pizza",
    "item 2: pizz",
    "item 3: piz",
    "item 4: pi",
    "item 5: p"
  ];
  
  
  var getItem = items("\n");
  
  
  alert(getItem);

//   Q6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

var email = "example@example.com";
var message = "Your email address is: " + email;
alert(message);
  

// // Q7: Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

var book = "A smarter way to learn JavaScript";
var message = "The title of the book is: " + book;
alert(message);
 
// 8. Write a script to display this in browser through JS

<script>
        var book = "A smarter way to learn JavaScript";

      var message = "The title of the book is: " + book;
        document.write(message);
    </script>




                                    // Assignment # 3
                                    // JAVASCRIPT
// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

var age = 25;
alert("Your age is: " + age);

// Q2:Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var visitCount = 1;
if (localStorage.getItem('visitCount')) {
  visitCount = parseInt(localStorage.getItem('visitCount')) + 1; // Increment the count
}
localStorage.setItem('visitCount', visitCount);
document.getElementById("visitMessage").innerText = "You have visited this site " + visitCount + " times.";

// Q3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthYear = 1990;
var message = "Your birth year is: " + birthYear;
alert(message);

// Q4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorName = "John Doe"; 
var productTitle = "T-shirt"; 
var quantity = 5; 
var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.";

   alert(message); 





                        // Assignment # 4
                        // JAVASCRIPT

    // Q1. Declare 3 variables in one statement.

 var name = "John Doe", age = 30, city = "New York";

//  Q2. Declare 5 legal & 5 illegal variable names.
// Legal Variable Names

myVariable
age
user_name
totalAmount
isValid123

// Illegal Variable Names

// 2ndVariable (Cannot start with a number)
// my-variable (Hyphens are not allowed; use underscores instead)
// class (Cannot use reserved keywords)
// // user name (Spaces are not allowed)
// @username


// Q4
// Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

var heading = document.createElement("h1");
heading.innerText = "Rules for Naming JS Variables";
var rule1 = document.createElement("p");
rule1.innerHTML = "Variable names can only contain <strong>letters</strong>, <strong>numbers</strong>, <strong>underscores</strong>, and <strong>dollar signs</strong>.<br>For example: <code>$my_1stVariable</code>";

var rule2 = document.createElement("p");
rule2.innerHTML = "Variables must begin with a <strong>letter</strong>, <strong>underscore</strong>, or <strong>dollar sign</strong>.<br>For example: <code>$name</code>, <code>_name</code>, or <code>name</code>";

var rule3 = document.createElement("p");
rule3.innerHTML = "Variable names are case <strong>sensitive</strong>.";

var rule4 = document.createElement("p");
rule4.innerHTML = "Variable names should not be JS <strong>reserved keywords</strong>.";

document.body.appendChild(heading);
document.body.appendChild(rule1);
document.body.appendChild(rule2);
document.body.appendChild(rule3);
document.body.appendChild(rule4);




                                //  Assignment # 9-10
                                //  JAVASCRIPT

                              //  Q1 :// Write a program to take “city” name as input from user. If
                                // user enters “Karachi”, welcome the user like this:
                                // “Welcome to city of lights”              
const city = prompt("Please enter your city name:");
if (city === "Karachi") {
    console.log("Welcome to the city of lights");
} else {
    console.log("Welcome to " + city);
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.


const gender = prompt("Please enter your gender (male/female):").toLowerCase();
if (gender === "male") {
    console.log("Good Morning Sir.");
} else if (gender === "female") {
    console.log("Good Morning Ma’am.");
} else {
    console.log("Invalid input. Please enter 'male' or 'female'.");
}
// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:


const signalColor = prompt("Please enter the color of the traffic signal (red/yellow/green):").toLowerCase();

if (signalColor === "red") {
    console.log("Stop!");
} else if (signalColor === "yellow") {
    console.log("Get Ready!");
} else if (signalColor === "green") {
    console.log("Go!");
} else {
    console.log("Invalid color. Please enter 'red', 'yellow', or 'green'.");
}

// 4. Write a program to take input remaining fuel in car (in
//   litres) from user. If the current fuel is less than 0.25litres,
//   show the message “Please refill the fuel in your car”

const fuel = parseFloat(prompt("Please enter the remaining fuel in your car (in litres):"));
if (fuel < 0.25) {
    console.log("Please refill the fuel in your car.");
} else {
    console.log("You have enough fuel.");
}




                            //  Assignment # 12-13
                            //  JAVASCRIPT


                            // 1. Write a program that takes a character (number or string)
                            // in a variable & checks whether the given input is a
                            // number, uppercase letter or lower case letter. (Hint: ASCII
                            // codes:- A=65, Z=90, a=97, z=122).
                            
const inputChar = prompt("Please enter a character (number or letter):");
const asciiCode = inputChar.charCodeAt(0);
if (asciiCode >= 48 && asciiCode <= 57) {
    console.log("The input is a number.");
} else if (asciiCode >= 65 && asciiCode <= 90) {
    console.log("The input is an uppercase letter.");
} else if (asciiCode >= 97 && asciiCode <= 122) {
    console.log("The input is a lowercase letter.");
} else {
    console.log("The input is neither a number nor a letter.");
} 


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

const num1 = parseInt(prompt("Enter the first integer:"));
const num2 = parseInt(prompt("Enter the second integer:"));
if (num1 > num2) {
    console.log("The larger number is: " + num1);
} else if (num2 > num1) {
    console.log("The larger number is: " + num2);
} else {
    console.log("Both numbers are equal.");
}
// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
const number = parseFloat(prompt("Enter a number:"));
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


// 4. Write a program that takes a character (i.e. string of
//   length 1) and returns true if it is a vowel, false otherwise
const char = prompt("Enter a character:");
const vowels = "aeiouAEIOU";
const isVowel = vowels.includes(char);
console.log(isVowel); 

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

const correctPassword = "yourPassword123"; 
const userPassword = prompt("Please enter your password:");
if (!userPassword) {
    console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}