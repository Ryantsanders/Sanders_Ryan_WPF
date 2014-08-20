
 /*
Ryan Sanders
WPF 1418 Section 01
Name of Assignment
8-13-2014
 */

//alert("Testing 1,2,3")


//set up an array
var fruit = ["peach", "pear", "apple", "banana"];



//call the array
console.log(fruit);

//change an item in the array
fruit[0] = "pear";


//call one item from the array using the index

console.log(fruit[2]);

//use dot syntax (period) to find the length of an array

console.log(fruit.length);


//create a var to store the numbers of pears

var numPears = 0;


//use if statements to check items int he array

if (fruit[0] === "pear"){
    numPears ++;
}else{
    console.log("fruit is not a pear!");
}

console.log(fruit);
console.log(numPears);

////////////////////////

if (fruit[1] === "pear"){
     numPears ++;
}else{
   console.log("fruit is not a pear!");
}






if (fruit[2] === "pear"){
numPears ++;
 }else {
    console.log("fruit is not a pear!");
}



if (fruit[3] === "pear"){
numPears ++;
}else{
    console.log("fruit is not a pear!");
}

console.log(numPears);


//ask the name of the fruit owner
var name = prompt("what is your name?");

 //validate the prompt
if(name === "") {
    name = prompt("Please enter your name!");
}



//how many pears are in the bowl?

console.log("Hello " + name + ", you have " + numPears + " pears in your bowl");