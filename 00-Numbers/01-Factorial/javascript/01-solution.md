### Solutions:

We can solve this problem in a few ways but we will look at two easy solutions first.

First lets understand the problem. A factorial of a number `n` is the product of all the numbers from n to 1. For example, the factorial of `4` is `4! = 4 x 3 x 2 x 1 = 24`. We can immediately see that one solution is to use a for loop from n to 1. We also need to take into account that the factorial of zero is 1. 

---

#### Solution 1:

We create an variable result that will hold the product of each iteration from `n` to 1. If n is zero, immediately return 1 or in this case `result` since `0! = 1`. If `n` is greater than zero, we will run a for loop determining the product of `result` and the current value of `i`. 

```javascript
function factorial(n){
    let result = 1;
    if(n === 0){
        return result;
    }

    for(let i = n; i > 0; i--){
        result *= i
    }
    return result;
}
```

If need a refresher on how for loops work, check out this following resource:
[Understanding For Loops](https://zellwk.com/blog/js-for-loops/)

* **Time Complexity**: `O(n)`
* **Space Complexity**: `O(1)`



#### Solution 2:

In this solution we are using recursion. If you are not familiar with Recursion, it is simply a function that calls on itself. The tricky thing with recursion is you must have a base case where some condition is met and stops the recursion calls. Without it, your program will continue calling on itself until you get a StackOverFlow error. 

```javascript
function factorial(n){
    if(n === 0){ // base case
        return 1;
    }
    return n * factorial(n-1)
}
```

In this solution we use our our previously defined `if` statement as our base case which solves two things for us. It solves our recusive base case, and if the `n` passed to the function is zero it automatically returns 1 without reaching our recursive call. The recursive part of the program works in the following way if `n > 0`:

Lets assume `n = 4`.
```
4 * factorial(3);
        3 * factorial(2);
                2 * factorial(1)
                        1 * factorial(0)
                                1    //factorial(0) returns 1 stopping the recursive calls
                        1 * 1
                2 * 1
        3 * 2
4 * 6

returns 24;
```

* **Time Complexity**: `O(n)`
* **Space Complexity**: `O(n)`

This solution takes more space to solve because each recusive call is added to the call stack using space in memory. 

For a refresher on recursive algorithms and time complexity, check out these resources:
[Time and Space Complexity](https://www.youtube.com/watch?v=ncpTxqK35PI)
[Recursion](https://www.freecodecamp.org/news/recursion-is-not-hard-858a48830d83/)
