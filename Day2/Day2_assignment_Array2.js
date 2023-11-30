/* Two Sum // Medium 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)

*/

let numsArray = [2,4,7,8,11,14];
let target = 18;

console.log(numsArray);

for (let i = 0; i < numsArray.length; i++) {

   for (let j = 0; j < numsArray.length; j++) {
    if (numsArray[i]+ numsArray[j] === target) {
        let arr = [];
        console.log(numsArray[i]+ "+"+numsArray[j]+ "="+target );
        console.log((numsArray[i]+ "," +numsArray[j]));   
    }
   }
}