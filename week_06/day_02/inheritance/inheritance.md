# Inheritance

## Learning objectives

- Understand how inheritance works in Java

# Intro

When we were learning Ruby, we saw how useful it was to gather classes together when they share properties or functionality. We used *inheritance* to describe the relationship between superclasses and subclasses.

Remember in Ruby:

```ruby
class Vehicle
  ...
  def start_engine
    "Vrmmmm!"
  end
end

class Car < Vehicle

end
```

The same concept exists in Java, and although the syntax is a little different, the idea is much the same. We can use the 'extends' keyword to use inheritance.

```java
//Vehicle.java

class Vehicle {
  private int numWheels = 4;

  public int getNumWheels(){   //ADDED
    return this.numWheels;
  }
}
```

```java
//Car.java

public class Car extends Vehicle {
  
}
```

We can see from the example above that the Car class has inherited the numWheels property from the parent vehicle class, along with the getNumWheels() method. 

But what if want to *override* the property's value with something new. We would have to do this in the constructor:

```java
//Vehicle.java

class Vehicle {
  private int numWheels = 4;  //UNCHANGED
}
```

```java
//Motorbike.java

public class Motorbike extends Vehicle {
  public Motorbike() {
    numWheels = 2; //ADDED
  }
}
```

When we compile this we get a dirty big compiler error - why? This is because numWheels is marked as `private` in the Vehicle class. Even though Motorbike inherits from Vehicle, it still cannot access numWheels. So how can we access numWheels in our Motorbike class?

We could make numWheels `public` but that means it can be accessed from anywhere, which we don't want to do. We only want to be able to access it from a subclass. 

We could use a getter, but luckily Java provides us with another keyword which we can use: 'protected'

This is another keyword which controls how an instance variable or method can be accessed. We've seen how marking an instance variable as `private` means that we cannot access it directly from outside the class so we need to use a getter. `protected` is used when a class may be inherited from. It's a way of allowing sub-classes to access instance variables declared inside the superclass directly but they still cannot be accessed directly from other classes.

So let's change our Vehicle class so that numWheels uses the `protected` keyword:

```java
//Vehicle.java

class Vehicle {
  protected int numWheels = 4;  //UNCHANGED
}
```

And our code should now compile and our tests pass.

We can override methods to do something specific for that class:

```java
//Vehicle.java

class Vehicle {       //ADDED
  public String startEngine(){
    return "Vrrrm!";
  }
}
```


```java
//Car.java
  
public class Car extends Vehicle {
// AS BEFORE
  public String startEngine(){  //ADDED
    return "Vrrrm! I'm a car!";
  }
}
```

```java
//VehicleTest.java

@Test //ADDED
public void carCanStartEngine() {
  assertEquals("Vrrrm! I'm a car!", car.startEngine());
}

@Test //ADDED
public void motorbikeCanStartEngine() {
  assertEquals("Vrrrm!", motorbike.startEngine());
}
```

## Super!

Just as in Ruby, we can use the `super` keyword to trigger functionality from the parent class. We can refactor the code above to be more DRY.

```java
//Vehicle.java

class Vehicle {
  public String startEngine(){
    return "Vrrrm!";
  }
}
```


```java
//Car.java

public class Car extends Vehicle {
  public String startEngine(){
    return super.startEngine() + " I'm a car!"; //MODIFIED
  }
}
```

Our tests should still pass.

When the `super()` method is called on its own, it will call the parent class' constructor. 

```java
//Vehicle.java
class Vehicle {
  protected int numWheels; //MODIFIED

  public Vehicle(int numWheels){
    this.numWheels = numWheels;
  }
}
```

```java
//Car.java

class Car extends Vehicle {
  public Car(int numWheels){
    super(numWheels);
  }
}
```

In this example, when we instantiate a new car, we will pass an integer parameter to the parent vehicle class:

```java
//VehicleTest.java

  Car car = new Car(4); //MODIFIED
```

We also have to make the same changes to our Motorbike class:

```java
//Motorbike.java
class Motorbike extends Vehicle {
  public Motorbike(int num) { //MODIFIED
    super(num);
  }
}
```

```java
//VehicleTest.java

  motorbike = new Motorbike(2); //MODIFIED
```

We can test this in our VehicleTest.java file:

```java
//VehicleTest.java
@Test  //ADDED
public void carHasFourWheels(){ 
  assertEquals(4, car.getNumWheels());
}

@Test  //ADDED
public void motorbikeHasTwoWheels(){
  assertEquals(2, motorbike.getNumWheels());
}
```

## Types of inheritance

So far, we have been using single inheritance, where our Car class inherits from a single parent, Vehicle. We can also create an *inheritance chain*, where a class inherits from more than one layer of parent classes. For example:

```java
//Vehicle.java
class Vehicle {
  
}
```

```java
//Car.java

class Car extends Vehicle {
  
}
```

```java
//ElectricCar.java

class ElectricCar extends Car {
  
}
```

However, we can never inherit directly from more than one parent class. This would be illegal:

```java
//ElectricCar.java

class ElectricCar extends Car, Vehicle {

}
```

## Task (Optional) - 20 minutes

Create your own inheritance chain for modelling various types of animal.

- Your base class should be Animal, and should have methods for `eat()` and `breathe()`.
- Create a subclass of Animal called Mammal. Mammals should have a `brushHair()` method.
- Create two further subclasses of Mammal: Human and Chimpanzee. They should have a `speak()` method.

Make each method return a suitable string. Check that you can create a human and a chimpanzee object, and make sure that they can each eat, breathe, brush their hair, and speak.