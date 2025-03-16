// 1. Age Category Message – Ask the user for their age. If they are under 18, print “You are a minor.” If they are between 18 and 60, print “You are an adult.” If they are above 60, print “You are a senior citizen.”

/* var age = Number(prompt("Enter Your Age"));

if(age < 18){
    console.log("Minor");
} else if(age > 18 && age < 60){
    console.log("Adult");
} else{
    console.log("Senior");
} */

// 2. Even or Odd Sum – Take two numbers from the user using prompt(). If the sum of both numbers is even, print “Even Sum”; otherwise, print “Odd Sum.”

/* var num1 = Number(prompt("First Number"));
var num2 = Number(prompt("Second Number"));

if((num1 + num2) % 2 == 0){
    console.log("Even Sum");
} else{
    console.log("Odd sum");
} */

// 3. Character Case Checker – Ask the user for a single character. Check if it's uppercase, lowercase, or neither (not a letter).

/* var ch = prompt("Enter a character");
console.log(ch);
var char = ch.charCodeAt(0);
console.log(char);

if(char <= 90 && char >= 65){
    console.log("Uppercase");
} else if(char <= 122 && char >= 97){
    console.log("Lowercase");
} else{
    console.log("Not a alphabet");;
} */

// 4. Largest of Three Numbers – Take three numbers as input and print the largest number among them without using Math.max().

/* var num1 = Number(prompt("first"));
var num2 = Number(prompt("second"));
var num3 = Number(prompt("third"));

var max = 0;

if(num2 > num1 && num2 > num3){
    max = num2;
} else if(num3 > num1 && num3 > num2){
    max = num3;
} else{
    max = num1;
}

console.log(max); */

// 5. Leap Year Checker – Ask the user for a year and determine if it's a leap year or not.
/* Conditions for a Leap Year
To determine if a given year is a leap year, you need to check the following conditions:
Divisibility by 4: The year must be evenly divisible by 4. If it is not, then it is not a leap year.
Divisibility by 100: If the year is evenly divisible by 4, then check if it is also divisible by 100. If it is, then it might not be a leap year.
Divisibility by 400: If the year is divisible by both 4 and 100, then check if it is also divisible by 400. If it is, then it is a leap year. If it is not, then it is not a leap year */

/* var year = Number(prompt("Enter Year"));

var isLeap = false;

if(year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 == 0){
            isLeap = true;
        } else{
            isLeap = false;
        }
    } else{
        isLeap = true;
    }
} else{
    isLeap = false;
}

console.log(isLeap); */

// 6.  Simple Calculator – Ask the user for two numbers and an operator (+, -, *, /). Perform the operation and display the result.

/* var num1 = Number(prompt("Enter first Number"));
var num2 = Number(prompt("Enter second Number"));
var operator = prompt("Enter operator");

var result = null;

switch(operator) {
    case "+" : result = num1 + num2;
                break;
    case "-" : result = num1 - num2;
                break;
    case "*" : result = num1 * num2;
                break;
    case "/" : result = num1 / num2;
                break;
    default : warn("You must have entered wrong operator. Try +, -, *, / ")          
}

console.log(result); */

// 7. Positive, Negative, or Zero – Take a number input and check if it is positive, negative, or zero

/* var num = Number(prompt("Enter a number"));

var result = null;

if(num == 0){
    result = "Zero";
} else if(num > 0){
    result = "Positive";
} else{
    result = "Negative";
}

console.log(result); */

// 8. User Greeting – Ask for the user's name and time (24-hour format). Greet them accordingly:
// 5 AM–12 PM: "Good Morning, [Name]!"
// 12 PM–5 PM: "Good Afternoon, [Name]!"
// 5 PM–9 PM: "Good Evening, [Name]!"
// 9 PM–5 AM: "Good Night, [Name]!"

/* var n = prompt("Enter your name");
var time = Number(prompt("Enter time (24-hour format)"));

if(time >= 5 && time < 12){
    console.log("Good Moning, " + n);
} else if(time >= 12 && time < 17){
    console.log("Good Afternoon, " + n);
} else if(time >= 17 && time < 21){
    console.log("Good Evening, " + n);
} else{
    console.log("Good Night, " + n);
} */

// 9. Traffic Light System – Ask the user for a traffic light color (red, yellow, green). Print appropriate messages:
// Red: "Stop!"
// Yellow: "Get Ready!"
// Green: "Go!"

/* var lightColor = prompt("Enter Traffic Light Color");

if(lightColor.toLocaleLowerCase() == "red"){
    console.log("STOP");
} else if(lightColor.toLocaleLowerCase() == "yellow"){
    console.log("GET READY");
} else if(lightColor.toLocaleLowerCase() == "green"){
    console.log("GO");
} else{
    console.warn("Wrong Input!");
} */

// 10. Multiplication Table – Ask the user for a number and print its multiplication table up to 10.

