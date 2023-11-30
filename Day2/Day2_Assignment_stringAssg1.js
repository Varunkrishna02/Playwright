/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5. */

let input = " Hello World";

function lengthoflastword() {

// Trim any leading or trailing spaces
let wordLength = input.trim();
console.log(wordLength);

// Split the string into an array of words
let words = wordLength.split(' ');
console.log(words); 

//Finding length of Array
let wordsLength = words.length;

//Finding length of lastword
let lastWordLength = words[wordsLength-1].length;
console.log(lastWordLength) ;    
}

lengthoflastword();









