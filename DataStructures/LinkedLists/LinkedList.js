/**
 * Implementation of a doubly linked list
 * @author Wilmer Vazquez
 * 
 */



/**
 * Node class constains data, a pointer to the next node, and a pointer to the previous node.
 */
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
/**
 * LinkedList class creates an empty linked list.
 */
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    /**
     * If linked list is empty, set both head and tail to be the new node since only one element now exists in linked list
     * else, current head or tail next pointer should be the new node. 
     *       New node is the new head or tail.
     * Increase size by 1.
     */
    addFirst(data){
        const node = new Node(data);
        if(this.size === 0){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }
    addLast(data){
        const node = new Node(data);
        if(this.size === 0){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }
    /**
     * If LinkedList is empty, return.
     * Else if LinkedList only has one item, we will make LinkedList empty.
     * Else we know there is more than one item, 
     *      we will set the heads next item as the new head
     *      or set the tails prev item as the new tail
     * Reduce size by 1
     */ 
    removeFirst(){
        if(this.size === 0){
          return;
        }else if(this.size === 1){
          this.head = null;
          this.tail = null;
        }else{
          const nextNode = this.head.next;
          nextNode.prev = null;
          this.head = nextNode;       
        }
        this.size--;
    }
  
    removeLast(){
        if(this.size === 0){
          return;
        }else if(this.size === 1){
          this.head = null;
          this.tail = null;
        }else{
          const previousNode = this.tail.prev;
          previousNode.next = null;
          this.tail = previousNode;       
        }
        this.size--;
    }
    /**
     * 
     * if no index is passed, or index is out of bounds, return null
     * else iterate through linked list until i === index
     *      return data at that index.
     */
    getValue(index = -1){
      if(index < 0 || index >= this.size){
        return null;
      }
      let i = 0;
      let current = this.head;
      while(i <= index && current !== null){
        if(i === index){
          return current.data;
        }
        i++;
        current = current.next;
      }
    }

    /**
     * Helper functions
     */
    printAll(){
        let output = "";
        let current = this.head;
        while(current !== null){
          output += " "+ current.data.toString()+ " --> ";
          current = current.next;
        }
        output += "null";
        return output;
    }
    getSize(){
      return this.size;
    }

}



const myList = new LinkedList();
myList.addLast(5);
myList.addLast(3);
myList.addFirst(2);
myList.addFirst(10);
myList.printAll(); // 10 -->  2 -->  5 -->  3 --> null

myList.removeLast();
myList.printAll(); //10 -->  2 -->  5 --> null