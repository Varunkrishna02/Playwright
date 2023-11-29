/* Problem
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result

*/

//Answer

//1. Create a function named `calculateGrade` that takes a student's score as a parameter.

function calculateGrade(score) {

/*2. Use `switch` statement inside the function - 
- Use a `switch` statement with the condition `true`.
- Use `case` statements to check different score ranges and return the corresponding grade.*/    

switch (true) {
        case (score>=90 && score<=100):
       return "A";
        
        case (score>=50 && score<90):
        return "B"; 

        case (score<50):
        return "F"; 
          
        default:
        return "Invalid score";
           
    }
    
}
//3. Declare and initialize the variable
let score = 32;

//4. Call the function and print the result

let result = calculateGrade(score);
console.log("The Grade is "+ result);