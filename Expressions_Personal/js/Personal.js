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
console.log(waterDrankDaily);

alert("You drink " +waterDrankDaily+ " glasses of water a day.")

//So now I need to take the info they gave me and multiply it by 183 because that's how many days are in 6months


// 183days in 6months also there are 8oz in glass of water
var daysMonths = 183;

//multiplying the daily water drank times how many days are in a month
var totalDrank = waterDrankDaily * daysMonths;
console.log(totalDrank);

//Telling the user how much water they will consume over the next 6 months
alert("Hi again "+name+", you will consume "+totalDrank+" glasses of water over the next 6 months.");

// 8 ounces in a glass of water
var ounces = 8;

var totalOunce = totalDrank * ounces;
alert("If you were wondering "+name+" that comes out to "+totalOunce+" ounces of water per 6 months");






