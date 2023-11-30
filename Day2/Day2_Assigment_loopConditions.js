/*
int val = 5;
funtion to sum all the values between 1 to n 
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, i need sum 
*/


let value = 5;
let sum =0;

function sumofValues() {
    
    for (let i = 0; i <=value; i++) {
    
    //sum = sum+i;   
        sum += i;
    }

    return sum;
    

}

let result = sumofValues();
console.log(result);