/* var num = Number(prompt("Enter a number"));

if(num > 0){
    for(let i = 0; i < 10; i++){
        console.log(num * (i + 1));
    }
} else{
    console.warn("Number is 0 or less than 0");
} */

//11. Grade Calculator – Ask the user for their marks (0-100). 
/* Assign grades based on the range:
90-100: A
80-89: B
70-79: C
60-69: D
Below 60: F */

/* var marks = Number(prompt("Enter Your Marks"));
var grade = null;

if(marks >= 90 && marks <= 100){
    grade = "A";
} else if(marks >= 80 && marks <=89){
    grade = "B";
} else if(marks >= 70 && marks <= 79){
    grade = "C";
} else if(marks >= 60 && marks <=69){
    grade = "D";
} else if(marks >= 0 && marks <= 60){
    grade = "F";
} else{
    console.warn("marks should be in between 0 and 100");
}

console.log(grade); */

// 12. Simple Login System – Set a predefined username and password. Ask the user to enter their credentials using prompt(). If correct, print “Login Successful”; otherwise, print “Incorrect username or password.”

/* var username = "qwerty123";
var password = "Qwerty@123";

var user = prompt("Enter Username");
var pass = prompt("Enter Password");

if(username == user && password == pass){
    console.log("Login Successful");
} else{
    console.warn("Invalid details!");
} */

// 13. Swapping Without Third Variable – Take two numbers from the user and swap their values without using a third variable.

/* var num1 = Number(prompt("Enter first number"));
var num2 = Number(prompt("Enter second number"));

console.log("Before swapping - num1 - " + num1 + " num2 - " + num2);

num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

console.log("After swapping - num1 - " + num1 + " num2 - " + num2); */

// 14. FizzBuzz (Multiple of Both) – Ask the user for a number. If it's a multiple of both 3 and 5, print “FizzBuzz”; if only 3, print “Fizz”; if only 5, print “Buzz”; otherwise, print the number itself.

/* var num = Number(prompt("Enter a number"));

if(num % 3 == 0 && num % 5 == 0){
    console.log("FizzBuzz");
} else if(num % 3 == 0){
    console.log("Fizz");
} else if(num % 5 == 0){
    console.log("Buzz")
} else{
    console.log("Number is not a multiple of 3 and 5.");
} */

// 15. Number Reversal – Take a three-digit number from the user and print its reverse. (Example: 123 → 321)

/* var num = Number(prompt("Enter a 3 digit number"));
var rNum = 0;
console.log("Number - " + num);

for(let i = 0; i < 3; i++){
    let r;
    r = num % 10;
    num = Math.floor(num / 10);
    rNum += (Math.pow(10, 2 - i) * r);
}
console.log("Reversed - " + rNum); */

// 16. Sum of Digits – Take a number from the user and print the sum of its digits. (Example: 123 → 1+2+3 = 6).

/* var num = Number(prompt("Enter a number"));
var sum = 0;

while(num > 0){
    sum += num % 10;
    num = Math.floor(num / 10); 
}

console.log(sum); */

// 17. Palindrome Checker – Ask the user for a word. Check if it reads the same forward and backward. Print “Palindrome” or “Not a Palindrome.”

/* var word = prompt("Enter a word");
var isPalindrome = true;
var length = word.length - 1;

for(let i = 0; i < length; i++){
    if(word[i] != word[length]){
        isPalindrome = false;
    }
    --length;
}

console.log(isPalindrome); */

// 18. Reverse Without String Methods – Ask the user for a number and reverse it without using .split(), .reverse(), or .join().

/* var num = prompt("Enter a number");
var reversedNum = 0;

while(num > 0){
    let r = num % 10;
    reversedNum = reversedNum * 10 + r;
    num = Math.floor(num / 10);
}

console.log(reversedNum); */

// 19. Find Second Largest – Take three numbers as input and find the second largest number (without using sort() or Math.max()).

/* var num1 = Number(prompt("Enter first number"));
var num2 = Number(prompt("Enter second number"));
var num3 = Number(prompt("Enter third number"));

var secondLargest = null;

if((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)){
    secondLargest = num1;
} else if((num2 > num3 && num2 < num1) || (num2 > num1 && num2 < num3)){
    secondLargest = num2;
} else{
    secondLargest = num3;
}

console.log(secondLargest); */

// 20. Find First Non-Repeating Character – Ask the user for a word and find the first character that does not repeat. Example: hello → h (since e, l, and o repeat).

var word = prompt("Enter a word");
var nonRepeatingChar = null;

for(var i=0; i<word.length; i++){
    var isRepeated = 0;
    //console.log(i)
    for(var j=0; j<word.length; j++){
        //console.log(i , j);
        if(i != j && word[i] === word[j]){
            isRepeated = 1;
            break;
        }
    }
    if(!isRepeated){
        nonRepeatingChar = word[i];
        break;
    } 

}

console.log(nonRepeatingChar)



