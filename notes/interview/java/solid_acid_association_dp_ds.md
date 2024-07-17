/**
https://medium.com/@alxkm/java-mastering-solid-principles-ab2ccda591a3

https://www.educative.io/answers/what-are-the-solid-principles-in-java

 * lsp -> subclass can represent their superclass without  causing aby problem in your application
 [ different operation among child classes should be move to interface, so child classes can implement only what it wants] -> class
 *
 * isp -> larger interphases should be split into smaller ones [classes dont need to implement interface functionality that are not of use to them] -> interface
 *
 * DIP or DI : Dependency Injection or Dependency Inversion principlet says that higher classes should not depend on lower classed
 * it means higher classes should be able to use any form of lower classes
 * By creating instances of lower classes using interface such that the supper class can inject any lower class that implements the interface
 *
 * Single responsiblity principle: A class should only be designed to handle single responsibility or purpose
 * A class that saves hanlde transaction must be different from the one generating reports or sending email
 * such a change can be made in one without it affecting others
 *
 * Open and closed principles: A class should be open for extension but close for changes
 * [If you want to add new functionality to your existing code and you have to modify it before
 * you add the new functionality, then you are not following the open-closed principle.]
 * it says a class can be inherited [open] but the functionality of the class should not be change
 * or a class can implement an iterface [open] and add more of its own features
 * so it can be achieve either by interface or inheritance
 * */ 2409355356

 composition versus aggregation versus association
 https://medium.com/@salvipriya97/java-aggregation-and-composition-explained-with-examples-66cbffd21b9c

 atomicity consistency isolation durability

 Acid principles are commonly referred to in various fields, including chemistry, computer science (especially in database management), and even business. Here's a breakdown of the acid principles with examples:

 Atomicity:
 Definition: Atomicity ensures that a transaction is treated as a single unit of work. It means that either all the operations within the transaction are completed successfully, or none of them are.
 Example: Consider a bank transfer where money is being transferred from one account to another. Atomicity ensures that if the money is debited from one account, it is also credited to the other account. If the operation fails midway (e.g., due to a system crash), neither the debit nor the credit should occur.
 Consistency:
 Definition: Consistency ensures that a database remains in a valid state before and after the execution of a transaction. In other words, any transaction should take the database from one valid state to another valid state.
 Example: In an e-commerce platform, if a customer places an order, the inventory should be updated accordingly. Consistency ensures that the inventory count is accurate after the order is placed. If the inventory count is 10 before the order, it should be 9 after a successful order.
 Isolation:
 Definition: Isolation ensures that the execution of multiple transactions concurrently does not result in an outcome that is different from the same transactions executed serially. Each transaction should operate independently of and transparently to other transactions.
 Example: Suppose two users attempt to withdraw money from the same bank account simultaneously. Isolation ensures that each user sees the bank account's state as if they were the only user accessing it. If one user withdraws $100, the other user shouldn't be able to withdraw the same $100 simultaneously.
 Durability:
 Definition: Durability guarantees that once a transaction is committed, its effects persist even in the event of system failures (such as power outages or crashes). In other words, the changes made by committed transactions are permanent and survive system failures.
 Example: After a successful fund transfer, the details of the transaction are stored permanently in the database. Even if the system crashes immediately after the transaction, when it comes back online, the details of the transaction should still be available and accurately reflect the completed transfer.
 These principles are fundamental in ensuring the reliability, integrity, and stability of systems that involve transactions or data management, whether it's in the realm of databases, financial systems, or other critical applications.

 Design Pattern:
 https://www.digitalocean.com/community/tutorials/java-design-patterns-example-tutorial

 Structural DP (Adapter, Facade, Proxy )
 Creational DP (Singleton, Builder, Factory, Abstract factory, prototype)
 Behavioral (chain of responsibility, visitor, state, mvc, mediator, template)


 composition versus aggregation versus association
 https://medium.com/@salvipriya97/java-aggregation-and-composition-explained-with-examples-66cbffd21b9c


 The Liskov Substitution Principle (LSP) is one of the five SOLID principles of object-oriented design. It states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. In other words, if class B is a subclass of class A, then we should be able to replace A with B without changing the behavior of the program.

### Real-life Example:

Let's use a real-life example involving a transportation system.

#### Scenario:
Imagine we are building a transportation system where different types of vehicles can be used for transportation. We have a base class `Vehicle` and subclasses `Car` and `Bicycle`.

#### Base Class:
```java
public class Vehicle {
    public void startEngine() {
        System.out.println("Engine started");
    }

    public void drive() {
        System.out.println("Vehicle is being driven");
    }
}
```

#### Subclass Car:
```java
public class Car extends Vehicle {
    @Override
    public void startEngine() {
        System.out.println("Car engine started");
    }

    @Override
    public void drive() {
        System.out.println("Car is being driven");
    }
}
```

#### Subclass Bicycle:
```java
public class Bicycle extends Vehicle {
    // Bicycles don't have an engine, so startEngine() is not applicable
    @Override
    public void startEngine() {
        throw new UnsupportedOperationException("Bicycles don't have an engine");
    }

    @Override
    public void drive() {
        System.out.println("Bicycle is being ridden");
    }
}
```

#### Violation of LSP:
In the above example, the `Bicycle` class violates the Liskov Substitution Principle because it overrides the `startEngine` method to throw an exception. If we substitute a `Vehicle` object with a `Bicycle` object and call the `startEngine` method, it will throw an exception, breaking the expected behavior of the `Vehicle` class.

#### Corrected Design:
To adhere to the Liskov Substitution Principle, we need to redesign our classes. We can introduce a new base class called `NonMotorizedVehicle` for vehicles that don't have an engine, and separate the `Vehicle` class into `MotorizedVehicle` and `NonMotorizedVehicle`.

#### Base Classes:
```java
public abstract class Vehicle {
    public abstract void drive();
}

public abstract class MotorizedVehicle extends Vehicle {
    public abstract void startEngine();
}
```

#### Subclass Car:
```java
public class Car extends MotorizedVehicle {
    @Override
    public void startEngine() {
        System.out.println("Car engine started");
    }

    @Override
    public void drive() {
        System.out.println("Car is being driven");
    }
}
```

#### Subclass Bicycle:
```java
public class Bicycle extends Vehicle {
    @Override
    public void drive() {
        System.out.println("Bicycle is being ridden");
    }
}
```

### Correct Implementation
Now, both `Car` and `Bicycle` classes correctly adhere to the Liskov Substitution Principle:

- `Car` is a subclass of `MotorizedVehicle`, and we can call `startEngine` and `drive` on it.
- `Bicycle` is a subclass of `Vehicle`, and we can call `drive` on it without expecting an engine-related method.

#### Example Usage:
```java
public class Main {
    public static void main(String[] args) {
        Vehicle myCar = new Car();
        myCar.drive(); // Car is being driven

        MotorizedVehicle myMotorizedCar = new Car();
        myMotorizedCar.startEngine(); // Car engine started
        myMotorizedCar.drive(); // Car is being driven

        Vehicle myBike = new Bicycle();
        myBike.drive(); // Bicycle is being ridden
    }
}
```

### Summary:
By redesigning the classes, we ensure that subclasses can be used interchangeably with their base classes without unexpected behavior or errors. This adherence to the Liskov Substitution Principle makes our code more robust, maintainable, and extensible.