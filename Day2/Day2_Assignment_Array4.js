/* Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1

*/


let nums = [34, 7, 21, 89, 54, 10, 91, 67];

//Assuming min & Max value to compare
let maxNum = nums[0];
let maxIndex = 0;
let minNum = nums[0];
let minIndex = 0;

function maxNumIndex() {
   
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]>maxNum) {

            maxNum=nums[i];
                 maxIndex = i;          
        }

        if (nums[i]<minNum) {
                 
            minNum= nums[i];
            minIndex = i;
                  
        }        
    }
    console.log ("MaxNumber is " + maxNum + " & MaxNumber's Index is " + maxIndex);
    console.log ("MinimumNumber is " + minNum + " & MinimumNumber's Index is " + minIndex);
}

maxNumIndex();
