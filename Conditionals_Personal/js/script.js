
 /*
Ryan Sanders
WPF 1418 Section 01
Name of Assignment
8-13-2014
 */

//alert("Testing 1,2,3")


// going to do something about movies perhaps since it would be a good fit to use a ternary
var name  = prompt("Why hello there visitor from another dimension. Who am I? no need to worry about that right now might I instead suggest you tell me your name?");
 console.log(name);

//validating the prompt
 if(name === "") {
     name = prompt("Are you sure you don't want to tell me your name :'(!");
 }
console.log(name);




//just a simple alert
alert("Alright "+ name +", the theme of today is movies!!");

//going to ask about the users age then i'll prob make a ternary based on age with a movie selection or something of that sort

//asking age and making age variable
var age = prompt("say "+ name +", would you mind letting me know your age so I can suggest some movies for you?");
 console.log(age+" Years old.");

//validating the age prompt

 //validate the prompt
 if(age === "") {
     age = prompt("Well it is understandable you may not want me knowing your age, but if I don't know then I can't help! don't worry it will be our secret pinky promise!");

 }
console.log(age+" Years old.");


alert("Ok "+ name +", based on the info you have given me I have selected a movie! drum roll please!!");

//asking user for gender
var gender = prompt("Oops "+ name +" I am very sorry I forgot to ask if you were a boy or a girl ?");
console.log(gender);

 if(gender === "") {
     Gender = prompt("well if I don't know your gender how can I select a movie!!");

 }

//going to set up the ternary it's just going to be simple because if I start to go with super ideas I have I end up with too many lightbulbs and not enough switches xD

var movieBoy;

//making a selection for boy's based on age
movieBoy = (age < 13)? "How to Train Your Dragon 2, Planes, Despicable Me 2": "The Ninja Turtles, Transformers, Guardians of the Galaxy";
 //console.log("Here you go "+ name +", a few movies I think you might enjoy! "+ movieBoy);



//making a  selection for girl's based on age
var movieGirl;

//this si the variable if the gender is choses as a girl
movieGirl = (age < 13)? "My Little Pony Equestria Girls, Frozen,Smurfs 2": "The Legend of Oz Dorothy's Return,The Croods , Guardians of the Galaxy";
 //console.log("Here you go "+ name +", a few movies I think you might enjoy! "+ movieGirl);


// here I tried to make an OR so that it would accept it with either a lower case or a upper case but can't seem to get it to work
var male = gender === "Boy"|| "boy";
var female = gender === "Girl" || "girl";



//going to attempt to make a if statement

if(gender === male){
    console.log("Here you go "+ name +", a few movies I think you might enjoy! "+ movieBoy);
}else if(gender === female){
    console.log("Here you go "+ name +", a few movies I think you might enjoy! "+ movieGirl);
}



