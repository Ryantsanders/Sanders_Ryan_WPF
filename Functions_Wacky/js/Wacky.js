
 /*
Ryan Sanders
WPF 1418 Section 01
Name of Assignment
8-28-2014
 */

//alert("Testing 1,2,3")


 //added name prompt and to check for validation
 var name  = prompt("Hello hello! how are you doing could you kindly tell me your name?");


 while(name==="") {
     name = prompt("Oh, come on tell me your name! I won't tell anyone!");

 }
 console.log(name);

 //simple alert saying whats going on
 alert("Alright! back again this time we are still going to go on about video games because I just love them however this time we will talk about how many hours you play games and other things!");

//variable and prompt with while loop for game hours
 var gameHours  = prompt("Yo everyone loves video games! I bet you do as well! mind telling me how many hours you play any type of video game a day?");


 while(gameHours==="") {
     gameHours = prompt("Oh, come on you can be that addicted that you won't even share the numbers!!");

 }

 console.log(gameHours+" Hours");

 //variable for days playing a game with validation and while loop
 var gameDays  = prompt("alright so we have the hours out of the way what about days how many do you normally play a game on?");


 while(gameDays==="") {
     gameDays = prompt("oh you really are trying to keep it a secret! must be one of those everyday people but really please enter the amount of days!!");

 }
 console.log(gameDays+" days a week");

 //alerting the user that I have collected their data and calculated with an ano function

var totalHours = function(){
    var hoursWeek = gameHours * gameDays;
    return hoursWeek;


}

totalHours();

var gameMonth = 30;

//couldn't get an alert to pop up with the hoursWeek but i'll have to move on now i'll do a function about monthly hours

alert("alright "+name+" now I am going to calculate the total hours you would play in a single month");


 function hoursMonth(dailyHours, weeklyHours, monthlyHours){
    var hoursMonth = dailyHours * weeklyHours * monthlyHours;
     return hoursMonth;

 }
var totalHoursMonth = hoursMonth(gameHours, gameDays, gameMonth);
console.log(totalHoursMonth+" hours is how many hours you spend playing games in a month!");


