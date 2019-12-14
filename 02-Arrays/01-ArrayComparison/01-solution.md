## Things to ask your interviewer

1) Can we change/modify the original arrays? 
2) Can the arrays be empty?

## Solutions - [Run on Repl.it](https://repl.it/@wilmervazquez/Two-array-comparison)

The important thing we need to remember about arrays is they pass by reference not by value. If you have not heard of passing by reference, it is important to learn when dealing with arrays, objects and functions. When we store an array in a variable, we are not storing the actual data the array contains. We are actually storing a reference/address in memory of where the array is stored. So how does this affect us?

If we were to compare two arrays like this:
```js
[1,2,3] === [1,2,3] //false
```
This will return false because we are not comparing the actual values stored in the array but instead we are comparing the references/address in memory. We need a way for us to compare the actual data, and a for loop works perfectly for us.

* [Pass by Reference vs Pass by Value](https://medium.com/nodesimplified/javascript-pass-by-value-and-pass-by-reference-in-javascript-fcf10305aa9c)


Since we know that only one number in the first array can correspond to one number in the second array, we can automatically return false if the arrays are not the same length.

```js
if(arr1.length !== arr2.length){
    return false;
}
```

### Solution 1

We can iterate through array1 using a for loop and check if its squared value exists in array2. 
```js
for(let i = 0; i < arr1.length; i++){
    let index = arr2.indexOf(arr1[i] ** 2);
}
```
We use the built-in function `.indexOf()` which returns us the index of an element we are looking for. In our case, we pass it the elements in array1 squared, but if no squared element is found, it returns -1. If you have never seen `**` it simply represents `number ** power` where we can find the power of a number. Since we are finding the square of a number, we can also use `arr2.indexOf(arr1[i] * arr1[i])` which will give us the same result. But using `**` is much cleaner and easier to read.

Since only one squared number in array2 can correspond to a number in array1 we need a way to know when a number in array2 has been used as a square to a number in array 1. 

For example:
```js
arraycompare([1,1], [1]) //should return false
```
One solution is to remove numbers in array2 once they have been used as a square. 

```js
```

We can use the built-in `.splice()` method that takes in two parameters, the index of the element we will remove, and how many more elements starting from the index to remove. Since we only need to remove one element, we pass the index and the number 1 to remove only that one index. `splice(index,1)`.

```js
function arraycompare(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let index = arr2.indexOf(arr1[i] ** 2);
        if(index !== -1){
            arr2.splice(index,1);
        }else{
          return false;
        }
    }
    return true;
}
```

There are two major concerns we have with this solution. 

1) We previously learned that arrays pass by reference. This means that any modifications we do to the arrays within the function will actually change the original array. Using the `.splice()` method modifies the array within the function, but these changes are reflected on the original array since we pass by reference. You need to ask your interviewer before coding the solution, if you can modify the arrays. 

For Example:
```js
let array1 = [1,4,8,7];
let array2 = [49,1,64,16]
console.log(array2) //[49,1,64,16]
console.log(arraycompare(array1,array2)); //true
console.log(array2) //[]
```

2) Since we are using a for loop, we know that our time complexity is `O(N)` where `N` is the number of elements in that array. What we need to be conscience of the runtime of the built-in function we are using, such as `.indexOf()` and `.splice()`. Both of these functions run in `O(N)` time but since we are running them inside a for loop our total runtime is:
```js
//for loop is O(N)
for(let i = 0; i < arr1.length; i++){
    //indexOf() is O(N)
    let index = arr2.indexOf(arr1[i] ** 2);
    if(index !== -1){
    //splice() is O(N)
        arr2.splice(index,1);
    }else{
        return false;
    }
}
// O(N (N + N)) = O(N^2 + N^2)  = O(N^2)
```
Our solution runs in `O(N^2)` time which is not great. We need a faster solution.


### Solution 2

In this second solution we create two objects whose key/value pairs hold the numbers as keys and the number of times each number appears (frequency).

For Example:
```js
arr1 = [2,2,2,6,1,1,1];

freq1 = {
  1: 3,
  2: 3,
  6: 1,
}
```
To achieve this we can use a for loop:
```js
  let freq1 = {};

  for(let i = 0; i < arr1.length;i++){
    let key = arr1[i];
    freq1[key] = (freq1[key] || 0) + 1;
  }

```
Here we are iterating through each element of our array. We will populate our object `freq1` storing the amount of times a number appears in the array (frequency). 

For Example:
```js
//lets assume arr1 = [2,2,2,6,1,1,1];

let key = str1[i]; //this will represent each number as we iterate through the array

freq[key] =  //will look for that key/number in the object if it exists. If it doesnt exist it will create that key with a value of undefined

(freq[key] || 0 ) + 1 //this will look for the value stored in freq[key] and add one to it if it has a value, but if no value is found (undefined), it will set it to 0 and then add one to it
```

After we have created both frequency objects, we can iterate through them and compare each key/value pair to see if each unique number in `freq1` has its squared value in `freq2` and that it has the same frequency in both objects. If it does not, we return false, else we return true.


```js
function arraycompare(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let freq1 = {};
    let freq2 = {};
    //O(N)
    for(let i = 0; i < arr1.length; i++){
      freq1[arr1[i]] = (freq1[arr1[i]] || 0) + 1;
      freq2[arr2[i]] = (freq2[arr2[i]] || 0) + 1;
    }
    //O(N)
    for(key in freq1){
      if(!(key**2 in freq2) || freq1[key] !== freq2[key**2]){
        return false;
      }
    }
    return true;
}

console.log(arraycompare2([1,4,8,7,1,4],[16, 1, 49,1,64,16]));
```

Time Complexity: `O(N)` 
