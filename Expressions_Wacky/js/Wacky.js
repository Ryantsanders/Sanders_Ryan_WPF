/*
 Ryan Sanders
 WPF 1418 Section 01
 Name of Assignment
 8-13-2014
 */

//Asking the user for their name to get everything started
var name = prompt("Hello, my name is Ryan nice to meet you, could you please tell me your name");
console.log(name);

//alerting the user and greeting them as well as letting them know what is going on
alert("Hello there "+name+", this time around we are going to go on a wacky adventure hope you're ready!");
console.log("Hello there "+name+", this time around we are going to go on a wacky adventure hope you're ready!");

//Going to calculate a bunch of random things based on user input

var frontFlips = prompt("Hiya "+name+" I am just curious how many front flips do you think you could perform in a row on a trampoline?");
console.log("Hiya "+name+" I am just curious how many front flips do you think you could perform in a row on a trampoline?");

//alerting the user about how many front flips they think they can do
alert("So you think you can do "+frontFlips+" front flips ok great!");
console.log(frontFlips+" Front Flips");

//asking how many back flips they think they can do now

var backFlips = prompt("Back again! alright "+name+" how about back flips how many of them do you think you can do?");
alert("Alright so you can do "+backFlips+"? sweet!")
console.log(backFlips+" Back Flips");

//going to add up how many total flips they have done so far

var totalFlips = frontFlips + Number(backFlips);
console.log(totalFlips);




//alerting them that I have added how many flips they have done
alert("Heya "+name+" I have calculated the total number of flips you said you could do! It came out to be "+totalFlips+" alright "+name+" get to it! this is something I want to see!");
console.log("Heya "+name+" I have calculated the total number of flips you said you could do! It came out to be "+totalFlips+" alright "+name+" get to it! this is something I want to see!");









