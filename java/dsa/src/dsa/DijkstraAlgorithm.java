package dsa;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.PriorityQueue;

public class DijkstraAlgorithm {

	public static void shortestPath(int V, List<List<int[]>> graph, int src) {
		int[] dist = new int[V];
		Arrays.fill(dist, Integer.MAX_VALUE);
		dist[src] = 0;
		PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
		pq.add(new int[] { src, 0 });
		while (!pq.isEmpty()) {
			int[] curr = pq.poll();
			int u = curr[0];
			for (int[] neighbor : graph.get(u)) {
				int v = neighbor[0];
				int weight = neighbor[1];
				if (dist[u] + weight < dist[v]) {
					dist[v] = dist[u] + weight;
					pq.add(new int[] { v, dist[v] });
				}
			}
		}
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int V = 4;

		List<List<int[]>> graph = new ArrayList<>();

		for (int i = 0; i < V; i++) {
			graph.add(new ArrayList<>());
		}

		// graph: 0 -> 1 (4), 0 -> 2 (2)
		graph.get(0).add(new int[] { 1, 4 });
		graph.get(0).add(new int[] { 2, 2 });

		// 1 -> 3 (5)
		graph.get(1).add(new int[] { 3, 5 });

		// 2 -> 1 (1), 2 -> 3 (8)
		graph.get(2).add(new int[] { 1, 1 });
		graph.get(2).add(new int[] { 3, 8 });

		int src = 0;

		shortestPath(V, graph, src);
	}

}
