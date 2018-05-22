# Homework - Strategy Pattern

## Objectives

1. Practice using composition
2. Practice using the Strategy Pattern

## Task

We're going to model a driver who is able to drive different vehicles, for example a dodgem car, or a quad-bike. They want to be able to calculate how long it would take to travel a particular distance using that particular vehicle, based on the average speed of the vehicle.

1. Create an interface Driveable which has a method driveDistance() which takes an int parameter 'distance' and returns an int.

When implemented, it should return the time required to drive that distance. 
  
2. Create two classes, Dodgem Car and Quad-bike, both of which implement the Driveable interface. The dodgem car has a average speed and a number of seats. The Quad-bike also has an average speed and an engine capacity in cc. Feel free to add any other properties you may feel appropriate.

3. Create a class for a Driver, who has a name and a vehicle instance variable which is an instance of a Driveable. They should also have a driveDistance method, which has an int parameter and calls the driveDistance method on the Driveable vehicle.

4. You should be able to create a Driver by passing it a Driveable. You should also be able to update the Driveable vehicle if required, using a setter method.

### Extensions

1. Create a Vehicle superclass, which contains the common properties and methods.
2. Add more vehicles.

### Remember

1. Use TDD, using separate test files for each class.
2. Casting is not required for this.


