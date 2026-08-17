package dsa;

import java.util.Arrays;

public class LongestIncreasingSubsequence {

	public static int lis(int[] nums) {
		int[] dp = new int[nums.length];
		Arrays.fill(dp, 1);

		int max = 1;
		for (int i = 1; i < nums.length; i++) {
			for (int j = 0; j < i; j++) {
				if (nums[i] > nums[j]) {
					dp[i] = Math.max(dp[i], dp[j] + 1);
				}
			}
			max = Math.max(max, dp[i]);
		}
		return max;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int[] nums = { 10, 9, 2, 5, 3, 7, 101, 18 };

		int result = lis(nums);

		System.out.println(result);

	}

}
