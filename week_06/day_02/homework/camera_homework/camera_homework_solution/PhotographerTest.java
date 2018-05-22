import static org.junit.Assert.*;
import org.junit.*;

public class PhotographerTest {

  private Photographer photographer;
  private Printable analogueCamera;
  private Printable digitalCamera;

  @Before 
  public void before() {
    photographer = new Photographer("Diane Arbus");
    analogueCamera = new AnalogueCamera("Pentax", "K-01", 35);
    digitalCamera = new DigitalCamera("Canon", "E0S", 30.4);
  }

  @Test
  public void canAddCamera() {
    photographer.addCamera(analogueCamera);
    assertEquals(1, photographer.countCameras());
  }

  @Test
  public void canRemoveCamera() {
    photographer.addCamera(analogueCamera);
    photographer.removeCamera(analogueCamera);
    assertEquals(0, photographer.countCameras());
  }

  @Test
  public void canPrintAllCameraDetails() {
    photographer.addCamera(analogueCamera);
    photographer.addCamera(digitalCamera);
    String details = photographer.printAllCameraDetails();
    assertEquals(details, "Pentax K-01, 35mm, Canon E0S, 30.4 pixels, ");
  }

  @Test
  public void canAddToJournal() {
    photographer.addToJournal("Monday", 54);
    assertEquals((Integer) 54, photographer.getNumberOfPhotosByDay("Monday"));
  }

}