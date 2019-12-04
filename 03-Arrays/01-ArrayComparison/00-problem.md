Write a function same which accepts two arrays. 
The function should return true if every value in the array has its 
corresponding value squared in the second array.
Only one squared number in the second array can correspond to the first array
order does not matter


Ex: 

sameArray([1,5,3], [9,1,25])  //returns true
sameArray([1,1,1],[1]) //returns false
sameArray([1,1,4],[1,1,1]) //returns false
sameArray([1,1,4,4],[1,4]) //returns false