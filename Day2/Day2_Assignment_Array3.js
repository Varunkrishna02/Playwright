/*
Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
*/

let a = [4,9,5];
let b = [9,4,9,8,4];
let aArraylength = a.length;
let bArraylength = b.length;

function arrayIntersection() {

    let result = []; // Creating empty array & Inserting intersction values in Array

    for (let i = 0; i < aArraylength; i++) {
        for (let j = 0; j < bArraylength; j++) {
          if (a[i]===b[j]) {
           result.push(a[i]);
           break;  // Once a match is found, break out of the inner loop
           
          } 
          
        }
        
    }
    return result;
}
let intersectionArray = arrayIntersection();
console.log(intersectionArray); 

