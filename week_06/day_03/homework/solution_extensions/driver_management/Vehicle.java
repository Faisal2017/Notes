package driver_management;

public abstract class Vehicle {
  protected int averageSpeed;

  public Vehicle(int averageSpeed) {
    this.averageSpeed = averageSpeed;
  }

  public int getAverageSpeed() {
    return this.averageSpeed;
  }
}