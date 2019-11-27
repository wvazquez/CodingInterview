import java.util.*;
import java.io.*;

public class Main{
    public static int factorial(int num){
        if(num === 0){
            return 1;
        }
        return num * factorial(num - 1);
    }

    public static void main(String[] args){
        Scanner s = new Scanner(System.in);
        System.out.println(factorial(Integer.parseInt(s.nextLine())));
    }
}
