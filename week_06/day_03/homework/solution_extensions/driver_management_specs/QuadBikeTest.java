import static org.junit.Assert.*;
import org.junit.*;
import driver_management.*;

public class QuadBikeTest {

  QuadBike quadBike;

  @Before
  public void before() {
    quadBike = new QuadBike(1000, 30);
  }

  @Test
  public void hasEngineCapacity() {
    assertEquals(1000, quadBike.getEngineCapacity());
  }

  @Test
  public void hasAverageSpeed() {
    assertEquals(30, quadBike.getAverageSpeed());
  }

  @Test
  public void driveDistanceReturnsTime() {
    assertEquals(10, quadBike.driveDistance(300));
  }

}