package driver_management;
import behaviours.*;

public class QuadBike extends Vehicle implements Driveable {
  private int engineCapacity;

  public QuadBike(int engineCapacity, int averageSpeed) {
    super(averageSpeed);
    this.engineCapacity = engineCapacity;
  }

  public int getEngineCapacity() {
    return this.engineCapacity;
  }

  public int driveDistance(int distance) {
    return distance/this.averageSpeed;
  }
}