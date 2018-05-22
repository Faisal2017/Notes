import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.Before;

public class VehicleTest {
  Car car;
  Motorbike motorbike;

  @Before
  public void before(){
    car = new Car(4);
    motorbike = new Motorbike(2);
  }

  @Test
  public void carHasFourWheels(){
    assertEquals(4, car.getNumWheels());
  }

  @Test
  public void motorbikeHasTwoWheels(){
    assertEquals(2, motorbike.getNumWheels());
  }

  @Test
  public void carCanStartEngine() {
    assertEquals("Vrrrm! I'm a car!", car.startEngine());
  }

  @Test
  public void motorbikeCanStartEngine() {
    assertEquals("Vrrrm!", motorbike.startEngine());
  }
}