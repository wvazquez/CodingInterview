### Solutions:

#### Solution 1:

Since the problem states it is case insensitive, we can automatically make all letters lowercase. We can then convert the string into a char array in order to manipulate it. We sort the char array and compare both. If they match we know it is an anagram because they contain the same letters and frequencies.

```java
import java.util.Scanner;

public class Solution {
    
    public static boolean Anagram(String a, String b) {
        char a1[] = sort(a.toLowerCase().toCharArray());
        char b1[] = sort(b.toLowerCase().toCharArray());
        return equal(a1, b1);
    }

    public static char[] sort(char[] arr){
        for(int i = 0; i < arr.length; i++){
            for(int j = i+1; j < arr.length; j++){
                if(arr[j] < arr[i]){
                    char temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }

    public static boolean equal(char[] a1, char[] b1){
        if(a1.length != b1.length) return false;

        for(int i = 0; i < a1.length; i++){
            if(a1[i] != b1[i]) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String a = scan.next();
        String b = scan.next();
        scan.close();
        System.out.println("Is this an anagram? " + Anagram(a, b));
    }
}
```

We can use Arrays built in methods to complete the same solution.

```java
    public static boolean Anagram(String a, String b) {
        char a1[] = sort(a.toLowerCase().toCharArray());
        Arrays.sort(a1);
        char b1[] = sort(b.toLowerCase().toCharArray());
        Arrays.sort(b1).
        return Arrays.equals(a1, b1);
    }
```
This time complexity is O(nlog(n))
Which is not great since we only need O(n) to see all values of a string.


#### Solution 2

We can use a hashkey. 

```java
static boolean isAnagram(String a, String b) {
    if(a.length() != b.length()) return false;

    a = a.toLowerCase();
    b = b.toLowerCase();

    HashMap<Character, Integer> map = new HashMap<>();

    char letter;
    for(int i = 0; i < b.length(); i++){
      letter = b.charAt(i);

      if(!map.containsKey(letter)){
        map.put(letter, 1);
      }else{
        int value = map.get(letter) + 1;
        map.put(letter, value);
      }
    }
    //iterate through original string.
    for(int k = 0; k < a.length(); k++){
      letter = a.charAt(k);

      if( !map.containsKey(letter)) return false;
      int value = map.get(letter);

      if(value == 0) {
        return false;
      }
      else   {
        map.put( letter, --value);
      }
    }
    return true;
}
```