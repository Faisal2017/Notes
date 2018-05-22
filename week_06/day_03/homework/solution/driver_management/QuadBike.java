package driver_management;
import behaviours.*;

public class QuadBike implements Driveable {
  private int engineCapacity;
  private int averageSpeed;

  public QuadBike(int engineCapacity, int averageSpeed) {
    this.engineCapacity = engineCapacity;
    this.averageSpeed = averageSpeed;
  }

  public int getEngineCapacity() {
    return this.engineCapacity;
  }

  public int getAverageSpeed() {
    return this.averageSpeed;
  }

  public int driveDistance(int distance) {
    return distance/this.averageSpeed;
  }
}