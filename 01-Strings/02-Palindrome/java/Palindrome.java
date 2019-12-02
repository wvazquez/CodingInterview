public class Palindrome{
    public static void main(String []args){
        System.out.println(palindrome("helleh"));
    }
    public static boolean palindrome(String sentence){
        StringBuilder reversed = new StringBuilder(sentence);
        reversed.reverse();
        if(sentence.equals(reversed.toString())){
          return true;
        }
        return false;
    }
}