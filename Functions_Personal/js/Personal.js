
 /*
Ryan Sanders
WPF 1418 Section 01
Name of Assignment
8-28-2014
 */

//alert("Testing 1,2,3")

 //added name prompt and to check for validation
 var name  = prompt("Hi hi! how are you doing could you kindly tell me your name?");


 if(name === "") {
     name = prompt("Oh, come on tell me your name! I won't tell anyone!");

 }
 console.log(name);

 //simple alert saying whats going on
 alert("Alright! so do you like video games? I know I sure do lets talk about a fighting came first!");


//addinga  variable for a game as well as an if statement and a tenary



 var fightingGame;

 var age  = prompt("hello "+ name +" would you mind telling me your age?");


 if(age === "") {
     age = prompt("oh come on if you don't tell me your age I can't go any further!!");

 }
 console.log(age +" years old");

 //entering a tenarary for a game

 fightingGame = (age >17)? "Mortal Kombat": "Street Fighter";
 console.log(fightingGame);


var gameType = prompt("Which of these other game types do you like role playing games, shooting games or adventure games? (make your choice by typing either rpg, shooting or adventure");
 var rpg = "rpg";
 var shooting = "shooting";
 var adventure = "adventure";

 if (gameType = rpg){
     console.log("Final Fantasy is a good choice for you "+name+" !");
 }else if(gameType = shooting){
     console.log("Destiny is a good shooter for you to play "+name+ "!");
 }
   


