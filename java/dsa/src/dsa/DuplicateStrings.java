package dsa;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class DuplicateStrings {
	
	public static Set<String> findDuplicates(List<String> list){
		Set<String> seen = new HashSet<String>();
		Set<String> duplicate = new HashSet<String>();
		for(String str : list) {
			if(!seen.add(str)) {
				duplicate.add(str);
			}
		}
		return duplicate;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		List<String> list = Arrays.asList(
		        "Java", "Python", "Java", "C++", "Python"
		    );

		    Set<String> duplicates = findDuplicates(list);

		    System.out.println(duplicates);
		
	}
	
/**Why Set 
 * A Set doesn't allow duplicate values
 * Because Set is useful when we want to keep only unique values.
 * This is useful because we're checking whether we've already seen a string.
 * 
 * Why HashSet
 * Set is an interface. HashSet is a class that implements Set.
 * "I want a Set, and I'll use HashSet to provide the actual functionality."
 * 
 * In simple terms:

HashSet is being used because we need a collection that remembers unique strings and tells us when we're trying to add something that already exists.
 *  */
	

}
