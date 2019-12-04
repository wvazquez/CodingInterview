### Solution:

For this solution e use the built-in methods `split()`, `reverse()`, and `join()`. Strings do not have a built-in reverse method. So what we can do is turn our string into an array and then use the array built-in method to reverse the letters. The [.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) method receives a parameter that is used to seperate the elements of the string. In our solution we passed an empty string `("")` meaning we want to split the string at every position of the string

```javascript
let message = "Hello world";

message.split(""); // [ H,e,l,l,o, ,w,o,r,l,d ]
```
If we would pass an space `(" ")` as the seperator, our string would be split whenever it encounters a space. 
```javascript
let message = "Hello world";

message.split(" "); // [ Hello,world ]
```
Once we have our array of characters, we can use the built-in [.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) to reverse all the characters in our array. 

Our last step is to convert the array back into a string, and for that we use the [.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method. This method creates and returns a new string by concatenating all of the elements in an array. It also receives an optional seperator that seperates each element on the array once joined as a string.

```js
let message = [ H,e,l,l,o, ,w,o,r,l,d ];

message.join("-");  //H-e-l-l-o- -w-o-r-l-d
message.join(" ");  //H e l l o   w o r l d
message.join("");   //Hello world
message.join();   //H,e,l,l,o, ,w,o,r,l,d


```

If we pass an empty string, it simply concatenates the elements in the array without adding a seperator. This will now return our string in reverse order.
