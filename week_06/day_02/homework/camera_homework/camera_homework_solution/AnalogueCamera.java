class AnalogueCamera implements Printable {

  private String brand;
  private String model;
  private int filmSize;

  public AnalogueCamera(String brand, String model, int filmSize){
    this.brand = brand;
    this.model = model;  
    this.filmSize = filmSize;
  }

  public String printDetails() {
    return brand + " " + model + ", " + filmSize + "mm";
  }

}