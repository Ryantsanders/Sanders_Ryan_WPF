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

//Converting ounces into gallons

alert("Ok, "+name+" we are now going to convert the amount of ounces you drink to gallons.");
console.log("Ok, "+name+" we are now going to convert the amount of ounces you drink to gallons.");

var OuncesToGallons = 128;
var totalGallons = totalOunce / 128;






