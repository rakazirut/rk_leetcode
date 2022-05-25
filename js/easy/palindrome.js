/*

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

Example:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/

var isPalindrome = function(x) {
    let org = x.toString()
    let flipped = [...org].reverse().join('')
    if (org === flipped){
        return true
    } else { return false }
};

console.log(isPalindrome(12321))