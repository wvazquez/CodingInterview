public class Main {
    public static void main(String[] args) {
      reverseString("Hello world!");
    }
    public static void reverseString(String sentence){
      StringBuilder reversed = new StringBuilder(sentence);
      reversed.reverse().toString();
      System.out.println("Sentence Reversed: " + reversed);
    }
  }