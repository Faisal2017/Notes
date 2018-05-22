# Abstract Classes

## Objectives

- Understand what an abstract class is.
- Understand what an abstract method is.

## Intro

Sometimes we might want to have a class where we just want to use it as a 'superclass', but not create an actual instance of it, as it's not really appropriate. One example of this is the 'Vehicle' class we created when we talked about inheritance. We are using the 'Vehicle' class as a 'superclass' but do we really want to create an instance of 'Vehicle'? Probably not.

This is where the idea of an abstract class comes in.

### Making a class abstract
To make a class abstract we simply use the ```abstract``` keyword in our class declaration i.e.:

```java
//Vehicle.java

abstract class Vehicle { //MODIFIED
  //same as before
}
```

If we were to try and create an instance of a Vehicle all our code now, then we will get a compilation error as we now cannot create an instance of 'Vehicle'.

If we were to try to do so then we'd get a compiler error:


```bash
VehicleTest.java:12: error: Vehicle is abstract; cannot be instantiated
    vehicle = new Vehicle(3);

```


But there is more to abstract classes than just simply being classes we cannot instantiate.

## Abstract methods

As well as a class being abstract, methods can also be abstract. Abstract methods have no method body. The method must be defined in the subclass.

For example, let's add an abstract method 'Drive' to our Vehicle class:

```java
//Vehicle.java

abstract class Vehicle {

  // same as before

  public abstract String drive();
}
```

Note that this method does not contain any body. What were are basically saying is that any class which inherits from Vehicle must implement a 'Drive' method which returns a string. It doesn't matter what the method does inside the method but it must be called Drive, take no arguments and return a string. 

If we were to try an compile our code now we will get an error saying that the subclasses of Vehicle do not implement the Drive method.

So lets's go and fix this now:

```java
//VehicleTest.java

@Test//ADDED
public void motorbikeCanDrive() {
    assertEquals("use handlebars", motorbike.drive());
}
```

```java
//Motorbike.java
public String drive() { //ADDED
  return "use handlebars";
}
```

```java
//VehicleTest.java

@Test//ADDED
public void carCanDrive() {
    assertEquals("use steering wheel", car.drive());
}
```

```java
//Car.java
public String drive() { //ADDED
   return "use steering wheel";
}
```

## Non-abstract methods

However, abstract classes can still contain implementations. So we can leave our 'startEngine' method as it is.

For free, our Car and Motorbike can use this startEngine method. We can always override this behaviour too if we want to (like we do in the Car class)

All the normal "benefits" of inheritance still apply. We can share properties across all of our objects, e.g. number of legs or eyes, stuff that every bear has.

## Disadvantages

There is a problem however. We are still constrained by the same problems as inheritance. We can only have one superclass, and all the methods on that class bleed down to all of our children whether we want them or not.

[Task:]
Create a simple bank example where 'Account' is an abstract class which has two subclasses, 'Savings Account' and 'Current Account'


