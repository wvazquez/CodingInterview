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