import static org.junit.Assert.*;
import org.junit.*;
import driver_management.*;

public class DodgemCarTest {

  DodgemCar dodgemCar;

  @Before
  public void before() {
    dodgemCar = new DodgemCar(2, 10);
  }

  @Test
  public void hasSeats() {
    assertEquals(2, dodgemCar.getNumberOfSeats());
  }

  @Test
  public void hasAverageSpeed() {
    assertEquals(10, dodgemCar.getAverageSpeed());
  }

  @Test
  public void driveDistanceReturnsTime() {
    assertEquals(30, dodgemCar.driveDistance(300));
  }

}