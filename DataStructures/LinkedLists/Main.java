public class Node {
    int data;
    Node next;

    public Node(int data){
        this.data = data;
    }
}

public class LinkedList {
    Node head;
    Node tail;

    public void append(int data){
        Node node = new Node(data);
        if(isEmpty()){
            head = tail = node;  
        }else{
            tail.next = node;
            tail = node;
        }
    }
    public void prepend(int data){
        Node node = new Node(data);
        if(isEmpty()){
            head = tail = node;  
        }else{
            node.next = head;
            head = node;
        }
    }

    public void removeValue(int data){
        if(isEmpty()) return;
        if(head.data == data){
            head = head.next;
            if(head == null){
                tail = head;
            }
            return;
        }
        Node current = head;
        while(current.next != null){
            if(current.next.data == data){
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
        
    }

    public boolean isEmpty(){
        if(head == null){
            return true;
        }
        return false;
    }

    public String toString(){
        StringBuilder sb = new StringBuilder();
        if(isEmpty()) return "LinkedList is empty.";
        Node current = head;
        while(current != null){
            sb.append(" ");
            sb.append(Integer.toString(current.data));
            current = current.next;
        }
        return sb.toString();
    }
}

public class Main {
    public static void main(String []args){
        LinkedList list = new LinkedList();
        list.append(5);
        System.out.println(list.toString());
    }
}
