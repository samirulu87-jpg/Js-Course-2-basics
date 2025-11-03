let num = 5 /*This sets the first number varable for num, using let allows it to be changed later*/
let width = 5 /*This sets the first width varable for width, using let allows it to be changed later*/
let height = 10 /*This sets the first height varable for height, using let allows it to be changed later*/
let age = 12 /*This sets the age of the user, using lets allows it to be changed later*/

console.log("Double the Number!")
function doubleNumber(){
    return num*2 /*Here the functntion returns the number after it has been multiplyed by 2*/
} 

console.log(doubleNumber())/*Displays the function defined earler*/

num = 10/*This changes the value of the number*/

console.log(doubleNumber())/*Displays the funtion with the new number*/




console.log("The Area of a Rectangle")
function calculateArea() {
    return width*height/*Here the functntion returns the answer of what the width and the height  are mulitplied togeather.*/
}

console.log(calculateArea())/*Displays the function defined earler*/

width = 10/*This changes the value of the width*/
height = 15/*This changes the value of the height*/
console.log(calculateArea())/*Displays the funtion with the new height and width values*/

console.log("Is the user a Teenager?")

function isTeenager(){ 
    if (age >= 13 && age <= 19) { /*Here is where the varble age is tested to see if it is both either over 13 and under 19, if it is then it returnes true, if not it returns false*/
        return true;
    } else {
        return false
    } 
}

console.log(isTeenager()) /* Displays the functiono*/

age = 17 /*Changes the age*/

console.log(isTeenager()) /* Displays the functiono with the new age varble value*/