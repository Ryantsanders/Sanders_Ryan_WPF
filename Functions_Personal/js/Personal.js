
 /*
Ryan Sanders
WPF 1418 Section 01
Name of Assignment
8-13-2014
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

 var age = 17;
 var fightingGame;



 var age  = prompt("hello "+ name +" would you mind telling me your age?");


 if(age === "") {
     age = prompt("Whoa you must be a person of mystery! however I think it would be a good idea if you can tell me your name!");

 }
 console.log(age +" years old");

 //entering a tenarary for a game

 fightingGame = (age <17)? "Mortal Kombat": "Street Fighter";
 console.log(fightingGame);
