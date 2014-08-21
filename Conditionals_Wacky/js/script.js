
 /*
Ryan Sanders
WPF 1418 Section 01
Name of Assignment
8-20-2014
 */

//alert("Testing 1,2,3")


//this is my last one to do I think i'll just make it another short and simple one

 var name  = prompt("Hello! nice to meet ya! id give you my name but it is classified informations I woulld still however love to know your name please?");


 if(name === "") {
     name = prompt("Wow! you are like the third person to try and skip town without giving me their name today!");

 }
 console.log(name);

 alert("welcome to my random, wild, crazy adventure! well actually I doubt it will be anything like that!");

//putting a prompt about answering yes or no

var adventure = prompt("Would you like to go on an adventure! answer simply with a yes or a no");
 if(adventure === ""){

 }
 console.log(adventure);

//adding another if statement

 if(adventure === "yes"){
     console.log("ALRIGHT, all aboard the adventure train!");
     alert("ALRIGHT, all aboard the adventure train!");
 }else{
     console.log("Hmm guess you weren't ready for a fun day! it's alright im sure there is something on Netflix you can watch!");
 }

//another prompt will be made as well as an alert

alert("alright so you made it on the train! nice job and if you happened to have chose not to go on an adventure I see you changed your mind!");

var place = prompt("Hmm where should we get off at the zoo or should we go to sea world! you get to choose");
if(place === ""){

}
 console.log(place);

 //adding an if, else if for the places to choose from

 var zoo = "zoo";
 var seaWorld = "sea world";

 if(place === zoo){
     console.log("Nice choice "+ name +", I bet here we can see lots of animals like lions, tigers and bears OH MY!!!");
     alert("Nice choice "+ name +", I bet here we can see lots of animals like lions, tigers and bears OH MY!!!")
 }else if(place === seaWorld){
     console.log("YES I love this place way to go "+ name +", we can really see some awesome animals here like sharks, whales and dolphins!! ");
     alert("YES I love this place way to go "+ name +", we can really see some awesome animals here like sharks, whales and dolphins!! ");
 }
