https://www.interviewbit.com/multithreading-interview-questions/

3B. What is Livelock? What happens when it occurs? [thread are not blocked but can progress bcus resource is not available]
16. Explain the meaning of the deadlock and when it can occur?
17. race condition -> many thread try to access a resource at same time. this can cause incosistency. [solution synchronize]

What do you mean by Multithreading? Why is it important?

1. What is the start() and run() method of Thread class?

2. What is Thread in Java?

3. What are the two ways of implementing thread in Java?

4. What's the difference between thread and process?

5. What’s the difference between class lock and object lock?

6. What's the difference between User thread and Daemon thread?

7. How can we create daemon threads? [But one can only call the setDaemon() method before start() method otherwise it will definitely throw IllegalThreadStateException as shown below:]


8. What are the wait() and sleep() methods? [objectmonitor]

9. What’s the difference between notify() and notifyAll()?

10. Why wait(), notify(), and notifyAll() methods are present in Object class?

11. What is Runnable and Callable Interface? Write the difference between them

12. What are the benefits of using Multithreading?

13. Explain thread pool?

14. What’s the purpose of the join() method?

15. What do you mean by garbage collection? [mark/sweep]


17. Explain volatile variables in Java?

18. How do threads communicate with each other

19. Can two threads execute two methods (static and non-static concurrently)

20. What is the purpose of the finalize() method?

1. What is ConcurrentHashMap and Hashtable? In java, why is ConcurrentHashMap considered faster than Hashtable?

2. What is thread starvation?

5. Can you start a thread twice?

6. Explain context switching.

7. What is CyclicBarrier and CountDownLatch?

8. What do you mean by inter-thread communication?

9. What is Thread Scheduler and Time Slicing?

10. What is a shutdown hook?

11. What is busy spinning?

12. What is synchronized method and synchronized block? Which one should be preferred?

13. Explain thread priority.

14. What do you mean by the ThreadLocal variable in Java?

15. What is semaphore?

18. What will happen if we don’t override the thread class run() method?

20. Is it possible to call the run() method directly to start a new thread?

21. Is it possible that each thread can have its stack in multithreaded programming?

22. What is the synchronization process? Why use it?

 It can be achieved in three different ways as given below: 

By the synchronized method
By synchronized block
By static synchronization

These terms refer to different ways of achieving thread safety in Java using synchronization mechanisms. Let's explore each one:

### 1. Synchronized Method

A synchronized method is a method that is marked with the `synchronized` keyword. When a method is synchronized, only one thread can execute that method on an instance of the class at any given time. Other threads that try to execute the synchronized method on the same instance will block until the method execution completes.

**Example:**
```java
public class MyClass {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }

    public synchronized int getCount() {
        return count;
    }
}
```

In this example, both `increment()` and `getCount()` methods are synchronized. This means that only one thread can execute either of these methods on a particular instance of `MyClass` at a time.

### 2. Synchronized Block

A synchronized block allows you to synchronize a specific section of code rather than an entire method. This gives you more flexibility compared to synchronized methods. You specify an object on which to synchronize, and only one thread can execute the synchronized block on that object at a time.

**Example:**
```java
public class MyClass {
    private int count = 0;
    private Object lock = new Object();

    public void increment() {
        synchronized (lock) {
            count++;
        }
    }

    public int getCount() {
        synchronized (lock) {
            return count;
        }
    }
}
```

In this example, `lock` is used as the monitor object for synchronization. The `increment()` and `getCount()` methods synchronize on `lock`, ensuring that only one thread can access `count` at any time.

### 3. Static Synchronization

Static synchronization is used when you want to synchronize access to static methods or static variables of a class. Static methods are synchronized using the `synchronized` keyword, similar to instance methods. The lock acquired for static synchronization is associated with the class itself, rather than any particular object instance.

**Example:**
```java
public class MyClass {
    private static int count = 0;

    public static synchronized void increment() {
        count++;
    }

    public static synchronized int getCount() {
        return count;
    }
}
```

In this example, both `increment()` and `getCount()` are static synchronized methods. Only one thread can execute either of these methods across all instances of `MyClass` at a time.

### Choosing Between Them

- **Synchronized Method**: Use when you want to synchronize the entire method and the synchronization is instance-specific.
- **Synchronized Block**: Use when you want to synchronize specific parts of a method or when you need to synchronize on a specific object.
- **Static Synchronization**: Use when you need to synchronize access to static methods or static variables across all instances of a class.

Each approach has its use cases depending on whether you need instance-level synchronization or class-level synchronization. It's important to consider thread safety and performance implications when applying synchronization in multi-threaded Java applications.



## Virtual Thread

Virtual Threads
In previous threading model, Java’s threads directly correspond to operating system (OS) threads, resulting in limitations on the number of threads that can be created due to OS constraints. In the traditional threading model, excessive thread creation can strain the OS and incur high costs, particularly for short-lived threads.

Java 21 introduces virtual threads, offering mapping between virtual threads and OS threads, allowing for theoretically unlimited virtual thread creation. This innovation addresses the limitations of traditional threading models, enabling the creation of numerous threads to meet the demands of high-throughput server applications. With virtual threads, the previous constraint on thread creation is eliminated, enabling the continuation of the thread-per-request style commonly used in server applications.