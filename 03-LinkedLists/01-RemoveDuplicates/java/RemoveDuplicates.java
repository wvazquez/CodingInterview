import java.util.*;

public class Main {
    public static void main(String args[]){
        LinkedList<Integer> ll = new LinkedList<>();
        ll.add(5);
        ll.add(6);
        ll.add(5);
        ll.add(8);
        ll.add(9);
        ll.add(5);
        ll.add(11);
        ll.add(12);
        ll.add(5);
        ll.add(8);
        System.out.println("this is the list" + ll.toString());
        System.out.println("new list " + removeDuplicates(ll).toString() );
    }

    public static LinkedList<Integer> removeDuplicates(LinkedList<Integer> list){
       HashSet<Integer> unique = new HashSet<>();
       LinkedList<Integer> uniqueList = new LinkedList<>();

       list.forEach((item) -> {
           System.out.println("this is the item:" + item);
           if(!unique.contains(item)){
               unique.add(item);
               uniqueList.add(item);

           }
       });
       return uniqueList;


/**
*   Iterator solution
*/

//        ListIterator<Integer> iterator = list.listIterator();
//        while(iterator.hasNext()){
//            Integer i = iterator.next();
//            if(unique.contains(i)) {
//                iterator.remove();
//            }else {
//                unique.add(i);
//            }
//        }
//        return list;


/**
 *          Solution without data structures
 */
        
        // ListIterator<Integer> iterator = list.listIterator();
        // ListIterator<Integer> runner;

        // while(iterator.hasNext()){
        //     Integer currentValue = iterator.next();

        //     int nextIndex = iterator.nextIndex();
        //     runner = list.listIterator(nextIndex);

        //     while(runner.hasNext()){
        //         Integer runnerValue = runner.next();

        //         if(currentValue == runnerValue){
        //             runner.remove();
        //                 System.out.println(iterator);

        //         }
        //     }
        //     iterator = list.listIterator(nextIndex);
        // }
        // return list;
    }
}