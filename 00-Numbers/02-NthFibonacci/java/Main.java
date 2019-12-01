import java.util.Map;
import java.util.HashMap;

class Main {
  public static void main(String[] args) {
    System.out.println(fib(6));
  }

  public static int fib_memoize(int n) {
    if (n < 0) {
      throw new IllegalArgumentException("Index was negative. No such thing as a negative index in a series.");
    }
    Map<Integer, Integer> memo = new HashMap<>();
    memo.put(1, 0);
    memo.put(2, 1);
    return fib(n, memo);

  }

  private static int fib_memoize(int n, Map<Integer, Integer> memo) {
    if (memo.containsKey(n)) {
      return memo.get(n);
    }
    int result = fib(n - 1, memo) + fib(n - 2, memo);

    // memoize
    memo.put(n, result);

    return result;
  }


  public static int fib_iterative(int n){
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

}