/*
 Ryan Sanders
 WPF 1418 Section 01
 Name of Assignment
 8-13-2014
 */

//alert("Test");

//I am going to attempt to calculate how much water I will drink over the next 6months

//Asking the user for their name to get everything started
var name = prompt("Hello, we haven\'t met before could you please tell me your name");
console.log(name);

//alerting the user and greeting them as well as letting them know what is going on
alert("Hello there "+name+", I am trying to figure out how much water you drink every 6 months")


//Asking how many glasses of water they drink on a daily basis
var waterDrankDaily = prompt("How many glasses of water do you drink on a daily basis?");
console.log(waterDrankDaily+" glasses");

alert("You drink " +waterDrankDaily+ " glasses of water a day.")

//So now I need to take the info they gave me and multiply it by 183 because that's how many days are in 6months


// 183days in 6months also there are 8oz in glass of water
var daysMonths = 183;

//multiplying the daily water drank times how many days are in a month
var totalDrank = waterDrankDaily * daysMonths;
console.log("Hi again "+name+", you will consume "+totalDrank+" glasses of water over the next 6 months.");

//Telling the user how much water they will consume over the next 6 months
alert("Hi again "+name+", you will consume "+totalDrank+" glasses of water over the next 6 months.");

// 8 ounces in a glass of water
var ounces = 8;

// multiplying the total amount of ounces the user consumes
var totalOunce = totalDrank * ounces;
console.log(totalOunce+" Ounces");

//alerting the user of total ounces drank per 6months
console.log("If you were wondering "+name+" that comes out to "+totalOunce+" ounces of water per 6 months");
alert("If you were wondering "+name+" that comes out to "+totalOunce+" ounces of water per 6 months");

//alerting user about Converting ounces into gallons

alert("Ok, "+name+" we are now going to convert the amount of ounces you drink to gallons.");
console.log("Ok, "+name+" we are now going to convert the amount of ounces you drink to gallons.");

//Added new variables ounceInGallons because there are 128 ounces in 1 gallon
var ounceInGallons = 128;

//Total gallons after dividing the total ounces by how many ounces are in a gallon
var totalGallons = totalOunce / ounceInGallons;

//alerting how many gallons of water they will drink per 6 months
alert("Hello "+name+" after converting ounces to gallons I have calculated that you will drink "+totalGallons+" gallons of water over 6 months.");
console.log("Hello "+name+" after converting ounces to gallons I have calculated that you will drink "+totalGallons+" gallons of water over 6 months.");

//Trying to figure a way to use three factors or givens
//Ok so here we have the width, height, depth of a pool.

var width = 10;

var height = 10;

var depth = 10;

//Going to see how many days it would take to drink a pool with the measurements of width 10, height 10, depth 10
alert("Alright "+name+" The final step! we are going to calculate how many days it would to take you to drink a pool with the measurements of 10 Width, 10 Height and 10 depth.");
console.log("Alright "+name+" The final step! we are going to calculate how many days it would to take you to drink a pool with the measurements of 10 Width, 10 Height and 10 depth.");

//Ok now we need to determine how much water per day is being drank



var volume = width * height * depth;
console.log(volume+" Gallons of water");

//Now to divide the
var a = volume;
//6 because that is the number of months we were finding in the first place
var b = 6;

var monthsDrank = a / totalGallons * b;
console.log(monthsDrank);















