/*
 Ryan Sanders
 WPF 1418 Section 01
 Name of Assignment
 8-27-2014
 */

//I think i'll shoot for something about pc parts I know we are suppose to do something industry related but I ran out of ideas
// and we do need computers in this industry


//Asking the user for their name to get everything started
var name = prompt("Hello, my name is Ryan nice to meet you, could you please tell me your name");

if(name === "") {
    name = prompt("Excuse me! I really need you to tell me your name!!");

}
console.log(name);

alert("So we are going to pick out some parts for a computer get excited!");

var computerCpu = prompt("So which type of CPU do you prefer Intel or Amd?");


if(computerCpu === "") {
    computerCpu = prompt("I think that is a really important part! you should think about answering it Intel or Amd?");

}
console.log(computerCpu);

var computerGpu = prompt("hmm next up what type of GPU do you prefer Nvidia or Amd?");


if(computerGpu === "") {
    computerGpu = prompt("I think that is a really important part! you should think about answering it Nvidia or Amd?");

}
console.log(computerGpu);







function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

calcArea();