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

