## What are linked lists?

Linked Lists are linear data structures. What does *THAT* mean?

Data structures are ways of storing, organizing, and managing data. We are always looking for an optimal way to search and manipulate data, and depending on the problem we are trying to solve, we use data structures to try to achieve this. So a linear data structure is simply a collection of data stored and accessed/traversed in a sequential order. An example of a linear data structure is an array.

Linked list are useful for their fast insertion and deletion time of an element.

* [What are data structures](https://news.codecademy.com/why-data-structures/)
* [Linear vs Non-Linear](https://techdifferences.net/wp-content/uploads/2019/06/datasturcture-classification.jpg)

### Basic Overview

A linked list is represented by a chain of nodes that are connected or linked together by pointers. Each node points to the next node, creating a list, hence a linked list. Think of a node as a container that holds two things, the data and a pointer to the next node or item on the list. Thats it. Thats all a node is. 

* [Image of a linked list](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuRHwe1jKenn55_ws05-I9IkvFNOpf6CyVSG4NOqpRW68HsOgI)

In order to keep track of what the start of the linked list, we assign the first node a name of `head`. Sometimes you will also see the last node of a linked list named `tail`. The last node will always point to null to let us know we have reached the end of the linked list UNLESS we are creating a circular linked list. This means the last node points to the first node creating a circle. More on that later..


[What is a linked list - Basic Overview](https://www.educative.io/edpresso/what-is-a-linked-list)

### Doubly Linked Lists

Previously we mentioned that a node contains two things, the data and a pointer to the next node. This type of linked list is called a singularly linked list. When we iterate through the linked list we can only move one direction because we only have the pointer to the next node. We can instead create a node that holds the data, the pointer to the next node AND a pointer to the previous node. This is called a doubly linked list. This allows us to iterate through a linked list both forwards and backwards, but this also means we need to maintain two pointers which takes up more space in memory. 

### Functions of a Linked List

We can add or remove items to the head or tail of a linked lists. Most of the time these operations are constant time `O(1)` which is extremely fast. Searching for an element in a linked list on the otherhand is slow because we need to iterate through each node of a linked list. This operation takes linear time `O(n)`. 

In a singularly linked list (without a pointer to the tail)
* Search Time: `O(n)`
* Insertion Time (in head): `O(1)`
* Insertion Time (in tail): `O(n)`
* Deletion Time (in head): `O(1)`
* Deletion Time (in tail): `O(n)` 

In a singularly linked list (with a pointer to the tail)
* Search Time: `O(n)`
* Insertion Time (in head): `O(1)`
* Insertion Time (in tail): `O(1)` 
* Deletion Time (in head): `O(1)`
* Deletion Time (in tail): `O(n)`

In a doubly linked list (without a pointer to the tail)
* Search Time: `O(n)`
* Insertion Time (in head): `O(1)`
* Insertion Time (in tail): `O(n)` 
* Deletion Time (in head): `O(1)`
* Deletion Time (in tail): `O(n)` 

In a doubly linked list (with a pointer to the tail)
* Search Time: `O(n)`
* Insertion Time (in head): `O(1)`
* Insertion Time (in tail): `O(1)` 
* Deletion Time (in head): `O(1)`
* Deletion Time (in tail): `O(1)`

As we can see, we can have faster runtimes with a doubly linked list with a tail pointer. Either way, most of the time we talk about a linked list, you will usually hear insertion and deletion time to be `O(1)` time.


* [Applications of a linked list](https://www.geeksforgeeks.org/applications-of-linked-list-data-structure/)
* [Linked Lists in Javascript](https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3)
* [Linked Lists in Java](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/linked%20lists.html)

### Things to remember
Linked list is a linear data structure. 
You can have a singulary or doubly linked list. (You can also have a circular linked lists).

* Search Time: `O(n)`
* Insertion Time: `O(1)`
* Deletion Time: `O(1)`
