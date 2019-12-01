#### Recursion with Memoization. 

```java
import java.util.Map;
import java.util.HashMap;

class Main {
  public static void main(String[] args) {
    System.out.println(fib(6));
  }

  public static int fib(int n) {
    if (n < 0) {
      throw new IllegalArgumentException("Index was negative. No such thing as a negative index in a series.");
    }
    Map<Integer, Integer> memo = new HashMap<>();
    memo.put(1, 0);
    memo.put(2, 1);
    return fib(n, memo);

  }

  private static int fib(int n, Map<Integer, Integer> memo) {
    if (memo.containsKey(n)) {
      return memo.get(n);
    }
    int result = fib(n - 1, memo) + fib(n - 2, memo);

    // memoize
    memo.put(n, result);

    return result;
  }
}
```

When we initially call the function `fib(6)` for example, we create a hashmap called memo which will cache all of our results. We store the first two values of our fibonacci sequence, the first number is 0, `1, 0` and the second number is 1, `2, 1`. We use a technique called method overloading, which allows you to have more than one function having the same name if their argument lists are different. We pass it the integer `n` and hashmap memo. 

This `fib(n,memo)` function will check to see if a value is stored in our cache, if so it returns the stored result. These operations take `O(1)` constant time because search and retrieval in HashMaps is constant. If not, it will compute the value, cache the results, and finally return the result we were looking for.

* [Method Overloading](https://beginnersbook.com/2013/05/method-overloading/)


#### Iterative Solution

Instead of using recursion, we can also use an iterative solution where we continue calculating the fibonacci sequence until we reach position `n`.

```java

public static int fib(int n){
    if(n==1){
      return 0;
    }else if(n==2){
      return 1;
    }
    int sequence[] = new int[n];  
    sequence[0] = 0;
    sequence[1] = 1;

    for(int i = 2; i < n; i++){
      sequence[i]= sequence[i-1] + sequence[i-2];
    }
    return sequence[sequence.length-1];
}
```
This solutions has
* Time Complexity: `O(n)` 
* Space Complexity: `O(n)`

The problem with our solution is that it requires `O(n)` space to store the array containing the fibonacci sequence. If we analyze the problem carefully, we do not need all of the integers in the sequence, only the elements `n-2, n-1` and the position n we are looking for. We can modify our algorithm to only store the integers we need. 

```java
 public static int fib(int n){
    
    int sequence[] = {0,1};  
    if(n==1 || n==2){
      return sequence[n-1];
    }

    int nextNumber;

    for(int i = 3; i <= n; i++){
        nextNumber = sequence[0] + sequence[1];
        sequence[0] = sequence[1];
        sequence[1] = nextNumber;
    }
    return sequence[1];
  }
```
In this final solution, we no longer store all the integers in the sequence. We now only store 2 integers in our array, so we can say that the Space Complexity is `O(2)` which in Big-O Notation is simply linear `O(1)`.
This solutions has:
* Time Complexity: `O(n)` 
* Space Complexity: `O(1)`
