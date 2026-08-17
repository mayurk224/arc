package dsa;

public class BestTimeToBuySellStock {

	public static int maxProfit(int[] prices) {
		int min = Integer.MAX_VALUE;
		int profit = 0;

		for (int price : prices) {
			min = Math.min(min, price);
			profit = Math.max(profit, price - min);
		}
		return profit;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int[] prices = { 7, 1, 5, 3, 6, 4 };

		int result = maxProfit(prices);

		System.out.println(result);
	}

}
