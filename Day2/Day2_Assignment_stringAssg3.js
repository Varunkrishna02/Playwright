/*
*Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
  */

function isAnagram(str1,str2) {

// Remove spaces and convert to lowercase for case-insensitive comparison 
    let cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    let cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

// Check if the lengths are different, if so, they can't be anagrams
    
    if (cleanStr1.length!==cleanStr2.length) {

        return false;
               
    }
 // Sort the charaers in both strings and compare the sorted strings
    
    let sortedstr1 = cleanStr1.split('').sort().join('');
    let sortedstr2 = cleanStr2.split('').sort().join('');

    if (sortedstr1 == sortedstr2) {
        
        return true;
        
    } else {
      
        return false;  
    } 
 }
 console.log(isAnagram('list en', 'silent'));
 console.log(isAnagram('hello', 'world'));


 