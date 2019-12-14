## Ask Your Interviewer
1) Will the strings contain spaces. Whitespace can alter your solution.
2) Can the string be empty or contain numbers. This can be possible edge cases we might need to account for.

For this problem we will assume there will be no whitespaces and only letters. The string can be an empty strings.

## Solutions:
The first thing we can observe is, if the strings are of different lengths then they cannot be anagrams.
The second thing we can observe is that since the problem states it is case insensitive, we can automatically make all letters lowercase using the method `.toLowerCase()`. 
### Solution 1:

We can try to sort both strings in ascending order and compare them. If they match we know it is an anagram because they contain the same letters and frequencies of each letter.

To sort the string we can use the Array built in method `.sort()`. This means we will need to convert the strings into arrays, sort the arrays, and then convert them back into strings. Luckily we have built-in methods that do this for us. 

```js
function anagram(str1, str2){
  if(str1.length !== str2.length){
    return false;
  }
  str1 = str1.toLowerCase().split("").sort().join("");
  str2 = str2.toLowerCase().split("").sort().join("");
  
  if(str1 === str2) return true;
  return false;
}

console.log(anagram("aZaZs", "szzaa"));
console.log(anagram("aZacs", "szzaa"));

```
This seems like a clean and easy solution but we need to understand the runtimes of these built-in functions to really understand how efficient our solution is. The runtime of these functions are as follows:
* `.toLowerCase()` is `O(N)`
* `.split()` is `O(N)`
* `.sort()` is `O(NlogN)`
* `.join()` is `O(N)`

This means that for each string operation we get `O(NlogN)`:
```js
str1 = str1.toLowerCase().split("").sort().join("");
              //O(N) +     O(N) +  O(NlogN) + O(N)  = O(3N) + O(NlogN) ---> O(NlogN)
```
This time complexity is not great since we only need O(n) to see all values of a string.


#### Solution 2

Since we want to compare that the frequency of individual letters match in both string1 and string 2 we can use an object. We can store the letters as the key and the frequency of occurance for that letter as its value. 

For Example:
```js
str1 = "hello"

freq1 = {
  "h": 1,
  "e": 1,
  "l": 2,
  "o": 1
}
```
To achieve this we can use a for loop:
```js
  let freq1 = {};

  for(let i = 0; i < str1.length;i++){
    let key = str1[i];
    freq1[key] = (freq1[key] || 0) + 1;
  }

```
Here we are iterating through each letter of our string. We will populate our object `freq1` storing the amount of times a letter appears in the string (frequency). 

For Example:
```js
//lets assume str1 = "hello

let key = str1[i]; //this will represent each letter as we iterate through the string

freq[key] =  //will look for that key/letter in the object if it exists. If it doesnt exist it will create that key with a value of undefined

(freq[key] || 0 ) + 1 //this will look for the value stored in freq[key] and add one to it if it has a value, but if no value is found (undefined), it will set it to 0 and then add one to it
```

After we have created both frequency objects, we can iterate through them and compare each key/value pair to see if each letter has the same frequency in both objects. If it does not, we return false, else we return true.


```js
function anagram(str1, str2){
  if(str1.length !== str2.length){
    return false;
  }
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let freq1 = {};
  let freq2 = {};
  //O(N)
  for(let i = 0; i<str1.length;i++){
    freq1[str1[i]] = (freq1[str1[i]] || 0) + 1;
    freq2[str2[i]] = (freq2[str2[i]] || 0) + 1;
  }
  //O(N)
  for(let letter in freq1){
    if(freq1[letter]!== freq2[letter]){
      return false;
    }
  }
  return true;
}

console.log(anagram("aAz", "aza"));
console.log(anagram("rat", "tar"));
console.log(anagram("", ""));
console.log(anagram("map", "Mat"));
```

Time Complexity: `O(N)` 