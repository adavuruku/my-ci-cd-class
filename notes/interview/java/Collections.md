OOP principles, design patterns, algorithms, data structures, databases, frameworks, your previous projects and there might be a short live coding task as well.

1. Sorting and Searching Algorithm

2. 

https://www.geeksforgeeks.org/java-collections-interview-questions/

3. What is the difference between Array and Collection in Java?

4.  What are the various interfaces used in Java Collections Framework?

7. What is ArrayList in Java? 

8. What is the difference between Collection and Collections?

9. Difference between ArrayList and LinkedList in the java collection framework?

10. What is an iterator?

11. What is the difference between an Iterator and an Enumeration?

12. What is the difference between List and Set in Java

14. What is a priority queue in Java? [priority que is the type of que that allow element to be process based on priority instead of following the FIFO principle of Que. when item is added the ordering is either define or natural ordering principle is used]

LinkedHashMap, CopyOnWriteArrayList, 

15. What is the difference between List, set, and map in java?

16. What is the difference between Queue and Stack?

17. What is BlockingQueue in Java? [A type of que implementation that introduce flow control where by in a full Que item is not allow to be eque unless one item is remove also removal is not allowed untill an item is added to empty que]

18. What is the hashCode()?

19. Distinguish between ArrayList and Vector in the Java Collection Framework.

20. Differentiate between Iterator and ListIterator.

21. What is the difference between an Iterator and an Enumeration?

22. What are the features of Java Hashmap?

24. Explain the list interface.

23. What are Collection Interfaces?

24. Explain the list interface.
 In Collection, a list is an ordered collection of objects which can have duplicate values. Since List preserves the insertion order, it allows positional access and insertion, which also allows duplicate values.


26. Differentiate between HashSet and HashMap

27. Differentiate between HashSet and HashTable.

28. What is the default size of the load factor in the hashing-based collection?

## 29. What is the difference between Comparable and Comparator in Java?

In Java, `Comparable` and `Comparator` are two interfaces used for sorting objects. They provide different mechanisms to achieve sorting, and understanding their differences is crucial for implementing custom sorting logic.

### Comparable

1. **Purpose**:
   - `Comparable` is used to define the natural ordering of objects of a class. It allows objects of a class to be compared to each other to establish an ordering.

2. **Implementation**:
   - A class that implements `Comparable` must implement the `compareTo` method, which defines how two objects of the class are compared.

3. **Syntax**:
   - The class itself must implement the `Comparable` interface.
   - The `compareTo` method compares the current object with the specified object.

4. **Method Signature**:
   - `int compareTo(T o);`

5. **Example**:

   ```java
   public class Person implements Comparable<Person> {
       private String name;
       private int age;

       public Person(String name, int age) {
           this.name = name;
           this.age = age;
       }

       @Override
       public int compareTo(Person other) {
           return Integer.compare(this.age, other.age);
       }

       // getters and toString() methods
   }
   ```

   In this example, the `Person` class implements `Comparable` and defines the natural ordering based on the `age` field.

6. **Usage**:
   - Objects of the class can be sorted automatically (e.g., using `Collections.sort` or `Arrays.sort`) based on the natural ordering defined by the `compareTo` method.

### Comparator

1. **Purpose**:
   - `Comparator` is used to define an external comparison logic. It allows sorting of objects in multiple ways without modifying their class.

2. **Implementation**:
   - A class or method that uses `Comparator` can define one or more comparison strategies by implementing the `compare` method.

3. **Syntax**:
   - A separate class or an anonymous class typically implements the `Comparator` interface.
   - The `compare` method compares two objects of the class.

4. **Method Signature**:
   - `int compare(T o1, T o2);`

5. **Example**:

   ```java
   import java.util.Comparator;

   public class Person {
       private String name;
       private int age;

       public Person(String name, int age) {
           this.name = name;
           this.age = age;
       }

       // getters and toString() methods
   }

   class AgeComparator implements Comparator<Person> {
       @Override
       public int compare(Person p1, Person p2) {
           return Integer.compare(p1.getAge(), p2.getAge());
       }
   }

   class NameComparator implements Comparator<Person> {
       @Override
       public int compare(Person p1, Person p2) {
           return p1.getName().compareTo(p2.getName());
       }
   }
   ```

   In this example, two separate comparators (`AgeComparator` and `NameComparator`) are defined for comparing `Person` objects based on `age` and `name`, respectively.

6. **Usage**:
   - Objects can be sorted using different comparators based on the desired sorting criteria.
   - For example, `Collections.sort(list, new AgeComparator())` sorts the list of `Person` objects by age.

### Key Differences

1. **Implementation Location**:
   - `Comparable`: The comparison logic is in the class itself.
   - `Comparator`: The comparison logic is in a separate class or defined externally.

2. **Single vs. Multiple Sorting**:
   - `Comparable`: Defines a single natural ordering.
   - `Comparator`: Can define multiple sorting strategies.

3. **Modifying Class**:
   - `Comparable`: Requires modifying the class to implement the `Comparable` interface.
   - `Comparator`: Does not require modifying the class; sorting logic can be defined outside the class.

4. **Method Names**:
   - `Comparable`: Uses `compareTo` method.
   - `Comparator`: Uses `compare` method.

5. **Flexibility**:
   - `Comparable`: Less flexible as it is part of the class definition.
   - `Comparator`: More flexible as it allows multiple different comparisons and does not require altering the class.

