package dsa;

public class ReverseAndAddPalindrome {

	public static boolean isPalindrome(int n) {
		int rev = 0, temp = n;

		while (temp > 0) {
			rev = rev * 10 + temp % 10;
			temp /= 10;
		}
		return rev == n;
	}

	public static int solve(int n) {
		while (!isPalindrome(n)) {
			int rev = Integer.parseInt(new StringBuilder(String.valueOf(n)).reverse().toString());
			n += rev;
		}
		return n;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int n = 56;

		int result = solve(n);

		System.out.println(result);

	}

}
