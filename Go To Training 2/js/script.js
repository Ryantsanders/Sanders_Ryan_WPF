/*
Ryan Sanders
WPF 1418 Section 01
Name of Assignment
8-13-2014
 */

//alert("Testing 1,2,3")

//Create a js file that will tell us how old we are

///Ask the user what year they were born in
//Create a variable to catch thier answer


//Ask the user their name
var name = prompt ("Please type in your name:");

//Say hello to the user and let them know what we are doing
//Alert the user
alert("Welcome "+name+"! let's go ahead and figure out how old you are");




var yearBorn = prompt ("what year were you born?");

//Console.log out the response
console.log(yearBorn);

//Current Year and subtract the year their were born


var currentYear = 2014;

//Calculate the age
var age = currentYear - yearBorn;

//Alert user of their age
alert(name+" you are "+age+" years old.");

//Let's make this more complex
//How old will the user be in the future....

//Ask the user, how many years in the future they would like to know


var yearsMore = prompt("How many years in the future would you like to know");
console.log(yearsMore);

//Calulate our future age
var futureAge = age + Number(yearsMore);
console.log(futureAge);

//Make the results look pretty ;)

console.log("You will be "+futureAge+" in "+ yearsMore +" years.");
alert("You will be "+futureAge+" in "+ yearsMore +" years.");













