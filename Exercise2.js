//FIRST EXERCISE

function findFirstNonRepeatingChar(input) {
   const charCount = new Map();

   // First we count how many times each char repeats
   for (const char of input) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
   }

   // Then we find the first non-repeating character
   for (const char of input) {
      if (charCount.get(char) === 1) {
         return char;
      }
   }

   // If no non-repeating character is found, return null
   return null;
}

console.log(findFirstNonRepeatingChar("javascript")); // Output: "j"
console.log(findFirstNonRepeatingChar("programming")); // Output: "p"
console.log(findFirstNonRepeatingChar("hello")); // Output: "h"
console.log(findFirstNonRepeatingChar("hhello")); // Output: "e"
console.log(findFirstNonRepeatingChar("hheelloo")); // Output: "e"



//SECOND EXERCISE

function lengthOfLongestSubstring(s) {
   const n = s.length;
   let maxLength = 0;
   let startIndex = 0;
   let longestSubstring = "";

   for (let endIndex = 0; endIndex < n; endIndex++) {
      const currentChar = s[endIndex];

      if (s.substring(startIndex, endIndex).includes(currentChar)) {
         startIndex = s.indexOf(currentChar, startIndex) + 1;
      }

      const currentSubstring = s.substring(startIndex, endIndex + 1);

      if (currentSubstring.length > maxLength) {
         maxLength = currentSubstring.length;
         longestSubstring = currentSubstring;
      }
   }

   return { length: maxLength, substring: longestSubstring };
}
//In this exercise I used a slidding window solution, by iterating through the string and diving it in subStrings
//until the biggest substring is found then return the length and the subString

console.log(lengthOfLongestSubstring("abcabcbb")); //Output: { length: 3, substring: 'abc' }
console.log(lengthOfLongestSubstring("abcdefjcbb")); //Output: { length: 7, substring: 'abcdefj' }
console.log(lengthOfLongestSubstring("bbbbb")); //Output: { length: 1, substring: 'b' }
console.log(lengthOfLongestSubstring("pwwkew")); //Output: { length: 3, substring: 'wke' }
