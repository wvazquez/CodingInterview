### Solution

If we know that a palindrome is a word that reads the same forwards or backwards, we can reverse the string and compare it to the original string. If we are both the same, we know we have a palindrom. If not, we return false. 
```js
function Palindrome(str){
    let strReversed = str.split("").reverse().join("");
    return (strReversed === str) ? true: false;
}
```
In the solution, we see a [ternary](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) in the return statement. This the same as using an if/else statement. 


In this solution, we assumed that a string must have the same upper and lowercase letters to be a palindrome. This should be a question to ask your interviewer before you start coding. If upper and lowercase letters do not matter, we can change our solution to the following:
```js
function Palindrome(str){
    let strReversed = str.split("").reverse().join("").toLowerCase();
    return (strReversed === str.toLowerCase()) ? true: false;
}
```
Here we convert our string to all lowercase since letter casing should not affect our answer. 