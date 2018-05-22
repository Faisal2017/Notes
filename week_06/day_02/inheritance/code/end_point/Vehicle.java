class Vehicle {
  protected int numWheels;

  public Vehicle(int numWheels) {
      this.numWheels = numWheels;
  }

  public int getNumWheels() {
    return this.numWheels;
  }

  public String startEngine() {
    return "Vrrrm!";
  }
}