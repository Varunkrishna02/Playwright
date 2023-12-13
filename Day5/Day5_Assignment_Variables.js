/* Typescript
* Create variables with different data types and print them in console
   1) browserVersion - 117 (immutable)
   2) browserNames- declare a type datatype with variables bName as Edge and updated version as 115
   3) isHeadless - true (use implicit type reference)
   4) releaseYear - 1998 (use explicit type reference)
   5) browserLogo - use 'any' data type and use two values with different data types

*/
//Create browserVersion - 117 (immutable)
var browserVersion = '117';
console.log("The browserversion is ".concat(browserVersion));
var browsers = { bName: 'Edge', version: 115 };
console.log("The browsers is ".concat(browsers.bName, " is updates ").concat(browsers.version));
//isHeadless - true (use implicit type reference)
var isHeadless = true;
console.log("The Implicit datatype ".concat(isHeadless));
//releaseYear - 1998 (use explicit type reference)
var releaseYear = 1998;
console.log("The Explicit datatype ".concat(releaseYear));
//browserLogo - use 'any' data type and use two values with different data types
var browserLogo;
browserLogo = "BMW";
console.log("The browserLogo with anyDatatype is ".concat(browserLogo));
browserLogo = 678;
console.log("The browserLogo with anyDatatype is ".concat(browserLogo));
