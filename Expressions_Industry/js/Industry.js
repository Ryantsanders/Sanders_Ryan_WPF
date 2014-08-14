/*
 Ryan Sanders
 WPF 1418 Section 01
 Name of Assignment
 8-13-2014
 */

//alert("Test");

//Going to calculate how much time a user spends using the internet

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

//going to subtract how many hours they use the internet from hours in a day to determine how many hours they aren't using the internet in a day
var hoursInDay = 24;
var hoursNotUsed = hoursInDay - hoursOnline;
alert("Hey, "+name+" I just wanted to mention that you weren't using the internet "+hoursNotUsed+" hours out of the day.");
console.log("Hey, "+name+" I just wanted to mention that you weren't using the internet "+hoursNotUsed+" hours out of the day.");

//going to alert them that I have determined the number of hours the spend on the internet a week
alert("Ok "+name+" now that we got that out of the way I am going to calculate how many hours a week you use the internet.");

//Multiplying hours online a day times days using the internet using arrays
var hoursSpent = [hoursOnline, daysUsed];
var hoursDays = hoursSpent[0] * hoursSpent[1];

//Alerting the user how many hours a week they use the internet
alert("Hey "+name+" you normally use "+hoursDays+" hours on the internet weekly.");
console.log("Hey "+name+" you normally use "+hoursDays+" hours on the internet weekly.");


//last thing going to total up how many hours they would use the internet in a year based on info given
alert("Alright "+name+" for the final step here I am going to calculate based on the information you gave me how many hours of the internet you use in a single year.")





