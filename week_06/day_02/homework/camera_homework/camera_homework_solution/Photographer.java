import java.util.*;

public class Photographer {

  private String name;
  private ArrayList<Printable> cameras;
  private HashMap<String, Integer> journal;

  public Photographer(String name) {
    this.name = name;
    this.cameras = new ArrayList<Printable>();
    this.journal = new HashMap<String, Integer>();
  }

  public void addCamera(Printable camera) {
    cameras.add(camera);
  }

  public void removeCamera(Printable camera) {
    cameras.remove(camera);
  }

  public int countCameras() {
    return cameras.size();
  }

  public String printAllCameraDetails() {
    String details = "";
    for (Printable camera : cameras) {
      details += camera.printDetails() + ", ";
    }
    return details;
  }

  public void addToJournal(String day, Integer numberOfPhotos) {
    journal.put(day, numberOfPhotos);
  }

  public Integer getNumberOfPhotosByDay(String day) {
    return journal.get(day);
  }

}