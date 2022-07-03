package Oviya;
import java.util.Scanner;

public class FibonacciScannerUsage {
	
	public static void main(String args[])  
	{    
	 int n1=0,n2=1,n3,i;
	 
	 Scanner sc= new Scanner(System.in);
	 System.out.print("How many numbers you wish to see in Fibonacci Series? ");
	 
	 int count = sc.nextInt();
	 System.out.print("First "+count+" numbers of Fibonacci Series:\n");   
	
	if (count == 1)
		System.out.print(n1); 
	else
		
	 System.out.print(n1+" "+n2);   
	    
	 for(i=2;i<count;i++)   
	 {    
	  n3=n1+n2;    
	  System.out.print(" "+n3);    
	  n1=n2;    
	  n2=n3;    
	 }    
	  
	}

}

