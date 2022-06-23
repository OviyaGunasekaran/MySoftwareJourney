package Oviya;

public class DatatypeSizeCheck {
	// Java Program to Demonstrate Primitive Data Types
	
		// Main driver method
		public static void main(String args[])
		{   boolean boo1 = true;
		 	boolean boo2 = false;
				 	
		 	System.out.println(boo1+" "+boo2); 
			
		 
		 	byte b = 126;                                               //to demonstrate Byte Data Type
			 
	      	System.out.println(b);                        				// byte is 8 bit value	 
	        b++;
	        System.out.println(b);	 
	      	b++;														// It overflows here because
	      	System.out.println(b);										// Range : byte can hold values from -128 to 127 	  						
	      	b++;														// Looping back within the range
	        System.out.println(b);
			
			char a = 'G';												// Creating and initializing custom character
			
			int i = 89;													// Integer data type is generally
																		// used for numeric values

			byte b1 = 4;												// use byte and short
																		// if memory is a constraint

			short s = 56;												// this will give error as number is
																		// larger than byte range
																		// byte b1 = 7888888955;

																		// this will give error as number is
																		// larger than short range
																		// short s1 = 87878787878;

			double d = 4.355453532;										// by default fraction value
																		// is double in java
			float f = 4.7333434f;										// for float use 'f' as suffix as standard
		
			long l = 12121; 											//need to hold big range of numbers then we need this data type
				
			System.out.println("char: " + a);
			System.out.println("integer: " + i);
			System.out.println("byte: " + b1);
			System.out.println("short: " + s);
			System.out.println("float: " + f);
			System.out.println("double: " + d);
			System.out.println("long: " + l);
		}

}
