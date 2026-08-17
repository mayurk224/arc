package dsa;

public class LongestCommonPrefix {

	public static String longestCommonPrefix(String[] strs) {
		if (strs.length == 0)
			return "";

		String prefix = strs[0];
		for (int i = 1; i < strs.length; i++) {
			while (!strs[i].startsWith(prefix)) {
				prefix = prefix.substring(0, prefix.length() - 1);
			}
		}
		return prefix;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String[] strs = { "flower", "flow", "flight" };

		String result = longestCommonPrefix(strs);

		System.out.println(result);
	}

}