6. **Package**
    Comparable is present in the package java.lang and Comparator is present in the package java.util


### Conclusion

- **Use `Comparable`** when you want to define a natural order for objects that is typically consistent with the logical order of the objects.
- **Use `Comparator`** when you need to define multiple ways to compare objects or when you cannot modify the class whose instances you want to sort. 

Understanding and correctly using `Comparable` and `Comparator` ensures robust and flexible sorting logic in Java applications.


## 30. What is the difference between fail-fast and failsafe?
## 32. What is IdentityHashMap?
The IdentityHashMap implements the Map interface using Hashtable, comparing keys (and values) using reference equality instead of object equality.

33. Write a program in Java to display the contents of a HashTable using enumeration.

36. How can you synchronize an ArrayList in Java? 
List<String> list = new ArrayList<String>();

        list.add("Eat");
        list.add("Coffee");
        list.add("Code");
        list.add("Sleep");
        list.add("Repeat");

        // Synchronizing ArrayList in Java
        list = Collections.synchronizedList(list);

        // we must use synchronize block to avoid
        // non-deterministic behavior
        synchronized (list)
        {
            Iterator<String> it = list.iterator();
            while (it.hasNext()) {
                System.out.println(it.next());
            }
        }


38. What will happen if you use HashMap in a multithreaded Java application?

39. What will happen if two different keys of HashMap return the same hashcode()?

43. Difference between PriorityQueue and TreeSet in Java? 

45. How TreeMap works in Java?

Red-Black tree. A red-black tree is a self-balancing binary search tree where each node has an extra bit, and that bit is often interpreted as the color (red or black). These colors are used to ensure that the tree remains balanced during insertions and deletions.

49. How does Hashmap internally Works? [https://www.geeksforgeeks.org/internal-working-of-hashmap-java/]

50. Why iterator in hashmap is considered fail-fast?

51. WeakHashmap vrs HashMap

An implementation of the map interface, which includes only weak references to the keys. This allows garbage collection when the key is no longer referenced outside of the Map.

Strong vs Weak References: Weak Reference Objects are not the default type/class of Reference Object and they should be explicitly specified while using them. This type of reference is used in WeakHashMap to reference the entry objects. 
Strong References: This is the default type/class of Reference Object. Any object which has an active strong reference are not eligible for garbage collection. In HashMap, key objects have strong references. 

Role of Garbage Collector: Garbage Collected : In HashMap , entry object(entry object stores key-value pairs) is not eligible for garbage collection i.e Hashmap is dominant over Garbage Collector. 
In WeakHashmap, When a key is discarded then its entry is automatically removed from the map, in other words, garbage collected.

** Clone method Implementation: HashMap implements Cloneable interface. 
WeakHashMap does not implement Cloneable interface, it only implements Map interface. Hence, there is no clone() method in the WeakHashMap class.
// Java program to illustrate 
// Hashmap 
import java.util.*;
class HashMapDemo
{
	public static void main(String args[])throws Exception
	{
		HashMap m = new HashMap();
		Demo d = new Demo();
		
		// puts an entry into HashMap
		m.put(d," Hi "); 
		
		System.out.println(m); 
		d = null;
		
		// garbage collector is called
		System.gc();
		
		//thread sleeps for 4 sec
		Thread.sleep(4000); 
		
		System.out.println(m);
		}
	}
	class Demo
	{
		public String toString()
		{
			return "demo";
		}
		
		// finalize method
		public void finalize()
		{
			System.out.println("Finalize method is called");
		}
}


// Java program to illustrate 
// WeakHashmap 
import java.util.*;
class WeakHashMapDemo
{
	public static void main(String args[])throws Exception
	{
		WeakHashMap m = new WeakHashMap();
		Demo d = new Demo();
		
		// puts an entry into WeakHashMap
		m.put(d," Hi "); 
		System.out.println(m);
		
		d = null;
		
		// garbage collector is called
		System.gc(); 
		
		// thread sleeps for 4 sec
		Thread.sleep(4000); .
		
		System.out.println(m);
	}
}

class Demo
{
	public String toString()
	{
		return "demo";
	}
	
	// finalize method
	public void finalize()
	{
		System.out.println("finalize method is called");
	}
}


Collections.unmodifiableList(numbers);

UnsupportedOperationException
                   unsupportedOperationException



## 
Sequenced Collections
The absence of a universal supertype for collections with a specified encounter order has caused recurring issues and complaints within Java’s collections framework. Additionally, the lack of consistent methods for accessing the first and last elements, as well as iterating in reverse order, has been a persistent drawback.

Consider the List interface, which maintains an encounter order. While accessing the first element is straightforward with list.get(0), accessing the last element requires list.get(list.size() - 1). This inconsistency poses challenges for developers and complicates code maintenance.

Although this inconvenience mentioned as the example in Collectioninterface. It also happens in Map interfaces as well.




method referencing
stream api
lambda expression
java date and time
default methods 

9
try with resource
moduledefault
private methods in interface

10
local variable type (var)

13
textblock
String indent and transform

14
yield (switch case)

16
record
pattern matching for instance of

sealed classe
virtual thread
sequencial collection
String template
pattern record


Please copy the Reference number 20245618681 for this application. This will be required for retrieval of your application and Appointment Booking.

Please note down the Reference No. 20245618681
