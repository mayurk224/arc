package dsa;

public class MissingNumber {

	public static int findMissing(int[] arr) {
		int n = arr.length + 1;
		int total = n * (n + 1) / 2;

		int sum = 0;
		for (int num : arr)
			sum += num;
		return total - sum;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] arr = { 1, 2, 3, 5, 6 };

		int result = findMissing(arr);

		System.out.println(result);
	}

}
