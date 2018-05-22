class Car extends Vehicle {

  public Car(int numWheels){
    super(numWheels);
  }

  public String startEngine(){
    return super.startEngine() + " I'm a car!";
  }
}