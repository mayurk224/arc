package dsa;

public class CheckPalindrome {
	
	public static boolean isPalindrome(String s) {
//		int left = 0;  // this take starting index of string
//		int right = s.length() - 1; // this take last index of string
//		while(left<right) { 
//			if(s.charAt(left) != s.charAt(right)) {
//				return false;
//			}
//			left++;
//			right--;
//		}
//		return true;
		
		// this is best approach
		// This code Time Complexity is O(n) and Space Complexity is O(1)
		
		String rev = new StringBuilder(s).reverse().toString();
		return s.equals(rev);
		
		// This code Time and Space Complexity is O(n)
		
//		We use StringBuilder here mainly because we need to reverse the string.
//		Java's String class does not have a built-in .reverse()
/**StringBuilder is designed for operations where you need to modify text, such as:

reversing
appending
inserting
deleting
changing characters
 * 
 * */		
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		String str = "madam";

	    boolean result = isPalindrome(str);

	    System.out.println(result);

	}

}
