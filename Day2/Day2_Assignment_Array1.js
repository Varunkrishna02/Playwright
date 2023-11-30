/*
*/
let  nums = [0, 1, 0, 3, 12];
let nonZeroIndex = 0;

function moveZerotoEnd() {

    for (let i = 0; i < nums.length; i++) {
         if (nums[i]!== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
                   
         }
      
    }

    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i]=0;
       
    }
   
   console.log(nums);
      
}
moveZerotoEnd(); 
