// DECISION MAKING EXERCISE

let randomNumber=Math.random();
randomNumber++;
randomNumber=Math.floor(randomNumber)
console.log(randomNum);

// let randomNum=Math.floor(Math.random()*5)+1;
// console.log(randomNum);                             

if (randomNum>4) {
    console.log("Greater than or equal to 4");

}   else if (randomNumber=2 || ramdomNum==3) {
    console.log("Equal to 2 or #");
}   else {
    console.log("Equal to 1");
}

if (randomNum ) {
    console.log("Greater than or equal to 4");
} else if (randomNum===3 || randomNum===2) {//best practice use === strict equality
} else {
    console.log("Equal to 1");
}

if (randomNum !==3){//use strict
    console.log("Not equal to 3");
}

if (randomNumber ---2 || randomNum ---4){
    console.log("Equal to 2 OR equal to 4");
}

// BONUS

randomNum >- 4? "Greater than or equal to 4" : "Less than 4";
console.log(randomNum);
// OR
//randomNum=(randomNum>=4)?"Greater than or equal to 4":"Less than 4""

if (randomNum >=4) {
    console.log("Greater than or euqal to 4");
}
//or
//randomNum>=4? console.log("Greater than or equal to 4"); console.log("Less than 4");

switch (randomNum) {
    case 1:
        console.log("One");
        break; ////breaks are needed between each case so that the code for the case that follows does NOT also run
    case 2:    
        console.log("Two");
        break; 
    case 3:
        console.log("Three");
        break; 
    case 4:
        console.log("Four");
        break; 
    case 5:
        console.log("Five");
        //There is no need of a break at the end of a switch statement since there are no other cases.
    
}