package driver_management;
import behaviours.*;

public class DodgemCar implements Driveable {
  private int numberOfSeats;
  private int averageSpeed;

  public DodgemCar(int numberOfSeats, int averageSpeed) {
    this.numberOfSeats = numberOfSeats;
    this.averageSpeed = averageSpeed;
  }

  public int getNumberOfSeats() {
    return this.numberOfSeats;
  }

  public int getAverageSpeed() {
    return this.averageSpeed;
  }

  public int driveDistance(int distance) {
    return distance/this.averageSpeed;
  }
}