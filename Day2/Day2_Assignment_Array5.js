/*
4) Remove Duplicates:
Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]
*/

let inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
let result = [];

function removeDuplicates() {
    
    for (let i = 0; i < inputArray.length; i++) {
         
      if (result.indexOf(inputArray[i])===-1) {

        result.push(inputArray[i]);
        
      }
   
    }
     
    return result
        
    }

let resultArray = removeDuplicates();
console.log(resultArray);


