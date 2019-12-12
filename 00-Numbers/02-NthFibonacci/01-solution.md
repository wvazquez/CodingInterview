### Solutions:

By default we know that the first two numbers in the sequence are  ` 0, 1`. Also, we know that:

`fib(n) = fib(n-1) + fib(n-2)`

Understanding these two things are important for our solutions. We need to then calculate the fibonacci number for any `n` greater than 2. We also know that the best solution we can achieve is `O(n)` because any time we need to iterate through n numbers, sort n numbers, or do anything requiring us to go through n numbers the best time complexity we can achieve is `O(n)`.


___
#### Recursive Solution
We can use recusion to solve this problem since we already know our two base cases.

```javascript
    if(n==2){
        return 1;
    } else if(n == 1){
        return 0;
    }
    return fib(n-1) + fib(n-2);
```

The problem with this solution is the time complexity. This solution would take `O(2^n)` which is extremely slow. 

Lets assume we called the function passing `n=6`. We can draw the following graph of recursive calls:

```
                                            fib(6)
                                   ----------|  |-------------
                                  /                            \
                                 /                              \
                              fib(5)                          fib(4)
                            /       \                          /   \
                      fib(4)         fib(3)                fib(3)  fib(2)   
                      /   \           /    \                /  \
                fib(3)   fib(2)   fib(2)  fib(1)       fib(2)  fib(1)  
                /   \
            fib(2)  fib(1)                          

``` 
We can see that each call to `fib(n)` makes two more recursive calls and since we need to calculate `n` numbers our time complexity become `O(2^n)`. 

* [Time Complexities Cheat Sheet](https://www.bigocheatsheet.com)

* Time Complexity: `O(2^n)`
* Space Complexity: `O(n)`

Another thing we notice is we calculate the same numbers multiple times such as `fib(3), and fib(4)`. We can improve this solution using a technique called Memoization. 
___
#### Recursion Solution with Memoization

So whats memoization? 

Memoization is an optimization technique that speeds up applications by storing the results of expensive function calls and returning the cached result when the same inputs occur again. Using memoization, we no longer compute numbers we have previously computed. Instead, we compute a number once, store its result, and return the computed result if that same number is called again.
* [Memoization in Javascript](https://scotch.io/tutorials/understanding-memoization-in-javascript)

Using Memoization with Recursion we achieve the following time and space complexities:
* Time Complexity: `O(n)`
* Space Complexity: `O(n)`

This is a significant improvement from our previous solution. Looking back at our previous graph we can see which calculation are from the cache:

```
                                            fib(6)
                                   ----------|  |-------------
                                  /                            \
                                 /                              \
                              fib(5)                          fib(4)-cache 
                            /       \                          
                      fib(4)        fib(3)-cache               
                      /   \           
              fib(3)   fib(2)-cache    
              /   \
    fib(2)-cache  fib(1)-cache   

```

#### Recursion with Memoization. 

```javascript
function fib(n, memo = {1: 0, 2: 1}){
  if(n in memo){
    return memo[n];
  }else{
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
  }
}

console.log(fib(5))
```

We create our fib function with two parameters:

    1. The number we need to compute
    2. The cache that will store our computed results

When we initially call the function `fib(5)` for example, we do not pass a cache, so our function uses the [default function parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters). This initializes our cache to contain the first two values of our fibonacci sequence, the first number is 0, `1: 0` and the second number is 1, `2: 1`

If you have not seen default function parameters before, check out this simple tutorial:
* [Default Parameters](https://alligator.io/js/default-function-parameters/)

```javascript
function fib(n, memo = {1: 0, 2: 1}){

}
fib(5); 
```
Next we use the [in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in) operator which returns true if the number n is already in our cache. If it is, we return the value. These operations take `O(1)` constant time because search and retrieval in objects is constant. Since `fib(5)` is not in the cache We move on to call `fib(4)`, `fib(3)` and so on. The key point is that we are passing our cache down to each recursion call. When we calculate the result of a number, we are storing the result and avoiding repeated calculations. 



#### Iterative Solution

Instead of using recursion, we can also use an iterative solution where we continue calculating the fibonacci sequence until we reach position `n`.

```javascript
function fib(n){
  let sequence = [0,1]
  if(n===1 || n===2){
    return sequence[n-1];
  }

  for(let i = 2; i < n; i++){
    sequence[i]= sequence[i-1] + sequence[i-2];
  }
  return sequence[sequence.length-1]; 
}

console.log(fib(8)) //13
```
This solutions has
* Time Complexity: `O(n)` 
* Space Complexity: `O(n)`

The problem with our solution is that it requires `O(n)` space to store the array containing the fibonacci sequence. If we analyze the problem carefully, we do not need all of the integers in the sequence, only the elements `n-2, n-1` and the position n we are looking for. We can modify our algorithm to only store the integers we need. 

```javascript
function fib(n){
    let sequence = [0,1];
    if(n===1 || n===2){
        return sequence[n-1];
    }

    let nextNumber;
    for(let i = 3; i <= n; i++){
        nextNumber = sequence[0] + sequence[1];
        sequence[0] = sequence[1];
        sequence[1] = nextNumber;
    }
    return nextNumber;
}

console.log(fib(8)) //13
```
In this final solution, we no longer store all the integers in the sequence. We now only store 2 integers in our array, so we can say that the Space Complexity is `O(2)` which in Big-O Notation is simply linear `O(1)`.
This solutions has:
* Time Complexity: `O(n)` 
* Space Complexity: `O(1)`
