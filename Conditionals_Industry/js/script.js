
 /*
Ryan Sanders
WPF 1418 Section 01
Name of Assignment
8-13-2014
 */





//Gonna try to set up something about havinga  web page built

 var name  = prompt("Hello there! how are you doing and what might your name be?");


 if(name === "") {
     name = prompt("Whoa you must be a person of mystery! however I think it would be a good idea if you can tell me your name!");

 }
 console.log(name);

 //simple alert saying whats going on
alert("Alright! so you want to build your own web site i'll help you out with prices!");


 //made the budget variable as well as a validating prompt
 var budget = prompt("Please enter the amount of money you have for your budget");

 if(budget === "") {
     budget = prompt("I can see you don't want me to get my hands on your money! but if I don't know your budget I can't help you!");

 }
 console.log(budget+ " Dollars is your budget.");


//made new variables
var webDesign = 50;
var webDev = 60;
var server = 25;

alert("ok so now "+ name +" what I am going to do is some basic math based on the things we need in order to hire a web designer, developer and server to host your website on.");

//added variable for total cost of website
var totalCost = webDesign + webDev + server;
 console.log(totalCost+ " Dollars is needed for everything");


// if statement for either having enough money for the site or not
if(totalCost < budget){
    console.log("Great news "+ name +" after going over the costs and your budget you are able to get everything you need to make a website!");
}else{
    console.log("aww I am very sorry "+ name +" your budget isn't enough to cover all the costs needed I suggest you save up some more money and you can try again.");
}
