package driver_management;
import behaviours.*;

public class DodgemCar extends Vehicle implements Driveable {
  private int numberOfSeats;

  public DodgemCar(int numberOfSeats, int averageSpeed) {
    super(averageSpeed);
    this.numberOfSeats = numberOfSeats;
  }

  public int getNumberOfSeats() {
    return this.numberOfSeats;
  }

  public int driveDistance(int distance) {
    return distance/this.averageSpeed;
  }
}