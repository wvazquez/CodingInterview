### Solutions:

Two things we need to keep in mind when dealing with Strings in Java is 
1. Strings do not have a default reverse() method. 
2. String are [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html). This means it cannot be changed or modified once it is constructed. 

There are many ways to reverse a string which we will demonstrate below and show the differences between each. 

---
#### Solution 1:

##### 1A:
We can iterate through the string from rear to front as an array. At each index we use the String objects `charAt()` method to retrive the character at that index of the string. We take that character and concatenate it to our new string and finally output that new reversed string.

```java
public static void reverseString(String sentence){
    String reversed = "";
    for(int i = sentence.length() - 1; i >= 0; i--){
      reversed += sentence.charAt(i);
    }
    System.out.println("sentence reversed: " + reversed);
  }
```

##### 1B: 
We can convert the string into a charArray (an array of characters) and then iterate through the array from rear to front. Since this is now an array, we do not need to use the charAt() method as in solution 1A. We can instead access the character using bracket notation `charSentence[index]`

```java
public static void reverseString(String sentence){
    String reversed = "";
    char charSentence[] = sentence.toCharArray();

    for(int i = charSentence.length - 1; i >= 0; i--){
      reversed += charSentence[i];
    }
    System.out.println("sentence reversed: " + reversed);
  }
```

##### Details about solution:

Both approaches require you to concatenate characters to the reversed string `reversed += charSentence[i]` or `reversed += sentence.charAt(i)`. Since we previously said string cannot be changed or modified, what happens is we actually create a new string object every time we iterate through our for loop. This creates unnecessary objects.  


---

#### Solution 2: 

We can use Java's StringBuilder class which has a default reverse method. 


```java 
public static void reverseString(String sentence){
    StringBuilder reversed = new StringBuilder();
    reversed.append(sentence);
    reversed.reverse();
    System.out.println("sentence reversed: " + reversed.toString());
  }
```

This can be reformated to:
```java 
public static void reverseString(String sentence){
    StringBuilder reversed = new StringBuilder(sentence);
    reversed.reverse().toString();
    System.out.println("sentence reversed: " + reversed);
  }
```

### Things to remember:

* **Time Complexity**: `O(n)`
* **StringBuilder may provide better performace**. (Modern compilers may use StringBuilder behind the scenes when concatinating string to optimize performance)
* To access a character in a string use `charAt(index)` method
* To convert a string to a character array use `toCharArray()` method.
* String are immutable
* StringBuilder has a default `reverse()` method.
* To convert from type StringBuider to string use the StringBuilders `toString()` method.
