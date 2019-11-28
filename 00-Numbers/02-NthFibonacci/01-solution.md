### Solutions:

By default we know that the first two numbers in the sequence are  ` 0, 1`. Also, we know that:

`fib(n) = fib(n-1) + fib(n-2)`

Understanding these two things are important for our solutions. We need to then calculate the fibonacci number for any `n` greater than 2. We also know that the best solution we can achieve is `O(n)` because any time we need to iterate through n numbers, sort n numbers, or do anything requiring us to go through n numbers the best time complexity we can achieve is `O(n)`.



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

Another thing we notice is we calculate the same numbers multiple times such as `fib(3), and fib(4)`