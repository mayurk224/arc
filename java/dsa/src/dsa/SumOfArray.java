package dsa;

import java.util.Arrays;
import java.util.List;

public class SumOfArray {
	
	public static int process(List<Integer> list, int k) {
        return list.stream()
                .filter(x -> x % 2 == 0)
                .map(x -> x * k)
                .reduce(0, Integer::sum);
    }

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6);
	    int k = 2;

	    int result = process(list, k);

	    System.out.println(result);
	}

}
