/*
 Ryan Sanders
 WPF 1418 Section 01
 Name of Assignment
 8-13-2014
 */

//alert("Test");

//Going to calculate how mmuch time a user spends using the internet

//Asking the user for their name to get everything started
var name = prompt("Hello, my name is Ryan nice to meet you, could you please tell me your name");
console.log(name);

//alerting the user and greeting them as well as letting them know what is going on
alert("Hello there "+name+", I am trying to calculate how often you are surfing the web or using the internet in general.");

//asking how many hours they spend on the internet
var hoursOnline = prompt("How many hours do you normally use the internet daily "+name+"?");
console.log(hoursOnline+" Hours");

//going to ask the user how many days a week they use the internet
var daysUsed = prompt("Alright "+name+" would you mind telling me how many day out of the week you use the internet?");
console.log(daysUsed+" days out of the week");

//going to alert them that I have determined the number of hours the spend on the internet a week
alert("Ok "+name+" now that we got that out of the way I am going to calculate how many hours a week you use the internet.");

//Multiplying hours online a day times days using the internet
var hoursWeek = hoursOnline * daysUsed;
alert("Hey "+name+" you normally use "+hoursWeek+" hours on the internet weekly.");
console.log("Hey "+name+" you normally use "+hoursWeek+" hours on the internet weekly.");
