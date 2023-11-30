/*
Classroom Assignment 1:

let yourName = "suresh";
write a function to reverse the string.

// hints
1) convert the input into characters
2) loop them in reverse direction
3) concate the string
4) print the new string

*/

let firstname = "varun";
let reversedString= "" ;
let charcSplit = firstname.split('');

function getmyName() {
for (let i = charcSplit.length-1; i >=0; i--) {
   
     
    reversedString += charcSplit[i];
    
 }
 console.log(reversedString);
 
}
getmyName();

if (firstname===reversedString) {

    console.log("Palindrome");
    
} else {

    console.log("Not Palindrome");
       
}









