package Oviya;

public class Sort {
	
		public static void main(String[] args)
		{

			int arr[] = { 25, 75, 100, 50, 0 };

			//Ascending Sort
			
			System.out.print("Ascending Sort : ");
			for (int i = 0; i < arr.length; i++) {

				for (int j = i + 1; j < arr.length; j++) {

					int temp = 0;
					if (arr[j] < arr[i]) {

			            temp = arr[i];
						arr[i] = arr[j];
						arr[j] = temp;
					}
				}

			System.out.print(arr[i] + " " );
			}
			
			//Descending Sort
			
			System.out.print("\nDescending Sort : ");
			for (int m = 0; m < arr.length; m++) {

				for (int n = m + 1; n < arr.length; n++) {

					int temp = 0;
					if (arr[n] > arr[m]) {

			            temp = arr[m];
						arr[m] = arr[n];
						arr[n] = temp;
					}
				}

				System.out.print(arr[m] + " " );
			}
	}		

}

