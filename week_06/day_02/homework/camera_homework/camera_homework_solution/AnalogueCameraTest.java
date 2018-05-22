import static org.junit.Assert.*;
import org.junit.*;

public class AnalogueCameraTest {

  private Printable camera;

  @Before
  public void before() {
    camera = new AnalogueCamera("Pentax", "K-01", 35);
  }

  @Test
  public void canPrintDetails() {
    assertEquals("Pentax K-01, 35mm", camera.printDetails());
  }


}