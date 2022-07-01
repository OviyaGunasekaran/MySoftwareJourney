package Oviya;

public class Swap {
		 
	    static void swapUsingTemp(int a, int b)
	    {
	   	    int temp = a;
	        a = b;
	        b = temp;
	        System.out.println("After SWAP -> Value of a is " + a
	                           + " and Value of b is " + b);
	    }
	 
	 	public static void main(String[] args)
	    {
	        int a = 9, b = 5;
	        System.out.println("Before SWAP -> Value of a is " + a
                    + " and Value of b is " + b);
	        swapUsingTemp(a, b);
	    }
	}

