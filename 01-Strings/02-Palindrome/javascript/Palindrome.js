function Palindrome(str){
    let strReversed = str.split("").reverse().join("");
    return (strReversed === str) ? true: false;
}


console.log(Palindrome("racecar")) //true