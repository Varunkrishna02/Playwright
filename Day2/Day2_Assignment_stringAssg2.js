/*Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4. */

let input = "   fly me   to   the moon  ";

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