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
