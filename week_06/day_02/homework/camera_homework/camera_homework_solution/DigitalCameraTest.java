import static org.junit.Assert.*;
import org.junit.*;

public class DigitalCameraTest {

  private Printable camera;

  @Before
  public void before() {
    camera = new DigitalCamera("Canon", "E0S", 30.4);
  }

  @Test
  public void canPrintDetails() {
    assertEquals("Canon E0S, 30.4 pixels", camera.printDetails());
  }


}