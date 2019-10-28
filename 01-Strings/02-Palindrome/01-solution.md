### Solutions:

#### Solution 1:

We can use two for loops where one pointer iterates from front to back and another from back to front. If at each iteration they match we return true. 

```java
public static boolean palindrome(String word){
    int j = word.length()-1;
    for(int i = 0; i < word.length(); i++){
      if(!Character.toString(word.charAt(i)).equals(Character.toString(word.charAt(j)))){
        return false;
      }
      j--;
    }
    return true;
}
```
The problem with this solution is that we continue checking even after we pass the halfway point. So we check the same letters twice. 

---

#### Solution 2

In example [01-ReverseString](../01-ReverseString/01-solution.md), we went over StringBuilder and how we can use the StringBuilder's reverse method to reverse a string. Using this same approach we can take the provided string, reverse it and then compare it to the original string. If they match we can return true as a palindrome, else return false.

```java
public static boolean palindrome(String sentence){
    StringBuilder reversed = new StringBuilder(sentence);
    reversed.reverse();
    if(sentence.equals(reversed.toString())){
      return true;
    }
    return false;
  }
```


### Things to remember:
* Time Complexity for both solutions: _**O(n)**_
* To change a char to string use the static method toString(). `Character.toString(char)`
* To get the character in a string index use charAt(). `sentence.charAt(index)`
* To compare two strings use .equals() method. `sentence.equals(string)`