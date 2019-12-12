### Solution:

#### Step 1:
In order to be able to remove all duplicates we know we will need to iterate over all the items in the linked list. This means that we will always have `O(n)` as best case scenerio. 
We can use both a for loop and a while loop to iterate through a linked list like this:
 ```java
       //for loop
       LinkedList<String> linkedList = new LinkedList<>();
       System.out.println("==> For Loop Example.");
       for (int i = 0; i < linkedList.size(); i++) {
           System.out.println(linkedList.get(i));
       }
 
      //enhanced for loop
      for (String node : linkedList) {
           System.out.println(node);
       }
 
       //while loop
       int i = 0;
       while (i < linkedList.size()) {
           System.out.println(linkedList.get(i));
           i++;
       }
```

The problem with these approaches is we use the linked list built in method .get() which takes linear time `O(n)`.
Since we are already running a `for()` or `while()` loop which is also O(n) time, the total time complexity is `O(n^2)`.
Since linked lists do not have indexing like Arrays do, the get() method iterates through the Linked List until it finds the item in index i. We can instead use Iterators and Java 8 collection stream to iterate through a linked list which takes linear time O(n)

#### Step 2:

Next we will need a way to track duplicates or more specifically, we need a way to track only the first occurence of an item. HashSets are perfect for this situation because Sets are data structures where no duplicates are allowed. The time complexity to add, remove and search are constant time `O(1)`

#### Step 3:
Our next step is to figure out the following, once we see a duplicate, how can we handle removing it. We can choose to create a brand new linked list and return it with only unique elements from our Set, or we can remove the element from our LinkedList each time we see a duplicate. The problem with java's `.remove(index)` method is that it takes `O(n)`.

---

##### Naive Solution
```java
public static LinkedList<Integer> removeDuplicates(LinkedList<Integer> list){

    HashSet<Integer> set = new HashSet<>();
    for (int i = 0; i < list.size(); i++) {  //O(n)
        if(set.contains(list.get(i))){          //O(n)
            list.remove(i);                        //O(n)
            --i;  
            // We add this line because when we remove an element our i pointer is now pointing a the next item on the list. When i++ is executed immediately after, our i is now pointing at the next.next items. So an item gets skipped. We use --i to bring the pointer back to the previous item that would of been skipped.
        }else{
            set.add(list.get(i));
        }
        System.out.println(list.get(i));
    }
}
```

Total RunTime = `O(n^3)`.

This runtime is too long when we can implement this solution in `O(n) time.`

By using either an iterator or Collection streams we cut down the searching, retrieval and removal to `O(n)` time. The difference between an iterator and Collection Streams is that we can directly modify the iterator by using built in methods such as `remove()`. In Colletion Streams we cannot directly modify it. 

---

##### Iterator solution

In this solution we use Iterators to directly modify the Linked List.

```java
public static LinkedList<Integer> removeDuplicates(LinkedList<Integer> list){

    HashSet<Integer> set = new HashSet<>();
    ListIterator<Integer> iterator = list.ListIterator();

    while(iterator.hasNext()){              //O(n)
        Integer i = iterator.next();
        if(unique.contains(i)) {            //O(1)
            iterator.remove();              
        }else {
            unique.add(i);
        }
    }
    return list;
}
```

---

##### Collection Stream solution
In this solution we use Collection Streams `forEach()` method to iterate through the linked list and add unique elements to a new Linked List
```java
public static LinkedList<Integer> removeDuplicates(LinkedList<Integer> list){

    HashSet<Integer> unique = new HashSet<>();
    LinkedList<Integer> uniqueList = new LinkedList<>();

    list.forEach((item) -> {
        if(!unique.contains(item)){
            unique.add(item);
            uniqueList.add(item);
        }
    });
    return uniqueList;
}
```

Both Solutions run in `O(n)` time.

---
---


### Solution:  Part 2

If we are not able to use data structures, we can use two iterators that will traverse the Linked List looking for duplicates. 


```java
public static LinkedList<Integer> removeDuplicates(LinkedList<Integer> list){

    ListIterator<Integer> iterator = list.listIterator();
    ListIterator<Integer> runner;

    while(iterator.hasNext()){
        Integer currentValue = iterator.next();

        int nextIndex = iterator.nextIndex();
        runner = list.listIterator(nextIndex);

        while(runner.hasNext()){
            Integer runnerValue = runner.next();
            if(currentValue == runnerValue){
                runner.remove();
            }
        }
        iterator = list.listIterator(nextIndex);
    }
        return list;
}
```

By default an iterator does not start at the head of a LinkedList. We use the `iterator.next()` to point at the head and return its value. Each iteration will point to the next item in the LinkedList. 
```
iterator       iterator.next()          iterator.next().next()
---------       ---------------          ---------------
                 ___________             ___________
   null    ->   |    data   |       ->  |    data   | 
                 ------------            ------------

                ---------------        ---------------
                    head                  head.next()
```

Since our currentValue is the first element on the list, we need our runner iterator to start at the next element. This will change at every iteration of iterator. Next we iterate through each of the elements using the runner until the end of the Linked List. We compare each time the value of the iterator and the runner, and only when we have a match, we remove the node from the LinkedList. Finally, since we modified the initial list using the runner iterator, we need to reset iterator to reflect these modifications and we move on to the next node on the Linked List.

