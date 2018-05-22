import static org.junit.Assert.*;
import org.junit.*;
import driver_management.*;
import behaviours.*;

public class DriverTest {
  Driver driver;
  Driveable vehicle;

  @Before
  public void before() {
    vehicle = new DodgemCar(3,10);
    driver = new Driver("Lewis", vehicle);
  }

  @Test
  public void hasName() {
    assertEquals("Lewis", driver.getName());
  }

  @Test
  public void hasVehicle() {
    assertEquals(vehicle, driver.getVehicle());
  }

  @Test
  public void canSetVehicle() {
    vehicle = new QuadBike(1000, 30);
    driver.setVehicle(vehicle);
    assertEquals(vehicle, driver.getVehicle());
  }
}