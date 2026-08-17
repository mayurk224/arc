package dsa;

public class AnagramCheck {

	public static boolean isAnagram(String s1, String s2) {
		if (s1.length() != s2.length())
			return false;

		int[] count = new int[26];
		for (char c : s1.toCharArray())
			count[c - 'a']++;
		for (char c : s2.toCharArray())
			count[c - 'a']--;
		for (int c : count) {
			if (c != 0)
				return false;
		}
		return true;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String s1 = "listen";
		String s2 = "silent";

		boolean result = isAnagram(s1, s2);

		System.out.println(result);

	}

}
