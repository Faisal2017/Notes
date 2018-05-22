class DigitalCamera implements Printable {

  private String brand;
  private String model;
  private Double pixels;

  public DigitalCamera(String brand, String model, Double pixels){
    this.brand = brand;
    this.model = model;
    this.pixels = pixels;
  }

  public String printDetails() {
    return brand + " " + model + ", " + pixels + " pixels";
  }

}