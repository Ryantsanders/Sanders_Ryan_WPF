
 /*
Ryan Sanders
WPF 1418 Section 01
Name of Assignment
8-28-2014
 */

//alert("Testing 1,2,3")

 //added name prompt and to check for validation
 var name  = prompt("Hi hi! how are you doing could you kindly tell me your name?");


 while(name === "") {
     name = prompt("Oh, come on tell me your name! I won't tell anyone!");

 }
 console.log(name);

 //simple alert saying whats going on
 alert("Alright! so do you like video games? I know I sure do lets talk about a fighting came first!");


//addinga  variable for a game as well as an if statement and a tenary



 var fightingGame;

 var age  = prompt("hello "+ name +" would you mind telling me your age?");

//validating the age prompt
 while(age === "") {
     age = prompt("oh come on if you don't tell me your age I can't go any further!!");

 }
 console.log(age +" years old");

 //entering a tenarary for a game

 fightingGame = (age >17)? "Mortal Kombat": "Street Fighter";
 console.log(fightingGame);

//adding a variable for game type chosen
var gameType = prompt("Which of these other game types do you like role playing games, shooting games or adventure games? (make your choice by typing either rpg, shooting or adventure");
 while(gameType ===""){
    gameType = prompt("I really need you to enter either rpg, shooting or adventure please!");
 }

 //added more variables based on the certain games
 var rpg = "rpg";
 var shooting = "shooting";
 var adventure = "adventure";


//added an else if here so that there would be a reponse in the console per each choice
 if (gameType === rpg){
     console.log("Final Fantasy is a good choice for you "+name+" !");
 }else if(gameType === shooting){
     console.log("Destiny is a good shooter for you to play "+name+ "!");
 }else{
     console.log("a good adventure game for you is Donkey Kong!")
 }

//alert about total
alert("Hey, "+name+" I went ahead and added the total for all three games just in case you might have wanted to know!");

//added a function that added together the total price of the games
 function gamePrice(){
     var final = 40;
     var destiny = 80;
     var donkey = 30;
     var total = final + destiny + donkey;
     return total;
     console.log(total+" dollars");
     alert("The total cost would be "+total+" dollars for them all!");
 }


var final = 40;
var destiny = 80;
var donkey = 30;
var total = final + destiny + donkey;

gamePrice();




