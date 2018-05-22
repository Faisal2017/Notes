namespace WizardManagement {
  public abstract class Carpet {

    private string _colour;

    public string colour 
    {
      get { return _colour; }
      set { _colour = value; }
    }

    public Carpet(string colour) {
      this.colour = colour;
    }
  }
}
