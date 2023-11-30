/*
) Find the number of occurances.  // Easy

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3
*/

let arrNums = [2,4,5,2,1,2,2];
let target = 2;
let count =0 ;

function findCount() {

    for (let i = 0; i < arrNums.length; i++) {
        
        if (arrNums[i]==target) {
            count++;
        }
        
    }
  
    console.log(count);
    
}

findCount();

