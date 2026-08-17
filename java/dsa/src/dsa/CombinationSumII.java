package dsa;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CombinationSumII {

	public static void backtrack(int[] arr, int target, int start, List<Integer> temp, List<List<Integer>> result) {
		if (target == 0) {
			result.add(new ArrayList<>(temp));
			return;
		}
		for (int i = start; i < arr.length; i++) {
			if (i > start && arr[i] == arr[i - 1])
				continue;
			if (arr[i] > target)
				break;
			temp.add(arr[i]);
			backtrack(arr, target - arr[i], i + 1, temp, result);
			temp.remove(temp.size() - 1);
		}
	}

	public static void main(String[] args) {
		int[] arr = { 10, 1, 2, 7, 6, 1, 5 };
		int target = 8;

		Arrays.sort(arr);

		List<Integer> temp = new ArrayList<>();
		List<List<Integer>> result = new ArrayList<>();

		backtrack(arr, target, 0, temp, result);

		System.out.println(result);
	}

}
