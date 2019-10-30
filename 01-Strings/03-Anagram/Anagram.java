import java.util.Scanner;
import java.util.Arrays;
import java.util.HashMap;

public class Main {
    
  static boolean isAnagram(String a, String b) {
    if(a.length() != b.length()) return false;

    a = a.toLowerCase();
    b = b.toLowerCase();

    HashMap<Character, Integer> map = new HashMap<>();

    char letter;
    for(int i = 0; i < b.length(); i++){
      letter = b.charAt(i);

      if(!map.containsKey(letter)){
        map.put(letter, 1);
      }else{
        int value = map.get(letter) + 1;
        map.put(letter, value);
      }
    }
    //iterate through original string.
    for(int k = 0; k < a.length(); k++){
      letter = a.charAt(k);

      if( !map.containsKey(letter)) return false;
      int value = map.get(letter);

      if(value == 0) {
        return false;
      }
      else   {
        map.put( letter, --value);
      }
    }
    return true;
}


  public static void main(String[] args) {
    
        Scanner scan = new Scanner(System.in);
        String a = scan.next();
        String b = scan.next();
        scan.close();
        boolean ret = isAnagram(a, b);
        System.out.println( (ret) ? "Anagrams" : "Not Anagrams" );
    }
}